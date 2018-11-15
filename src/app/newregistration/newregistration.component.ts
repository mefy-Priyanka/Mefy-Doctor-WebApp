import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocregistrationService } from '../mefyservice/docregistration.service';
import * as moment from 'moment';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit {
  public submitted: boolean = false
  public firstreg: boolean = true;
  public secondreg: boolean = true;
  public thirdreg: boolean = true;
  public fourthreg: boolean = true;
  /******FOR HIGHLIGHTS THE STEP****** */
  public activeStep1:boolean=true
  public activeStep2:boolean=false
  public activeStep3:boolean=false
  public activeStep4:boolean=false
  /*********** */

  step1Form: FormGroup;
  step1FormErrors: any;
 
  step2Form: FormGroup;
  step2FormErrors: any;

  step3Form: FormGroup;
  step3FormErrors: any;

  step4Form: FormGroup;
  step4FormErrors: any;

  public language:any;
  public selectedLanguage:any=[];
  public selectedEducatiom:any=[];
  public selectedSpeciality:any=[];
  public languageList: any = [];
  public  educationList: any = [];
  public specialityList: any = [];
  public languageOfObjects:any=[];
  public specialityOfObjects:any=[];
  public educationOfObjects:any=[];
  public mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // Phone number validation 
  x: any;
  error: any;

  constructor(private formBuilder: FormBuilder, private docService: DocregistrationService) {
    // private toastr: ToastrService
    /***********STEP 1*************/
    this.step1FormErrors = {
      phoneNumber: {},
      name: {},
      email: {}
    };

    /***********STEP 2*************/

    this.step2FormErrors = {
      city: {},
      language: {},
      dob: {}
    };
    /***********STEP 3*************/
    this.step3FormErrors = {
      education: {},
      speciality: {}
    };
    /***********STEP 4*************/
    this.step4FormErrors = {
      otp: {}
    };
  }

  ngOnInit() {
    /*******STEP 1******** */
    this.step1Form = this.createStep1Form()

    this.step1Form.valueChanges.subscribe(() => {
      this.onStep1FormValuesChanged();
    });
    /*********STEP 2********/
    this.step2Form = this.createStep2Form()

    this.step2Form.valueChanges.subscribe(() => {
      this.onStep2FormValuesChanged();
    });
    /*********STEP 3*******/
    this.step3Form = this.createStep3Form()

    this.step3Form.valueChanges.subscribe(() => {
      this.onStep3FormValuesChanged();
    });
    /*********STEP 4********/
    this.step4Form = this.createStep4Form()

    this.step4Form.valueChanges.subscribe(() => {
      this.onStep4FormValuesChanged();
    });

    this.getLanguageList()
    this.getEducationList()
    this.getSpecialityList()
  }

  /******************************IT CATCHES ALL CHANGES IN STEP FORM 1******************/
  onStep1FormValuesChanged() {
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
  /******************************IT CATCHES ALL CHANGES IN STEP FORM 2******************/
  onStep2FormValuesChanged() {
    for (const field in this.step1FormErrors) {
      if (!this.step2FormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.step2FormErrors[field] = {};
      // Get the control
      const control = this.step2Form.get(field);

      if (control && control.dirty && !control.valid) {
        this.step2FormErrors[field] = control.errors;
      }
    }
  }
  /******************************IT CATCHES ALL CHANGES IN STEP FORM 2******************/
  onStep3FormValuesChanged() {
    for (const field in this.step3FormErrors) {
      if (!this.step3FormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.step3FormErrors[field] = {};
      // Get the control
      const control = this.step3Form.get(field);

      if (control && control.dirty && !control.valid) {
        this.step3FormErrors[field] = control.errors;
      }
    }
  }
  /******************************IT CATCHES ALL CHANGES IN STEP FORM 2******************/
  onStep4FormValuesChanged() {
    for (const field in this.step4FormErrors) {
      if (!this.step4FormErrors.hasOwnProperty(field)) {
        continue;
      }
      // Clear previous errors
      this.step4FormErrors[field] = {};
      // Get the control
      const control = this.step2Form.get(field);

      if (control && control.dirty && !control.valid) {
        this.step4FormErrors[field] = control.errors;
      }
    }
  }
  createStep1Form() {
    return this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  createStep2Form() {
    return this.formBuilder.group({
      dob: ['', Validators.required],
      language: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
  createStep3Form() {
    return this.formBuilder.group({
      speciality: ['', Validators.required],
      education: ['', Validators.required]
    });
  }
  createStep4Form() {
    return this.formBuilder.group({
      otp: ['', Validators.required]

    });
  }
  firststep() {
    if (this.step1Form.valid) {
      console.log(this.step1Form.value)
      this.firstreg = false;
      this.secondreg = true;
      this.thirdreg = false;
/******* FOR STYLING ******/
      this.activeStep1=false;
      this.activeStep2=true;
      this.activeStep3=false;
      this.activeStep4=false;
      /****************** */
    } else {
      this.submitted = true
      this.firstreg = true;
      this.secondreg = false;
      this.thirdreg = false;
/******* FOR STYLING ******/
      this.activeStep1=true;
      this.activeStep2=false;
      this.activeStep3=false;
      this.activeStep4=false
      /****************** */
    }
  }
  secondstep() {
    if (this.step2Form.valid && this.error != 'Invalid DOB') {
      console.log(this.step2Form.value)
      this.submitted = false;
      this.firstreg = false;
      this.secondreg = false;
      this.thirdreg = true;
      /******* FOR STYLING ******/
      this.activeStep1=false;
      this.activeStep2=false;
      this.activeStep3=true;
      this.activeStep4=false
      /****************** */

    } else {
      this.submitted = true
      this.firstreg = false;
      this.secondreg = true;
      this.thirdreg = false;
      /******* FOR STYLING ******/
      this.activeStep1=false;
      this.activeStep2=true;
      this.activeStep3=false;
      this.activeStep4= false
      /****************** */

    }
  }
  previousfirst() {
    this.firstreg = true;
    this.secondreg = false;
    this.thirdreg = false;
      /******* FOR STYLING ******/
      this.activeStep1=true;
      this.activeStep2=false;
      this.activeStep3=false;
      this.activeStep4=false
      /****************** */
  }
  previouslast() {
    this.firstreg = false;
    this.secondreg = true;
    this.thirdreg = false;
    /******* FOR STYLING ******/
    this.activeStep1=false;
    this.activeStep2=true;
    this.activeStep3=false;
    this.activeStep4=false
    /****************** */
  }
  thirdstep() {
    if (this.step3Form.valid) {
      console.log(this.step3Form.value)
      this.submitted = false;
      this.firstreg = false;
      this.secondreg = false;
      this.thirdreg = false;
      this.fourthreg = true
      /******* FOR STYLING ******/
      this.activeStep1=false;
      this.activeStep2=false;
      this.activeStep3=false;
      this.activeStep4=true;
      /****************** */

    } else {
      this.submitted = true
      this.firstreg = false;
      this.secondreg = false;
      this.thirdreg = false;
      this.fourthreg = true
      /******* FOR STYLING ******/
      this.activeStep1=false;
      this.activeStep2=false;
      this.activeStep3=true;
      this.activeStep4=false;
      /****************** */

    }
  }
  previouspagelast() {
    this.firstreg = false;
    this.secondreg = false;
    this.thirdreg = true;
    this.fourthreg = false;
    /******* FOR STYLING ******/
    this.activeStep1=true;
    this.activeStep2=false;
    this.activeStep3=true;
    this.activeStep4=false
    /****************** */
  }
  /********************GET LIST OF LANGUAGE *****************/
  getLanguageList() {
    let data = {
      x: "language"
    }
    this.docService.getLanguageList(data).subscribe(data => {
      let value: any = {}
      value = data
      this.languageList = value.result.result
      console.log(this.languageList)
      for (var i = 0; i < this.languageList.length; i++) {
        var lang = {
          langName: this.languageList[i].Language,
          
        }
        this.languageOfObjects.push(lang);
      }
    },
      err => {
        console.log(err)
      })
  }
  /*************************END************************************ */
    /***********************LANGUAGE ON SELECT IN STEP 2*********/
  onAddLanguage(evt) {
    // console.log(evt);
    this.selectedLanguage.push(evt.value)
    // console.log('selectedLanguage',this.selectedLanguage)
  }
    /***********************EDUCATION ON SELECT IN STEP 3*********/
  onAddEducation(evt) {
    // console.log(evt);
    this.selectedEducatiom.push(evt.value)
    // console.log('selectedLanguage',this.selectedLanguage)
  }
    /***********************SPECIALITY ON SELECT IN STEP 3*********/
  onAddSpeciality(evt) {
    // console.log(evt);
    this.selectedSpeciality.push(evt.value)
    // console.log('selectedSpeciality',this.selectedSpeciality)
   
  }
   
  /********************GET LIST OF Education *****************/
  getEducationList(){
let data={
    y: "education"
}
  this.docService.getEducationList(data).subscribe(data => {
    let value: any = {}
    value = data
    this.educationList = value.result.result
    console.log(this.educationList)
    for (var i = 0; i < this.educationList.length; i++) {
      var edu = {
        educationName: this.educationList[i].Degree,
        
      }
      this.educationOfObjects.push(edu);
    }
  },
    err => {
      console.log(err)
    })
  }
  
 /*************************END************************************ */
  /********************GET LIST OF SPECIALITY *****************/
  getSpecialityList(){

   let data={
    z: "speciality"
  }
  this.docService.getSpecialityList(data).subscribe(data => {
    let value: any = {}
    value = data
    this.specialityList = value.result.result
    console.log(this.specialityList)
    for (var i = 0; i < this.specialityList.length; i++) {
      var spec = {
        specialityName: this.specialityList[i].GeneralSpeciality,
        
      }
      this.specialityOfObjects.push(spec);
    }
  },
    err => {
      console.log(err)
    })
  }//compare dob
compareDob(dob) {
  console.log('dob',dob)
  this.error='';
  var startdat = moment();
  var startdate = moment().subtract(25, "year");
  // console.log(startdat);
  let presentDat: any;
  presentDat = moment(startdate).utcOffset(0);
  // console.log('presentDat',presentDat);
  presentDat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
  presentDat.toISOString()
  presentDat.format("DD-MM-YYYY")
  // console.log('presentDat......',presentDat);
  var enddat = moment();
  var enddat = moment().subtract(100, "year");
  // console.log('enddat....',enddat);
  let Dat: any;
  Dat = moment(enddat).utcOffset(0);
  Dat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 })
  Dat.toISOString()
  Dat.format("DD-MM-YYYY")
  // console.log('Dat..',Dat);
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

/**********************************DOCTOR"S REGISTRATION PART 1 */
 preRgistration(){
   let preRegistrationData={
     phoneNumber:this.step1Form.value.phoneNumber,
     role:'doctor'
   }
   this.docService.preRegistrationApi(preRegistrationData).subscribe(data=>{
     console.log('data',data)
     this.saveRegistrationForm();
   },
   err=>{
     console.log(err)
   })
      
      }
       

/********************************** FINAL DOCTOR"S REGISTRATION *********/
saveRegistrationForm(){
  console.log(this.step4Form.value)
  if(this.step4Form.valid){
    this.compareDob(event);
  let registrationData={
    name:this.step1Form.value.name,
    phoneNumber:this.step1Form.value.phoneNumber,
    otp:parseInt(this.step4Form.value.otp),
    email:this.step1Form.value.email,
    language:this.selectedLanguage,
    city:this.step2Form.value.city,
    dob:(moment(this.step2Form.value.dob).format('DD-MM-YYYY')),
    education:this.selectedEducatiom,
    speciality:this.selectedSpeciality,
    role:'doctor'
  }
  console.log('registrationData',registrationData)
  this.docService.doctorRegistrationApi(registrationData).subscribe(result=>{
    console.log('result',result)
    // this.toastr.success(' Sucessfully Register!', 'Toastr fun!');
  },
  err=>{
    // this.toastr.error('Registration Failed!', 'Server Issue')
  })
}else{
  // this.toastr.error('Registration Failed!', 'Not Valid')
}
      }
}
