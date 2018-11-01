import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../meme-services/shared.service';
import { MemeLoginService } from '../../meme-services/meme-login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../meme-services/dashboard.service';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import { AccountService } from '../../meme-services/account.service';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { APIURL } from '../../urlsConfig';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  logInfo: any
  doctorProfileId: any;
  availability: any;
  status: any;
  loginStatus: boolean = false;
  file: any;
  names: any;
  fileId: any;
  age: any;
  doctorAccount: any;

  imgurl = "https://pbs.twimg.com/media/BuL42fDCEAAHqZ5.jpg";
  // imgUrlPrefix = "http://mitapi.memeinfotech.com:5020/file/fileShow?fileId=";
  imgUrlPrefix: any;
  constructor(private doctorRegService: DoctorregisterService, private sharedService: SharedService, private loginService: MemeLoginService, private router: Router, private dashboardService: DashboardService, public accountService: AccountService, private sanitizer: DomSanitizer) {

    this.doctorProfileId = localStorage.getItem('loginId');
    console.log(this.doctorProfileId);

    // get updated info
    this.sharedService.updatedInfo.subscribe(data => {
      console.log('updated', data)
      if (data == true) {
        this.doctorProfile();
      }
    })

    this.sharedService.accountDetails.subscribe(data => {

      // console.log('account', data)
      if (data == true) {
        this.getAccountByDoctorId();
        // this.sharedService.accountInfo(false);
      }
      // this.doctorAccount = data;

    })
  }

  ngOnInit() {


    // this.profileShow();
    this.doctorProfile();
    // if(this.status=='Online'){
    this.getAccountByDoctorId();

    // }
  }

  //get doctorBasic Info
  doctorProfile() {
    this.loginService.getDoctorDetail(this.doctorProfileId).subscribe(result => {
      console.log('get profiledata', result);
      this.logInfo = result.registrationDetails;
      this.imgUrlPrefix = this.sanitizer.bypassSecurityTrustResourceUrl(APIURL + "file/fileShow?fileId=" + this.logInfo.profileImage);
      if (result.registrationDetails.dob) {
        this.getAge(result.registrationDetails.dob);
      }

      this.status = this.logInfo.availability;
      this.sharedService.doctorDetail(this.logInfo)
    },
      err => {
      })
  }

  // logout from webapp
  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
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
      _id: this.doctorProfileId,
    }
    this.dashboardService.doctorAvailability(available).subscribe(data => {
      this.loginStatus = true;
      console.log('availability', data);
      this.status = data.result.availability;
    },
      err => {
      })
  }

  // preview profile picture
  preveiwProfile(event) {
    let fileList: FileList = event.target.files;
    let fileTarget = fileList;
    let file: File = fileTarget[0];
    this.names = file;
    console.log("File information :", file.name);
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.doctorRegService.profilePicture(formData).subscribe(result => {
      console.log('file uploaded', result)
      this.fileId = result.upload._id;
      let data = {
        profileImage: this.fileId,
        _id: this.doctorProfileId,
      }
      this.doctorRegService.updateDocProfile(data).subscribe(result => {
        this.sharedService.updatedDoctorInfo(true);
      }, err => {
      })
    })
  }


  // calculate age
  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    this.age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      this.age--;

    }
    return this.age;

  }
  // get account by doctorId
  getAccountByDoctorId() {
    this.accountService.getAccountListByDoctorList(this.doctorProfileId).subscribe(data => {
      //  console.log('doctor account',data)
      if (data.result.length != 0) {
        this.doctorAccount = data.result[0];
        var lastAccountDigit = 4;
        this.doctorAccount.accountNumber = new Array(this.doctorAccount.accountNumber.length - lastAccountDigit + 1).join('X')
          + this.doctorAccount.accountNumber.slice(-lastAccountDigit);
        this.sharedService.accountInfo(true);
      }
    });
  }


  //sidenav navigation for mobile view
  sidenavNavigation(data) {
    this.sharedService.togglesidenav(true);
    if (data == "Dashboard") {
      this.router.navigate(['/dashboard/main']);
    }
    else if (data == "My Clinics") {
      this.router.navigate(['/dashboard/clinic']);
    }
    else if (data == "Schedule") {
      this.router.navigate(['/dashboard/appnew']);
    }
    else if (data == "eConsult") {
      this.router.navigate(['/dashboard/main']);
    }
    else if (data == "Credit") {
      this.router.navigate(['/dashboard/credit']);
    }
    else if(data=='Account'){
      this.router.navigate(['/dashboard/account']);
    }

  }
}
