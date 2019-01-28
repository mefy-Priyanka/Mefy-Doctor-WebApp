import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { PrescriptionService } from '../../../mefyservice/prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { RouterLink, ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  public medicineForm: FormGroup;
  medinfo: FormArray;
  public medicineFormErrors: any;
  medicineArray: any = [];
  public allmedicineName: any = [];
  public selectedMedicine: any = []

  public hideSave: boolean = true;
  public loader: boolean = true
  public submitted: boolean = false;
  public noStateResult = false;
  public days: any = [];
  public dayarray:any=[];
  public frequency: any = [];
  public frequencyarray: any = [];
  public frequencyTest: number = 0; //initally frequency range zero
  public daysTest: number = 0; //initally day range zero
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/]
  public dosages = ['50', '100', '250', '500'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private PrescriptionService: PrescriptionService, private formBuilder: FormBuilder, private sharedService: SharedService) {
    this.medicineFormErrors = {
      medicineName: {},
      dosage: {},
      frequency: {},
      days: {}
      // instructions: {}
    };

  }
  ngOnInit() {
    this.getMedicineName();
    this.medicineForm = this.formBuilder.group({
      medinfo: this.formBuilder.array([this.createmedicineForm()])
    });
    //  this.createmedicineForm();
    this.medicineForm.valueChanges.subscribe(() => {
      this.onMedicineFormValuesChanged();
    });

  }



  createmedicineForm() {
    return this.formBuilder.group({
      medicineName: ['',Validators.required],
      dosage: ['',Validators.required],
      days: ['',Validators.required],
      instructions: [''],
      frequency: ['',Validators.required]
    });
  }

  onMedicineFormValuesChanged() {

    for (const field in this.medicineFormErrors) {
      if (!this.medicineFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.medicineFormErrors[field] = {};

      // Get the control
      const control = this.medicineForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.medicineFormErrors[field] = control.errors;
      }
    }
  }

  /*****************************GET MEDICINE NAME********************/
  getMedicineName() {
    this.PrescriptionService.getmedicineList("medicine").subscribe(data => {
      let value: any = {}
      this.loader = false
      value = data
      this.allmedicineName = value.result.result
      console.log(this.allmedicineName)
    },
      err => {
        console.log(err)
      })
  }
  /**************IF RESULT IS NOT FOUND THEN SHOW MESSAGE */
  typeaheadNoMedicineResults(event: boolean): void {
    this.noStateResult = event
  }
  /***********************MEDICINE ON SELECT*********/
  onSelectedMedicine(evt) {
    console.log(evt.value);
    this.selectedMedicine.push(evt.value)
  }
  /**************TO SET  TIME DURATION RANGE FOR MEDICINE*********/
  setDay(event, i) {
    this.days=[];
    this.days[i] = event.target.value;
    this.dayarray[i]=event.target.value;
    console.log(this.days,this.dayarray);
    let x = (<FormArray>this.medicineForm.controls['medinfo']).controls[i]['controls']['days'].setValue(this.days[i]);
    // console.log((<FormArray>this.medicineForm.controls['medinfo']).controls[i]['controls']['days']);
    console.log(this.medicineForm.controls);
  }
  /******************TO SET FREQUENCY RANGE FOR  MEDICINE *********************/
  setFrequency(event, i) {
    this.frequency = [];
    // debugger;

    // console.log(this.frequency);
    // console.log(this.frequencyarray);
    this.frequency[i] = event.target.value;
    this.frequencyarray[i] = event.target.value;
    // console.log(this.frequency, this.frequencyarray);
    let y = (<FormArray>this.medicineForm.controls['medinfo']).controls[i]['controls']['frequency'].setValue(this.frequency[i]);
    console.log(this.medicineForm.controls)
    // console.log(this.frequency);
  }
  /******************TO SET DOSAGE  FOR  MEDICINE *********************/
  selectDosage(dosage, i) {
    console.log('dosage', dosage)
    let z = (<FormArray>this.medicineForm.controls['medinfo']).controls[i]['controls']['dosage'].setValue(dosage);
  }

  /************ CREATEMEDICINE PRESCRIPTION*************/
  createMedicine() {
    if (this.medicineForm.valid) {
      this.loader = false;
      console.log('medicine form', this.medicineForm.value)
      this.sharedService.createMedicineData(this.medicineForm.value);
      this.medicineForm.reset();
      this.reset();
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

  /**************ADD MORE THAN ONE MEDICINE  FORM**********************/
  addMedicineForm() {
    console.log('medicine form', this.medicineForm.value)
    this.hideSave = true;
    // this.medicineForm.reset();
    // this.reset();
    // this.frequency = '';
    console.log((<FormArray>this.medicineForm.controls['medinfo']))
    this.medinfo = this.medicineForm.get('medinfo') as FormArray;
    console.log('medinfo', this.medinfo)
    this.frequency = '';
    this.days = ''
    this.medinfo.push(this.createmedicineForm());
    console.log('medinfopush', this.medinfo)
  }
  /*****************DELETE MEDICINE FORM*************************************/
  deleteMedicineForm(index) {
    this.medinfo = this.medicineForm.get('medinfo') as FormArray;
    this.medinfo.removeAt(index)
    if (this.medinfo.length == 0) {
      console.log(this.medinfo.length)
      this.hideSave = false;
    }
    else {
      this.hideSave = true;
    }
  }
  // close Instruction form on close button
  closeForm() {
    this.medicineForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
  reset() {
    this.daysTest = 0;
    this.frequencyTest = 0;

  }
}