import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../meme-services/dashboard.service';
import { ScheduleService } from '../../meme-services/schedule.service';
import { SharedService } from '../../meme-services/shared.service';
import { AppointmentService } from '../../meme-services/appointment.service';
import { DoctorPrescriptionService } from '../../meme-services/doctor-prescription.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment'
import { BillService } from '../../meme-services/bill.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { APIURL } from '../../urlsConfig';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  dashboardList: any = [];
  doctorProfileId: any;
  availability: any;
  individualName: any;
  clinicList: any;
  list: any;
  message: any;
  fee: any;
  mainFee: any;
  prescriptionId: any;
  total: any;
  date: any;
  currentURL: any;
  appointmentList: any;
  visitArray: any = [];
  eConsultArray: any = [];
  pathName: any;
  billArray: any;
  imgUrlPrefix: any;
  individualDetails: any;
  digit:any;
  constructor(private sanitizer: DomSanitizer, private billService: BillService, private dashboardService: DashboardService, private appointmentService: AppointmentService, public scheduleService: ScheduleService, private sharedService: SharedService, private router: Router, private ePrescriptionService: DoctorPrescriptionService, private route: ActivatedRoute) {

    // console.log('****** path name******',route.pathFromRoot[1].snapshot.url[0].path);
    // console.log('****** 2 path name******',(route.snapshot.url));

    this.doctorProfileId = localStorage.getItem('loginId');

    this.sharedService.dashBoardInfo.subscribe(data => {
      if (data == true) {
        this.getDoctorDetails();
      }
    });

    // get prescription id
    this.sharedService.doctorDetails.subscribe(data => {
      if (Object.keys(data).length != 0) {
        this.fee = data.eConsultFee;

      }
    });

    this.date = new Date();

    // send url path name to change navbar colour
    //  this.pathName=(route.snapshot.url)[0].path;
    //  this.sharedService.setPath(this.pathName)

    this.currentURL = window.location.pathname;
    console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);
  }

  ngOnInit() {
    this.getAppointmentList();
    this.getDoctorDetails();
    this.getDoctorClinics();
    // this.getBillByDoctorId();
    this.getBillByDate();
  }


  //get doctor Details through Doctor Profile id
  getDoctorDetails() {
    let date: any;
    date = moment().utcOffset(0);
    date.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    date.toISOString()
    date.format()
    this.dashboardService.getDoctorList(this.doctorProfileId, date._d).subscribe(data => {
      this.dashboardList = data.result;
      console.log('dashboard details', this.dashboardList);
      this.digit = this.dashboardList.credit.toString();
      console.log(this.digit.length)
      if (this.digit.length == 4) {
        this.dashboardList.credit = this.digit.substring(0, 1) + 'K'
        console.log(this.dashboardList.credit)
      }
      else if (this.digit.length == 5) {
        this.dashboardList.credit = this.digit.substring(0, 2) + 'K'
      }
      else if (this.digit.length == 6) {
        this.dashboardList.credit = this.digit.substring(0, 1) + 'L'
      }
      else if (this.digit.length == 7) {
        this.dashboardList.credit = this.digit.substring(0, 2) + 'L'
      }
    },
      err => {
      })
  }

  // //get clinic Details 
  getDoctorClinics() {
    this.scheduleService.getClinicList(this.doctorProfileId).subscribe(data => {

      this.clinicList = data.result;
      console.log(this.clinicList)
      if (this.clinicList.length == 0) {

        this.message = "No Clinic Present";
      }
      if (this.clinicList.length != 0) {
        this.message = "";
      }
      console.log('total linic list', this.clinicList);
    })
    err => {
    }
  }

  //  filter appointment by appointment type
  getConsultType(name) {
    this.sharedService.filterDoctorAppointment(name);
    this.router.navigate(['/dashboard/appnew']);
  }

  //get doctor appointment list
  getAppointmentList() {
    let date: any;
    date = moment().utcOffset(0);
    date.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    date.toISOString()
    date.format()
    console.log(date._d)
    this.appointmentService.getAppointmentList(this.doctorProfileId, date._d).subscribe(result => {
      console.log('appoitment list', result);
      if (result.result.length != 0) {
        result.result.forEach(element => {
          if (element.appointmentType == 'eConsult') {
            this.eConsultArray.push(element);
            console.log(this.eConsultArray);
          }
          else if (element.appointmentType == 'visit' || element.appointmentType == 'Clinic visit') {
            if (element.status == 'New')
              this.visitArray.push(element);
            console.log(this.visitArray)
          }
        });
      }
    },
      err => {

      })
  }


  // get bill by doctorid
  getBillByDoctorId() {
    this.billService.getByDoctorId(localStorage.getItem('loginId')).subscribe(data => {
      // if(data.result[0].grandTotal ==0){
      //   this.message ="No Transaction";
      // }
      // else{
      this.mainFee = data.result[0].grandTotal;
      // }

    });
  }

  // get bill by date
  getBillByDate() {

    let date: any;
    date = moment().utcOffset(0);
    date.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    date.toISOString()
    date.format()
    console.log(date._d);
    this.billService.getByDoctorId(localStorage.getItem('loginId')).subscribe(result => {
      console.log(result);
      // if(result.result.length!=0){

      this.billArray = result.result;
      if (this.billArray.length > 0) {
        this.mainFee = (this.billArray)[0].grandTotal;
        if (this.billArray[0].individualId) {
          let individualId = this.billArray[0].individualId._id;
          this.getindividualDetails(individualId);
          console.log(this.mainFee);
        }

      }

      //  }
    },
      err => {

      })
  }


  //get individual details
  getindividualDetails(id) {
    this.ePrescriptionService.getindividualDetails(id).subscribe(data => {
      console.log(data);
      this.individualDetails = data.registrationDetails;
      this.imgUrlPrefix = this.sanitizer.bypassSecurityTrustResourceUrl(APIURL + "file/fileShow?fileId=" + this.individualDetails.profileImage);

    },
      err => {
      })
  }
}