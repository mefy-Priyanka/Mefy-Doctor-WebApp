import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../mefyservice/shared.service';
import { AppointmentsService } from '../../mefyservice/appointments.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { APIURL } from '../../urlsConfig';
import { DashboarddService } from '../../mefyservice/dashboardd.service';
import { ClinicService } from '../../mefyservice/clinic.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public clinicList: any = []
  public doctorId: any = {};
  public currentURL: any = {};
  public doctorDetail: any = {};
  public noAppointment: boolean = true;  /* Show and hide appointment message*/
  public loader: boolean = true /***LOADER */
  public clinicMessage: boolean = true

  constructor(private sanitizer: DomSanitizer, private appointmentService: AppointmentsService, private dashboardService: DashboarddService, private sharedService: SharedService, private router: Router, private clincService: ClinicService) {
    this.doctorId = localStorage.getItem('doctorId');

    /*GET CURRENT URL, send url path name to change navbar colour*/
    this.currentURL = window.location.pathname;
    // console.log('dashboard url',this.currentURL);
    this.sharedService.setPath(this.currentURL);
    /*UPDATE DASHBOARD INFO*/
    this.sharedService.cancelAppointmentList.subscribe(data => {
      let result: any = {}
      result = data
      this.loader=false
      console.log('current doctor dashboard detail', result)
      if (Object.keys(result).length != 0) {
        this.getDoctorDetail();
      }
    })
  }

  ngOnInit() {
    this.getDoctorDetail();
    this.getClinicByDoctorId();
  }

  /****************GET DOCTOR"S DASHBOARD DETAIL BY LOGIN DOCTORID************** */
  getDoctorDetail() {

    // console.log('doctorId',this.doctorId)
    this.dashboardService.getDoctorDashboardDetail(this.doctorId).subscribe(data => {
      let result: any = {}
      this.loader = false
      result = data
      this.doctorDetail = result.result
      console.log('doctor dashboard detail', this.doctorDetail)
      if (this.doctorDetail.clincVistPatient != 0) {
        console.log('clincVistPatient number', this.doctorDetail.clincVistPatient)
        this.noAppointment = false
      }
      else {
        this.noAppointment = true
      }
    },
      err => {
        console.log(err)
      })
  }
  /***************************GET CLINIC LIST BY DOCTORID*************** */
  getClinicByDoctorId() {
    this.clincService.getCliniclist(this.doctorId).subscribe(data => {
      // console.log('data',data)
      let result: any = {}
      result = data
      this.loader=false;
      if (result.result.result != null && Object.keys(result.result.result).length != 0) {
        this.clinicMessage = false
        this.clinicList = result.result.result
        console.log('clinicList', this.clinicList)
      }
      else {
        this.clinicMessage = true
      }

    })
  }

}