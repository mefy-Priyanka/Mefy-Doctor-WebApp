import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { CompleterService, CompleterData } from 'ng2-completer';
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
  medicineForm: FormGroup;
  medicineFormErrors: any;
  medicineArray: any = [];
  frequency: any = '';
  days: any = '';
  messageMedicine: any = '';
  medicine: boolean = false;
  prescriptionId: any;
  medicineList: any;
  public medicineService: CompleterData;
  closeMedicine: boolean = true;
  medicineId: any;
  medicineData: any;
  updatedValue: any;
  update: boolean = true;
  hideDelete: boolean = false
  saveMedicine: any = '';
  frequencyTest:number=0; //initally frequency range zero
  daysTest:number=0; //initally day range zero
  
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ePrescriptionService: DoctorPrescriptionService, private formBuilder: FormBuilder, private completerService: CompleterService, private sharedService: SharedService) {
    this.medicineFormErrors = {
      medicineName: {},
      dosage: {},
      frequency: {},
      days: {}
      // instructions: {}
    };


    this.prescriptionId = localStorage.getItem('prescriptionId');

  }
  ngOnInit() {
    this.medicineForm = this.createmedicineForm();
    this.medicineForm.valueChanges.subscribe(() => {
      this.onMedicineFormValuesChanged();
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params)
      if (Object.keys(params).length != 0) {
        this.medicineId = params['id'];
        this.update = false;
        this.hideDelete = true;
        this.medicineDetail(this.medicineId)
      }

    });

    // this.getMedicineList();

  }

  // save medicine and stay in same page
  saveMedicineArray() {
    this.messageMedicine = '';
    this.saveMedicine = '';
    if (this.medicineForm.valid && this.frequency != "" && this.days != "") {
      this.ePrescriptionService.createMedicine(this.prescriptionId, this.medicineForm.value).subscribe(result => {
        console.log(result);
        this.reset();
        this.medicine = true;
        this.medicineForm.reset();
        this.days = '';
        this.frequency = '';
        this.sharedService.prescriptionInfo(true)
        let notifydata = {
          type: 'success',
          title: 'medicine',
          msg: 'Created Succesfully'
        }
        this.sharedService.createNotification(notifydata);
      },
        err => {
        });
    }
    else {
      this.messageMedicine = "Please Enter Credentials";

    }
  }

  createmedicineForm() {
    return this.formBuilder.group({
      medicineName: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: this.frequency,
      days: this.days,
      instructions: ['', Validators],
    });
  }

  onMedicineFormValuesChanged() {
    this.messageMedicine = "";
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

  // create medicine presription
  createMedicine() {
    this.messageMedicine = '';
    this.saveMedicine = '';
    if (this.medicineForm.valid) {
      if (this.medicineId) {
        this.updateMedicineDetail();
      }
      else {
        // if (this.medicineForm.valid){
        this.ePrescriptionService.createMedicine(this.prescriptionId, this.medicineForm.value).subscribe(result => {
          console.log(result);
          this.medicine = true;
          this.medicineForm.reset();
          this.frequency = '';
          this.days = '';
          this.sharedService.prescriptionInfo(true)
          let notifydata = {
            type: 'success',
            title: 'Medicine',
            msg: 'Created Succesfully'
          }
          this.sharedService.createNotification(notifydata);
          this.router.navigate(['/dashboard/consultnew/diagnosis']);
        },
          err => {
          });
      }
    }
    else {
      this.messageMedicine = "Please Enter Credentials ";
    }

  }


  // get medicine through prescription id
  getMedicine() {
    this.ePrescriptionService.getMedicine(this.prescriptionId)
      .subscribe(result => {
        console.log(result);
      }, err => {

      });

  }

  // get medicine list
  getMedicineList(value) {
    this.ePrescriptionService.getMedicineList(value).subscribe(data => {
      console.log('medicine', data);
      this.medicineList = data;
      console.log(this.medicineList)
      this.medicineService = this.completerService.local(this.medicineList, 'PrescribingInformation', 'PrescribingInformation');

    },
      err => {

      })
  }

  // close Instruction form on close button
  closeForm() {
    this.medicineForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }

  // to set frequency range for medicine
  setFrequency(event) {
    this.frequency=''
    this.frequency = event.target.value;
    this.medicineForm.controls.frequency.setValue(this.frequency)
  }

  // to set time duration range for medicine
  setDay(event) {
    this.days = event.target.value;
    this.medicineForm.controls.days.setValue(this.days)
  }

  // get single medicine data
  medicineDetail(id) {
    this.ePrescriptionService.getSingleMedicineDetails(id).subscribe(data => {
      console.log('medicine', data);
      this.medicineData = data.result;
      console.log(this.medicineData);
      this.medicineForm.controls.medicineName.setValue(this.medicineData.medicineName);
      this.medicineForm.controls.dosage.setValue(this.medicineData.dosage);
      this.frequency = this.medicineData.frequency;
      this.days = this.medicineData.days;
      this.medicineForm.controls.instructions.setValue(this.medicineData.instructions);
      console.log(this.medicineForm.value)

    },
      err => {

      })
  }

  // medicine update
  updateMedicineDetail() {
    let data = {
      medicineName: this.medicineForm.value.medicineName,
      dosage: this.medicineForm.value.dosage,
      days: this.medicineForm.value.days,
      frequency: this.medicineForm.value.frequency,
      instructions: this.medicineForm.value.instructions,
      medicineId: this.medicineId
    }
    this.ePrescriptionService.updateMedicine(data).subscribe(data => {
      console.log(data)
      let notifydata = {
        type: 'success',
        title: 'Medicine',
        msg: 'Updated Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
    },
      err => {

      })

  }

  // delete  selected medicine form
  deleteMedicineForm() {
    this.ePrescriptionService.deleteMedicine(this.prescriptionId, this.medicineId).subscribe(data => {
      console.log(data);
      let notifydata = {
        type: 'success',
        title: 'Medicine',
        msg: 'Deleted Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);

    }, err => {

    })
  }

  reset() {
    this.myInputVariable.nativeElement.value = "";
    this.myOutputVariable.nativeElement.value = "";
    this.daysTest=0;
    this.frequencyTest=0;

  }
}