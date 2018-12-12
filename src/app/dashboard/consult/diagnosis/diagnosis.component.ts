import { Component, OnInit } from '@angular/core';
import { DoctorPrescriptionService } from '../../../meme-services/doctor-prescription.service';
import { SharedService } from '../../../mefyservice/shared.service';
// import { Router } from '@angular/router';
import { RouterLink, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  prescriptionList: any;
  provisionalData: any = [];
  recommendeData: any = [];
  medicalData: any = [];
  specificData: any = [];
  lifestyleData: any = [];
  adviseData: any = [];
  prescriptionId: any;
  medicineData: any;
  pathName:any;
  currentURL='';
  hidePrescribeButton:boolean=false;
  showEdit : boolean =false;
  selected:any;
  show:boolean = false;
  select:any;
  callerData: any = {};
  hideVideo:any;
  constructor(  private route: ActivatedRoute,private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService, private router: Router) {

    // this.prescriptionId = localStorage.getItem('prescriptionId');

    // this.sharedService.prescribeInfo.subscribe(data => {
    //   if (data == true) {
    //     this.getEprescription();
    //   }
    // });

    // this.pathName = (route.snapshot.url)[0].path;
    // console.log(this.pathName);
    // this.sharedService.setPath(this.pathName);

    // this.currentURL = window.location.pathname; 
    // console.log(this.currentURL);
    // this.sharedService.setPath(this.currentURL);

    // // data from calling
    // this.route.queryParams.subscribe(param => {
      
    //   if(Object.keys(param).length!=0){
       
    //     this.callerData.callerId = param['callerId'];
    //   }
     
    // })


    //clinic visit prescription
    // this.sharedService.appointmentType.subscribe(data => {
      
    //   if (Object.keys(data).length != 0) {
        
    //     this.callerData.callerId = data.individualId;
    //     this.hideVideo=true;
       
    //   }
      
    // })
  }

  ngOnInit() {
    // if (!localStorage.getItem('prescriptionId')) {
    //   this.getPrescriptionID();
    // }

    // this.getEprescription();
  }

  // get prescription
  getEprescription() {

    // if (localStorage.getItem('prescriptionId')) {
    //   this.ePrescriptionService.getPrescription(localStorage.getItem('prescriptionId'))
    //     .subscribe(result => {
    //       this.prescriptionList=result.result;
    //       console.log(this.prescriptionList)//prescription list
    //       if(this.prescriptionList!=0)
    //       // this.hidePrescribeButton=true
    //       console.log('prescription list', result);
    //       this.provisionalData = result.result.diagnosisId;
    //       this.recommendeData = result.result.recommendedId;
    //       this.medicalData = result.result.medicineId;
    //       this.specificData = result.result.specificInstructionId;
    //       this.lifestyleData = result.result.lifeStyleId;
    //       this.adviseData = result.result.adviceId;
    //       console.log(this.adviseData);
    //     }, err => {

    //     });
    // }
  }

  // edit diagnosis form
  editDiagnosis(id) {
    this.router.navigate(['dashboard/consultnew/diagnosisform', id]);
  }
  //edit Instruction form
  editInstructionForm(id)
  {
    this.router.navigate(['dashboard/consultnew/instruction',id]);
    
  }
  //create prescription id

  // edit lifeStyle form
  editLifeStyle(id){
    this.router.navigate(['dashboard/consultnew/lifestyle',id]);
  }

   // edit suggest form
   editSuggest(id){
    this.router.navigate(['dashboard/consultnew/suggest',id]);
  }

    // edit suggest form
    editFollowUp(id){
      this.router.navigate(['dashboard/consultnew/followup',id]);
    }
 // edit medicine form
 editMedicine(id){
  this.router.navigate(['dashboard/consultnew/medicare',id]);
}

  // create prescriptionid
  getPrescriptionID() {

    // let prescriptionData = {
    //   adviceId: [],
    //   medicineId: [],
    //   lifeStyleId: [],
    //   diagnosisId: [],
    //   specificInstructionId: [],
    //   recommendedId: [],
    //   doctorId: localStorage.getItem('loginId'),
    //   individualId: this.callerData.callerId
    // }

    // this.ePrescriptionService.createPrescription(prescriptionData)
    //   .subscribe(result => {
        
    //     console.log('prescription id created', result);
    //     this.prescriptionId = result.member._id;
    //     // this.sharedService.prescriptionId(result.member._id);
    //     localStorage.setItem('prescriptionId', this.prescriptionId)
    //   }, err => {

    //   });
  }

   // hide & show on click
   followUpEdit(id, i) {
    // this.selected = i;
    // // this.showEdit = true;
    // if (this.showEdit == true) {
    //   this.showEdit = !this.showEdit;
    // }
    // else if (this.showEdit == false) {
    //   this.showEdit = !this.showEdit;
    // }
  }

  MedicineEdit(id,j){
   
    // this.select = j;
    // // this.showEdit = true;
    // if (this.show == true) {
    //   this.show = !this.show;
    // }
    // else if (this.show == false) {
    //   this.show = !this.show;
    // } 
  }
}
