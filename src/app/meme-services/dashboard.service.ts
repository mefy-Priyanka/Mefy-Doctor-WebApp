import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIURL } from '../urlsConfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class DashboardService {

  constructor(private http: Http) { 
    
  }

  //get Dashboard Details through profile id of doctor
   getDoctorList(id,date) {
    
    console.log("Get Dashboard Details")
    return this.http.get(APIURL + 'doctor/getDashboardDetails?_id='+ id+'&date='+date)
      .map(res => res.json())
      .catch(this.handleError)
  }

// doctor availability
doctorAvailability(data){
  return this.http.put(APIURL + 'doctor/availability',data)
  .map(res => res.json())
  .catch(this.handleError)
}

// doctor profile update
doctorProfile(data){
  return this.http.put(APIURL + 'doctor/doctorProfileUpdate',data)
  .map(res => res.json())
  .catch(this.handleError)
}

   // catch errors
   public handleError = (error: Response) => {
    return Observable.throw(error.json());
};
 
}
