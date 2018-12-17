import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../meme-services/socket.service';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
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
  hideDelete: boolean = false;
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
    if (this.suggestForm.valid && this.tests.length != 0 && this.tests != 'null') {
      let recomendedtest = {
        testName: this.suggestForm.value.testName,
        testDescription: this.suggestForm.value.testName
      }
      console.log("testName", this.suggestForm.value.testName)
      console.log("testDescription", this.suggestForm.value.testName)
      this.sharedService.createTest(recomendedtest);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
    }
    else {
      this.messageTest = "Please Enter Credentials";
    }
  }

  // select data from dropdown
  testRecommend(value: string) {
    this.tests = value;
    this.suggestForm.controls.categoryType.setValue(this.tests)
    this.hideTestRecommended = true;
    // this.hideAddbutton = true;
  }

  // close suggest form on close button
  closeForm() {
    this.suggestForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }
}
