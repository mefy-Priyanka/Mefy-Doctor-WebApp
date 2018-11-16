import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
@Injectable()
export class AccounttService {

  constructor(private httpClient: HttpClient) { }

  
/******************ADD BANK ACCOUNT**********************/
addBankAccount(accountData){
  return this.httpClient.post(APIURL+'account/addBankAccount',accountData)
   }
 /******************DELETE BANK ACCOUNT**********************/
   deleteBankAccount(accountId){
     return this.httpClient.delete(APIURL+'account/'+accountId)
      }
 /******************GET BANK ACCOUNT LIST BY DOCTORID**********************/
   getBankAccountList(doctorId){
     return this.httpClient.get(APIURL+'account/bankList?doctorId='+doctorId)
      }
}
