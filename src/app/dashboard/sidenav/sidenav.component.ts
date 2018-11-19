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
  

  // logout from webapp
  logOut() {
    localStorage.clear();
    this.router.navigate(['/newlogin']);
  }


}
