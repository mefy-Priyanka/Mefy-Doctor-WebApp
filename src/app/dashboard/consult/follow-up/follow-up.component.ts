import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { RouterLink, ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.component.html',
  styleUrls: ['./follow-up.component.css']
})
export class FollowUpComponent implements OnInit {
  followFormErrors: any;
  followForm: FormGroup;
  day: any;
  week: any;
  month: any;
  prescriptionId: any;
  messageAdviceNew: any;
  refferedDoctor: any;
  followId: any;
  adviceData: any;
  updatedValue: any;
  deleteFollow: boolean = false;
  followArray: any = [];
  daysTest:number=0; //initally day range zero
  weekTest:number=0; //initally week range zero
  monthTest:number=0; //initally month range zero
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService) {

    this.followFormErrors = {
      day: {},
      week: {},
      month: {},
      refferedDoctor: {}
    };

    this.prescriptionId = localStorage.getItem('prescriptionId');
  }

  ngOnInit() {
    this.followForm = this.createFollowForm();
    this.followForm.valueChanges.subscribe(() => {
      this.onFollowFormValuesChanged();
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params)
      if (Object.keys(params).length != 0) {
        this.followId = params['id'];
        this.deleteFollow = true;
        this.adviceDetail(this.followId);
      }
    });

  }


  createFollowForm() {
    return this.formBuilder.group({
      day: this.day,
      week: this.week,
      month: this.month,
      refferedDoctor: ['', Validators],
    });
  }

  onFollowFormValuesChanged() {
    this.messageAdviceNew = "";
    for (const field in this.followFormErrors) {
      if (!this.followFormErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.followFormErrors[field] = {};

      // Get the control
      const control = this.followForm.get(field);

      if (control && control.dirty && !control.valid) {
        this.followFormErrors[field] = control.errors;
      }
    }
  }

  // to set revisit schedule 
  setDay(event, schedule) {

    if (schedule == "days") {
      this.day = event.target.value;
      this.followForm.controls.day.setValue(this.day)
    }
    else if (schedule == "Weeks") {
      this.week = event.target.value;
      this.followForm.controls.week.setValue(this.week);
    }
    else if (schedule == "Months") {
      this.month = event.target.value;
      this.followForm.controls.month.setValue(this.month);
    }
    console.log("event set day", this.day);
  }



  // create advice presription
  createAdvice() {
    if (this.followForm.valid) {
      this.messageAdviceNew = "";
      if (this.followId) {
        this.updateDetails();
      }
      else {
        // if (this.followArray.length != 0) {   
        this.ePrescriptionService.createAdvice(this.prescriptionId, this.followForm.value).subscribe(result => {
          console.log(result);
          this.sharedService.prescriptionInfo(true)
          let notifydata = {
            type: 'success',
            title: 'Follow-up',
            msg: 'Created Succesfully'
          }
          this.sharedService.createNotification(notifydata);
          this.followForm.reset();
          this.router.navigate(['/dashboard/consultnew/diagnosis']);
          this.day = '';
          this.week = '';
          this.month = '';

        },
          err => {
          });
      }
    }
    else {
      this.messageAdviceNew = "Please Enter Credentials ";
      console.log('enter the credentials');
    }

  }

  closeForm() {
    this.followForm.reset();
    this.router.navigate(['/dashboard/consultnew/diagnosis']);
  }

  // check refferd advice
  checkTime() {
    if (!(this.day || this.week || this.month)) {
      this.messageAdviceNew = "Please Enter Credentials ";
    }
    else {
      this.messageAdviceNew = "";
    }
  }


  // get single advice detail
  adviceDetail(id) {
    this.ePrescriptionService.getSingleFollowDetails(id).subscribe(data => {
      console.log('medicine', data);
      this.adviceData = data.result;
      console.log(this.adviceData);
      if (Object.keys(this.adviceData).length != 0) {
        this.day = this.adviceData.day;
        this.week = this.adviceData.week;
        this.month = this.adviceData.month;
        this.followForm.controls.day.setValue(this.adviceData.day)
        this.followForm.controls.week.setValue(this.adviceData.week)
        this.followForm.controls.month.setValue(this.adviceData.month)

        this.followForm.controls.refferedDoctor.setValue(this.adviceData.refferedDoctor)
        console.log(this.followForm.value)
      }
    },
      err => {

      })
  }

  // update followup details
  updateDetails() {
    let data = {
      day: this.followForm.value.day,
      week: this.followForm.value.week,
      month: this.followForm.value.month,
      refferedDoctor: this.followForm.value.referredDoctor,
      adviceId: this.followId
    }
    this.ePrescriptionService.updateAdviceDetail(data).subscribe(result => {
      console.log(result);
      let notifydata = {
        type: 'success',
        title: 'Follow-up',
        msg: 'Updated Succesfully !'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);
    },
      err => {
      })
  }

  // delete  selected followup form
  deleteFollowupForm() {
    this.ePrescriptionService.deleteFollowup(this.prescriptionId, this.followId).subscribe(data => {
      console.log(data);
      let notifydata = {
        type: 'success',
        title: 'Follow-up',
        msg: 'Deleted Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      this.router.navigate(['/dashboard/consultnew/diagnosis']);

    }, err => {

    })
  }

}
