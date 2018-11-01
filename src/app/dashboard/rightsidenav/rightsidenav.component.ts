import { Component, OnInit, ElementRef } from '@angular/core';
import { AppointmentService } from '../../meme-services/appointment.service';
import * as moment from 'moment';
import { filter } from 'rxjs/operator/filter';
import { SocketService } from '../../meme-services/socket.service';
import { Router } from '@angular/router';
import { DoctorPrescriptionService } from '../../meme-services/doctor-prescription.service';
import { SharedService } from '../../meme-services/shared.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { APIURL } from '../../urlsConfig';



@Component({
  selector: 'app-rightsidenav',
  templateUrl: './rightsidenav.component.html',
  styleUrls: ['./rightsidenav.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class RightsidenavComponent implements OnInit {
  age: any;
  individualDetails: any;
  imgUrlPrefix: any;
  informationData: any;
  cancelData: any;
  cancelId: any;
  date: any;
  audio2: any;
  public elementRef;
  doctorId: any;
  caller: any = {};
  app: any = {};
  callerData: any = {};
  informationNew: any = [];
  message: any = "";
  peer: any = {};
  hideData: boolean = false;
  dateAppointment: any;
  incoming: any = false;
  consult: any;
  list: any;
  hideConsult: boolean = false;
  // consultId:any;
  filterAppointment = {
    appointmentType: ''
  };
  prescriptionId: any;
  refreshIntervalId: any;
  appointmentData: any = {};
  constructor(private appointmentService: AppointmentService,
    private socketService: SocketService,
    private router: Router,
    private ePrescriptionService: DoctorPrescriptionService,
    private sharedService: SharedService, myElement: ElementRef, private sanitizer: DomSanitizer) {

    this.dateAppointment = new Date();
    this.elementRef = myElement;
    this.sharedService.appointmentList.subscribe(data => {
      if (Object.keys(data).length != 0) {
        this.list = data;
        this.informationNew.push(this.list)
        console.log(this.informationNew)
        this.getAppointmentlist();
      }
    })

  }

  ngOnInit() {
    this.getAppointmentlist();
    this.checkDate();
    this.socketService.incomingCall().subscribe((data: any) => {

      console.log('callerData...', data);
      this.incoming = true;
      this.caller.id = data.callerId;
      this.caller.name = data.fromUserName;
      this.caller.socketId = data.fromSocketId;
  
      this.caller.callerEasyRTC = data.callerEasyRTC;
      this.caller.roomId = data.roomId;
      this.audio2 = document.getElementById('callAudio');
      this.getindividualDetails();
      this.audio2.load();
      // this.audio2.isPlaying = true;
      // this.audio2.play();
      if (this.audio2.paused) {
        this.audio2.load();
        this.audio2.play();
        this.audio2.loop = true
      } else {
        this.audio2.currentTime = 0;

      }
      //  this.audio2.play();
      //     this.audio2.loop = true
      setTimeout(() => {     // after certain time call automatically disconnected;
        this.reject();
      }, 32000);
      //audio loop sdhfreuiregr
      // if(!this.accept() && !this.reject()){

      // }
    });


    // this.sharedService.appointmentDate.subscribe(data=>{
    //   
    //   // if(Object.keys(data).length!=0){
    //     this.getAppointmentlist(data);
    //   // }
    // })
  }


  // doctor
  reject() {
    this.incoming = false;
    this.caller = {};
    this.socketService.sendMessage('reject', { callerId: this.caller.id, callerSocketId: this.caller.socketId, callerEasyRTC: this.caller.callerEasyRTC, receiverId: localStorage.getItem('loginId') })
    this.audio2.pause();//when call disconnected,audio stop
    // this.audio2.currentTime = 0;
    // this.audio2.isPlaying = false;
    // this.audio2.load();
    this.audio2 = null;
    // return true;
  }

  //doctor
  accept() {
    this.router.navigate(['/dashboard/consultnew'], { queryParams: { callerId: this.caller.id, callerEasyRTC: this.caller.callerEasyRTC, roomId: this.caller.roomId } })
    this.peer = this.caller.id
    this.incoming = false;
    // this.sharedService.makeCall(this.caller.callerEasyRTC);
    this.socketService.sendMessage('accept', { callerId: this.caller.id, callerSocketId: this.caller.socketId, callerEasyRTC: this.caller.callerEasyRTC, receiverId: localStorage.getItem('loginId') })
    this.audio2.pause();//when call connected,audio stop
    this.audio2 = null;
    // return true;

  }


  getAppointmentlist() {
    this.informationNew = [];
    // let date: any;
    // date = moment().utcOffset(0);
    // date.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    // date.toISOString();
    // date.format();

    this.dateAppointment;
    this.appointmentService.getAppointmentList(localStorage.getItem('loginId'), this.dateAppointment).subscribe(
      data => {
        console.log(data)

        if (data.result.length != 0) {
          data.result.forEach(element => {

            if (element.status == 'New') {
              this.message = "";
              this.informationNew.push(element);

              console.log(this.informationNew)
            }
          });
          if (this.informationNew.length == 0) {

            this.message = "No Appointments For Today";
          }

        }
        else {

          this.message = "No Appointments For Today";
        }


      },
      err => {
      });
  }

  // get type to filter data
  getType(data) {
    this.filterAppointment.appointmentType = data;
    this.hideData = false;
  }

  // hide and show details on click
  filterData() {
    if (this.hideData == true) {
      this.hideData = !this.hideData;
    }
    else if (this.hideData == false) {
      this.hideData = !this.hideData;
    }
  }

  //appointmnet list for date selected
  dateChanged(e) {
    this.message = '';
    this.hideConsult = false;
    if (e != null) {
      this.checkDate();
      this.informationNew = [];

      this.dateAppointment = e;

      this.appointmentService.getAppointmentList(localStorage.getItem('loginId'), e).subscribe(
        data => {
          console.log(data);
          // this.informationNew = data.result;
          if (data.result.length != 0) {
            data.result.forEach(element => {
              if (element.status == 'New') {
                this.message = "";
                this.informationNew.push(element);

              }

            });
            console.log(this.informationNew)
            if (this.informationNew.length == 0) {

              this.message = "No Appointments for day";
            }
          }
          else {
            this.message = "No appointments for day";
          }

        },
        err => {
        });
    }

  }

  cancelButton(data) {
    this.appointmentData = data;
    this.cancelId = this.appointmentData._id;
    // this.informationData = this.informationNew[index]
    console.log(this.appointmentData);
  }

  //Cancel appointment 
  cancelAppointment(appointment) {
    let presentTime: any;
    presentTime = moment();
    presentTime.toISOString()
    console.log(presentTime)
    var durationInMinutes = 30;
    var MS_PER_MINUTE = 60000;
    var maxCancelTime = new Date(presentTime + durationInMinutes * MS_PER_MINUTE);
    console.log(maxCancelTime)
    if ((moment(this.appointmentData.appointmentTimeFrom)).isBefore(maxCancelTime)) {
      let notifydata = {
        type: 'warning',
        title: 'Appointment Cancel time Limit',
        msg: '  is already Crossed'
      }
      this.sharedService.createNotification(notifydata);   
    }
    else{
    let data = {
      _id: appointment,
      currentTime: moment(presentTime._d).toString()
    }
    console.log(data)
    this.appointmentService.cancelAppointmentById(data).subscribe(data => {
      console.log(data);
      this.cancelData = data.result;
      console.log(this.cancelData)
      let notifydata = {
        type: 'success',
        title: 'Appointment',
        msg: 'Cancelled Succesfully !'
      }
      this.sharedService.createNotification(notifydata);
      this.getAppointmentlist();
    },
      err => {
      })
    }
  }

  // Detecting Clicks Outside the Component
  handleClick(event) {
    var clickedComponent = event.target;
    var inside = false;
    do {
      if (clickedComponent === this.elementRef.nativeElement) {
        inside = true;
      }
      clickedComponent = clickedComponent.parentNode;
    } while (clickedComponent);
    if (inside) {
      console.log('inside');
    } else {
      console.log('outside');
      if (this.hideData == true) {
        this.hideData = !this.hideData;
      }
    }
  }

  // calculate age
  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    this.age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      this.age--;

    }
    return this.age;

  }
  // individula details from profile id
  getindividualDetails() {
    this.ePrescriptionService.getindividualDetails(this.caller.id).subscribe(data => {
      this.individualDetails = data.registrationDetails;
      console.log(this.individualDetails);
      this.imgUrlPrefix = this.sanitizer.bypassSecurityTrustResourceUrl(APIURL + "file/fileShow?fileId=" + this.individualDetails.profileImage);
      console.log(this.imgUrlPrefix);
      if (this.individualDetails.dob) {
        this.getAge(this.individualDetails.dob);
      }
    },
      err => {
      })
  }

  // navigate to prscription page for visit
  consultFunction(data, value) {
    let appData = {
      type: data,
      individualId: value
    }
    // this.consult = data;
    this.router.navigate(['dashboard/consultnew']);
    this.sharedService.getAppointmnetType(appData);
    this.sharedService.saveClinicvisit(true);
  }

  // consult button validation in appointment list
  checkDate() {
    let presentDate: any;
    presentDate = moment().utcOffset(0);
    presentDate.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
    presentDate.toISOString()
    presentDate.format()
    console.log(presentDate);
    if (moment(this.dateAppointment).isBefore(presentDate._d)) {
      this.hideConsult = true;
    }

  }
}
