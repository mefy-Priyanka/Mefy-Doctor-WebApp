import { Component, OnInit, ElementRef } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { DoctorPrescriptionService } from '../../meme-services/doctor-prescription.service';
import { SharedService } from '../../mefyservice/shared.service'
import { ClinicService } from '../../mefyservice/clinic.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  // host: {
  //   '(document:click)': 'handleClick($event)',
  // }
})
export class NavbarComponent implements OnInit {
  public clinicList = [];
  public hideEconsult: Boolean = false   /*HIDE ECONSULT* AT*/
  public whenDashboardClicked: Boolean = true;  /*for Dashboard*/
  public whenCreditClicked: Boolean = false;      /*for Credit*/
  public whenAppoinmentClicked: Boolean = false;  /*for Appointment*/
  public whenClinicsClicked: Boolean = false;     /*for Clinic*/
  public whenEConsultClicked: Boolean = false;    /*for Econsult*/
  public pathName: any;
  public doctorProfileId: any;
  public prescriptionId: any;
  public searchInput: any;
  public message: any;
  public filterField = {
    clinicName: ''
  };
  public elementRef;
  constructor(myElement: ElementRef, private clinicService: ClinicService, private router: Router, private ePrescriptionService: DoctorPrescriptionService, private sharedService: SharedService, private route: ActivatedRoute) {

    this.doctorProfileId = localStorage.getItem('doctorId');

    this.elementRef = myElement;

    // change colour of item depending on route parameter
    this.sharedService.urlPathInfo.subscribe(data => {
      if (data == '/dashboard/main' || data == '/dashboard/profile' || data == '/dashboard/account') {
        this.hideEconsult=false;
        this.dashboardChangeColor();
      }
      else if (data == '/dashboard/clinic') {
        this.hideEconsult=false;
        this.clinicsColourChange();
      }
      else if (data == '/dashboard/appointment') {
        this.hideEconsult=false;
        this.appoinmentColourChange();
      }
      else if (data == '/dashboard/consultnew/diagnosis' || data == '/dashboard/consultnew/diagnosisform' || data == '/dashboard/consultnew/suggest' || data == '/dashboard/consultnew/medicare' || data == '/dashboard/consultnew/instruction' || data == '/dashboard/consultnew/lifestyle' || data == '/dashboard/consultnew/followup') {
        this.hideEconsult=true;
        this.eConsultColourChange();
      }
      else if (data == '/dashboard/consultnew/diagnosis/:individualId/:appointmentId') {
        // console.log('dataaa',data)
        console.log('dataaaghvghvggvhgbhghghghgbhuftfyhjkml,jkhghj')

        this.hideEconsult=true;
        // console.log('hideconsult',this.hideEconsult)
        this.eConsultColourChange();
      }
      else if (data == '/dashboard/raisebill' || data == '/dashboard/credit') {
        this.hideEconsult=false;
        this.creditColourChange();
      }
      else if (data == '/dashboard/appnew') {
        this.hideEconsult=false; 
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
  dashboardChangeColor() {
    this.whenDashboardClicked = true;
    this.whenCreditClicked = false;
    this.whenEConsultClicked = false;
    this.whenClinicsClicked = false;
    this.whenAppoinmentClicked = false;
    this.hideEconsult=false;
  }
  //using ngClass on click for EConsult
  eConsultColourChange() {
    this.whenEConsultClicked = true;
    this.whenCreditClicked = false;
    this.whenDashboardClicked = false;
    this.whenAppoinmentClicked = false;
    this.whenClinicsClicked = false;
    this.hideEconsult=true;
  }
  //using ngClass on click for Clinics
  clinicsColourChange() {
    this.whenClinicsClicked = true;
    this.whenDashboardClicked = false;
    this.whenEConsultClicked = false;
    this.whenAppoinmentClicked = false;
    this.whenCreditClicked = false;
    this.hideEconsult=false;
  }
  //using ngClass on click for Appoinment
  appoinmentColourChange() {
    this.whenAppoinmentClicked = true;
    this.whenDashboardClicked = false;
    this.whenEConsultClicked = false;
    this.whenCreditClicked = false;
    this.whenClinicsClicked = false;
    this.hideEconsult=false;
  }
  //using ngClass on click for Credit
  creditColourChange() {
    this.whenCreditClicked = false;
    this.whenDashboardClicked = false;
    this.whenEConsultClicked = false;
    this.whenAppoinmentClicked = false;
    this.whenClinicsClicked = false;
    this.hideEconsult=false;
  }

  // search input
  searchResult(value) {
    this.clinicList = [];
    this.filterField.clinicName = value;
    if (value) {
      this.clinicService.getCliniclist(localStorage.getItem('doctorId')).subscribe(data => {
        let result: any = {}
        result = data
        console.log('clinic list search', result)
        if (result.result.length != 0) {
          this.clinicList = result.result;
          this.searchInput = "";
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

  navigateToClinic() {
    this.clinicList = [];
    // this.searchInput=" ";
    this.router.navigate(['dashboard/clinic']);
  }

  //toggle sidenav in mobileview
  toggleopen() {
    this.sharedService.togglesidenav(true);
  }

  // hide search results on clicking outside
//   handleClick(event) {
//     var clickedComponent = event.target;
//     var inside = false;
//     do {
//       if (clickedComponent === this.elementRef.nativeElement) {
//         inside = true;
//       }
//       clickedComponent = clickedComponent.parentNode;
//     } while (clickedComponent);
//     if (inside) {
//       console.log('inside');
//     } else {
//       console.log('outside');
//       if (this.clinicList.length != 0) {
//         this.clinicList = [];
//       }
//     }
//   }
}



