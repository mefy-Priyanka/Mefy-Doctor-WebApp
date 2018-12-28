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

  public instructionForm: FormGroup;
  public instructionFormErrors: any;
  public loader: boolean = false
  public submitted: boolean = false;
  public hideInstructionForm: boolean = true;



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
     this.AddInstructionForm() ;
  }

  /******************CREATE INSDTRUCTION FORM ARRAY**********************/
  createInstructionForm() {
    return this.formBuilder.group({
      advice: this.formBuilder.array([])
    });
  }

  onInstructionFormValuesChanged() {
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
    this.submitted = true;
    this.loader = true
    if (this.instructionForm.valid) {
      console.log('fff', this.instructionForm.valid)
      this.submitted = false;
      let data = {
        advice: this.instructionForm.value.advice
      }
      console.log(data)
      this.sharedService.createInstructionData(data)
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
      this.instructionForm.reset();

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

  /************************************************ SAVE FORM ON ENTER KEY *********************************************** */
  keyDownFunction(event) {
    if (event.keyCode == 13) {
      this.saveInstructionForm();
    }
  }
  /**************ADD MORE THAN ONE INSTRUCTION FORM**********************/
  AddInstructionForm() {
    let control = <FormArray>this.instructionForm.controls.advice;
    control.push(
      this.formBuilder.group({
        advice: ['', Validators.required],
      })
    )

  }
  // close Instruction form on close button
  closeInstructionForm() {
    this.instructionForm.reset()
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }



}


