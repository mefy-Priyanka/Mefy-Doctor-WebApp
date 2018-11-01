import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { APIURL } from '../urlsConfig';

@Injectable()

export class DoctorregisterService {
  info:any;

  constructor(private http: Http) { }

// doctor registration
  register(data) {
    return this.http.post(APIURL + 'user/registration', data)
      .map(res => res.json())
      .catch(this.handleError)
  }


  //verifyotp api
  verifyOTP(data) {
    return this.http.post(APIURL + 'user/verifyOTP', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

// addprofile details of doctor
  addDoctorprofile(data){
    return this.http.post(APIURL + 'doctor/doctorProfile', data)
    .map(res => res.json())
    .catch(this.handleError)
  }


  // catch errors
  public handleError = (error: Response) => {
    return Observable.throw(error.json());
 };

 //update doctor profile
 updateDocProfile(data){
  return this.http.put(APIURL +'doctor/doctorProfileUpdate', data)
  .map(res => res.json())
  .catch(this.handleError)

 }

// upload profile picture
profilePicture(data){
  return this.http.post(APIURL +'file/fileUpload', data)
  .map(res => res.json())
  .catch(this.handleError)
}
 // get education list
 getDegreeList(){
  return this.http.get(APIURL +'doctor/education')
  .map(res => res.json())
  .catch(this.handleError)
 }

 //get speciality list
getSpecialityList(){
  return this.http.get(APIURL +'doctor/speciality')
  .map(res => res.json())
  .catch(this.handleError)
}

//get language list
getLanguageList(){
  return this.http.get(APIURL +'doctor/language')
  .map(res => res.json())
  .catch(this.handleError)
}

//get state list
getStateList(){
  return this.http.get(APIURL +'doctor/state')
  .map(res => res.json())
  .catch(this.handleError)
}
}
