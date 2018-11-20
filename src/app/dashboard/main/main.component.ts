import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../mefyservice/shared.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { APIURL } from '../../urlsConfig';
import { DashboarddService } from '../../mefyservice/dashboardd.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public doctorId:any
  public doctorDetail:any={};
  public loader:boolean=false /***LOADER */
  constructor(private sanitizer: DomSanitizer, private dashboardService: DashboarddService, private sharedService: SharedService, private router: Router) {
    this.doctorId= localStorage.getItem('doctorId');
  }

  ngOnInit() {
    this.getDoctorDetail();
  }

/****************GET DOCTOR"S DASHBOARD DETAIL BY LOGIN DOCTORID************** */
getDoctorDetail(){
  this.loader=true;
  console.log('doctorId',this.doctorId)
  this.dashboardService.getDoctorDashboardDetail(this.doctorId).subscribe(data=>{
    let result:any={}
    this.loader=false
    result=data
    this.doctorDetail=result.result
    console.log('dataaaaaa',this.doctorDetail)
  },
  err=>{
    console.log(err)
  })
}

 
}