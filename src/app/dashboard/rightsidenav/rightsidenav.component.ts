import { Component, OnInit, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AppointmentsService } from '../../mefyservice/appointments.service';
import { SocketService } from '../../meme-services/socket.service';
import { DoctorPrescriptionService } from '../../meme-services/doctor-prescription.service';
import { SharedService } from '../../mefyservice/shared.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-rightsidenav',
  templateUrl: './rightsidenav.component.html',
  styleUrls: ['./rightsidenav.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class RightsidenavComponent implements OnInit {


  public ActiveAppointment:any=[];
  public informationNew:any=[];
  public selectedAppointmentData: any = {};
  public cancelAppointmentId:any={};
  public noAppointment:boolean=false;  /* Show and hide appointment message*/
  public loader:boolean=true;
  public appointmentData:boolean=true;
  public elementRef;
  public appointmentDate:any;
  public selectedAppointmentdate:any;
  public getAppointment:any;
  public Date:any
  public myDateYMD= new Date();



  constructor(private appointmentService: AppointmentsService,
    private socketService: SocketService,
    private router: Router,
    private ePrescriptionService: DoctorPrescriptionService,
    private sharedService: SharedService, myElement: ElementRef, private sanitizer: DomSanitizer) {
    this.elementRef = myElement;
    /*get Appointment List*/
  this.sharedService.appointmentList.subscribe(data=>{
  let result:any={}
  result=data
  if (Object.keys(data).length != 0) {
  this.ActiveAppointment.push(result.result)
  this.getCurrentDateAppointmentlist();
  }
})
  }

  ngOnInit() {
    this.getCurrentDateAppointmentlist();
  }
/*****************GET CURRENT DATE DOCTOR"S APPOINTMENT ACTIVE LIST***************** */
  getCurrentDateAppointmentlist() {
    this.appointmentService.getDoctorCurrentAppointment(localStorage.getItem('doctorId')).subscribe(data=>{
      this.loader=false;
      let result:any={}
      result=data
      if(result.result.result != null && Object.keys(result.result.result).length != 0){

      var status = result.result.result.filter(function(status) {
        return status.status =='Active' ;
      });
      for (let i = 0; i < status.length; i++) {
        if( status!= null && Object.keys(status).length != 0){
        console.log('Active Appointment list',status)
        this.ActiveAppointment=status
        this.appointmentData=true;
        this.noAppointment=false
        this.loader=false;
      }

     else {
      this.loader=false;
        this.appointmentData=false;
        this.noAppointment=true;
      } 

    }
  }
  else{
    this.appointmentData=false;
        this.noAppointment=true;
        this.loader=false;
  }
    },err=>{
      this.loader=false;
      console.log(err)
      let notification = {
        type: 'warning',
        title: 'Server Issue ',
      }
      this.sharedService.createNotification(notification);
    }) 
  }

  // get type to filter data
  getType(data) {
    // this.filterAppointment.appointmentType = data;
    // this.hideData = false;
  }

  // hide and show details on click
  filterData() {
    // if (this.hideData == true) {
    //   this.hideData = !this.hideData;
    // }
    // else if (this.hideData == false) {
    //   this.hideData = !this.hideData;
    // }
  }

 /**************** API FOR DOCTOR"S APPOINTMENT LIST BY DATE AND DOCTORID **************/
  selectedDate(date) {
    console.log('date',date)
    this.loader=true;
    // this.message = '';
    // this.hideConsult = false;
    if (date != null) {
      this.Date = date;
    this.appointmentDate = date;
    this.selectedAppointmentdate = moment(this.appointmentDate).format('YYYY-MM-DD');
    console.log('selectedAppointmentdate',this.selectedAppointmentdate)
      this.appointmentService.getAppointmentList(localStorage.getItem('doctorId'), this.selectedAppointmentdate).subscribe(data => {
          console.log(data);
          this.loader=false;
          let result:any={}
          result=data
          if(result.result.result != null && Object.keys(result.result.result).length != 0){
          var status = result.result.result.filter(function(status) {
            return status.status =='Active' ;
          });
          for (let i = 0; i < status.length; i++) {
            if( status!= null && Object.keys(status).length != 0){
            console.log('Active Appointment list',status)
            this.ActiveAppointment=status
            this.appointmentData=true;
            this.noAppointment=false;
            this.loader=false;
          }

         else {
            this.appointmentData=false;
            this.noAppointment=true;
            this.loader=false;
            // let notification = {
            //   type: 'warning',
            //   title: 'No any Appointment ',
            // }            
            // this.sharedService.createNotification(notification);
          } 

        }
      }
      else{
        this.appointmentData=false;
            this.noAppointment=true;
            this.loader=false;
      }
      },
        err => {
          console.log(err)
          let notification = {
            type: 'warning',
            title: 'Server Issue ',
          }
          this.sharedService.createNotification(notification);
        });
    }
  }
/*****************GET APPOINTMENT ID FROM CANCEL BUTTON *****************/
  cancelAppointmentButton(data) {
    this.selectedAppointmentData = data;
    this.cancelAppointmentId = this.selectedAppointmentData.appointmentId;
    console.log(this.selectedAppointmentData);
  }

  /************************************Cancel Appointment******************/
  cancelAppointment() {
    this.loader=true;
// console.log('appointment',this.cancelAppointmentId)
let data={
  appointmentId:this.cancelAppointmentId
}
this.appointmentService.cancelAppointment(data).subscribe(data=>{
  console.log('cancelAppointment',data)
  this.loader=false;
  let result:any={}
  result=data
  this.sharedService.cancdelAppointmentData(result.result.result)
  this.getCurrentDateAppointmentlist()

})
  }

  // Detecting Clicks Outside the Component
  handleClick(event) {
    // var clickedComponent = event.target;
    // var inside = false;
    // do {
    //   if (clickedComponent === this.elementRef.nativeElement) {
    //     inside = true;
    //   }
    //   clickedComponent = clickedComponent.parentNode;
    // } while (clickedComponent);
    // if (inside) {
    //   console.log('inside');
    // } else {
    //   console.log('outside');
    //   if (this.hideData == true) {
    //     this.hideData = !this.hideData;
    //   }
    // }
  }

  // calculate age
  getAge(dateString) {
    // var today = new Date();
    // var birthDate = new Date(dateString);
    // this.age = today.getFullYear() - birthDate.getFullYear();
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //   this.age--;

    // }
    // return this.age;

  }
  // individula details from profile id
  getindividualDetails() {
    // this.ePrescriptionService.getindividualDetails(this.caller.id).subscribe(data => {
    //   this.individualDetails = data.registrationDetails;
    //   console.log(this.individualDetails);
    //   this.imgUrlPrefix = this.sanitizer.bypassSecurityTrustResourceUrl(APIURL + "file/fileShow?fileId=" + this.individualDetails.profileImage);
    //   console.log(this.imgUrlPrefix);
    //   if (this.individualDetails.dob) {
    //     this.getAge(this.individualDetails.dob);
    //   }
    // },
    //   err => {
    //   })
  }

  // navigate to prscription page for visit
  consultFunction(data, value) {
    // let appData = {
    //   type: data,
    //   individualId: value
    // }
    // // this.consult = data;
    // this.router.navigate(['dashboard/consultnew']);
    // this.sharedService.getAppointmnetType(appData);
    // this.sharedService.saveClinicvisit(true);
  }

}