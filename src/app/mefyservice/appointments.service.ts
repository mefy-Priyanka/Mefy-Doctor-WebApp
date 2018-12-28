import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';

@Injectable()
export class AppointmentsService {

  constructor(private httpClient: HttpClient) { }


  // FIND INDIVIDUAL'S
  findIndividualByNumber(phoneNumber) {
    console.log(phoneNumber);
    return this.httpClient.get(APIURL + 'doctor/findindividual?phoneNumber=' + phoneNumber)
  }

  // CREATE INDIVIDUAL
  createIndividual(data) {
    return this.httpClient.post(APIURL + 'doctor/createindividual', data)
  }
  // CREATE APPOINTMENT
  createAppointment(data) {
    return this.httpClient.post(APIURL + 'appointment/bookAppointment', data)
  }
  // GET APPOITNEMENT LIST
  getAppointmentList(doctorId, appointmentDate) {
    console.log('apponitment',doctorId, appointmentDate)
    return this.httpClient.get(APIURL + 'appointment/doctorAppointmentList?doctorId=' + doctorId + '&appointmentDate=' + appointmentDate)
  }
  /*********************CANCEL APPOINTMENT LIST************************/
  changeAppointmentStatus(data){
    return this.httpClient.put(APIURL + 'appointment/appointmentstatus',data)
  }
/************************GET DOCTOR"S CURRENT SCHEDULE LIST******************** */
getDoctorCurrentAppointment(doctorId){
  return this.httpClient.get(APIURL+'appointment/getDoctorEvents?doctorId='+doctorId)
}
}
