import { Component } from '@angular/core';
// import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import{SharedService} from './mefyservice/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// private router: Router
export class AppComponent {

  title = 'app';
  doctorProfileId: any;
  constructor( private route: ActivatedRoute, private router: Router,private sharedService: SharedService){
      this.doctorProfileId = localStorage.getItem('doctorId');
    if(this.doctorProfileId) {
      this.router.navigate(['/dashboard/main']);
    }
    else{
      return;
    }
  }
 
}

