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
  public hideSave:boolean=true;
  public day: any=[];
  public dayarray:any=[]
  public loader:boolean=false
  public submitted:boolean=false;
  daysTest:number=0; //initally day range zero
  
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
      day: ['',Validators.required],
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
  this.day=[];
  this.day[i] = event.target.value;
  this.dayarray[i]=event.target.value;
  console.log(this.day,this.dayarray);
let x = (<FormArray>this.followForm.controls['followinfo']).controls[i]['controls']['day'].setValue(this.day[i]);
console.log(this.followForm.value);

}

  // create advice presription
  createAdvice() {
    if(this.followForm.valid){
      this.loader = true;
    console.log('followForm',this.followForm.value)
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
