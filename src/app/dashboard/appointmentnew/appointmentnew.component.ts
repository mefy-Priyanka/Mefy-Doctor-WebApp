import { Component, OnInit } from '@angular/core';
// import { ClinicService } from '../../meme-services/schedule.service';
import * as moment from 'moment';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AppointmentService } from '../../meme-services/appointment.service';
import { ClinicService } from '../../mefyservice/clinic.service';
import { SharedService } from '../../mefyservice/shared.service';
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
  clinicId: any;
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
  informationNew: any;
  individualNumber: any;
  whenSlotsClicked: Boolean = true;
  patientData = {
    userId: '',
    name: ''
  }
  status: any;
  errMessage: any;
  appointmentType: any = "clinicVisit";
  dateAppointment: any;
  message: any;
  presentTime: any;
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 


  constructor(private router: Router, public ClinicService: ClinicService, private appointmentService: AppointmentService, private sharedService: SharedService, private route: ActivatedRoute, private completerService: CompleterService) {

    this.doctorProfileId = localStorage.getItem('doctorId');

   /*GET CURRENT URL, send url path name to change navbar colour*/
   this.currentURL = window.location.pathname; 
   console.log('currenturl',this.currentURL)
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
    // this.ClinicService.clinicByDateType(this.doctorProfileId, this.appointmentDate, this.appointmentType).subscribe(result => {
    //   console.log('result',result)
    //   // this.clinicList = result.result;
    // },
    //   err => {

    //   })
  }

  //  clinic list of current date
  getClinicList() {
    console.log('clinic list')
    this.selectedDate = moment().toISOString();
    this.ClinicService.clinicByDateType(this.doctorProfileId, this.selectedDate, this.appointmentType).subscribe(result => {
      console.log('clinic list', result);
      let response:any={};
      response=result;
      this.clinicList = response.result.clinic;
    },
      err => {

      })
  }

  // display timeslots of selected clinic
  viewTimeSlots(clinic, index) {
console.log('clinic details',clinic)
// debugger;
    if (!this.viewSlots) {
      this.selected = index

      this.clinicName = clinic.clinicName;

      this.clinicId = clinic.clinicId;

      if (this.appointmentDate) {

        // console.log(this.appointmentDate)
        this.presentTime = moment();
        this.presentTime.toISOString()
      }
      else {
this.appointmentDate=moment().toISOString();
        // this.appointmentDate = moment().utcOffset(0);
        // this.appointmentDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
        // this.appointmentDate.toISOString()
        // this.appointmentDate.format()
        // this.appointmentDate = this.appointmentDate._d
        // console.log(this.appointmentDate);
        // this.presentTime = moment();
        // this.presentTime.toISOString()
        // console.log(this.presentTime)
      }

      this.ClinicService.clinicSlots(clinic.clinicId, this.appointmentDate).subscribe(result => {
        console.log('time slots', result);
        let response:any={};
        response=result;
        this.viewSlots = true;
        this.slots = response.result.response;
        this.presentTime = '';
        console.log('dggdgdjh',this.slots);
        console.log('slot details',this.slots[0],this.slots[0].slot2)
      },
        err => {
console.log(err)
        })
    }
    else {
      this.viewSlots = false;
    }
  }

  // fetch details of selected slots
  getSlotsDetails(detail) {
    console.log(detail.startTime)
    this.whenSlotsClicked = false;
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
          clinicId: this.clinicId
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
    this.individualNumber = data.userId.phoneNumber;
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
    this.cardShow = false;
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

  navigateClinic() {
    this.router.navigate(['dashboard/clinic']);

  }

  //get appointment type
  getType(data) {
    if (data == 'visit') {
      this.appointmentType = 'clinicVisit';
    }
    else if (data == 'eConsult') {
      this.appointmentType = 'eConsult';
    }
    
    this.ClinicService.clinicByDateType(this.doctorProfileId, this.appointmentDate, this.appointmentType).subscribe(result => {
      console.log('result', result);
      let response:any={};
      response=result;
      this.clinicList = response.result.clinic;
      console.log('clinic list',this.clinicList)
    },
      err => {

      })
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
