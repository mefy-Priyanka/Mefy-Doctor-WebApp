import { Component, OnInit, transition } from '@angular/core';
import { RouterLink, ActivatedRoute, Router, Params } from '@angular/router';
import { SocketService } from '../../../meme-services/socket.service';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormArrayName } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  editInstruction: any;
  hideSavePlusButton: boolean = true;
  individualPrescriptionDetail: any;
  message: any;
  instructionForm: FormGroup;
  instructionFormErrors: any;
  prescriptionId: any;
  specificInstructionId: any;
  showAddButton: boolean = true;//show save+
  adviceForm: any = []
  hideDelete: boolean = false;

  constructor(private router: Router, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService, private socketService: SocketService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.instructionFormErrors = {
      advice: {}
    };
  }

  ngOnInit() {
    //form 
    this.instructionForm = this.createInstructionForm()

    this.instructionForm.valueChanges.subscribe(() => {
      this.onInstructionFormValuesChanged();
    });
    this.prescriptionId = localStorage.getItem('prescriptionId');
    // this.editInstructionForm();

    this.activatedRoute.params.subscribe((params: Params) => {
      if (Object.keys(params).length != 0) {
        this.specificInstructionId = params['id'];
        console.log(this.specificInstructionId); // get url id
        this.hideSavePlusButton = false;
        this.hideDelete = true;
        this.getInstructionDetailById();

      }
    });


  }
  //crete instruction form
  createInstructionForm() {
    return this.formBuilder.group({
      advice: ['', Validators.required]
    });

  }
  onInstructionFormValuesChanged() {
    this.message = "";
    for (const field in this.instructionFormErrors) {
      if (!this.instructionFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.instructionFormErrors[field] = {};

      // Get the control
      const control = this.instructionForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.instructionFormErrors[field] = control.errors;
      }
    }
  }
  // create Advice form
  saveInstructionForm() {
    // this.submitted=true;
    if (this.instructionForm.valid) {
      if (this.specificInstructionId) {
        this.editInstructionForm()
      }
      else {
      this.message = ''
      console.log(this.instructionForm.value);
      this.hideSavePlusButton = true;
      this.ePrescriptionService.createSpecificInstruction(this.prescriptionId, this.instructionForm.value).subscribe(result => {
        console.log(result);
        this.sharedService.prescriptionInfo(true);
        this.instructionForm.reset();
        let notifydata = {
          type: 'success',
          title: 'Instruction',
          msg: 'Created Succesfully'
        }
        this.sharedService.createNotification(notifydata);
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
        this.instructionForm.reset();

      },


        err => {
        });
    }
  }
    else {
      this.message = "Please Enter Credentials";
    }
  
  }

  // adding extra Instruction
  savePlus() {
    if (this.instructionForm.valid) {
      this.message = ''
      console.log(this.instructionForm.value);
        this.hideSavePlusButton = true;
        this.ePrescriptionService.createSpecificInstruction(this.prescriptionId, this.instructionForm.value).subscribe(result => {
          console.log(result);
          this.sharedService.prescriptionInfo(true);
          this.instructionForm.reset();
          let notifydata = {
            type: 'success',
            title: 'Instruction',
            msg: 'Created Succesfully'
          }
          this.sharedService.createNotification(notifydata);
          this.instructionForm.reset();

        },


          err => {
          });
      }
    
    else {
      this.message = "Please Enter Credentials";
    }


  }

  // close Instruction form on close button
  closeInstructionForm() {
    this.instructionForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }
  // get instruction by id
  getInstructionDetailById() {
    // this.submitted=false;
    this.ePrescriptionService.getSpecificInstructionById(this.specificInstructionId).subscribe(result => {
      console.log(result);
      this.individualPrescriptionDetail = result.result;
      console.log(this.individualPrescriptionDetail);
      // this.hideSavePlusButton = false;
      console.log('detail', this.individualPrescriptionDetail);
      this.instructionForm.controls.advice.setValue(this.individualPrescriptionDetail.advice)
    },
      err => {
      })
  }
  //update Instruction form 
  editInstructionForm() {
    this.hideSavePlusButton = false;
    let data = {
      advice: this.instructionForm.value.advice,
      specificInstructionId: this.specificInstructionId
    }
    if (Object.keys(data.advice).length != 0) {
      this.ePrescriptionService.updateSpecificInstruction(data).subscribe(data => {
        console.log(data);
        this.instructionForm.reset();
        let notifydata = {
          type: 'success',
          title: 'Instruction',
          msg: '  Updated Succesfully'
        }
        this.sharedService.createNotification(notifydata);
        this.instructionForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
      })

    }
  }

  // delete  selected specific instruction form
  deleteSpecificForm() {
    this.ePrescriptionService.deleteSpecific(this.prescriptionId, this.specificInstructionId).subscribe(data => {
      console.log(data);
      let notifydata = {
        type: 'success',
        title: 'Instruction',
        msg: 'Deleted Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);

    }, err => {

    })
  }

}


