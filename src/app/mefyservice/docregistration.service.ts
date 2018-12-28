import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
import { IMAGEURL } from '../urlsConfig';

@Injectable() 
export class DocregistrationService {

  constructor(private httpClient: HttpClient) { }

  /*********************GET LANGUAGE JSON FILE****************************/
  getLanguageList(data){
    return this.httpClient.get(APIURL+'doctor/getList?language='+ data.language)
  }
 /*********************GET EDUCATION JSON FILE****************************/
 getEducationList(data){
  return this.httpClient.get(APIURL+'doctor/getList?education='+ data.education)
}
 /*********************GET SPECIALITY JSON FILE****************************/
 getSpecialityList(data){
   console.log(data)
  return this.httpClient.get(APIURL+'doctor/getList?speciality='+ data.speciality)
}
 /*********************GET STATE JSON FILE****************************/
 getStateList(data){
  return this.httpClient.get(APIURL+'doctor/getList?state='+ data.state)
}
 /*********************GET ISSUE AUTHORITY JSON FILE****************************/
 getIsuueAuthorityList(data){
  return this.httpClient.get(APIURL+'doctor/getList?issuingAuthority='+ data.issuingAuthority)
}
/*************************DOCTOR'S PREREGISTRATION************************************ */
preRegistrationApi(data){
  return this.httpClient.post(APIURL+'User/preregistration',data)
}
/*************************DOCTOR'S REGISTRATION************************************ */
doctorRegistrationApi(data){
  return this.httpClient.post(APIURL+'User/registration',data)
}
/*********************NUMBER VERIFIACTION**********************/
numberVerifivcation(data){
  return this.httpClient.post(APIURL+'User/verifyNumber',data)
}
}