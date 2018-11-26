import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
@Injectable()
export class DashboarddService {

  constructor(private httpClient: HttpClient) { }
 
/************GET DOCTOR"S DASHBOARD DETAIL************************ */
getDoctorDashboardDetail(doctorId){
  return this.httpClient.get(APIURL+'doctor/doctorDashboard?doctorId='+doctorId)
}
}
