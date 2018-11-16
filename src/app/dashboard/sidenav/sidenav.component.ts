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
  constructor( private router: Router,private profileService:ProfileService) {

  }

  ngOnInit() {
    this.doctorProfile();
  }

  //get doctorBasic Info
  doctorProfile() {

    this.profileService.getDocDetail('02580e32-fb9c-490e-a2e7-5da6d4dae19a').subscribe(data=>{
      console.log('result', data);
      console.log("myresult");


    })
  }


  // logout from webapp
  logOut() {
    localStorage.clear();
    this.router.navigate(['/newlogin']);
  }


}
