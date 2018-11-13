import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit { 
  public submitted:boolean=false
  public firstreg: boolean = true;
  public secondreg: boolean = true;
  public thirdreg: boolean = true;
  public fourthreg: boolean = true;
  step1Form: FormGroup;
  step1FormErrors: any;
  step1FormValue:any;
  step2Form: FormGroup;
  step2FormErrors: any;
  step2FormValue:any;
  step3Form: FormGroup;
  step3FormErrors: any;
  step3FormValue:any;
  step4Form: FormGroup;
  step4FormErrors: any;
  step4FormValue:any;
  constructor(private formBuilder: FormBuilder) {
   /***********STEP 1*************/
    this.step1FormErrors = {
      phoneNumber: {},
      name: {},
      email:{}
    };
   
   /***********STEP 2*************/

   this.step2FormErrors = {
    otp: {},
  };
   /***********STEP 3*************/
   this.step3FormErrors = {
    city: {},
    language: {},
    dob:{}
  };
   /***********STEP 4*************/
   this.step4FormErrors = {
    education: {},
    speciality: {},
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
  }
  firststep(){
    if(this.step1Form.valid){
      console.log(this.step1Form.value)
      this.step1FormValue=this.step1Form.value
      this.firstreg=false;
      this.secondreg=true;
      this.thirdreg=false;
    }else{
      this.submitted=true
      this.firstreg=true;
      this.secondreg=false;
      this.thirdreg=false;
    }
    
  
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
      email:['',[Validators.required,Validators.email]]
    });
  }
  createStep2Form() {
    return this.formBuilder.group({
      otp: ['', Validators.required]
    });
  }
  createStep3Form() {
    return this.formBuilder.group({
      dob: ['', Validators.required],
      language: ['', Validators.required],
      city:['',Validators.required]
    });
  }
  createStep4Form() {
    return this.formBuilder.group({
      speciality: ['', Validators.required],
      education: ['', Validators.required]
    });
  }
  secondstep(){
    if(this.step2Form.valid){
      console.log(this.step2Form.value)
      this.step2FormValue=this.step2Form.value
      this.firstreg=false;
      this.secondreg=false;
      this.thirdreg=true;
    }else{
      this.submitted=true
      this.firstreg=false;
      this.secondreg=true;
      this.thirdreg=false;
       }
 }
   previousfirst(){
    this.firstreg=true;
    this.secondreg=false;
    this.thirdreg=false;
   }
   previouslast(){
    this.firstreg=false;
    this.secondreg=true;
    this.thirdreg=false; 
   }
   thirdstep(){
    if(this.step2Form.valid){
      console.log(this.step2Form.value)
      this.step2FormValue=this.step2Form.value
      this.firstreg=false;
      this.secondreg=false;
      this.thirdreg=false;
      this.fourthreg=true
    }else{
      this.submitted=true
      this.firstreg=false;
      this.secondreg=false;
      this.thirdreg=true;
      this.fourthreg=false
       }
   }
   previouspagelast(){
    this.firstreg=false;
    this.secondreg=false;
    this.thirdreg=true; 
    this.fourthreg=false;
   }
}
