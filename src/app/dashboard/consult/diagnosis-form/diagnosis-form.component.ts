import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-diagnosis-form',
  templateUrl: './diagnosis-form.component.html',
  styleUrls: ['./diagnosis-form.component.css']
})
export class DiagnosisFormComponent implements OnInit {
  public diagnosisFormErrors: any;
  public diagnosisFormNew: FormGroup;
  public loader: boolean = false
  public submitted: boolean = false;
  diaginfo: FormArray;
  public hideSave:boolean=true;
  constructor(private router: Router, private formBuilder: FormBuilder, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.diagnosisFormErrors = {
      diagnosisFor: {}
    };
  }

  ngOnInit() {
    this.diagnosisFormNew = this.formBuilder.group({
      diaginfo: this.formBuilder.array([ this.creatediagnosisForm() ])
    });
    this.diagnosisFormNew.valueChanges.subscribe(() => {
      this.onDiagnosisFormValuesChanged();
    });
  }
  creatediagnosisForm() {
    return this.formBuilder.group({
      diagnosisFor: ['',Validators.required],
      diagnosisBrief: [''],
    });
  }
  onDiagnosisFormValuesChanged() {

    for (const field in this.diagnosisFormErrors) {
      if (!this.diagnosisFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.diagnosisFormErrors[field] = {};

      // Get the control
      const control = this.diagnosisFormNew.get(field);

      if (control && control.dirty && !control.valid) {
        this.diagnosisFormErrors[field] = control.errors;
      }
    }
  }

  //create diagnosis prescription
  saveDiagnosis() {
    console.log(this.diagnosisFormNew)
    this.loader = true;
    if (this.diagnosisFormNew.valid) {
      // let diagnosisdata = {
      //   diagnosisFor: this.diagnosisFormNew.value.diagnosisFor,
      //   diagnosisBrief: this.diagnosisFormNew.value.diagnosisBrief
      // }
      console.log("diagnosis", this.diagnosisFormNew.value)
      this.sharedService.createDiagnosis(this.diagnosisFormNew.value);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
    }
    else {
      let notifydata = {
        type: 'warning',
        title: 'Not Valid!'
      }
      this.sharedService.createNotification(notifydata);
      this.submitted = true;
      this.loader = false;
    }


  }
 /**************ADD MORE THAN ONE DIAGNOSIS  FORM**********************/
 addDiagnosisForm() {
   console.log("I am executing");
   this.hideSave=true;
  this.diaginfo = this.diagnosisFormNew.get('diaginfo') as FormArray;
  this.diaginfo.push(this.creatediagnosisForm());
}
// Delete Diagnosis form

  // Close Diagnosis Form
  closeForm() {
    this.diagnosisFormNew.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
/*****************DELETE INSTRUCTION FORM*************************************/
deleteDiagForm(index){
  this.diaginfo = this.diagnosisFormNew.get('diaginfo') as FormArray;
  this.diaginfo.removeAt(index)
  if(this.diaginfo.length==0){
    console.log(this.diaginfo.length)
    this.hideSave=false;

  }
  else{
    this.hideSave=true; 
  }
}
}