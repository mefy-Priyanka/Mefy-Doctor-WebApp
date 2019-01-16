import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myInput')
  myInputVariable: any;
  @ViewChild('myOutput')
  myOutputVariable: any;
  public medicineForm: FormGroup;
  medinfo: FormArray;
  public medicineFormErrors: any;
  medicineArray: any = [];
  public allmedicineName:any=[];
  public selectedMedicine:any=[]

  public hideSave:boolean=true;
  public loader:boolean=true
  public submitted:boolean=false;
  public noStateResult = false;
 

  public days: any = '';
  public frequencyTest:number=0; //initally frequency range zero
  public daysTest:number=0; //initally day range zero
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private PrescriptionService:PrescriptionService, private formBuilder: FormBuilder, private sharedService: SharedService) {
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
    this.medicineForm =this.formBuilder.group({
      medinfo: this.formBuilder.array([ this.createmedicineForm() ])
    });
    //  this.createmedicineForm();
    this.medicineForm.valueChanges.subscribe(() => {
      this.onMedicineFormValuesChanged();
    });

  }

  

  createmedicineForm() {
    return this.formBuilder.group({
      medicineName: [''],
      dosage: [''],
      days: this.days,
      instructions: [''],
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
  getMedicineName(){
  this.PrescriptionService.getmedicineList("medicine").subscribe(data => {
    let value: any = {}
    this.loader=false
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
 setDay(event,i) {
  this.days = event.target.value;
  console.log(this.days);
  // this.medicineForm.controls.days.setValue(this.days)
  let x=(<FormArray>this.medicineForm.controls['medinfo']).controls[i]['controls']['days'].setValue(this.days);
 console.log((<FormArray>this.medicineForm.controls['medinfo']).controls[0]['controls']['days']);
 console.log(this.medicineForm.controls['medinfo'].value[0]['days'])
}
  /************ CREATEMEDICINE PRESCRIPTION*************/
  createMedicine() {
    if(this.medicineForm.valid){
      this.loader = false;
    // let data={
    //   medicineName:this.selectedMedicine,
    //   dosage: this.medicineForm.value.dosage,
    //   days: this.medicineForm.value.days,
    //   instructions: this.medicineForm.value.instructions
    // }
    // console.log(data)
    console.log('medicine form',this.medicineForm.value)
    this.sharedService.createMedicineData(this.medicineForm.value);
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }
else{
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
    console.log("I am executing");
    this.hideSave=true;
   this.medinfo = this.medicineForm.get('medinfo') as FormArray;
   this.medinfo.push(this.createmedicineForm());
 }
/*****************DELETE MEDICINE FORM*************************************/
deleteMedicineForm(index){
  this.medinfo = this.medicineForm.get('medinfo') as FormArray;
  this.medinfo.removeAt(index)
  if(this.medinfo.length==0){
    console.log(this.medinfo.length)
    this.hideSave=false;

  }
  else{
    this.hideSave=true; 
  }
}
  // close Instruction form on close button
  closeForm() {
    this.medicineForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }
  reset() {
    this.myInputVariable.nativeElement.value = "";
    this.myOutputVariable.nativeElement.value = "";
    this.daysTest=0;
    this.frequencyTest=0;

  }
}