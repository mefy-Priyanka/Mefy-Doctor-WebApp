import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../mefyservice/profile.service';
import { SharedService } from '../../mefyservice/shared.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {
  /************************************ USED VARIABLES ******************************************** */
  doctorProfileId: any;
  profileInfo: any;
  status: any;
  loginStatus: boolean = false;
  /***********************************************************************************************/

  constructor(private router: Router, private profileService: ProfileService, private sharedService: SharedService) {

    this.doctorProfileId = localStorage.getItem('doctorId');  //GET DOCTORID FROM LOCALSTORAGE

  }

  ngOnInit() {
    this.doctorProfile();     //GET DOCTOR PROFILE DETAILS
  }

  /***************************************** GET DOCTOR PROFILE DEATILS *************************************** */
  doctorProfile() {
    console.log("DOCTORID", this.doctorProfileId);
    this.profileService.getDocDetail(this.doctorProfileId).subscribe(data => {
      console.log('PROFILE DETAILS', data);
      this.profileInfo = data;
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
      userId: localStorage.getItem('userId')
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

  // preview profile picture
  previewProfile(event) {
    let fileList: FileList = event.target.files;
    let fileTarget = fileList;
    console.log('fileTarget',fileTarget)
    let file: File = fileTarget[0];

    // this.names = file;
    console.log("File information :", file.name);
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    // this.doctorRegService.profilePicture(formData).subscribe(result => {
      // console.log('file uploaded', result)
      // this.fileId = result.upload._id;
      let data = {
        // profileImage: this.fileId,
        _id: this.doctorProfileId,
      }
      // this.doctorRegService.updateDocProfile(data).subscribe(result => {
        // this.sharedService.updatedDoctorInfo(true);
    //   }, err => {
    //   })
    // })
  }
  /**************************************** ENDS *************************************************************** */

}
