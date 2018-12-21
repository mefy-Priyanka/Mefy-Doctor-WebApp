import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../../../mefyservice/prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { AppointmentsService } from '../../../mefyservice/appointments.service';

import { RouterLink, ActivatedRoute, Router, ActivatedRouteSnapshot,Params } from '@angular/router';
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
  public comingIndividualId:any
  public storeIndividualId:any;
  public individualId:any;
  public cancelAppointmentId:any;
  /*****OLD */
  provisionalData: any = [];
  recommendeData: any = [];
  medicalData: any = [];
  specificData: any = [];
  lifestyleData: any = [];
  adviseData: any = [];
 
 

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private prescriptionService: PrescriptionService, private sharedService: SharedService,private appointmentService:AppointmentsService) {
   

    /*GET CURRENT URL, send url path name to change navbar colour*/
    this.currentURL = window.location.pathname;
    console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);

    /***************GET DIAGNOSIS DATA *****************/
    this.sharedService.diagnosisdata.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.diagnosisData.push(data)
      }
      console.log('diagnosisdata at diagnosis', this.diagnosisData)
    })

    /***************GET SUGGESTION TYPE DATA *****************/
    this.sharedService.suggestionData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.suggestionData.push(data)
      }
      console.log('suggestionData at diagnosis ', this.suggestionData)
    })

    /***************GET MEDICARE DATA *****************/
    this.sharedService.medicinedata.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.medicareData.push(data)
      }
      console.log('medicinedata at diagnosis', this.medicareData)
    })
    /***************GET INSTRUCTION DATA *****************/
    this.sharedService.instructionData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.instructionData.push(data)
      }
      console.log('instructionData at diagnosis', this.instructionData)
    })
    /***************GET LIFESTYLE DATA *****************/
    this.sharedService.lifeStyleData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.lifeStyleData.push(data)
      }
      console.log('lifeStyleData at diagnosis', this.lifeStyleData)
    })
    /***************GET FOLLOWUPTYPE DATA *****************/
    this.sharedService.followUpData.subscribe(data => {
      if (data.length != 0 && Object.keys(data).length != 0) {
        this.hidePrescribeButton = true;
        this.followUpData.push(data);
      }
      console.log('followUpData at diagnosis', this.followUpData)
    })
    this.activatedRoute.params.subscribe((params: Params) => {
      if (Object.keys(params).length != 0) {
        this.comingIndividualId=params['id']
        console.log('this.incomingIndividualId',this.comingIndividualId)
        this.sharedService.storeIndividual(this.comingIndividualId)/*STORE INDIVIDUALID*/
      }
      
    });
  
  }
  ngOnInit() {
    this.getPrescriptionByIndividualId();
    
  }
  
  /*************** GET PRESCRIPTION BT INDIVIDUAL ID*******************/
  getPrescriptionByIndividualId() {
    this.loader = true;
    this.sharedService.storeIndividualId.subscribe(data=>{
      console.log('incomingIndividualId',data)
      this.individualId=data /*GET INDIVIDUALID*/
    })
    this.prescriptionService.getPrescriptionByIndividualId(this.individualId).subscribe(data => {
      let result: any = {}
      result = data
      this.loader = false
      this.individualPrescriptionList = result
      console.log('individualPrescriptionList', this.individualPrescriptionList)
    }, err => {
      this.loader = false
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
  createPrescription() {
    this.loader = true
    if (this.diagnosisData.length != 0 || this.lifeStyleData.length != 0 || this.followUpData.length != 0 || this.instructionData.length != 0 || this.suggestionData.length != 0 || this.medicareData.length != 1) {
      console.log(this.diagnosisData.length, this.diagnosisData)
      let prescriptionData = {
        doctorId: localStorage.getItem('doctorId'),
        individualId:this.individualId,
        medicine: this.medicareData,
        diagnosis: this.diagnosisData,
        instruction: this.instructionData,
        recommended: this.suggestionData,
        lifestyle: this.lifeStyleData,
        advice: this.followUpData
      }
      console.log('prescriptionData', prescriptionData)
      this.prescriptionService.createPrescription(prescriptionData).subscribe(data => {
        this.loader = false
        this.hidePrescribeButton = false;
        console.log('prescription', data)
        let notifydata = {
          type: 'success',
          title: 'Prescription Created Sucessfully!'
        }
        this.sharedService.createNotification(notifydata);
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
//   changedstatus(){
//     let data = {
//       appointmentId: this.cancelAppointmentId,
//       status: 'Cancelled'
//     }
// this.appointmentService.changeAppointmentStatus('data').subscribe(data=>{
//   console.log(data)
// })
//   }
}
