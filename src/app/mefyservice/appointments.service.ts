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
  // GET /appointment/doctorAppointmentList
  // GET APPOITNEMENT LIST
  getAppointmentList(doctorId, appointmentDate) {
    return this.httpClient.get(APIURL + 'appointment/doctorAppointmentList?doctorId=' + doctorId + '&appointmentDate=' + appointmentDate)
  }

}
