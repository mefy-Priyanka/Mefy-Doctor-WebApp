import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../../meme-services/schedule.service';
import * as moment from 'moment';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AppointmentService } from '../../meme-services/appointment.service';
import { SharedService } from '../../meme-services/shared.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';



@Component({
  selector: 'app-appointmentnew',
  templateUrl: './appointmentnew.component.html',
  styleUrls: ['./appointmentnew.component.css']
})

export class AppointmentnewComponent implements OnInit {
  appointmentDate: any;
  doctorProfileId: any;
  clinicList: any = [];
  slots: any = [];
  selectedDate: any;
  viewSlots: boolean = false;
  slotDetails: any;
  clinicName: any;
  clinicId:any;
  name: any;
  email: any;
  pathName: any;
  currentDate: any;
  Fdate: any;
  appointmentList: any;
  appointmentByDate: any;
  individualList: any = [];
  details: any;
  individualService: any;
  userId: any;
  messageNew: any;
  currentURL: any;
  noResult: boolean = true;
  cardShow: boolean = false;
  selected: any;
  slotSelect: boolean = false;
  dateErr: any = '';
  error: any;
  Date: any;
  informationNew:any;
  individualNumber:any;
  whenSlotsClicked :Boolean= true;
  patientData = {
    userId: '',
    name: ''
  }
  status: any;
  errMessage: any;
  appointmentType:any="";
  dateAppointment:any;
  message:any;
  presentTime:any;
  public mask = [ /[1-9]/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/, /\d/] // Phone number validation 
  constructor(private router: Router,public scheduleService: ScheduleService, private appointmentService: AppointmentService, private sharedService: SharedService, private route: ActivatedRoute, private completerService: CompleterService) {
    this.doctorProfileId = localStorage.getItem('loginId');

    // send url path name to change navbar colour
   this.currentURL = window.location.pathname; 
 this.sharedService.setPath(this.currentURL);

    this.currentDate = new Date().toISOString();
    this.Fdate = moment(this.currentDate).format('DD/MM/YYYY');
  }

  ngOnInit() {
    this.getClinicList();
   
  }

  //  clinic list by date
  clinicListByDate(value) {
    this.compareAppointmentdate(value);
    this.Date = value;
   this.appointmentDate = value;
    this.scheduleService.getClinicByDate(this.doctorProfileId, this.appointmentDate).subscribe(result => {
    this.clinicList = result.result;
     },
      err => {

      })
  }

  //  clinic list of current date
  getClinicList() {
    console.log('clinic list')
    this.selectedDate = new Date();
    this.scheduleService.getClinicByDate(this.doctorProfileId, this.selectedDate).subscribe(result => {
      console.log('clinic list',result);
      this.clinicList = result.result;
       },
      err => {

      })
  }

  // display timeslots of selected clinic
  viewTimeSlots(clinic, index) {
    
    if (!this.viewSlots) {
      this.selected = index
      
      this.clinicName = clinic.clinicName;
    
      this.clinicId=clinic._id;
     
      if (this.appointmentDate) {
        
        console.log(this.appointmentDate)
        this.presentTime = moment();
        this.presentTime.toISOString()
      }
      else {
        
        this.appointmentDate  = moment().utcOffset(0);
        this.appointmentDate .set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
        this.appointmentDate .toISOString()
        this.appointmentDate .format()
        this.appointmentDate=this.appointmentDate._d
        console.log( this.appointmentDate );
        this.presentTime = moment();
        this.presentTime.toISOString()
        console.log(this.presentTime)
      }
   
      this.appointmentService.getTimeSlots(this.doctorProfileId, this.appointmentDate, clinic._id, this.presentTime._d).subscribe(result => {
         console.log('time slots',result);
        this.viewSlots = true;
        this.slots = result.timeslots;
        this.presentTime='';
        console.log(this.slots);
      },
        err => {

        })
    }
    else {
      this.viewSlots = false;
    }
  }

  // fetch details of selected slots
  getSlotsDetails(detail) {
    console.log(detail.startTime)
    this.whenSlotsClicked=false;
    if (detail) {
      this.slotDetails = detail;
      this.slotSelect = true;
      return true;
      
    }
    else {
      return false;
    }
  }

  // create appointment
  bookAppointment() {
    if (this.compareDate()) {
      this.dateErr = 'Not allowed to create event on previous date';

    }
    else {
      this.errMessage = '';
      if (this.patientData.userId != "" && this.patientData.name != " " && this.appointmentDate && this.slotDetails) {
        this.dateErr = '';
        this.error = '';
        this.Fdate = moment(this.selectedDate).format('DD/MM/YYYY');
        var startdateTime = moment(this.Fdate + ' ' + this.slotDetails.startTime, 'DD/MM/YYYY HH:mm').format();
        console.log(startdateTime);
        let startTime: any;
        startTime = moment.utc(startdateTime);
        console.log(startTime);
        var enddateTime = moment(this.Fdate + ' ' + this.slotDetails.endTime, 'DD/MM/YYYY HH:mm').format();
        console.log(enddateTime);
        let endTime: any;
        endTime = moment.utc(enddateTime);
        console.log(endTime);
        let appointmentDetail = {
          doctorId: this.doctorProfileId,
          appointmentType: this.appointmentType,
          appointmentDate: this.appointmentDate,
          appointmentTimeFrom: moment(startTime._d).toString(),
          appointmentTimeTo: moment(endTime._d).toString(),
          clinicName: this.clinicName,
          individualId: this.patientData.userId,
          patientName: this.patientData.name,
          clinicId:this.clinicId
        }
        this.appointmentService.createAppointment(appointmentDetail).subscribe(result => {
          console.log(result);
          this.sharedService.saveAppointmentList(result.result)
          this.viewSlots = false;
          this.slotDetails = '';
          this.appointmentType = '';
          this.appointmentDate = '';
          this.individualNumber = '';
          this.sharedService.updatedDasboardInfo(true);
          this.individualList = [];
          let notifydata = {
            type: 'success',
            title: 'Appointment',
            msg: 'Booked Succesfully'
          }
          this.sharedService.createNotification(notifydata);


        },
          err => {

          })
      }
      else {
        this.errMessage = 'Please Enter All The Credentials';
      }
    }
  }

  // to add new patient
  addPatient() {
    let patientData = {
      role: 'individual',
      phoneNumber: this.individualNumber,
      name: this.name
    }
    console.log(patientData)
    this.appointmentService.createIndividual(this.doctorProfileId, patientData).subscribe(result => {
      console.log(result);
      this.patientData = {
        userId: result.profileDetails._id,
        name: result.profileDetails.name
      }
      this.name = '';
      this.noResult = true;
      let notifydata = {
        type: 'success',
        title: 'Patient',
        msg: 'Added Succesfully'
      }
      this.sharedService.createNotification(notifydata);
    },
      err => {
        
      })
  }


  //get patient number list
  getPatientNumberList(value) {
    this.appointmentService.getIndividualList(value).subscribe(data => {
      console.log(data)
      if (data.result.length != 0) {
        this.individualList = data.result;
        this.noResult = true;
        this.cardShow = true;
        console.log('individual list', this.individualList);
      }
      else {
        this.noResult = false;
      }
    }, err => {

    })
  }

  // get detail of individual patient
  individualDetail(data) {
    this.individualNumber=data.userId.phoneNumber;
    this.patientData = {
      userId: data._id,
      name: data.name
    }
   
    // this.individualNumber="";
    let notifydata = {
      type: 'success',
      title: 'Appointment',
      msg: 'Patient Selected'
    }
    this.sharedService.createNotification(notifydata);
    this.individualList = [];
    this.cardShow=false;
  }

  // compare date for evnt creation
  compareDate() {
    this.error = '';
    this.dateErr = '';
    let presentDate: any;
    presentDate = moment().utcOffset(0);
    presentDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    presentDate.toISOString()
    presentDate.format()
    console.log(presentDate);
    if ((moment(presentDate)).isAfter(this.Date)) {
      return true;
    }
    else return false;
  }

  // to compare appointment date
  compareAppointmentdate(value) {
    this.error = '';
    this.dateErr = '';
    let presentDate: any;
    presentDate = moment().utcOffset(0);
    presentDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    presentDate.toISOString()
    presentDate.format()
    console.log(presentDate);
    if ((moment(presentDate)).isAfter(value)) {
      this.error = 'Appointment date cannot be before present date';
      console.log('Appointment date cannot be before present date', this.error);
      // this.submitted=true
    }
  }

  navigateClinic(){
    this.router.navigate(['dashboard/clinic']);

  }

  //get appointment type
  getType(data) {
    this.appointmentType = data;
  }

 getAppointmentlist() {
    this.informationNew = [];
    this.dateAppointment;
    this.appointmentService.getAppointmentList(localStorage.getItem('loginId'), this.dateAppointment).subscribe(
      data => {
        console.log(data)
        this.sharedService.saveAppointmentList(data.result)

      },
      err => {
      });
  }

}
