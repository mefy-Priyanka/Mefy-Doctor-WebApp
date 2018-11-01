import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIURL } from '../urlsConfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppointmentService {

  constructor(private http: Http) { }


 //create appointment
 createAppointment(data) {
  return this.http.post(APIURL + 'appointment/create', data)
    .map(res => res.json())
    .catch(this.handleError)
}


//get appoitmnet list
getAppointmentList(id,date){
  return this.http.get(APIURL + 'appointment/getByDate?doctorId='+ id +'&date='+ date )
  .map(res => res.json())
  .catch(this.handleError)
}

//get appoitmnet list
getTimeSlots(id,date,clinicId,time){ 
  return this.http.get(APIURL + 'individual/getTimeSlots?doctorId='+ id +'&date='+ date +'&clinicId='+ clinicId +'&currentTime='+time)  
  .map(res => res.json())
  .catch(this.handleError)
}

   // catch errors
   public handleError = (error: Response) => {
    return Observable.throw(error.json());
};

 //create appointment
 createIndividual(id,data) {
  return this.http.post(APIURL + 'doctor/createIndividual?_id=' +id, data)
    .map(res => res.json())
    .catch(this.handleError)
}

 //get individual number list
 getIndividualList(data) {
  return this.http.get(APIURL + 'doctor/getIndividualByPhonenumber?phoneNumber='+data)
    .map(res => res.json())
    .catch(this.handleError)
}

// Cancel Acppointment 
cancelAppointmentById(data){
  return this.http.put(APIURL +'appointment/cancel',data)
  .map(res => res.json())
  .catch(this.handleError)
}

 //get individual number list
 getAppointmentByClinicId(id) {
  return this.http.get(APIURL + 'appointment/getByClinicId?clinicId=' +id)
    .map(res => res.json())
    .catch(this.handleError)
}

  // delete appointment
  deleteAppointment(id) {
    return this.http.delete(APIURL + 'appointment/delete?appointmentId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }
}