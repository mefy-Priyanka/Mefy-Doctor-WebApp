import { Component, OnInit } from '@angular/core';
// import { ClinicService } from '../../meme-services/schedule.service';
import * as moment from 'moment';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { AppointmentsService } from '../../mefyservice/appointments.service';
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

  /********************************* USED VARIABLES *************************** */
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
  day: any;
  informationNew: any;
  individualNumber: any;
  whenSlotsClicked: Boolean = true;
  patientData = {
    individualId: '',
    name: ''
  }
  status: any;
  errMessage: any;
  appointmentType: any = "clinicVisit";
  dateAppointment: any;
  message: any;
  presentTime: any;
  loader: boolean = false;
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 
  /**************************************************************************************************************** */

  constructor(private router: Router, public ClinicService: ClinicService, private appointmentService: AppointmentsService, private sharedService: SharedService, private route: ActivatedRoute, private completerService: CompleterService) {

    this.doctorProfileId = localStorage.getItem('doctorId');   // GET LOGGED DOCTOR FROM LOCAL STORAGE

    /********  SEND URL PATH NAME TO CHANGE NAVBAR COLOR ******************/
    this.currentURL = window.location.pathname;
    this.sharedService.setPath(this.currentURL);
    /******************************************************** **************/

    // this.currentDate = new Date().toISOString();
    // this.Fdate = moment(this.currentDate).format('DD/MM/YYYY');

    /****************** SET PRESENT DATE AS DEFAULT APPOINTMENT DATE ********** */
    this.appointmentDate = moment().utcOffset(0);
    this.appointmentDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    this.appointmentDate.toISOString()
    this.appointmentDate.format()
    this.appointmentDate = this.appointmentDate._d;
    /*********************************************************************** */
  }

  ngOnInit() {

    this.todayClinicList();    // GET PRESENT DAY CLINIC LIST INITIALLY

  }

  /**************************** GET DATE OF WHICH CLINIC LIST NEED TO BE FETCHED  ************************************************ */
  clinicsByDate(value) {
    console.log('appointment date', value)
    this.compareAppointmentdate(value);
    this.Date = value;
    this.appointmentDate = value;
    this.day = moment(this.appointmentDate).format('dddd');
    // this.ClinicService.clinicByDateType(this.doctorProfileId, this.appointmentDate, this.appointmentType).subscribe(result => {
    //   console.log('result',result)
    //   // this.clinicList = result.result;
    // },
    //   err => {

    //   })
  }
  /*********************************************** ENDS ************************************************************************** */

  /**************************************** GET PRESENT DAY CLINIC LIST OF DOCTOR ********************************************* */
  todayClinicList() {
    console.log('clinic list', moment())
    this.selectedDate = moment().toISOString();
    // format appointmentdate  to show in input date field

    console.log('selecteddate', this.selectedDate)
    this.day = moment(this.selectedDate).format('dddd');  // FOR COMPARING AND SHWING SLOTS FOR PRESENT DAY ONLY
    this.ClinicService.clinicByDateType(this.doctorProfileId, this.selectedDate, this.appointmentType).subscribe(result => {
      console.log('clinic list', result);
      let response: any = {};
      response = result;
      this.clinicList = response.result.clinic;
    },
      err => {

      })
  }
  /************************************************** ENDS ************************************************************************* */

  /************************************ VIEW TIME SLOTS OF SELECTED CLINIC ******************************** */
  viewTimeSlots(clinic, index) {
    console.log('clinic details', clinic);
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
        this.appointmentDate = moment().toISOString();
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
        let response: any = {};
        response = result;
        this.viewSlots = true;
        this.slots = response.result.response;
        this.presentTime = '';
        console.log('dggdgdjh', this.slots);
        console.log('slot details', this.slots[0], this.slots[0].slot2)
      },
        err => {
          console.log(err)
        })
    }
    else {
      this.viewSlots = false;
    }
  }
  /********************************************** ENDS *************************************************** */

  /************************ FETCH DETAISL OF SELECTED TIME SLOT FOR APPOITNMENT BOOKING ********************* */
  getSlotsDetails(detail) {
    console.log('slot details', detail)
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
  /*********************************************** ENDS **************************************************** */

  /***************************************** BOOK APPOINTMENT & UPDATE DASHBOARD ******************************************** */
  bookAppointment() {
    this.loader = true;
    if (this.compareDate()) {
      this.loader = false;
      this.dateErr = 'Not allowed to create event on previous date';

    }
    else {
      this.errMessage = '';
      console.log(this.patientData.individualId, this.patientData.name, this.appointmentDate, this.slotDetails, this.appointmentType)
      if (this.patientData.individualId != "" && this.patientData.name != " " && this.appointmentDate && this.slotDetails && this.appointmentType != "") {
        this.dateErr = '';
        this.error = '';
        // this.Fdate = moment(this.selectedDate).format('DD/MM/YYYY');
        // var startdateTime = moment(this.Fdate + ' ' + this.slotDetails.startTime, 'DD/MM/YYYY HH:mm').format();
        // console.log(startdateTime);
        // let startTime: any;
        // startTime = moment.utc(startdateTime);
        // console.log(startTime);
        // var enddateTime = moment(this.Fdate + ' ' + this.slotDetails.endTime, 'DD/MM/YYYY HH:mm').format();
        // console.log(enddateTime);
        // let endTime: any;
        // endTime = moment.utc(enddateTime);
        // console.log(endTime);
        let appointmentDetail = {
          doctorId: this.doctorProfileId,
          individualId: this.patientData.individualId,
          clinicId: this.clinicId,
          appointmentType: this.appointmentType,
          appointmentDate: this.appointmentDate,
          appointmentTimeFrom: this.slotDetails.sTime,     //moment(startTime._d).toString(),
          appointmentTimeTo: this.slotDetails.eTime,   //moment(endTime._d).toString(),
          clinicName: this.clinicName,

          patientName: this.patientData.name,

          status: 'Active',
          eventName: this.appointmentType,
          eventDescription: this.appointmentType
        }
        console.log('appointment detail', appointmentDetail)
        this.appointmentService.createAppointment(appointmentDetail).subscribe(result => {
          console.log('booked appointment detail', result);
          this.loader = false;
          let response: any = {};
          response = result;
          if (response.result.error) {
            if (response.result.message == 'Already have An Appointment') {
              let notifydata = {
                type: 'warning',
                title: 'Appointment',
                msg: 'Already Exists'
              }
              this.sharedService.createNotification(notifydata);
            }
            else {
              this.loader = false;
              let notifydata = {
                type: 'error',
                title: 'Appointment',
                msg: 'Booking Falied'
              }
              this.sharedService.createNotification(notifydata);
            }
          }
          else {
            console.log('hgg', response.result);
            this.sharedService.saveAppointmentList(response.result)
            this.viewSlots = false;
            this.slotDetails = '';
            // this.appointmentType = '';
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
            this.loader = false;

          }


        },
          err => {
            this.loader = false;
            let notifydata = {
              type: 'error',
              title: 'Appointment',
              msg: 'Booking Failed'
            }
            this.sharedService.createNotification(notifydata);
          })
      }
      else {
        // this.errMessage = 'Please Enter All The Credentials';
        this.loader = false;
        let notifydata = {
          type: 'warning',
          title: 'Please',
          msg: 'Enter All Credentials'
        }
        this.sharedService.createNotification(notifydata);
      }
    }
  }
  /************************************************** ENDS ******************************************************* */

  /*************************************** CREATE NEW PATIENT ********************************************** */
  addPatient() {
    this.loader = true;
    let patientData = {
      role: 'individual',
      phoneNumber: this.individualNumber,
      name: this.name
    }
    console.log(patientData)
    this.appointmentService.createIndividual(patientData).subscribe(result => {
      console.log('individual created response', result);
      this.loader = false;
      let response: any = {};

      response = result;
      console.log('ssss', response.result)
      this.patientData = {
        individualId: response.result.result.individualId,
        name: response.result.result.name
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
        this.loader = false;
        let notifydata = {
          type: 'error',
          title: 'Patient',
          msg: 'Not Addedd Successfully'
        }
        this.sharedService.createNotification(notifydata);
      })
  }
  /******************************************** ENDS ***************************************************** */

  /************************************* FIND PATIENT ACCORDING TO PHONENUMBER *************************************************************** */
  getPatientNumberList(value) {
    this.appointmentService.findIndividualByNumber(value).subscribe(data => {
      console.log(data)
      let response: any = {};
      response = data;
      console.log(response.result)
      if (Object.keys(response.result.result).length != 0) {
        this.individualList = response.result.result;
        this.noResult = true;
        this.cardShow = true;
        console.log('individual list', this.individualList);
      }
      else {
        this.noResult = false;
        this.individualList = '';
      }
    }, err => {

    })
  }
  /******************************************** ENDS ******************************************************* */

  /******************************************* STORE DETAIL OF SELECTED PATIENT  ******************************* */
  individualDetail(data) {
    console.log('data of indv', data)
    this.individualNumber = data.phoneNumber;
    this.patientData = {
      individualId: data.individualId,
      name: data.name
    }

    // this.individualNumber="";
    let notifydata = {
      type: 'success',
      title: 'Appointment',
      msg: 'Patient Selected'
    }
    this.sharedService.createNotification(notifydata);
    // this.individualList = [];
    this.cardShow = false;
  }
  /****************************************** ENDS *********************************************************** */

  /*********************************** COMPARING PRESENT DATE WITH SELECTED DATE *************************** */
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
  /******************************************* ENDS *********************************************************** */

  /*********************************  COMPARING PRESENT DATE WITH SELECTED DATE    ************************************ */
  compareAppointmentdate(value) {
    console.log('compare appointment date value', value)
    this.error = '';
    this.dateErr = '';
    let presentDate: any;
    presentDate = moment().utcOffset(0);
    presentDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    presentDate.toISOString()
    presentDate.format();
    console.log(presentDate);
    if ((moment(presentDate._d)).isAfter(value)) {
      this.error = 'Appointment date cannot be before present date';
      console.log('Appointment date cannot be before present date', this.error);
      // this.submitted=true
    }
  }
  /************************************************* ENDS ***************************************************** */

  /********************************************** NAVIGATE TO CLINIC PAGE ************************************************** */
  navigateClinic() {

    this.router.navigate(['dashboard/clinic']);
  }
  /************************************************ ENDS ****************************************************************** */

  /******************** STORE THE TYPE OF APPOINTMENT TO BE BOOKED AND GET CLINICS ACCORDING TO DATE SELECTED ****************** */
  getAppType(data) {
    this.appointmentType = data;
    // if (data == 'visit') {
    //   this.appointmentType = 'clinicVisit';
    // }
    // else if (data == 'eConsult') {
    //   this.appointmentType = 'eConsult';
    // }

    this.ClinicService.clinicByDateType(this.doctorProfileId, this.appointmentDate, this.appointmentType).subscribe(result => {
      console.log('result', result);
      let response: any = {};
      response = result;
      this.clinicList = response.result.clinic;
      console.log('clinic list', this.clinicList)
    },
      err => {

      })
  }
  /**************************************************** ENDS ********************************************************************************** */

  getAppointmentlist() {
    this.informationNew = [];
    this.dateAppointment;
    this.appointmentService.getAppointmentList(localStorage.getItem('loginId'), this.dateAppointment).subscribe(
      data => {
        console.log(data)
        let response: any = {};
        response = data;
        this.sharedService.saveAppointmentList(response.result)

      },
      err => {
      });
  }

}