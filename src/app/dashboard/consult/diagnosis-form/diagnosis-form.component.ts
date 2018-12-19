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
    this.loader = true;
    if (this.diagnosisFormNew.valid) {
      let diagnosisdata = {
        diagnosisFor: this.diagnosisFormNew.value.diagnosisFor,
        diagnosisBrief: this.diagnosisFormNew.value.diagnosisBrief
      }
      console.log("diagnosis", diagnosisdata)
      this.sharedService.createDiagnosis(diagnosisdata);
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

  // Close Diagnosis Form
  closeForm() {
    this.diagnosisFormNew.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
}
