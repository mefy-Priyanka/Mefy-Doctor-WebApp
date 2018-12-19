import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';

@Injectable()
export class PrescriptionService {

  constructor(private httpClient: HttpClient) { }
/*********************GET MEDICINE JSON FILE****************************/
getmedicineList(data){
  return this.httpClient.get(APIURL+'doctor/getList?medicine='+ data)
}
/*********************CREATE PRESCRIPTION**********************/
createPrescription(prescribeData){
  console.log('service',prescribeData)
  return this.httpClient.post(APIURL+'prescription/create',prescribeData)
}
}
