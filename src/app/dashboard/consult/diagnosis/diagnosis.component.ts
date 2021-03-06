import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../../mefyservice/prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { AppointmentsService } from '../../../mefyservice/appointments.service';

import { RouterLink, ActivatedRoute, Router, ActivatedRouteSnapshot, Params } from '@angular/router';
@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  public diagnosisData: any = [];
  public suggestionData: any = [];
  public medicareData: any = [];
  public instructionData: any = [];
  public lifeStyleData: any = [];
  public followUpData: any = [];
  public individualPrescriptionList: any = [];
  public loader: boolean = false;
  public hidePrescribeButton: boolean = false;
  public currentURL = '';
  public comingIndividualId: any
  public storeIndividualId: any;
  public individualId: any;
  public appointmentId: any;
  /*****OLD */
  specificData: any = [];
  lifestyleData: any = [];
  adviseData: any = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private prescriptionService: PrescriptionService, private sharedService: SharedService, private appointmentService: AppointmentsService) {


    /*GET CURRENT URL, send url path name to change navbar colour*/
    this.currentURL = window.location.pathname;
    // console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);

    /***************GET DIAGNOSIS DATA *****************/
    this.sharedService.diagnosisdata.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.diagnosisData.push(data.diaginfo)
      }
      console.log('diagnosisdata at diagnosis', this.diagnosisData[0])
    })

    /***************GET SUGGESTION TYPE DATA *****************/
    this.sharedService.suggestionData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.suggestionData.push(data.suggestInfo)
      }
      console.log('suggestionData at diagnosis ', this.suggestionData[0])
    })

    /***************GET MEDICARE DATA *****************/
    this.sharedService.medicinedata.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.medicareData.push(data.medinfo)
      }
      console.log('medicinedata at diagnosis', this.medicareData[0])
    })

    /***************GET INSTRUCTION DATA *****************/
    this.sharedService.instructionData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.instructionData.push(data.advice)
      } 
      // console.log('instructionData ', data.advice)
      console.log('instructionData at diagnosis', this.instructionData[0])
    })
    
    /***************GET LIFE STYLE TYPE DATA *****************/
    this.sharedService.lifeStyleData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
      
        this.lifeStyleData.push(data.lifeStyleData)
      }
      console.log('lifeStyleData at diagnosis', this.lifeStyleData[0])
    })

    /***************GET FOLLOWUP TYPE DATA *****************/
    this.sharedService.followUpData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        
        this.hidePrescribeButton = true;
        console.log('followUpData',data.followinfo)
        this.followUpData.push(data.followinfo);
      }
      console.log('followUpData at diagnosis', this.followUpData[0])
    })
    /************GET INDIVIDUAL ID FROM URL*********************** */
    this.activatedRoute.params.subscribe((params: Params) => {
      if (Object.keys(params).length != 0) {
        this.comingIndividualId = params['individualId']
        console.log('this.incomingIndividualId', this.comingIndividualId)
        this.sharedService.storeIndividual(this.comingIndividualId)/*STORE INDIVIDUALID*/
      }

    });
    /************GET APPOINTMENT ID FROM URL*********************** */
    this.activatedRoute.params.subscribe((params: Params) => {
      if (Object.keys(params).length != 0) {
        this.appointmentId = params['appointmentId']
        console.log('this.appointmentId', this.appointmentId)
        this.sharedService.storeAppointment(this.appointmentId) /*STORE APPOINTMENTID*/
      }

    });

  }
  ngOnInit() {
    this.getPrescriptionByIndividualId();

  }

  /*************** GET PRESCRIPTION BT INDIVIDUAL ID*******************/
  getPrescriptionByIndividualId() {
    this.loader = true;
    this.sharedService.storeIndividualId.subscribe(data => {
      console.log('incomingIndividualId', data)
      this.individualId = data /*GET INDIVIDUALID*/
    })
    console.log('incomingIndividualId',  this.individualId)
    this.prescriptionService.getPrescriptionByIndividualId(this.individualId).subscribe(data => {
      let result: any = {}
      result = data
      this.loader = false;
      this.individualPrescriptionList = result.result
      console.log('individualPrescriptionList', this.individualPrescriptionList)
    }, err => {
      this.loader = false
      console.log(err)
    })
  }
/**********************CREATE PRESCRIPTION**************************/
  createPrescription() {
    this.loader = true
    if (this.diagnosisData.length != 0 || this.lifeStyleData.length != 0 || this.followUpData.length != 0 || this.instructionData.length != 0 || this.suggestionData.length != 0 || this.medicareData.length != 0) {
      console.log(this.diagnosisData.length, this.diagnosisData) 
      let prescriptionData = {
        doctorId: localStorage.getItem('doctorId'),
        individualId: this.individualId,
        medicine: this.medicareData[0],
        diagnosis: this.diagnosisData[0],
        instruction: this.instructionData[0],
        recommended: this.suggestionData[0],
        lifestyle: this.lifeStyleData[0],
        advice: this.followUpData[0]
      }
      console.log('prescriptionData', prescriptionData)
      this.prescriptionService.createPrescription(prescriptionData).subscribe(data => {
        this.getPrescriptionByIndividualId();
        this.changedstatus();
        this.loader = false
        this.hidePrescribeButton = false;
        console.log('prescription', data)
        let notifydata = {
          type: 'success',
          title: 'Prescription Created Sucessfully!'
        }
        this.sharedService.createNotification(notifydata);
        this.router.navigate(['/dashboard/main']);
      }, err => {
        let notifydata = {
          type: 'error',
          title: 'Something Went Wrong!'
        }
        this.sharedService.createNotification(notifydata);
        this.loader = false
        console.log(err)
      })
    }
    else {
      this.loader = false;
      let notifydata = {
        type: 'error',
        title: 'Something Went Wrong!'
      }
      this.sharedService.createNotification(notifydata);
    }
  }
  /*************CHANGE THE STATUS OF APPOINTMENT************************/
  changedstatus() {
    this.sharedService.storeAppointmentId.subscribe(data => {
      console.log('incomingAppointmentId', data)
      this.appointmentId = data /*GET APPOINTMENTID*/
    })
    let data = {
      appointmentId: this.appointmentId,
      status: 'Completed'
    }
    this.appointmentService.changeAppointmentStatus(data).subscribe(data => {
      console.log(data)
    },
    err=>{
      console.log(err)
    })
  }

  // edit diagnosis form
  editDiagnosis(id) {
    this.router.navigate(['dashboard/consultnew/diagnosisform', id]);
  }
  //edit Instruction form
  editInstructionForm(id) {
    this.router.navigate(['dashboard/consultnew/instruction', id]);

  }
  //create prescription id

  // edit lifeStyle form
  editLifeStyle(id) {
    this.router.navigate(['dashboard/consultnew/lifestyle', id]);
  }

  // edit suggest form
  editSuggest(id) {
    this.router.navigate(['dashboard/consultnew/suggest', id]);
  }

  // edit suggest form
  editFollowUp(id) {
    this.router.navigate(['dashboard/consultnew/followup', id]);
  }
  // edit medicine form
  editMedicine(id) {
    this.router.navigate(['dashboard/consultnew/medicare', id]);
  }



  // hide & show on click
  followUpEdit(id, i) {
  }

  MedicineEdit(id, j) {
  }
  
}
