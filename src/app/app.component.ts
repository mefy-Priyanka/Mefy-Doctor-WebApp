import { Component } from '@angular/core';
// import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// private router: Router
export class AppComponent {
  title = 'app';
  doctorProfileId: any;
  constructor( private route: ActivatedRoute, private router: Router){
      this.doctorProfileId = localStorage.getItem('loginId');
    if(this.doctorProfileId) {
      this.router.navigate(['/dashboard/main']);
    }
    else{
      return;
    }
  }
 
}

