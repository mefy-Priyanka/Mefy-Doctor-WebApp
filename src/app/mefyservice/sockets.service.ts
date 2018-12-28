import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { APIURL } from '../urlsConfig';
import * as io from 'socket.io-client';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class SocketsService {

  private socket;
  url = 'http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023';
  // public socket:any = io('http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023');

  constructor() {
    // let _base=this;
    // // _base.socket = io(this.url);
    // _base.socket.on('connection',(socket)=>{
    //   debugger;
    //   console.log('dat"""""""""',_base.socket)
    //   console.log
    // })
    // debugger;
    // console.log('::::::::',this.socket)
  }


  connect() {
    let _base=this;
   
    _base.socket = io(this.url);
    console.log('jkfgdghjkhgfh',_base.socket);
    console.log('socket connection',_base.socket.ids)
    console.log('LLLLLLL',_base.socket.id?_base.socket.id:'jyt')
    // localStorage.setItem('socketId',_base.socket.Socket)
    
    // localStorage.setItem('socketId',this.socket.ids)
    // console.log('SOCKET SERVICE id',this.socket.id);
  }

  getSocketId() {
   let  _base=this;
   console.log(_base.socket)
    let observable = new Observable(observer => {
      _base.socket.on('connect', (data) => {
        console.log('socket data', data)
        observer.next(data);
      });
      return () => {
      };
    })
    console.log(observable)
    return observable;
  }

  
}
