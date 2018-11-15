import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
@Injectable()
export class DocregistrationService {

  constructor(private httpClient: HttpClient) { }

  /*********************GET LANGUAGE JSON FILE****************************/
  getLanguageList(data){
    console.log(data.x)
    return this.httpClient.get(APIURL+'doctor/getList?language='+ data.x)
  }
 /*********************GET EDUCATION JSON FILE****************************/
 getEducationList(data){
  console.log(data.y)
  return this.httpClient.get(APIURL+'doctor/getList?education='+ data.y)
}
 /*********************GET SPECIALITY JSON FILE****************************/
 getSpecialityList(data){
  console.log(data.z)
  return this.httpClient.get(APIURL+'doctor/getList?speciality='+ data.z)
}
/*************************DOCTOR'S PREREGISTRATION************************************ */
preRegistrationApi(data){
  return this.httpClient.post(APIURL+'User/preregistration',data)
}
/*************************DOCTOR'S REGISTRATION************************************ */
doctorRegistrationApi(data){
  return this.httpClient.post(APIURL+'User/registration',data)
}

}
