import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { SharedService } from '../../../mefyservice/shared.service';
import {  Router, Params } from '@angular/router';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.css']
})
export class SuggestComponent implements OnInit {
  public suggestForm: FormGroup;
  public suggestFormErrors: any;
  public suggestInfo: FormArray;

  public recommendedForm: any = [];
  public testArray: any = [];
  public tests: any=[];
  public messageTest: string;
  public addFormButton:boolean=false;
  public hideTestRecommended: boolean = false; //hide test recommended form
  public testTypes = ['Radiology', 'Imaging', 'Clinical', 'UltraSound', 'Laboratory'];

  constructor(private router: Router, private sharedService: SharedService, private formBuilder: FormBuilder) {
    this.suggestFormErrors = {
      categoryType: {},
      testName: {},
      testDescription: {}
    };
  }

  ngOnInit() {
    // this.suggestForm = this.createSuggestForm();
    /************FORM ARRAY********************* */
    this.suggestForm =this.formBuilder.group({
      suggestInfo: this.formBuilder.array([ this.createSuggestForm() ])
    });
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

   /****************** select data from dropdown***********************/
   testRecommend(value: string,i) {
    this.tests = [];
    // debugger;

    console.log(this.tests);
    console.log(this.testArray);
    this.tests[i] = value;
    this.testArray[i] =value;
    // this.tests = value;
    console.log(this.testArray)
    console.log('rrtttt',this.testTypes)
    let y=(<FormArray>this.suggestForm.controls['suggestInfo']).controls[i]['controls']['categoryType'].setValue(this.tests);
    console.log((<FormArray>this.suggestForm.controls['suggestInfo']).controls[i]['controls']['categoryType']);
    this.hideTestRecommended = true;

  }
  /********************************** create recommended test**************/
  createSuggestTest() {
    this.suggestForm.controls.categoryType.setValue(this.tests);
    if (this.suggestForm.valid && this.tests.length != 0 && this.tests != 'null') {
      this.sharedService.createTest(this.suggestForm.value);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
    }
    else {
      let notifydata = {
        type: 'warning',
        title: 'Not Valid!'
      }
      this.sharedService.createNotification(notifydata);
    }
  }
    /**************ADD MORE THAN ONE MEDICINE  FORM**********************/
    addSuggestForm(i) {
        this.suggestInfo = this.suggestForm.get('suggestInfo') as FormArray;
        console.log('suggestInfo',this.suggestInfo)  
        this.suggestInfo.push(this.createSuggestForm());
        console.log('suggestInfo',this.suggestInfo)
   }
/*****************DELETE MEDICINE FORM*************************************/
deleteMedicineForm(index){
  this.suggestInfo = this.suggestForm.get('suggestInfo') as FormArray;
  this.suggestInfo.removeAt(index)
  if(this.suggestInfo.length==0){
    console.log(this.suggestInfo.length)
    // this.hideSave=false;
  }
  else{
    // this.hideSave=true; 
  }
}
  // close suggest form on close button
  closeForm() {
    this.suggestForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }
}
