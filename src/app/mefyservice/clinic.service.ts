import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';

@Injectable()
export class ClinicService {

  constructor(private httpClient: HttpClient) { }

  // GET DOCTOR CLINIC LIST  
  getCliniclist(doctorId) {
    console.log(doctorId)
    return this.httpClient.get(APIURL + 'clinic/clinicByDoctorId/' + doctorId)
  }

// GET SPECIFIC CLINIC DETAIL
getSingleClinicDetail(clinicId){
  return this.httpClient.get(APIURL+'clinic/'+clinicId)
}

  // DOCTOR CREATE CLINIC  
  addClinic(data) {
    return this.httpClient.post(APIURL + 'clinic/addclinic', data);
  }

  // DOCTOR UPDATE CLINIC
  updateClinic(clinicId, data) {
    return this.httpClient.put(APIURL + 'clinic/updateClinic/' + clinicId, data);
  }


}
