import { Component, OnInit } from '@angular/core';
import { SocketService } from '../meme-services/socket.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
/***********************************New Imports **************************** */
import { SharedService } from '../mefyservice/shared.service';
import {SocketsService} from '../mefyservice/sockets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  menuState: string = 'in';

  isIn = true;   // store state


  constructor(private sharedService: SharedService, private socketService: SocketService,private SocketsService:SocketsService) {

    this.sharedService.sidenav.subscribe(data => {
      // if(data==true){
      this.toggleState();
      // }
    })
  }

  ngOnInit() {
    // this.SocketsService.connect();
    // this.socketService.newAppointment().subscribe(data => {

    //   console.log(data);
    // })
  }



  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
}
