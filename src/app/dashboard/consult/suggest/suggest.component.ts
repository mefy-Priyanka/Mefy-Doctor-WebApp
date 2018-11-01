import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../meme-services/socket.service';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../meme-services/shared.service';
import { RouterLink, ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  hideSaveButton: boolean;
  messageTest: string;
  submitted: boolean;
  tests: any;
  testTypes = ['Radiology', 'Imaging', 'Clinical', 'UltraSound', 'Laboratory'];
  suggestForm: FormGroup;
  recommendedForm: any = [];
  suggestFormErrors: any;
  prescriptionId: any;
  testDetails: boolean = false;
  hideTestRecommended: boolean = false; //hide test recommended form
  hideAddbutton: boolean = false;
  suggestId: any;
  suggestData: any;
  messageSuggest = '';
  update: boolean = true;
  hideDelete:boolean = false;
  constructor(private router: Router, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService, private socketService: SocketService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.suggestFormErrors = {
      categoryType: {},
      testName: {},
      testDescription: {}
    };
  }

  ngOnInit() {
    this.suggestForm = this.createSuggestForm();
    this.suggestForm.valueChanges.subscribe(() => {
      this.onSuggestFormValuesChanged();
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params)
      if (Object.keys(params).length != 0) {
        this.suggestId = params['id'];
        this.update = false;
        this.hideDelete = true;
        this.suggestDetail(this.suggestId)
      }

    });
    this.prescriptionId = localStorage.getItem('prescriptionId');

  }

  onSuggestFormValuesChanged() {
    this.messageTest = "";
    for (const field in this.suggestFormErrors) {
      if (!this.suggestFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.suggestFormErrors[field] = {};

      // Get the control
      const control = this.suggestForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.suggestFormErrors[field] = control.errors;
      }
    }
  }

  createSuggestForm() {
    return this.formBuilder.group({
      categoryType: this.tests,
      testName: ['', Validators.required],
      testDescription: ['', Validators],
    });
  }

  // create recommended test
  createSuggestTest() {
    this.suggestForm.controls.categoryType.setValue(this.tests);
    if(this.suggestForm.valid && this.tests.length != 0 && this.tests!='null'){
    if (this.suggestId) {
      this.updateSuggestDetail();
    }
    else {
        this.ePrescriptionService.createRecommendedTest( this.suggestForm.value,this.prescriptionId).subscribe(result => {
          console.log(result);
          this.sharedService.prescriptionInfo(true);
          this.suggestForm.reset();
          this.hideTestRecommended = false;
          this.hideSaveButton = false;
          let notifydata = {
            type: 'success',
            title: 'Suggest',
            msg: 'Created Succesfully'
          }
          this.sharedService.createNotification(notifydata);
          this.router.navigate(['/dashboard/consultnew/diagnosis']);
            this.suggestForm.reset()
            this.tests='';
          
        },
          err => {
          });
        }
      }
      else {
        this.messageTest = "Please Enter Credentials";
      }
  }
  // at save+ add extra suggestion 
  saveSuggestForm() {
    if(this.suggestForm.valid && this.tests.length != 0 && this.tests!='null'){
          this.ePrescriptionService.createRecommendedTest( this.suggestForm.value,this.prescriptionId).subscribe(result => {
            console.log(result);
            this.sharedService.prescriptionInfo(true);
            this.suggestForm.reset();
            this.hideTestRecommended = true;
            this.hideSaveButton = false;
            let notifydata = {
              type: 'success',
              title: 'Suggest',
              msg: 'Created Succesfully'
            }
            this.sharedService.createNotification(notifydata);
            this.suggestForm.reset()
            this.tests='';
          },
            err => {
            });
        }
        else {
          this.messageTest = "Please Enter Credentials";
          console.log('enter the credentials');
        }
  }

  // get single suggest detail
  suggestDetail(id) {
    this.ePrescriptionService.getSingleSuggest(id).subscribe(data => {
      console.log('suggest', data);
      this.suggestData = data.result;
      console.log(this.suggestData);
      this.hideTestRecommended = true;
      this.tests = this.suggestData.categoryType;
      this.suggestForm.controls.categoryType.setValue(this.suggestData.categoryType);
      this.suggestForm.controls.testName.setValue(this.suggestData.testName);
      this.suggestForm.controls.testDescription.setValue(this.suggestData.testDescription);
      console.log(this.suggestForm.value)

    },
      err => {

      })
  }

  // update suggest form
  updateSuggestDetail() {
    let data = {
      categoryType: this.suggestForm.value.categoryType,
      testName: this.suggestForm.value.testName,
      testDescription: this.suggestForm.value.testDescription,
      recommendedId: this.suggestId
    }
    this.ePrescriptionService.updateSuggest(data).subscribe(data => {
      console.log(data)
      let notifydata = {
        type: 'success',
        title: 'Suggest',
        msg: 'Updated Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
      this.tests='';
    },
      err => {

      })
  }

  // select data from dropdown
  testRecommend(value: string) {
    this.tests = value;
    this.suggestForm.controls.categoryType.setValue(this.tests)
    this.hideTestRecommended = true;
    this.hideAddbutton = true;
  }

   // close suggest form on close button
 closeForm() {
  this.suggestForm.reset()
  this.router.navigate(['/dashboard/consultnew/diagnosis']);

}

 // delete  selected recommended form
 deleteSuggestForm() {
  this.ePrescriptionService.deleteSuggest(this.prescriptionId  ,this.suggestId ).subscribe(data => {
    console.log(data);
      let notifydata = {
                type: 'success',
                title: 'Suggest',
                msg: 'Deleted Succesfully'
              }
              this.sharedService.createNotification(notifydata);
              this.router.navigate(['/dashboard/consultnew/diagnosis']);

  },err=>{

  })
}
}
