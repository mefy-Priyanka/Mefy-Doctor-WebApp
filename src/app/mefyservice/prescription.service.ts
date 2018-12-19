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
}
