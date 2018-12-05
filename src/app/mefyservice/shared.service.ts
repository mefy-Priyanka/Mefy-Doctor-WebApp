import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  loginInfo: BehaviorSubject<any> = new BehaviorSubject({});
  // easyRTCid: BehaviorSubject<any> = new BehaviorSubject('');
  // callTrigger: BehaviorSubject<any> = new BehaviorSubject(false);
  prescriptionID: BehaviorSubject<any> = new BehaviorSubject({});
  updatedInfo: BehaviorSubject<any> = new BehaviorSubject(false);
  prescribeInfo: BehaviorSubject<any> = new BehaviorSubject(false);
  accountDetails: BehaviorSubject<boolean> = new BehaviorSubject(false);
  clinicVisit: BehaviorSubject<boolean> = new BehaviorSubject(false);
  creditInfo: BehaviorSubject<any> = new BehaviorSubject({});
  doctorDetails: BehaviorSubject<any> = new BehaviorSubject({});
  dashBoardInfo: BehaviorSubject<any> = new BehaviorSubject(false);
  filterAppointmentList: BehaviorSubject<any> = new BehaviorSubject({});
  urlPathInfo: BehaviorSubject<any> = new BehaviorSubject({});
  notificationType: BehaviorSubject<any> = new BehaviorSubject({});
  appointmentDate: BehaviorSubject<any> = new BehaviorSubject({});
  appointmentType: BehaviorSubject<any> = new BehaviorSubject({});
  consultHide: BehaviorSubject<any> = new BehaviorSubject(false);
  appointmentList: BehaviorSubject<any> = new BehaviorSubject({});
  cancelAppointmentList: BehaviorSubject<any> = new BehaviorSubject({});


  info: any;

  sidenav: BehaviorSubject<any> = new BehaviorSubject(false);

  consultFee: any;
  constructor() { }

  // save details of login agent
  saveLoginDetail(loginInfo) {
    this.loginInfo.next(loginInfo);
  }

  // makeCall(id) {
  //   this.callTrigger.next(id);
  // }
  // changeEasyRTCid(id) {
  //   this.easyRTCid.next(id)
  // }

  // save profile data
  doctorInfo(data) {
    this.info = data;
    console.log('doctorData', this.info);
  }

  // get prescription id
  prescriptionId(param) {
    this.prescriptionID.next(param);
    console.log('prescriptionId', param);
  }

  //get updated info
  updatedDoctorInfo(param) {
    this.updatedInfo.next(param);
  }
  //get updated info
  prescriptionInfo(param) {
    this.prescribeInfo.next(param);
  }

  // get updated info
  accountInfo(param) {
    this.accountDetails.next(param);
  }
  // get updated info
  creditInformation(param) {
    this.creditInfo.next(param);
  }

  // get dashboard updated data
  updatedDasboardInfo(param) {
    this.dashBoardInfo.next(param);
  }

  // get name on which we need to filter appointment list
  filterDoctorAppointment(param) {
    this.filterAppointmentList.next(param)
  }


  doctorDetail(param) {
    this.doctorDetails.next(param);
  }

  //get urlpath for generating active class for navbar
  setPath(param) {
    this.urlPathInfo.next(param);
  }


  //GET APPOINTMNET DATE
  getAppointmnetDate(param) {
    this.appointmentDate.next(param);
  }

  //get notification type
  createNotification(param) {
    console.log('notification.',param)
    this.notificationType.next(param)
  }

  //GET APPOINTMNET Type
  getAppointmnetType(param) {
    this.appointmentType.next(param);
  }

  // toggling sidenav in mobile view
  togglesidenav(param) {
    this.sidenav.next(param);
  }

  saveClinicvisit(param) {
    this.clinicVisit.next(param);
  }

  saveAppointmentList(param) {
    this.appointmentList.next(param);
  }
  /***** Rightside Nav Appointment data */
  cancdelAppointmentData(param){
this.cancelAppointmentList.next(param);
  }
}