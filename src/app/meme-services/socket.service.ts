import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Router } from '@angular/router';
import { APIURL } from './../urlsConfig';
@Injectable()

export class SocketService {
  public url = APIURL;
  
  private socket;

  constructor(private router: Router) {
  }

  sendMessage(message, data) {
    this.socket.emit(message, data);
  }

  connect() {
 
    this.socket = io(this.url, { query: `profileId=${localStorage.getItem('loginId')}&role=doctor` });
  console.log(this.socket)
  }

  incomingCall() {
   let observable = new Observable(observer => {
      this.socket.on('incomingCall', (data) => {
     
        observer.next(data);
      });
      return () => {
      };
    })
    return observable;
  }

  reject() {
    let observable = new Observable(observer => {
      this.socket.on('reject', (data) => {
        observer.next(data);
      });
      return () => {
      };
    })
    return observable;
  }

  newAppointment() {
    let observable = new Observable(observer => {
      this.socket.on('newAppointment', (data) => {
        console.log("new appointment", data);
        observer.next(data);
      });
      return () => {
      };
    })
    return observable;
  }

  accept() {
    let observable = new Observable(observer => {
      this.socket.on('accept', (data) => {
        observer.next(data);
      });
      return () => {
      };
    })
    return observable;
  }

  callDisconnected() {
    let observable = new Observable(observer => {
      this.socket.on('callDisconnected', (data) => {
        observer.next(data);
      });
      return () => {
      };
    })
    return observable;
  }

  // handle sockect if gets disconnected
  socketDisconnectHandle() {
    let observable = new Observable(observer => {
      this.socket.on('disconnect', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  // disconnect socket and navigate to login page
  disconnectsocket() {
    this.socket.disconnect();
    this.router.navigate['/login'];
  }


}
