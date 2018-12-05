import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../mefyservice/profile.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  doctorProfileId: any;
  profileInfo: any;
  status: any;
  loginStatus: boolean = false;
  constructor( private router: Router,private profileService:ProfileService) {
    this.doctorProfileId = localStorage.getItem('doctorId');
  }

  ngOnInit() {
    this.doctorProfile();
  }

  //get doctorBasic Info
  doctorProfile() {
    console.log("doctorId",this.doctorProfileId);
    this.profileService.getDocDetail(this.doctorProfileId).subscribe(data=>{
      console.log('result', data);
      this.profileInfo = data;
      console.log("details",this.profileInfo);

console.log('doctorid');

    })
  }
  
  // update availaible status of doctor
  availabilityDoctor(event) {

    if (event.target.checked) {
      this.status = 'Online';
    }
    if (!event.target.checked) {
      this.status = 'Offline';
    }
    let available = {
      availability: this.status,
      userId:  localStorage.getItem('doctorId')
    }
    this.profileService.doctorAvailability(available).subscribe(data => {
      let response:any={};
      response=data;
      this.loginStatus = true;
      console.log('availability', data);
      this.status = response.result.availability;
      console.log(this.status);
    },
      err => {
      })
  }
  // logout from webapp
  logOut() {
    localStorage.clear();
    this.router.navigate(['/newlogin']);
  }
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

}
