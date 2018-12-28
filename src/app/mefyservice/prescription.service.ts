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
/*************GET PRESCRIPTION BY INDIVIDUAL ID************************/
getPrescriptionByIndividualId(individualId){
  console.log('service',individualId)
  return this.httpClient.get(APIURL+'prescription/individualprescription?individualId='+individualId)
}


/*************************************** GET INDIVIDUAL MEDICAL HISTORY *************************************** */
getIndvMedicalRecords(individualId){
return this.httpClient.get(APIURL+'individual/getHealthrecords?individualId='+individualId)
}

/************************************** GET INDIVIDUAL PROFILE DETAIL ********************************************* */
getIndvProfile(individualid){
return this.httpClient.get(APIURL+'individual/'+individualid);
}
}
