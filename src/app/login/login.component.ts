import { Component, OnInit } from '@angular/core';
import { MemeLoginService } from '../meme-services/meme-login.service';
import { Router } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { SharedService } from '../meme-services/shared.service';
import { SocketService } from '../meme-services/socket.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  phoneNumber: any;
  loginData: any;
  signedIn: boolean = false;
  resend: boolean = false;
  code: any;
  message: any = '';
  errorMsg: any;
  loginId: any;
  numberPattern: any;
  messageNew: any;
  messageNewValid: any;
  otpMessage: any;
  newMessage: any;
  loggedIn:boolean=false;
  public mask = [ /[1-9]/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/, /\d/] // Phone number validation 
  constructor(private memeLoginService: MemeLoginService, private socketService: SocketService, private router: Router, private sharedService: SharedService

  ) { }

  ngOnInit() {
    // localStorage.clear();

  }

  // doctor login
  doctorLogin() {
    this.message = "";
    if (this.signedIn == true) {
      this.verifyOTP();

    }
    else {
     
      this.loginData = {
        phoneNumber: this.phoneNumber,
        role: 'doctor'
      }
      this.memeLoginService.login(this.loginData).subscribe(
        data => {
          console.log('user login', data)
          this.loginId = data.profile._id;
          this.signedIn = true;
          this.sharedService.saveLoginDetail(data.profile);
          this.resend = true;
        },
        err => {
          this.message = "Invalid PhoneNumber "
         
        })

      // else {
      //   this.messageNew = 'Please enter value';
      // }
    }
  }

  // OTP verification
  verifyOTP() {
    this.errorMsg = "";
    let otpData = {
      phoneNumber: this.loginData.phoneNumber,
      code: parseInt(this.code)
    }
    this.memeLoginService.verifyOTP(otpData).subscribe(
      data => {
        console.log('login otp verified', data);
        localStorage.setItem('loginId', this.loginId);
        this.loggedIn=true;
        this.router.navigate(['/dashboard']);
      },
      err => {
        this.errorMsg = "Incorrect OTP"
      })
  };

  // resend otp

  resendOtp() {
    this.errorMsg = '';
    let dataOtp = {
      phoneNumber: this.phoneNumber,
      role: 'doctor'
    }
    this.memeLoginService.resendOtp(dataOtp).subscribe(data => {
      console.log('resent otp',data);
    },
      err => {
      
      });

  }
       //Login at enter
 keyDownFunction(event) {
  if(event.keyCode == 13) {
    this.doctorLogin();
  }
}
}

