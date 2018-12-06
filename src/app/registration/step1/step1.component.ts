import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DoctorregisterService } from '../../meme-services/doctorregister.service';
import {SharedService} from '../../mefyservice/shared.service';
import * as moment from 'moment';


@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  step1Form: FormGroup;
  step1FormErrors: any;
  doctorData: any;
  messageNew: any;
  error:any;
  messageExist: boolean=false;
  public mask = [ /[1-9]/,/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/,/\d/,/\d/, /\d/, /\d/] // Phone number validation 
  constructor(private formBuilder: FormBuilder, private doctorRegService: DoctorregisterService,private sharedService:SharedService,private router:Router) {
    this.step1FormErrors = {
      name: {},
      phoneNumber: {},
      email: {},
      dob:{},
      gender: {}

    };
  }

  ngOnInit() {

    this.step1Form = this.createStep1Form()

    this.step1Form.valueChanges.subscribe(() => {
      this.onStep1FormValuesChanged();
    });
  }

  createStep1Form() {
    return this.formBuilder.group({
      name: ['',Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob:['',Validators.required],
      gender: ['', Validators.required]

    });
  }

  onStep1FormValuesChanged() {
    this.messageNew = "";
    this.messageExist =false;
    for (const field in this.step1FormErrors) {
      if (!this.step1FormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.step1FormErrors[field] = {};

      // Get the control
      const control = this.step1Form.get(field);

      if (control && control.dirty && !control.valid) {
        this.step1FormErrors[field] = control.errors;
      }
    }
  }


  //get  doctor step1 data
  step1Data() {
    console.log(this.step1Form.value);
    if(this.compareDob(moment(this.step1Form.controls.dob.value).format('YYYY-MM-DD'))) //compare present date to date of birth
    if (this.step1Form.valid) {
    this.doctorData = this.step1Form.value;
    this.compareDob(event);
    this.sharedService.doctorInfo(this.doctorData);
    let registerData={
      phoneNumber:this.step1Form.value.phoneNumber,
      role:'doctor'
    }
   this.doctorRegService.register(registerData).subscribe(result=>{
      console.log('doctor registration',result);
      this.sharedService.info.userId = result.users._id;
      this.sharedService.doctorInfo(this.sharedService.info);
      this.router.navigate(['/register/step2']);
    },
    err => {
      this.messageExist=true;
   })
  }
  else{
    this.messageNew = 'Please Enter The Credentials';

  }
}
 //save at enter
 keyDownFunction(event) {
  if(event.keyCode == 13) {
    this.step1Data();
  }
}
//compare dob
compareDob(dob) {
  this.error='';
  var startdat = moment();
  var startdate = moment().subtract(20, "year");
  console.log(startdat);
  let presentDat: any;
  presentDat = moment(startdate).utcOffset(0);
  console.log(presentDat);
  presentDat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
  presentDat.toISOString()
  presentDat.format("DD-MM-YYYY")
  console.log(presentDat);
  var enddat = moment();
  var enddat = moment().subtract(100, "year");
  console.log(enddat);
  let Dat: any;
  Dat = moment(enddat).utcOffset(0);
  Dat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
  Dat.toISOString()
  Dat.format("DD-MM-YYYY")
  console.log(Dat);
  if ((moment(dob)).isAfter(presentDat._d)) {
    this.error = 'Invalid DOB';
    return false;
  }
  else if ((moment(dob)).isBefore(Dat._d)) {
    this.error = 'Invalid DOB';
    return false;
  }
  else{
    return true;
  }
}

}
