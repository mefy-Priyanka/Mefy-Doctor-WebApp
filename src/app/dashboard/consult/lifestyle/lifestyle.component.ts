import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router, Params } from '@angular/router';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {
  public lifeStyleFormErrors: any;
  public lifeStyleForm: FormGroup;
  public submitted: boolean = false;
  public loader: boolean = false
  public hideCrossIcon: boolean = false;
  public hideSave:boolean=true;
  constructor(private sharedService: SharedService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private ePrescriptionService: DoctorPrescriptionService) {
    this.lifeStyleFormErrors = {
      advice: {}
    };
  }

  ngOnInit() {
    this.lifeStyleForm = this.createLifeStyleForm();
    this.lifeStyleForm.valueChanges.subscribe(() => {
      this.onLifeStyleFormValuesChanged();
    });
    this.addLifeStyleForm() ;
  }

  createLifeStyleForm() {
    return this.formBuilder.group({
      advice: this.formBuilder.array([])
    });
  }

  onLifeStyleFormValuesChanged() {
    for (const field in this.lifeStyleFormErrors) {
      if (!this.lifeStyleFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.lifeStyleFormErrors[field] = {};

      // Get the control
      const control = this.lifeStyleForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.lifeStyleFormErrors[field] = control.errors;
      }
    }
  }


  // close form
  clearData() {

    this.lifeStyleForm.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }

  // save lifestyle form
  createLifeStyle() {
    this.loader = true
    if (this.lifeStyleForm.valid) {
      let data = {
        advice: this.lifeStyleForm.value.advice
      }
      console.log(data)
      this.sharedService.createLifeStyleData(data)
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
    }
    else {
      let notifydata = {
        type: 'warning',
        title: 'Not Valid!'
      }
      this.sharedService.createNotification(notifydata);
      this.loader = false;
    }
  }
  /************************************************ SAVE FORM ON ENTER KEY *********************************************** */
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.createLifeStyle();
    }
  }
 /**************ADD MORE THAN ONE LIFE STYLE  FORM**********************/
 addLifeStyleForm() {
  this.hideSave=true
  let control = <FormArray>this.lifeStyleForm.controls.advice;
  control.push(
    this.formBuilder.group({
      advice: ['', Validators.required],
    })
  )
  console.log(control.length)
  if(control.length>1 && control.length!==1){
    this.hideCrossIcon=true;
  }
  else{
    this.hideCrossIcon=false;
  }
}
 /*****************DELETE INSTRUCTION FORM*************************************/
 deleteLifeStyleForm(index){
  let control = <FormArray>this.lifeStyleForm.controls.advice;
  control.removeAt(index)
  if(control.length==0){
    console.log(control.length)
    this.hideSave=false;
  }
  else{
    this.hideSave=true; 
  }
}



}
