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
      userId:  localStorage.getItem('userId')
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


}
