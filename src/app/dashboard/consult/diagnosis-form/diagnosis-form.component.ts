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
  diagnosisFormErrors: any;
  diagnosisFormNew: FormGroup;
  prescriptionId: any;
  provisionalData: any;
  diagnosisFormId: any;
  diagnosisFor: any;
  diagnosisBrief: any;
  prescriptionDetail: any;
  diagnosisArray = [];
  hideDelete: boolean = false;
  message = '';
  constructor(private router: Router, private formBuilder: FormBuilder, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService, private activatedRoute: ActivatedRoute) {
    this.diagnosisFormErrors = {
      diagnosisFor: {}
    };
  }

  ngOnInit() {
    this.diagnosisFormNew = this.creatediagnosisForm();
    this.diagnosisFormNew.valueChanges.subscribe(() => {
      this.onDiagnosisFormValuesChanged();
    });

  }

  creatediagnosisForm() {
    return this.formBuilder.group({
      diagnosisFor: ['', Validators.required],
      diagnosisBrief: ['', Validators],
    });
  }
  onDiagnosisFormValuesChanged() {
    this.message = "";
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
    this.message = '';
    // if (this.diagnosisFormId) {
    // }
    // else {
    if (this.diagnosisFormNew.valid) {
      let diagnosisdata = {
        diagnosisFor: this.diagnosisFormNew.value.diagnosisFor,
        diagnosisBrief:this.diagnosisFormNew.value.diagnosisBrief
      }
      console.log("diagnosisFor",this.diagnosisFormNew.value.diagnosisFor)
      console.log("diagnosisBrief",this.diagnosisFormNew.value.diagnosisBrief)
      this.sharedService.createDiagnosis(diagnosisdata);
    }
    else {
      this.message = "Please Enter Credentials";
    }
    // }

  }

  // Close Diagnosis Form
  closeForm() {
    this.diagnosisFormNew.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
}
