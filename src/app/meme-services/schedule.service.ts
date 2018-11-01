import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIURL } from '../urlsConfig';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { debuglog } from 'util';

@Injectable()
export class ScheduleService {
  public headers: any;
  public options: any;

  constructor(private http: Http) {
  }


  //for create Clinic
  clinicCreate(data) {
    console.log("schedule");
    return this.http.post(APIURL + 'clinic/create', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  //for Doctor Clinic List
  //"5a3373fafcff662d9497e298"
  getClinicList(id) {
    console.log("Get Schedule")
    return this.http.get(APIURL + 'clinic/doctorClinicList?doctorId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // get Single Clinic Details through Clinic id
  getSingleClinicList(id) {
    console.log("Get Schedule")
    return this.http.get(APIURL + 'clinic/getSingle?clinicId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }


  //Update(edit) clinic
  updateClinic(data) {
    console.log("Get Schedule")
    return this.http.put(APIURL + 'clinic/update', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // delete clinic
  deleteClinic(id) {
    console.log("Get Schedule")
    return this.http.delete(APIURL + 'clinic/delete?clinicId=' + id)
      .map(res => res.json())
      .catch(this.handleError)
  }

// delete clinic after confirmation
 // delete clinic
 deleteClinicByStatus(id) {
  console.log("Get Schedule")
  return this.http.delete(APIURL + 'clinic/delete?clinicId=' + id +'&status=appointments')
    .map(res => res.json())
    .catch(this.handleError)
}

  // clinic availability
  clinicAvailability(data) {
    return this.http.put(APIURL + 'clinic/changeAvailabilty', data)
      .map(res => res.json())
      .catch(this.handleError)
  }

  // catch errors
  public handleError = (error: Response) => {
    return Observable.throw(error.json());
  };

  // get clinic by date
  getClinicByDate(id,date) {
    return this.http.get(APIURL + 'individual/getClinicByDate?date=' + date +'&doctorId=' +id)
      .map(res => res.json())
      .catch(this.handleError)
  }

}
