import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../mefyservice/login.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import io from 'socket.io-client';
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
  public loginId:any;
  loginFormErrors: any;
  otpFormErrors: any;
  submitted: boolean = false; //SHOW ERROR,IF INVALID FORM IS SUBMITTED
  phoneNumber: any = [];
  userData: any;
  allUserList: any = []
  public scannerdata: any = "socket.id";
  public mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 

  public socket = io('http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023');
  constructor(private formBuilder: FormBuilder, public loginService: LoginService, private router: Router) {
    this.scanData();
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
      console.log("connect", _base.socket.id);
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
    this.loader = false;
    if (this.loginForm.valid) {
      let logindata = {
        phoneNumber: this.loginForm.value.phoneNumber,
        role: 'doctor',
        token: '12345'
      }
      this.loginService.doctorWebLogin(logindata).subscribe(value => {
        console.log('result', value)
        result = value;
        if (result.result.message == 'OTP sent to registered number') {
          this.loginShow = false;
          this.otpShow = true
          // this.toastr.success('User Loggedin Succesful!', 'Wow!');
        }
        else if (result.result.message == 'Doctor loggedIn successfully') {
          localStorage.setItem('loginId',result.result.user.doctorId)
          this.router.navigate(['/dashboard/main'])
        }
        else {
          this.router.navigate(['/register'])
        }
      },
        err => {
          console.log("Network Issue");
        }
      )
    }
    else {
      this.submitted = true
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
        localStorage.setItem('loginId',result.result.result.doctorId)
        this.loader = false;
        this.router.navigate(['/dashboard/main'])
      },
        err => {
          console.log(err)
        })
    }
    else {
      this.loader = false;
      this.submitted = true;
    }
  }


}
