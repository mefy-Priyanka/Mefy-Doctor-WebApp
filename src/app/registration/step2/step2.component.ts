import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../mefyservice/shared.service';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import { MemeLoginService } from '../../meme-services/meme-login.service';


@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  doctorNumber: any;
  sentOTP: any;
  message: any;
  messagenew: any;
  code: any;
  phoneNumber: any;
  constructor(private memeLoginService: MemeLoginService,private doctorRegService: DoctorregisterService, private sharedService: SharedService, private router: Router) {

    // get doctor info
    this.doctorNumber = this.sharedService.info.phoneNumber; 
  }

  ngOnInit() {
  }

  // verify otp 
  verifyOTP() {
    if(this.sentOTP){
   let otpData = {
      phoneNumber: this.doctorNumber,
      code:parseInt(this.sentOTP)
    }
    this.doctorRegService.verifyOTP(otpData).subscribe(data => {
      console.log('otp verification', data);
      this.router.navigate(['/register/step3']);
    },
      err => {
        this.message="Invalid OTP";
        this.messagenew="";
      });
    }
       else if(this.code == "" || this.code == null) {
        this.messagenew='Please Enter OTP';
        this.message="";
        return false;
    }
    
}
//verify at enter
keyDownFunction(event) {
  if(event.keyCode == 13) {
    this.verifyOTP();
  }
}
// clear messages
otpSent(){
  if(this.sentOTP){
    this.message="";
    this.messagenew="";
  }
}

// resend otp

resendOtp() {
  let dataOtp = {
    phoneNumber: this.doctorNumber,
    role: 'doctor'
  }
  this.memeLoginService.resendOtp(dataOtp).subscribe(data => {
    console.log(data);
  },
    err => {
   
    });

}
}
