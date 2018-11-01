import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BillService } from '../../meme-services/bill.service';
import { MemeLoginService } from '../../meme-services/meme-login.service';
import { SharedService } from '../../meme-services/shared.service';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operator/filter';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  @ViewChild('close') close: ElementRef;
  doctorProfileId: any;
  eConsultFee: any;
  eConsultfee: any;
  EConsultfee: any;
  creditDetails: any;
  credit: any;
  fee: any;
  prescriptionId: any;
  total: any;
  pathName: any;
  currentURL: any;
  grandTotal: any;
  logInfo: any;
  message: any;
  hideBill: boolean = false;
  filterBillType = {
    status: ''
  };
  // show: boolean = false;
  public mask = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/] // fee validation 
  constructor(private billService: BillService, private loginService: MemeLoginService, private sharedService: SharedService, private router: Router, private route: ActivatedRoute) {

    // get doctor details
    this.sharedService.doctorDetails.subscribe(data => {
      if (Object.keys(data).length != 0) {
        // this.fee = data.eConsultFee;
        console.log('doctor detail', data);
        this.creditDetails = data.credit;
        this.eConsultFee = data.eConsultFee;
      }
    });

    // send url path name to change navbar colour
    // this.pathName = (route.snapshot.url)[0].path;
    // this.sharedService.setPath(this.pathName)

    this.currentURL = window.location.pathname; 
    console.log(this.currentURL);
    this.sharedService.setPath(this.currentURL);

     // get prescription id
     this.sharedService.doctorDetails.subscribe(data => {
      if (Object.keys(data).length != 0) {
        this.eConsultfee = data.eConsultFee;
        // this.total = this.eConsultfee;
        this.EConsultfee = this.eConsultfee
        this.grandTotal = this.grandTotal + parseInt(this.eConsultfee);
        // this.fee = data.eConsultFee;

      }
    });
  }


  ngOnInit() {
    this.doctorProfileId = localStorage.getItem('loginId');
    // this.doctorProfile();
    this.getBillDoctorId();

  }

  // econsult Fee
  creditFee() {
    let fee = {
      eConsultFee: this.EConsultfee,
      _id: this.doctorProfileId,
    }
    this.billService.econsultFee(fee).subscribe(data => {
      this.eConsultFee = "";
      this.credit = data.result.eConsultFee;
      this.sharedService.creditInformation(this.credit);
      this.sharedService.updatedDoctorInfo(true);
      this.close.nativeElement.click();
    },
      err => {
      })
  }

  //get doctorBasic Info
  // doctorProfile() {
  //   this.loginService.getDoctorDetail(this.doctorProfileId).subscribe(result => {
  //     console.log('get profiledata', result);
  //     this.creditDetails = result.registrationDetails.credit;

  //   },
  //     err => {
  //     })
  // }

  // get bill by Prescriptionid
  getBillDoctorId() {
    let doctorId = this.doctorProfileId
    this.billService.getByDoctorId(doctorId).subscribe(result => {
      this.total = result.result;
      if(this.total.length == 0){
        this.message ="No Credit History Present";
      }
      else{
        this.message ="";
      }
      console.log(this.total);
    })
  }

  // clear data
  closeForm() {
    this.eConsultFee = "";
  }

  // show dropdown to filter bill data
  getBillType() {
    if (this.hideBill == true) {
      this.hideBill = !this.hideBill;
    }
    else if (this.hideBill == false) {
      this.hideBill = !this.hideBill;
    }
  }

  // filter bill data
  filterBill(data) {
    this.filterBillType.status = data;
    this.hideBill = false;
  }
}
