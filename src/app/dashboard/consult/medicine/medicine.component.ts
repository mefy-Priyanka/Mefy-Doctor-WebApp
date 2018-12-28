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
  public medicineFormErrors: any;
  medicineArray: any = [];
  public allmedicineName:any=[];
  public medicineOfObjects:any=[];
  public selectedMedicine:any=[]
  public loader:boolean=true
  public submitted:boolean=false;
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
    this.medicineForm = this.createmedicineForm();
    this.medicineForm.valueChanges.subscribe(() => {
      this.onMedicineFormValuesChanged();
    });

  }

  

  createmedicineForm() {
    return this.formBuilder.group({
      medicineName: ['', Validators.required],
      dosage: ['', Validators.required],
      // frequency: this.frequency,
      days: this.days,
      instructions: ['', Validators],
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
    for (var i = 0; i < this.allmedicineName.length; i++) {
      var spec = {
        mediName: this.allmedicineName[i].PrescribingInformation,
      }
      this.medicineOfObjects.push(spec);
    }
  },
    err => {
      console.log(err)
    })
}
/***********************MEDICINE ON SELECT*********/
onAddMedicine(evt) {
  console.log(evt);
  this.selectedMedicine.push(evt.value)
}
 /**************TO SET  TIME DURATION RANGE FOR MEDICINE*********/
 setDay(event) {
  this.days = event.target.value;
  console.log(this.days);
  this.medicineForm.controls.days.setValue(this.days)
}
  /************ CREATEMEDICINE PRESCRIPTION*************/
  createMedicine() {
    if(this.medicineForm.valid){
      this.loader = false;
    let data={
      medicineName:this.selectedMedicine,
      dosage: this.medicineForm.value.dosage,
      days: this.medicineForm.value.days,
      instructions: this.medicineForm.value.instructions
    }
    console.log(data)
    this.sharedService.createMedicineData(data);
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