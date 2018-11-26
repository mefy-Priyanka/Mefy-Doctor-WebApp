import { Injectable } from '@angular/core';
import{APIURL}from '../urlsConfig';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, URLSearchParams, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class MemeLoginService {
  public headers: any;
  public options: any;
  getDocDetail: any;

  constructor(private http: Http) { }

// doctor login 
   login(data) {
    return this.http.post( APIURL + 'user/login', data)
      .map(res => res.json())
      .catch(this.handleError)

  }
// OTP verification
  verifyOTP(otp) {
    return this.http.post( APIURL + 'user/verifyOTP', otp)
      .map(res => res.json())
      .catch(this.handleError)
 }
 
 //get doctor details
  getDoctorDetail(id){
    return this.http.get( APIURL + 'doctor/getDoctorDetails?_id='+ id)
    .map(res => res.json())
    .catch(this.handleError)
  }

  // resend otp
  resendOtp(data){
    return this.http.post( APIURL + 'user/resendOtp', data)
    .map(res => res.json())
    .catch(this.handleError)
  }
// http://mitapi.memeinfotech.com:5020/user/resendOtp
  // catch errors
  public handleError = (error: Response) => {
    return Observable.throw(error.json());

  };

}
