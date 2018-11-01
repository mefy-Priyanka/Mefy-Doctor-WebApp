import { Component, OnInit } from '@angular/core';
import { BillService } from '../../meme-services/bill.service';
import { SharedService } from '../../meme-services/shared.service';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-raise-bill',
  templateUrl: './raise-bill.component.html',
  styleUrls: ['./raise-bill.component.css']
})
export class RaiseBillComponent implements OnInit {
  doctorProfileId: any;
  prescriptionId: any;
  eConsultfee: any;
  // raisebillForm: boolean = false;
  particular: any = 'eConsultFee';
  amount: number;
  grandTotal = 0;
  show: boolean = false;
  total: any;
  fee: any;
  billDataArray = [];
  newbillArray: any = [];
  showForm: boolean = true;
  pathName: any;
  EConsultfee: any;
  callerData: any = {};
  billInfo: any;
  public mask = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // fee validation 

  constructor(private billService: BillService, private sharedService: SharedService, private router: Router, private route: ActivatedRoute) {

    // get individual details
    this.route.queryParams.subscribe(param => {
      this.callerData.callerId = param['callerId'];

      // this.callerData.callerEasyRTC= param['callerEasyRTC'];
      // this.callerData.roomId= param['roomId'];
    })




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


    // send url path name to change navbar colour
    this.pathName = (route.snapshot.url)[0].path;
    this.sharedService.setPath(this.pathName)

  }


  ngOnInit() {

    this.doctorProfileId = localStorage.getItem('loginId');
    this.prescriptionId = localStorage.getItem('prescriptionId');
    this.getBillDoctorId();
  }

  openRaiseBill() {
    this.router.navigate(['/dashboard/consult']);
  }

  // bill create
  billCreate() {
    if (this.newbillArray.length != 0) {
      this.billInfo = {
        ePrescriptionId: this.prescriptionId,
        bill: this.billDataArray,
        doctorId: this.doctorProfileId,
        individualId: "5a38f23373dde67a49323837",
        grandTotal: this.grandTotal,
      }
    }
    else {
      let noBill = {
        particular: this.particular,
        amount: this.EConsultfee
      };
      this.billInfo = {
        // ePrescriptionId: this.prescriptionId,
        bill: noBill,
        doctorId: this.doctorProfileId,
        individualId: "5a38f23373dde67a49323837",
        grandTotal: this.grandTotal,
      }
    }
    this.billService.createBill(this.prescriptionId,this.billInfo).subscribe(result => {
      console.log('bill created', result);
      this.newbillArray = [];
      this.grandTotal = parseInt(this.EConsultfee);
      this.eConsultfee = this.EConsultfee;
      // this.sharedService.prescriptionId({});
      localStorage.removeItem('prescriptionId')
      this.router.navigate(['/dashboard/main']);

    })
  }



  // get bill by Prescriptionid
  getBillPrescriptionId() {
    this.billService.getByPrescriptionId(this.prescriptionId).subscribe(data => {
      console.log(data);
    }, err => {

    })
  }

  // get bill by Prescriptionid
  getBillDoctorId() {
    this.billService.getByDoctorId(localStorage.getItem('loginId')).subscribe(data => {
      console.log('list of bills', data);
    },
      err => {

      });
  }

  // to find grand total of bill
  findsum(data, i) {
    if (Object.keys(data).length != 0 && data.particular && data.amount) {
      this.grandTotal = parseInt(data.amount) + this.grandTotal;
      // this.total = this.grandTotal;
      this.billDataArray.push(this.newbillArray[i]);
      this.eConsultfee = this.grandTotal;
    }

  }

  // to add new bill form
  addNewbill() {
    this.newbillArray.push({});
  }

  // to remove particular bill
  removeBill(bill, i) {
    if (i !== -1) {
      this.newbillArray.splice(i, 1);
      if (Object.keys(bill).length != 0 && bill.particular && bill.amount) {
        this.billDataArray.splice(i, 1);
        this.grandTotal = this.grandTotal - parseInt(bill.amount);
        this.eConsultfee = this.grandTotal;
      }
    }

  }

  // reflect econsult fee
  reflectFee(data){
    if(data){
    this.grandTotal =parseInt(this.EConsultfee);
  }
  else{
    this.grandTotal = 0;
  }
}
}
