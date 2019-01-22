import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { RouterLink, ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {
  public followFormErrors: any;
  public followForm: FormGroup;
  public followinfo: FormArray;
  public days: any = '';
  public hideSave:boolean=true;
  public day: any;
  public week: any;
  public month: any;
  public loader:boolean=false
  public submitted:boolean=false;
  daysTest:number=0; //initally day range zero
  weekTest:number=0; //initally week range zero
  monthTest:number=0; //initally month range zero
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService) {

    this.followFormErrors = {
      day: {},
      referredDoctor: {}
    };


  }

  ngOnInit() {
    // this.followForm = this.createFollowForm();
    this.followForm =this.formBuilder.group({
      followinfo: this.formBuilder.array([ this.createFollowForm() ])
    });
    this.followForm.valueChanges.subscribe(() => {
      this.onFollowFormValuesChanged();
    });

  }


  createFollowForm() {
    return this.formBuilder.group({
      day: this.day,
      referredDoctor: [''],
    });
  }

  onFollowFormValuesChanged() {

    for (const field in this.followFormErrors) {
      if (!this.followFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.followFormErrors[field] = {};

      // Get the control
      const control = this.followForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.followFormErrors[field] = control.errors;
      }
    }
  }
 /**************TO SET  TIME DURATION RANGE FOR MEDICINE*********/
 setDay(event,i) {
  this.days = event.target.value;
  console.log(this.days);
  let x=(<FormArray>this.followForm.controls['followinfo']).controls[i]['controls']['day'].setValue(this.days);
}
  // to set revisit schedule 
  // setDay(event, schedule) {

  //   if (schedule == "days") {
  //     this.day = event.target.value;
  //     this.followForm.controls.day.setValue(this.day)
  //   }
  //   else if (schedule == "Weeks") {
  //     this.week = event.target.value;
  //     this.followForm.controls.week.setValue(this.week);
  //   }
  //   else if (schedule == "Months") {
  //     this.month = event.target.value;
  //     this.followForm.controls.month.setValue(this.month);
  //   }
  //   console.log("event set day", this.day);
  // }



  // create advice presription
  createAdvice() {
    if(this.followForm.valid){
      this.loader = true;
    // let data={
    //   day:this.followForm.value.day,
    //   referredDoctor: this.followForm.value.referredDoctor
    // }
    console.log(this.followForm.value)
    this.sharedService.createFollowUpData(this.followForm.value);
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
else{
  let notifydata = {
    type: 'warning',
    title: 'Not Valid!'
  }
  this.sharedService.createNotification(notifydata);
  this.loader = false;
}
  }

  closeForm() {
    this.followForm.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
    /**************ADD MORE THAN ONE FOLLOW  FORM**********************/
    addFollowForm() {
      console.log("I am executing");
      this.hideSave=true;
     this.followinfo = this.followForm.get('followinfo') as FormArray;
     this.followinfo.push(this.createFollowForm());
   }
   deleteFollowForm(index){
    this.followinfo = this.followForm.get('followinfo') as FormArray;
    this.followinfo.removeAt(index)
    if(this.followinfo.length==0){
      console.log(this.followinfo.length)
      this.hideSave=false;
  
    }
    else{
      this.hideSave=true; 
    }
   }
   
}
