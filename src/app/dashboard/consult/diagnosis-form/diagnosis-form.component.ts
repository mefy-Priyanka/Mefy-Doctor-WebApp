import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
// import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../meme-services/shared.service';
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
  // messageDiagnosis: any ='';
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
    this.prescriptionId = localStorage.getItem('prescriptionId');
  }

  ngOnInit() {
    this.diagnosisFormNew = this.creatediagnosisForm();
    this.diagnosisFormNew.valueChanges.subscribe(() => {
      this.onDiagnosisFormValuesChanged();
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      if (Object.keys(params).length != 0) {
        this.diagnosisFormId = params['id'];
        this.getDiagnosisValue(this.diagnosisFormId);
        this.hideDelete = true;

      }
    });

  }

  creatediagnosisForm() {
    return this.formBuilder.group({
      diagnosisFor: ['', Validators.required],
      diagnosisBrief: ['', Validators],
      // prescriptionId: this.prescriptionId
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




  // savePlus() {
  //   this.message='';
  //   this.messageDiagnosis = '';
  //   if (this.diagnosisFormNew.valid) {
  //     this.ePrescriptionService.createDiagnosis(this.prescriptionId, this.diagnosisFormNew.value).subscribe(result => {
  //       console.log(result);
  //       let notifydata = {
  //         type: 'success',
  //         title: 'Diagnosis',
  //         msg: 'Created Succesfully !'
  //       }
  //       this.sharedService.createNotification(notifydata);
  //       this.diagnosisFormNew.reset();
  //     }, err => {

  //     })


  //   }
  //   else {
  //     this.messageDiagnosis = "Please Enter Credentials";
  //   }
  // }

  //create diagnosis prescription
  saveDiagnosis() {
    this.message = '';
    // this.messageDiagnosis = '';
    if (this.diagnosisFormId) {
      this.updateDiagnosis();
    }
    else {
      if (this.diagnosisFormNew.valid) {
        this.ePrescriptionService.createDiagnosis(this.prescriptionId, this.diagnosisFormNew.value).subscribe(result => {
          console.log(result);
          let notifydata = {
            type: 'success',
            title: 'Diagnosis',
            msg: 'Created Succesfully !'
          }
          this.sharedService.createNotification(notifydata);
          this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, err => {

        })
      }
      else {
        this.message = "Please Enter Credentials";
      }
    }

  }

  closeForm() {
    this.diagnosisFormNew.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }

  // get diagnosisdata by id
  getDiagnosisValue(id) {
    this.ePrescriptionService.getDiagnosisById(id).subscribe(result => {
      console.log(result);
      this.prescriptionDetail = result.result;
      this.diagnosisFormNew.controls.diagnosisFor.setValue(this.prescriptionDetail.diagnosisFor);
      this.diagnosisFormNew.controls.diagnosisBrief.setValue(this.prescriptionDetail.diagnosisBrief);
    },
      err => {
      })
  }

  //update diagnosis details
  updateDiagnosis() {
    if (this.diagnosisFormNew.valid) {
      let data = {
        diagnosisId: this.diagnosisFormId,
        diagnosisFor: this.diagnosisFormNew.value.diagnosisFor,
        diagnosisBrief: this.diagnosisFormNew.value.diagnosisBrief
      }
      this.ePrescriptionService.updateDiagnosisDetail(data).subscribe(result => {
        console.log(result);
        let notifydata = {
          type: 'success',
          title: 'Diagnosis',
          msg: 'Updated Succesfully !'
        }
        this.sharedService.createNotification(notifydata);
        this.diagnosisFormNew.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
      },
        err => {
        })
    }
  }

  // delete  selected diagnosis form
  deleteDiagnosisForm() {
    this.ePrescriptionService.deleteDiagnosis(this.prescriptionId, this.diagnosisFormId).subscribe(data => {
      console.log(data);
      let notifydata = {
        type: 'success',
        title: 'Diagnosis',
        msg: 'Deleted Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);

    }, err => {

    })
  }
}
