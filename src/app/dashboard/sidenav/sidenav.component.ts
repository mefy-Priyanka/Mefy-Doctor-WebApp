import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../mefyservice/profile.service';
import { SharedService } from '../../mefyservice/shared.service';
import { IMAGEURL } from '../../urlsConfig';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  /************************************ USED VARIABLES ******************************************** */
  doctorProfileId: any;
  userId:any
  profileInfo: any;
  status: any;
  profileImageId:any;
  imgUrlPrefix:any;
  loginStatus: boolean = false;
  loader:boolean=false
  
  /***********************************************************************************************/

  constructor(private router: Router, private profileService: ProfileService, private sharedService: SharedService,private sanitizer: DomSanitizer) {

    this.doctorProfileId = localStorage.getItem('doctorId');  //GET DOCTORID FROM LOCALSTORAGE
    this.userId=localStorage.getItem('userId') //GET USERID FROM LOCALSTORAGE

  }

  ngOnInit() {
    this.doctorProfile();     //GET DOCTOR PROFILE DETAILS
  }

  /***************************************** GET DOCTOR PROFILE DEATILS *************************************** */
  doctorProfile() {
    this.loader=true
    console.log("DOCTORID", this.doctorProfileId);
    this.profileService.getDocDetail(this.doctorProfileId).subscribe(data => {
      // console.log('PROFILE DETAILS', data);
      this.profileInfo = data;
      this.loader=false
      console.log('doctor profile',this.profileInfo)
      this.imgUrlPrefix = this.sanitizer.bypassSecurityTrustResourceUrl(IMAGEURL + "/uploads/avatars/responsive/" + this.profileInfo.profileImage+"_sm.png");
      // console.log('imgUrlPrefix',this.imgUrlPrefix)/*Diplay doctor's dp*/
      this.status = this.profileInfo.availability ? this.profileInfo.availability : 'Online';
      // console.log("PROFILE DETAILS", this.profileInfo);
    }, err => {
    })
  }
  /********************************************** ENDS ********************************************** */

  /******************************* UPDATE STATUS OF AVAILABILITY OF DOCTOR AS ONLINE OR OFFLINE ************************ */
  availabilityDoctor(event) {
    console.log('inside availabilty')
    if (event.target.checked) {
      this.status = 'Online';
    }
    if (!event.target.checked) {
      this.status = 'Offline';
    }
    let available = {
      availability: this.status,
      userId: this.userId
    }
    // API CALL FOR CHANGING STATUS
    this.profileService.doctorAvailability(available).subscribe(data => {
      let response: any = {};
      response = data;
      if (!response.result.error) {
        // this.loginStatus = true;
        console.log('availability', response);
        this.status = response.result.result.availability;
        console.log(this.status);
        let notifydata = {
          type: 'success',
          title: 'Availability',
          msg: 'Updated Successfully'
        }
        this.sharedService.createNotification(notifydata);
      }
      else {
        let notifydata = {
          type: 'error',
          title: 'Availability',
          msg: 'Not Updated'
        }
        this.sharedService.createNotification(notifydata);
      }

    },
      err => {
        let notifydata = {
          type: 'error',
          title: 'Availability',
          msg: 'Not Updated'
        }
        this.sharedService.createNotification(notifydata);
      })
  }

  /*********************************************** ENDS ****************************************************** */

  /***************************************DOCTOR LOGOUT FROM APP ******************************************** */
  logOut() {
    localStorage.clear();
    this.router.navigate(['/newlogin']);
  }
  /**************************************** ENDS *************************************************************** */

  /************************ *Preview  DOCTOR"S Profile Picture***********************************/
  previewProfile(event) {
    this.loader=true
    let fileList: FileList = event.target.files;
    let fileTarget = fileList;
    let avatar: File = fileTarget[0];
    console.log("File information :", avatar.name);
    let formData: FormData = new FormData();
    formData.append('avatar', avatar, avatar.name);
    console.log("File information :", formData);
    this.profileService.doctorImageUpload(formData).subscribe(result => {
      console.log('file uploaded', result)
      let value:any={}
      value=result
      this.profileImageId=value.imageId
      let data = {
        profileImage: this.profileImageId
      }
      this.profileService.updateDetail(this.userId,data).subscribe(result => {
        console.log('doctor updated profile',result)
        this.loader=false
           let notifydata = {
        type: 'success',
        title: 'Profile Image',
        msg: 'Uploded'
      }
      this.sharedService.createNotification(notifydata);
        this.doctorProfile();
        this.sharedService.updatedDoctorInfo(true);
      }, err => {
        this.loader=false
        let notifydata = {
          type: 'error',
          title: 'Something went',
          msg: 'Wrong'
        }
        this.sharedService.createNotification(notifydata);
      })

      }, err => {
        this.loader=false
        let notifydata = {
          type: 'error',
          title: 'Something went',
          msg: 'Wrong'
        }
        this.sharedService.createNotification(notifydata);
        console.log(err)
      })
 
  }

  /**************************************** ENDS *************************************************************** */

}