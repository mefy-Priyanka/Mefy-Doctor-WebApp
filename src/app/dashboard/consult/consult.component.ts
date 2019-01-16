import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { DoctorPrescriptionService } from '../../meme-services/doctor-prescription.service';
import { SharedService } from '../../mefyservice/shared.service';
import { SocketService } from '../../meme-services/socket.service';


@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  callerData: any = {};
  pathName:any;
  constructor(  private route: ActivatedRoute,  private socketService: SocketService, private router: Router,private sharedService:SharedService) {
    // this.socketService.connect();
    // this.route.queryParams.subscribe(param => {    
    // //  console.log(param)
    //   this.callerData.callerId = param['callerId'];
    //   this.callerData.callerEasyRTC = param['callerEasyRTC'];
    //   this.callerData.roomId = param['roomId'];
    // })

   }

  ngOnInit() {

  }

}
