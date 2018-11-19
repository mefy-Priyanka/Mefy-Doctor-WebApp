import { Component, OnInit } from '@angular/core';
import { BillService } from '../../../meme-services/bill.service';
import { SharedService } from '../../../mefyservice/shared.service';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import{SocketService}  from '../../../meme-services/socket.service';
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  eConsultBill: {};
  doctorProfileId: any;
  prescriptionId: any;
  eConsultfee: any;
  // raisebillForm: boolean = false;
  particular: any = 'eConsultFee';
  amount: number;
  grandTotal: any = 0;
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
  newAmount: any;
  appointmentType: any;
  public mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/] // fee validation 

  constructor(private socketService:SocketService,private billService: BillService, private sharedService: SharedService, private router: Router, private route: ActivatedRoute) {

    // get individual details
    this.route.queryParams.subscribe(param => {
      if(Object.keys(param).length!=0){
        this.callerData.callerId = param['callerId'];
      }
    

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

    this.sharedService.appointmentType.subscribe(data => {
      
      if (Object.keys(data).length != 0) {
        this.appointmentType = data.type;
        this.callerData.callerId = data.individualId;
      }
      else {
        this.appointmentType = 'eConsult';
      }
    })

   
    this.sharedService.clinicVisit.subscribe(data => {
      if (data == true) {
        this.particular = 'clinicVisit fee';
      }

    })
  }


    // send url path name to change navbar colour
    // this.pathName = (route.snapshot.url)[0].path;
    // this.sharedService.setPath(this.pathName)
  

  ngOnInit() {

    this.doctorProfileId = localStorage.getItem('loginId');
    this.prescriptionId = localStorage.getItem('prescriptionId');
    this.getBillDoctorId();
  }



  billCreate() {
    if (this.newbillArray.length != 0) {
      this.eConsultBill = {
        particular: this.particular,
        amount: parseInt(this.EConsultfee)
      }
      this.billDataArray.push(this.eConsultBill);
      this.billInfo = {
        bill: this.billDataArray,
        doctorId: this.doctorProfileId,
        individualId: this.callerData.callerId,
        grandTotal: parseInt(this.grandTotal),
        appointmentType: this.appointmentType
      }
    }
    else {
      let noBill = [{
        particular: this.particular,
        amount: parseInt(this.EConsultfee)
      }];
      this.billInfo = {
        // ePrescriptionId: this.prescriptionId,
        bill: noBill,
        doctorId: this.doctorProfileId,
        individualId: this.callerData.callerId,
        grandTotal: parseInt(this.grandTotal),
        appointmentType: this.appointmentType
      }
    }
    console.log(this.billInfo)
    this.billService.createBill(this.prescriptionId, this.billInfo).subscribe(result => {
      console.log('bill created', result);
      this.newbillArray = [];
      this.grandTotal = parseInt(this.EConsultfee);
      this.eConsultfee = this.EConsultfee;
      // this.sharedService.prescriptionId({});
      let notifydata = {
        type: 'success',
        title: 'Bill',
        msg: '  Created Succesfully'
      }
      this.sharedService.createNotification(notifydata);
      // this.socketService.sendMessage('changeStatus',{doctorId:localStorage.getItem('loginId')});
      localStorage.removeItem('prescriptionId')
      this.router.navigate(['/dashboard/main']);

    }, err => {
      console.log(err)
    });
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

  //  to find grand total of bill
  findsum(data, i) {
    if (Object.keys(data).length != 0 && data.particular && data.amount) {

      if (i < this.billDataArray.length) {
        this.billDataArray[i] = data;
        this.grandTotal = parseInt(this.EConsultfee);
        for (let j = 0; j < this.billDataArray.length; j++) {
          this.grandTotal = parseInt(this.billDataArray[j].amount) + this.grandTotal;
          this.eConsultfee = this.grandTotal;
        }


      }
      else {

        this.billDataArray.push(data);
        this.grandTotal = parseInt(this.EConsultfee)
        console.log(this.billDataArray);
        for (let j = 0; j < this.billDataArray.length; j++) {

          this.grandTotal = parseInt(this.billDataArray[j].amount) + this.grandTotal;
          //   console.log(this.billDataArray)
          this.eConsultfee = this.grandTotal;
        }

      }
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
  reflectFee(data) {

    if (data) {
      if (this.billDataArray.length != 0) {
        this.grandTotal = parseInt(data);
        for (let j = 0; j < this.billDataArray.length; j++) {

          this.grandTotal = parseInt(this.billDataArray[j].amount) + this.grandTotal;
          //   console.log(this.billDataArray)
          this.eConsultfee = this.grandTotal;
        }
      }
      else {
        this.grandTotal = this.EConsultfee;
      }

    }
    else {
      this.grandTotal = 0;
    }
  }


  //cancel bill creation
  billCancel() {
    this.router.navigate(['/dashboard/consultnew/diagnosis']);

  }


}
