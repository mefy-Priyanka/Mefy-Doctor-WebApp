import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIURL } from '../urlsConfig';

@Injectable()

export class ProfileService {
 constructor(private http: HttpClient) { }
 //get doctor details
 
 getDocDetail(id){
   console.log('ff',id)
   return this.http.get(APIURL+'doctor/'+ id)
}

}
