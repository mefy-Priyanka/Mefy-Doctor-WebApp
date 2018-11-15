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
  public loader:boolean=false;
  public otpShow: boolean = false;
  public doctorloginForm: FormGroup;
  public otploginForm: FormGroup;
  loginFormErrors: any;
  otploginFormErrors: any;
  submitted: boolean = false; //SHOW ERROR,IF INVALID FORM IS SUBMITTED
  phoneNumber: any = [];
  userData: any;
  allUserList: any = []
  public scannerdata:string= 'ReadMe';
  // public socket = io('http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023');
  constructor(private formBuilder: FormBuilder, public doctorService: LoginService,private router: Router) {
    this.myAngularxQrCode = this.scannerdata;
  
    this.loginFormErrors = {
      phoneNumber: {},
    };
    this.otploginFormErrors = {
      otp: {},
    };
   }

  ngOnInit() {
    this.doctorloginForm = this.createLoginForm()
    this.doctorloginForm.valueChanges.subscribe(() => {
      this.onLoginFormValuesChanged();
    });
    this.otploginForm = this.createOtpForm()
    this.otploginForm.valueChanges.subscribe(() => {
      this.onOtpFormValuesChanged();
    });
    // this.hii();
    this.getAllUsers();
  }
  getAllUsers() {
    this.doctorService.getAllUsers().subscribe(data => {
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
      const control = this.doctorloginForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.loginFormErrors[field] = control.errors;
      }
    }
  }
    /******************************IT CATCHES ALL CHANGES IN FORM******************/
    onOtpFormValuesChanged() {
      for (const field in this.otploginFormErrors) {
        if (!this.otploginFormErrors.hasOwnProperty(field)) {
          continue;
        }
        // Clear previous errors
        this.otploginFormErrors[field] = {};
        // Get the control
        const control = this.otploginForm.get(field);
  
        if (control && control.dirty && !control.valid) {
          this.otploginFormErrors[field] = control.errors;
        }
      }
    }
  login() {
    let result: any = {};
    this.submitted = true;
    this.loader=false;
    if (this.doctorloginForm.valid) {
      let data = {
        phoneNumber: this.doctorloginForm.value.phoneNumber,
        role: 'doctor',
        deviceId: '2345434'
      }
      this.doctorService.newdoctor(data).subscribe(value => {
        console.log('result',value)
        result = value;
          if (!result.result.error) {
            // this.toastr.success('User Loggedin Succesful!', 'Wow!');
            this.loader=true;
            this.router.navigate(['/dashboard/main'])
          }
          else{
            // this.toastr.error('User Not exits!', 'Enter Otp!');
            // this.loader=true;
            this.otpShow=true;
            this.loginShow=false;
            this.submitted = false;
          }              
      },
        err => {
          console.log(err);
        }
      )
    }
  }
  submitOtp() {
    let result: any = {};
    this.submitted=true;
    if(this.otploginForm.valid){
      let data = {
        otp: this.otploginForm.value.otp,
        phoneNumber: this.doctorloginForm.value.phoneNumber,
        role: "doctor",
        name: "priyanka",
        gender: "Female",
        dob: "21-23-2013",
        city: "Durgapur",
        deviceId: '2345434',
      }
      this.doctorService.otpData(data).subscribe(value => {
        result = value;
          if (!result.result.error) {
            console.log("success");
            // this.toastr.success('User Loggedin Succesful!', 'Wow!');
            this.loader=true;
            this.router.navigate(['/dashboard/main'])
          }
          else{
            // this.toastr.error('Wrong Otp!');
            console.log("error");
            this.submitted=false;
          }              
      },
        err => {
          console.log(err);
        }
      )
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

}
