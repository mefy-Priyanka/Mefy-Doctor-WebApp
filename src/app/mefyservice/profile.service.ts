import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIURL } from '../urlsConfig';

@Injectable()

export class ProfileService {

  constructor(private http: HttpClient) { }
  //get doctor details

  getDocDetail(id) {
    // console.log('ff', id)
    return this.http.get(APIURL + 'doctor/' + id)
  }
  // doctor availability
  doctorAvailability(available) {
    return this.http.put(APIURL + 'doctor/profile/' + available.userId, { availability: available.availability })
  }
  updateDetail(doctoridetail) {
    console.log('updatedDetail', doctoridetail)
    return this.http.put(APIURL + 'doctor/profile/' + doctoridetail.userId,{email:doctoridetail.email,address:doctoridetail.address,speciality:doctoridetail.speciality,education:doctoridetail.education,language:doctoridetail.langName})
  }

}
