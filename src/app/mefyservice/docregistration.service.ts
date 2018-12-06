import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
@Injectable()
export class DocregistrationService {

  constructor(private httpClient: HttpClient) { }

  /*********************GET LANGUAGE JSON FILE****************************/
  getLanguageList(data){
    return this.httpClient.get(APIURL+'doctor/getList?language='+ data.x)
  }
 /*********************GET EDUCATION JSON FILE****************************/
 getEducationList(data){
  return this.httpClient.get(APIURL+'doctor/getList?education='+ data.y)
}
 /*********************GET SPECIALITY JSON FILE****************************/
 getSpecialityList(data){
  return this.httpClient.get(APIURL+'doctor/getList?speciality='+ data.z)
}
 /*********************GET STATE JSON FILE****************************/
 getStateList(data){
  return this.httpClient.get(APIURL+'doctor/getList?state='+ data.state)
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
