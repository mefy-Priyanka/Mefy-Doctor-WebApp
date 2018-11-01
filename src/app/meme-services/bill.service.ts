import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIURL } from '../urlsConfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BillService {

  constructor(private http: Http) { }

    // catch errors
    public handleError = (error: Response) => {
      return Observable.throw(error.json());
  };

// bill create
createBill(id,data){
  return this.http.post(APIURL + 'bill/create?ePrescriptionId='+id, data)
  .map(res => res.json())
  .catch(this.handleError)
}

// get bill by prescriptionId
getByPrescriptionId(id){
  return this.http.get(APIURL + 'bill/getByPrescriptionId', id)
  .map(res => res.json())
  .catch(this.handleError)
}

// get biil by doctorId
getByDoctorId(id){
  return this.http.get(APIURL + 'bill/getByDoctorId?doctorId='+ id)
  .map(res => res.json())
  .catch(this.handleError)
}

// econsult fee
econsultFee(data){
  return this.http.put(APIURL + 'doctor/eConsultFee',data)
  .map(res => res.json())
  .catch(this.handleError)
}



// get bill by date
getBillByDate(id,date){
  return this.http.get(APIURL + 'bill/getByDate?doctorId=' + id+'&date='+date)
  .map(res => res.json())
  .catch(this.handleError)
}
}