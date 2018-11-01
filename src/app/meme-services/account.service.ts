import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { APIURL } from '../urlsConfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AccountService {

  constructor(private http: Http) { }



 //create account
 createAccount(data) {
  return this.http.post(APIURL + 'account/create', data)
    .map(res => res.json())
    .catch(this.handleError)
}


//get account list by doctorId
getAccountListByDoctorList(id){
  return this.http.get(APIURL + 'account/getByDoctorId?doctorId='+ id)
  .map(res => res.json())
  .catch(this.handleError)
}

//get account list by accountId
getAccountByAccountId(id){
  return this.http.get(APIURL + 'account/getByAccountId?accountId='+ id)
  .map(res => res.json())
  .catch(this.handleError)
}
// update Account 
accountUpdate(data){
  return this.http.put(APIURL +'account/update', data)
  .map(res => res.json())
  .catch(this.handleError)
}
 // delete Account
 deleteAccount(id) {
  console.log("delete Account")
  return this.http.delete(APIURL + 'account/delete?_id=' + id)
    .map(res => res.json())
    .catch(this.handleError)
 }

   // catch errors
public handleError = (error: Response) => {
  return Observable.throw(error.json());
 };

}
