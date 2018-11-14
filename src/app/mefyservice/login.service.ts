import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }
  /************************** CREATE NEW USER*********************/
  newdoctor(data) {
    console.log("Data",data)
    return this.http.post(APIURL + 'User/login', data)
  }
  getAllUsers() {
    return this.http.get(APIURL + 'User')
  }
  // mydata(data) {
  //   console.log("Data",data)
  //   return this.http.post(APIURL + 'User/registration', data)
  // }
  otpData(data) {
    console.log("Data",data)
    return this.http.post(APIURL + 'User/registration', data)
  }
  // scanner(data) {
  //   console.log("Data",data)
  //   return this.http.post(APIURL + 'User/loginByScanner', data)
  // }
}
