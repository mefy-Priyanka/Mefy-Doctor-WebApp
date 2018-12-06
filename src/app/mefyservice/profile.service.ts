import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
import { IMAGEURL } from '../urlsConfig';
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
  /****************UPDATE DOCTOR"S PROFILE**********************/
  updateDetail(userId,doctoridetail) {
    console.log('updatedDetail', doctoridetail)
    return this.http.put(APIURL + 'doctor/profile/' +userId,doctoridetail)
  }
/********************************DOCTOR"S IMAGE UPLOAD***************************** */
doctorImageUpload(data){
  return this.http.post(IMAGEURL+'/upload',data)
}
}
