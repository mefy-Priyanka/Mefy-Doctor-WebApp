import { Component, OnInit,ElementRef } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DoctorPrescriptionService } from '../../meme-services/doctor-prescription.service';
import{SharedService} from '../../mefyservice/shared.service'
import{ScheduleService} from '../../meme-services/schedule.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(document:click)': 'handleClick($event)',
  }
})
export class NavbarComponent implements OnInit {
  doctorProfileId: any;
  prescriptionId:any;
  whenDashboardClicked :Boolean= true;  /*for Dashboard*/
  whenCreditClicked:Boolean=false;      /*for Credit*/
  whenAppoinmentClicked:Boolean=false;  /*for Appointment*/
  whenClinicsClicked:Boolean=false;     /*for Clinic*/
  whenEConsultClicked:Boolean=false;    /*for Econsult*/
  pathName:any;
  clinicList=[];
  searchInput:any;
  message:any;
  filterField = {
    clinicName: ''
  };
  public elementRef;
  constructor(myElement: ElementRef,private scheduleService:ScheduleService,private router: Router, private ePrescriptionService: DoctorPrescriptionService,private sharedService: SharedService,private route: ActivatedRoute) {
 
    this.doctorProfileId = localStorage.getItem('doctorId');

    this.elementRef = myElement;

    // change colour of item depending on route parameter
    this.sharedService.urlPathInfo.subscribe(data=>{
   if(data=='/dashboard/main' || data=='/dashboard/profile' || data=='/dashboard/account'){
        this.dashboardChangeColor();
      }
      else if(data=='/dashboard/clinic'){
       this.clinicsColourChange();
      }
      else if(data=='/dashboard/appointment'){
        this.appoinmentColourChange();
      }
      else if(data=='/dashboard/consultnew/diagnosis' || data=='/dashboard/consultnew/diagnosisform' || data=='/dashboard/consultnew/suggest' || data=='/dashboard/consultnew/medicare' || data=='/dashboard/consultnew/instruction' || data=='/dashboard/consultnew/lifestyle' || data=='/dashboard/consultnew/followup' ){
        this.eConsultColourChange();
      }
      else if(data=='/dashboard/raisebill' || data=='/dashboard/credit'){
        this.creditColourChange();
      }
      else if(data=='/dashboard/appnew'){
        this.appoinmentColourChange();
      }
    })
  }

  ngOnInit() {
  }
// create prescription
  // navigateEprescription() {
  //   let prescriptionData = {
  //     adviceId: [],
  //     medicineId: [],
  //     lifeStyleId: [],
  //     diagnosisId: [],
  //     specificInstructionId: [],
  //     recommendedId: [],
  //     doctorId: this.doctorProfileId,
  //   }

  //   this.ePrescriptionService.createPrescription(prescriptionData)
  //     .subscribe(result => {
  //       console.log(result);
  //       this.prescriptionId=result.member._id;
  //       this.sharedService.prescriptionId(result.member._id);
  //       this.router.navigate(['/dashboard/consult']);
  //       this.eConsultColourChange();
  //     }, err => {

  //     });
  // }
  //using ngClass on click for dashboard
  dashboardChangeColor(){  
    this.whenDashboardClicked=true;
    this.whenCreditClicked=false;
  this.whenEConsultClicked=false;
  this.whenClinicsClicked=false;
  this.whenAppoinmentClicked=false;
}
  //using ngClass on click for EConsult
eConsultColourChange(){
  this.whenEConsultClicked=true;  
  this.whenCreditClicked=false; 
  this.whenDashboardClicked=false;
  this.whenAppoinmentClicked=false;
  this.whenClinicsClicked=false;
}
 //using ngClass on click for Clinics
 clinicsColourChange(){
  this.whenClinicsClicked=true; 
  this.whenDashboardClicked=false;
  this.whenEConsultClicked=false;
  this.whenAppoinmentClicked=false;
  this.whenCreditClicked=false; 
}
 //using ngClass on click for Appoinment
 appoinmentColourChange(){
  this.whenAppoinmentClicked=true; 
  this.whenDashboardClicked=false;
  this.whenEConsultClicked=false;
  this.whenCreditClicked=false;
  this.whenClinicsClicked=false;
}
 //using ngClass on click for Credit
 creditColourChange(){
  this.whenCreditClicked=false; 
  this.whenDashboardClicked=false;
  this.whenEConsultClicked=false;
  this.whenAppoinmentClicked=false;
  this.whenClinicsClicked=false;
}

// search input
searchResult(value){
  this.clinicList=[];
  this.filterField.clinicName = value;
if(value){
    this.scheduleService.getClinicList(localStorage.getItem('loginId')).subscribe(data => {
      if(data.result.length!=0){
        this.clinicList = data.result;
        this.searchInput="";
        console.log(this.clinicList);
      }
    // else{
    //   this.message='No clinic found'
    // }
    },
      err => {
      })
  }
}

navigateToClinic(){
  this.clinicList=[];
  // this.searchInput=" ";
  this.router.navigate(['dashboard/clinic']);
}

//toggle sidenav in mobileview
toggleopen(){
  this.sharedService.togglesidenav(true);
}

// hide search results on clicking outside
handleClick(event) {
  var clickedComponent = event.target;
  var inside = false;
  do {
    if (clickedComponent === this.elementRef.nativeElement) {
      inside = true;
    }
    clickedComponent = clickedComponent.parentNode;
  } while (clickedComponent);
  if (inside) {
    console.log('inside');
  } else {
    console.log('outside');
    if (this.clinicList.length!=0) {
      this.clinicList =[];
    }
  }
}
}


  
