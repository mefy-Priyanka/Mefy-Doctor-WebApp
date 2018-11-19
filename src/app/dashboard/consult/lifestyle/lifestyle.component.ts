import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  lifeStyleFormErrors: any;
  lifeStyleForm: FormGroup;
  lifeStyleArray: any = [];
  close: boolean = false;
  prescriptionId: any;
  messageLifeStyle: any;
  message: any;
  lifestyleId: any;
  lifestyleDetails: any;
  hideSavePlus: boolean = true;
  hideDelete: boolean = false;
  constructor(private SharedService: SharedService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private ePrescriptionService: DoctorPrescriptionService) {

    this.lifeStyleFormErrors = {
      advice: {}
    };

    this.prescriptionId = localStorage.getItem('prescriptionId');

    // get lifestyle id from path
    this.activatedRoute.params.subscribe((params: Params) => {
      if (Object.keys(params).length != 0) {
        this.lifestyleId = params['id'];
        console.log(this.lifestyleId); // get url id
        this.hideSavePlus = false;
        this.hideDelete = true;
        this.getLifestyleById(this.lifestyleId);
      }
    });
  }

  ngOnInit() {
    this.lifeStyleForm = this.createLifeStyleForm();
    this.lifeStyleForm.valueChanges.subscribe(() => {
      this.onLifeStyleFormValuesChanged();
    });
  }

  createLifeStyleForm() {
    return this.formBuilder.group({
      advice: ['', Validators.required],
    });
  }

  onLifeStyleFormValuesChanged() {
    this.messageLifeStyle = "";
    this.message = "";
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

  // add input
  savePlusInstructions() {
    if (this.lifeStyleForm.valid) {
      this.ePrescriptionService.createLifeStyleInstruction(this.prescriptionId, this.lifeStyleForm.value).subscribe(result => {
        console.log(result);
        this.lifeStyleForm.reset();
        let notifydata = {
          type: 'success',
          title: 'LifeStyle',
          msg: 'Created Succesfully !'
        }
        this.SharedService.createNotification(notifydata);
        this.lifeStyleForm.reset();
      },
        err => {
        })
    }
    else {
      this.messageLifeStyle = "Please Enter Credentials";
    }
  }

  // close form
  clearData() {
    this.close = true;
    this.lifeStyleForm.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }

  // save lifestyle form
  createLifeStyle() {
    if (this.lifestyleId) {
      this.updateLifeStyle()
    }
    else {
      if (this.lifeStyleForm.valid) {
        this.ePrescriptionService.createLifeStyleInstruction(this.prescriptionId, this.lifeStyleForm.value).subscribe(result => {
          console.log(result);
          this.lifeStyleForm.reset();
          let notifydata = {
            type: 'success',
            title: 'LifeStyle',
            msg: 'Created Succesfully !'
          }
          this.SharedService.createNotification(notifydata);
          this.router.navigate(['/dashboard/consultnew/diagnosis']);
          // this.getEprescription(this.prescriptionId);
        },
          err => {
          })
      }
      else {
        this.messageLifeStyle = "Please Enter Credentials";
      }
    }


  }

  //get lifestyle detail by id
  getLifestyleById(id) {
    this.ePrescriptionService.getLifeStyleDetails(this.lifestyleId).subscribe(result => {
      console.log(result);
      this.lifestyleDetails = result.result;
      this.lifeStyleForm.controls.advice.setValue(this.lifestyleDetails.advice);
    },
      err => {
      })
  }

  //update lifestyle
  updateLifeStyle() {
    if (this.lifeStyleForm.valid) {
      let data = {
        lifeStyleId: this.lifestyleId,
        advice: this.lifeStyleForm.controls.advice.value
      }
      this.ePrescriptionService.updateLifeStyleDetails(data).subscribe(result => {
        console.log(result);
        let notifydata = {
          type: 'success',
          title: 'LifeStyle',
          msg: 'Updated Succesfully !'
        }
        this.SharedService.createNotification(notifydata);
        this.lifeStyleForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
      }, err => {

      })
    }
  }


  // delete  selected lifestyle form
  deleteLifestyleForm() {
    this.ePrescriptionService.deleteLifestyle(this.prescriptionId, this.lifestyleId).subscribe(data => {
      console.log(data);
      let notifydata = {
        type: 'success',
        title: 'LifeStyle',
        msg: 'Deleted Succesfully'
      }
      this.SharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);

    }, err => {

    })
  }
}
