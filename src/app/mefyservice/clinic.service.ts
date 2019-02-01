import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';

@Injectable()
export class ClinicService {

  constructor(private httpClient: HttpClient) { }

  // GET DOCTOR CLINIC LIST  
  getCliniclist(doctorId) {
    console.log(doctorId)
    return this.httpClient.get(APIURL + 'clinic/clinicByDoctorId/' + doctorId)
  }

  // GET SPECIFIC CLINIC DETAIL
  getSingleClinicDetail(clinicId) {
    return this.httpClient.get(APIURL + 'clinic/' + clinicId)
  }

  // DOCTOR CREATE CLINIC  
  addClinic(data) {
    return this.httpClient.post(APIURL + 'clinic/addclinic', data);
  }

  // DOCTOR UPDATE CLINIC
  updateClinic(clinicId, data) {
    return this.httpClient.put(APIURL + 'clinic/updateClinic/' + clinicId, data);
  }

  // DOCTOR DELETE CLINIC
  deleteClinic(clinicId) {
    return this.httpClient.delete(APIURL + 'clinic/' + clinicId)
  }


  // GET CLINIC LIST BY DOCTORID,DATE,TYPE
  clinicByDateType(doctorId, date, type) {
    console.log(doctorId,date,type)
    return this.httpClient.get(APIURL + 'clinic/clinicbydate?doctorId=' + doctorId + '&date=' + date + '&type=' + type)
  }

  //GET CLINIC SLOTS
  clinicSlots(clinicId,date){
    console.log(clinicId,date)
    return this.httpClient.get(APIURL+'clinic/getTimeSlot?clinicId='+clinicId+'&date='+date)
  }
  /*********ADD RECEPTIONIST**** */
  addRecpt(data){
    return this.httpClient.post(APIURL + 'receptionist/create', data);
  }
  /**************Phone number check******************** */
  phonevalid(data){
    console.log("api data",data)
    return this.httpClient.post(APIURL + 'receptionist/checkNumber', data);
  }
   /******************SEND OTP TO RECEPTIONIST****************************/
   receptSendOtp(phoneNumber){
    return this.httpClient.post(APIURL + 'receptionist/sendOtp', phoneNumber);
  }
  /*************************** DOCTOR REMOVE RECPTIONIST ***********************/
  deleteRecept(data){
    console.log(data)
    return this.httpClient.delete(APIURL +'receptionist/removereceptionist/'+data.receptionId)
  }
}
