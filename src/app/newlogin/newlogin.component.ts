import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../mefyservice/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../mefyservice/shared.service';
import {ProfileService} from '../mefyservice/profile.service';
import io from 'socket.io-client';
import { SocketsService } from '../mefyservice/sockets.service';
@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public loginShow: boolean = true;
  public loader: boolean = false;
  public otpShow: boolean = false;
  public loginForm: FormGroup;
  public otpForm: FormGroup;
  public doctorId:any;
  public userarr: any = [];
  public userId:any;
  loginFormErrors: any;
  otpFormErrors: any;
  submitted: boolean = false; //SHOW ERROR,IF INVALID FORM IS SUBMITTED
  phoneNumber: any = [];
  userData: any;
  allUserList: any = []
  public scannerdata: any = "socket.id";
  public mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 
// socket:any;
  public socket = io('http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023');
  public splitarr: any =[];
  myarr: any;
  uid: any;
  constructor(private formBuilder: FormBuilder, public loginService: LoginService, private router: Router,private sharedServices:SharedService,
    private SocketService:SocketsService,private profileService:ProfileService) {
    // this.scanData();
    // this.myAngularxQrCode = this.scannerdata;
    this.loginFormErrors = {
      phoneNumber: {},
    };
    this.otpFormErrors = {
      otp: {},
    };
  }
  scanData() {
    let _base = this;
    _base.socket.on('connect', function () {
      console.log("connect",_base.socket, _base.socket.id);
      _base.scannerdata = _base.socket.id;
      console.log(_base.scannerdata);
    });

    _base.socket.on('loginByScanner', function (data) {
      console.log("data print", data);
      _base.router.navigate(['/dashboard'])
    });
    _base.socket.on('disconnect', function () {
      console.log("connection closed");
    });
  }
  
  ngOnInit() {
// console.log('njfhjjg',this.socket);

    this.loginForm = this.createLoginForm()
    this.loginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
    this.otpForm = this.createOtpForm()
    this.otpForm.valueChanges.subscribe(() => {
      this.onOtpFormValuesChanged();
    });
    // this.hii();
    this.getAllUsers();
  }
  getAllUsers() {
    this.loginService.getAllUsers().subscribe(data => {
      // console.log(data)
      let result: any = {};
      result = data
      this.allUserList = result
    })
  }

  /******************************IT CATCHES ALL CHANGES IN FORM******************/
  onLoginFormValuesChanged() {
    for (const field in this.loginFormErrors) {
      if (!this.loginFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.loginFormErrors[field] = {};
      // Get the control
      const control = this.loginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }
  /******************************IT CATCHES ALL CHANGES IN FORM******************/
  onOtpFormValuesChanged() {
    for (const field in this.otpFormErrors) {
      if (!this.otpFormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.otpFormErrors[field] = {};
      // Get the control
      const control = this.otpForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.otpFormErrors[field] = control.errors;
      }
    }
  }
  createLoginForm() {
    return this.formBuilder.group({
      phoneNumber: ['', Validators.required],
    });
  }
  createOtpForm() {
    return this.formBuilder.group({
      otp: ['', Validators.required],
    });
  }


  /*******************DOCTOR'S LOGIN********************/
  login() {
    let result: any = {};
    this.loader = true;
    if (this.loginForm.valid) {
      let logindata = {
        phoneNumber: this.loginForm.value.phoneNumber,
        role: 'doctor'
      }
      this.loginService.doctorWebLogin(logindata).subscribe(value => {
        console.log('result', value)
        result = value;
        this.loader = false;
        if (result.result.message == 'OTP sent to registered number') {
          this.loginShow = false;
          this.otpShow = true
          let notifydata = {
            type: 'success',
            title: 'OTP',
            msg: 'Sent to registered number'
          }
          console.log('data',notifydata)
        this.sharedServices.createNotification(notifydata);
        }
        else {
          let notifydata = {
            type: 'warning',
            title: 'User',
            msg: 'Not Registered'
          }
          console.log('data',notifydata)
        this.sharedServices.createNotification(notifydata);
        }
      },
        err => {
          this.loader = false;
          console.log("Network Issue");
          let notifydata = {
            type: 'warning',
            title: 'Network Issue',
            msg: 'Somethnig Went Wrong'
          }
          console.log('data',notifydata)
        this.sharedServices.createNotification(notifydata);
        }
      )
    }
    else {
      this.submitted = true
      this.loader = false;
    }
  }
  /************************VERIFY OTP**************************/
  verifyOtp() {
    this.loader = true;
    if (this.otpForm.valid) {
      // this.loader=true;          
      let verficationData = {
        otp: parseInt(this.otpForm.value.otp),
        phoneNumber: this.loginForm.value.phoneNumber,
        role: 'doctor'
      }
      this.loginService.verifyOtp(verficationData).subscribe(value => {
        console.log('result', value)
        let result:any={}
        result=value 
        if(result.result.message==" Otp verification failed"){
          this.loader = false;
    let notifydata = {
    type: 'error',
    title: 'Otp verification failed!'
    }
     this.sharedServices.createNotification(notifydata);
        }else{
        localStorage.setItem('doctorId',result.result.result.doctorId)
        this.loader = false;
        console.log("userid",this.splitarr)
        this.userarr=result.result.result.userId;
        this.myarr=this.userarr.split("#")[1];
        console.log('id',this.myarr)
        this.uid=this.myarr;
        console.log('y',this.uid)
        localStorage.setItem('userId',this.uid);
        // this.SocketService.connect();
        console.log('socket id',this.socket.id);
        localStorage.setItem('socketId',this.socket.id);
        this.profileService.updateDetail(localStorage.getItem('userId'),{socketId:this.socket.id}).subscribe(data => {
          console.log('socket id updated',data)
        })
        this.router.navigate(['/dashboard/main'])

        }
      },
        err => {
          this.loader = false;
          console.log(err)
          let notifydata = {
            type: 'warning',
            title: 'Network Issue',
            msg: 'Somethnig Went Wrong'
          }
          console.log('data',notifydata)
        this.sharedServices.createNotification(notifydata);
        })
    }
    else {
      this.loader = false;
      this.submitted = true;
    }
  }
 /****************** LOGIN FOR RECEPTIONIST************* */
 loginRecept(){
  // let data:{
  //   phoneNumber:,
  //   otp:,
  //   role:
  // }
}

}
