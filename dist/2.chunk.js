webpackJsonp([2],{

/***/ "../../../../../src/app/dashboard/consult/bills/bills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ************************RaiseBill****************************** */\n\ndiv#padding-o {\n    padding: 0;\n  }\n  \n  div#padding_left {\n    padding-left: 0;\n  }\n  .bill_input {\n    margin-top: 20px;\n  }\n  button.raise_bill2 {\n    border: 2px solid #fff;\n    background: transparent;\n    border-radius: 50px;\n    outline: none;\n    cursor: pointer;\n    color: #fff;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    width: 94px;\n    height: 37px;\n    margin: 10px 0;\n  }\n/* .card {\n    box-shadow: 0px 1px 13px 0px rgba(23, 23, 25, 0.15);\n    border-radius: 5px;\n} */\n  .cancelbtn{\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #909090;\n    line-height: 35px;\n    font-size: 13px;\n    padding: 0 8px 0px 8px;\n    color: #909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 101px;\n    outline:none;\n    margin-left: 10px;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n}\n  section.Raise_Bill .card {\n    border-radius: 5px;\n    padding: 0;\n    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.08);\n  }\n  \n  .card.card_red {\n    margin-top: 24px;\n    background: #3ad87b;\n  }\n  \n  button.raise_bill2:hover {\n    background: #fff;\n    color: #3ad87b;\n  }\n  \n  .bill_content {\n    color: #fff;\n    margin-top: 10px;\n    font-size: 24px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n  }\n  \n  p.raise_rupees {\n    margin-top: 8px;\n    font-size: 20px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n  }\n  \n  .bill_input input[type=\"text\"] {\n    font-size: 13px;\n    color: rgb(132, 134, 157);\n    border-bottom: 1px solid rgba(132, 134, 157, 0.58);\n    font-family: 'Lato', sans-serif;\n  }\n  \n  .bill_input input[type=\"text\"]:-ms-input-placeholder {\n    font-size: 13px;\n    color: rgb(132, 134, 157);\n    font-family: 'Lato', sans-serif;\n  }\n  \n  .bill_input input[type=\"text\"]::placeholder {\n    font-size: 13px;\n    color: rgb(132, 134, 157);\n    font-family: 'Lato', sans-serif;\n  }\n  \n  div#margin_bottom {\n    margin-bottom: 0;\n  }\n  \n  .bill_heading {\n    background: linear-gradient(to right, rgba(86, 127, 251, 1), rgba(182, 108, 245, 1));\n    color: #fff;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    border-radius: 5px 5px 0 0;\n    padding: 16px 0 0px 0;\n  }\n  \n  .bill_heading p {\n    margin-bottom: 16px;\n  }\n  p.total {\n    margin-top: 8px;\n    font-size: 17px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    color: #000;\n    text-align: center;\n  }\n  \n  p.grand {\n    margin-top: 8px;\n    font-size: 17px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    color: #000;\n    padding-bottom: 1em;\n  }\n  .plus_btn2.pull-right {\n    position: relative;\n  }\n  button.plus2 {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    position: absolute;\n    bottom: 23px;\n    right: 23px;\n    width: 40px;\n    color: #fff;\n    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2);\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n  }\n  button.plus2:hover {\n    background: #08b9b1;\n  }\n  svg#cance_lbtn {\n    height: 11px;\n    width: 11px;\n    margin-top: 14px;\n  }\n  button.cross_btn {\n    background: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n  }\n  \n  button.invoice {\n    border-radius: 50px;\n    outline: none;\n    cursor: pointer;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    font-size: 13px;\n    height: 37px;\n    width: 99px;\n    background: transparent;\n    color: #09bab1;\n    border: 1px solid #09bab1;\n    padding: 0;\n  }\n  \n  .invoice_btn {\n    text-align: center;\n  }\n  \n  button.invoice:hover {\n    color:#fff;\n    background: #09bab1;\n  }\n  \n  \n  /* ************************RaiseBill****************************** */\n  /* ************************Responsive****************************** */\n  @media only screen and (min-width: 320px) and (max-width:767px){\n    div#padding_left {\n        padding-left: 15px;\n    }\n    p.raise_rupees{\n      display: none;\n  }\n  }\n  @media only screen and (min-width: 767px) and (max-width:1024px) and (orientation:portrait){\n    div#padding_left {\n        padding-left: 15px;\n    }\n  }\n  @media only screen and (min-width: 767px) and (max-width:1024px) and (orientation:landscape){\n    p.raise_rupees{\n      display: none;\n  }\n  }\n  /* ************************Responsive****************************** */\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/bills/bills.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- ************************RaiseBill****************************** -->\n<section class=\"Raise_Bill\">\n  <!-- <div class=\"row\">\n    <div class=\"col-md-12\" id=\"padding-o\">\n      <div class=\"row\"> -->\n        <!-- *******************RaiseBill****************************** -->\n        <div class=\"col-md-12\" id=\"padding_left\" >\n          <!-- <div class=\"row\" id=\"margin_bottom\">\n            <div class=\"card card_red\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"col-md-6 col-xs-6\">\n                    <div class=\"bill_content\">{{eConsultfee}}\n                    </div>\n                  </div>\n                  <div class=\"col-md-6 col-xs-6 text-right\">\n                    <button class=\"raise_bill2\" (click)=\"openRaiseBill()\">Raise Bill</button>\n                   \n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div> -->\n          <div class=\"row\"  >\n            <div class=\"bill_input\">\n              <div class=\"card\">\n                <div class=\"bill_heading\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"col-md-6 col-xs-6\">\n                        <p>Particular</p>\n                      </div>\n                      <div class=\"col-md-6 col-xs-6\">\n                        <p class=\"amnt\">Amount</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <form>\n                  <div class=\"row\" id=\"margin_bottom\">\n                    <div class=\"col-md-12\">\n                      <div class=\"col-md-6 col-xs-6\">\n                        <input type=\"text\" placeholder=\"Particular\"  [(ngModel)]=\"particular\" [ngModelOptions]=\"{standalone: true}\">\n                      </div>\n                     \n                      <div class=\"col-md-6 col-xs-6\">\n                        <div class=\"col-md-2 col-xs-2\">\n                          <p class=\"raise_rupees\">₹</p>\n                        </div>\n                       \n                        <div class=\"col-md-8 col-xs-6\" id=\"padding-o\">\n                          <input type=\"text\" placeholder=\"Amount\"   [textMask]=\"{mask: mask, guide: false}\" [(ngModel)]=\"EConsultfee\" (ngModelChange)=\"reflectFee(EConsultfee)\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                        <!-- <div class=\"col-md-2 col-xs-2\">\n                          <button class=\"cross_btn\">\n                          <svg version=\"1.1\" id=\"cance_lbtn\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                            y=\"0px\" viewBox=\"0 0 212.982 212.982\" style=\"enable-background:new 0 0 212.982 212.982;\" xml:space=\"preserve\">\n                            <g id=\"Close\">\n                              <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312\n                           c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312\n                           l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937\n                           c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z\" />\n                            </g>\n                          </svg>\n                          </button>\n                        </div> -->\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\" id=\"margin_bottom\"  *ngIf=\"newbillArray?.length != 0\">\n                      <div class=\"col-md-12\"*ngFor=\"let bill of newbillArray; let i = index\">\n  \n                        <div class=\"col-md-6 col-xs-6\">\n                          <input type=\"text\" placeholder=\"Particular\" [(ngModel)]=\"bill.particular\" [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                        <div class=\"col-md-6 col-xs-6\">\n                          <div class=\"col-md-2 col-xs-2\">\n                            <p class=\"raise_rupees\">₹</p>\n                          </div>\n                          <div class=\"col-md-8 col-xs-6\" id=\"padding-o\">\n                            <input type=\"text\" placeholder=\"Amount\" [textMask]=\"{mask: mask, guide: false}\" [(ngModel)]=\"bill.amount\" (keyup)=\"findsum(bill,i)\" [ngModelOptions]=\"{standalone: true}\">\n                          </div>\n                          <div class=\"col-md-2 col-xs-2\">\n                            <button class=\"cross_btn\" (click)=\"removeBill(bill,i)\">\n                            <svg version=\"1.1\" id=\"cance_lbtn\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                              y=\"0px\" viewBox=\"0 0 212.982 212.982\" style=\"enable-background:new 0 0 212.982 212.982;\" xml:space=\"preserve\">\n                              <g id=\"Close\">\n                                <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312\n                             c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312\n                             l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937\n                             c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z\" />\n                              </g>\n                            </svg>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                      <!-- <div class=\"row\" id=\"margin_bottom\" *ngFor=\"let bill of newbillArray; let i = index\" >\n                        <div class=\"col-md-12\">\n    \n                          <div class=\"col-md-6 col-xs-6\">\n                            <input type=\"text\" placeholder=\"Particular\"  [(ngModel)]=\"bill.particular\">\n                          </div>\n                          <div class=\"col-md-6 col-xs-6\">\n                            <div class=\"col-md-2 col-xs-2\">\n                              <p class=\"raise_rupees\">₹</p>\n                            </div>\n                            <div class=\"col-md-8 col-xs-6\" id=\"padding-o\">\n                              <input type=\"text\" placeholder=\"Amount\"  [(ngModel)]=\"bill.amount\" (blur)=\"findsum(bill)\">\n                            </div>\n                            <div class=\"col-md-2 col-xs-2\">\n                              <button class=\"cross_btn\">\n                              <svg version=\"1.1\" id=\"cance_lbtn\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                                y=\"0px\" viewBox=\"0 0 212.982 212.982\" style=\"enable-background:new 0 0 212.982 212.982;\" xml:space=\"preserve\">\n                                <g id=\"Close\">\n                                  <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312\n                               c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312\n                               l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937\n                               c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z\" />\n                                </g>\n                              </svg>\n                              </button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>   -->\n\n                  <div class=\"row\">\n                    <div class=\"col-md-12\">\n                      <div class=\"col-md-6 col-xs-6\">\n                        <p class=\"grand\">Grand Total</p>\n                      </div>\n                      <div class=\"col-md-6 col-xs-6\">\n                        <p class=\"total\">{{grandTotal}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" >\n            <div class=\"plus_btn2 pull-right\">\n              <button class=\"plus2\" (click)=\"addNewbill()\" >+</button>\n            </div>\n          </div>\n          <div class=\"row\" >\n            <div class=\"invoice_btn\">\n              <button class=\"invoice\" (click)=\"billCreate()\">Make Invoice</button>\n              <button class=\"cancelbtn\" (click)=\"billCancel()\">Cancel</button>\n\n            </div>\n          </div>\n        </div>\n        <!-- *******************RaiseBill****************************** -->\n        <!-- *******************Video****************************** -->\n        <!-- <div class=\"col-md-5\" id=\"padding-o\"> -->\n          <!-- <app-rightsidenav></app-rightsidenav> -->\n        <!-- </div> -->\n        <!-- *******************Video****************************** -->\n      <!-- </div>\n    </div>\n  </div> -->\n</section>\n<!-- ************************RaiseBill****************************** -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/bills/bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meme_services_bill_service__ = __webpack_require__("../../../../../src/app/meme-services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meme_services_socket_service__ = __webpack_require__("../../../../../src/app/meme-services/socket.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillsComponent = (function () {
    function BillsComponent(socketService, billService, sharedService, router, route) {
        var _this = this;
        this.socketService = socketService;
        this.billService = billService;
        this.sharedService = sharedService;
        this.router = router;
        this.route = route;
        // raisebillForm: boolean = false;
        this.particular = 'eConsultFee';
        this.grandTotal = 0;
        this.show = false;
        this.billDataArray = [];
        this.newbillArray = [];
        this.showForm = true;
        this.callerData = {};
        this.mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // fee validation 
        // get individual details
        this.route.queryParams.subscribe(function (param) {
            if (Object.keys(param).length != 0) {
                _this.callerData.callerId = param['callerId'];
            }
            // this.callerData.callerEasyRTC= param['callerEasyRTC'];
            // this.callerData.roomId= param['roomId'];
        });
        // get prescription id
        this.sharedService.doctorDetails.subscribe(function (data) {
            if (Object.keys(data).length != 0) {
                _this.eConsultfee = data.eConsultFee;
                // this.total = this.eConsultfee;
                _this.EConsultfee = _this.eConsultfee;
                _this.grandTotal = _this.grandTotal + parseInt(_this.eConsultfee);
                // this.fee = data.eConsultFee;
            }
        });
        this.sharedService.appointmentType.subscribe(function (data) {
            if (Object.keys(data).length != 0) {
                _this.appointmentType = data.type;
                _this.callerData.callerId = data.individualId;
            }
            else {
                _this.appointmentType = 'eConsult';
            }
        });
        this.sharedService.clinicVisit.subscribe(function (data) {
            if (data == true) {
                _this.particular = 'clinicVisit fee';
            }
        });
    }
    // send url path name to change navbar colour
    // this.pathName = (route.snapshot.url)[0].path;
    // this.sharedService.setPath(this.pathName)
    BillsComponent.prototype.ngOnInit = function () {
        this.doctorProfileId = localStorage.getItem('loginId');
        this.prescriptionId = localStorage.getItem('prescriptionId');
        this.getBillDoctorId();
    };
    BillsComponent.prototype.billCreate = function () {
        var _this = this;
        if (this.newbillArray.length != 0) {
            this.eConsultBill = {
                particular: this.particular,
                amount: parseInt(this.EConsultfee)
            };
            this.billDataArray.push(this.eConsultBill);
            this.billInfo = {
                bill: this.billDataArray,
                doctorId: this.doctorProfileId,
                individualId: this.callerData.callerId,
                grandTotal: parseInt(this.grandTotal),
                appointmentType: this.appointmentType
            };
        }
        else {
            var noBill = [{
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
            };
        }
        console.log(this.billInfo);
        this.billService.createBill(this.prescriptionId, this.billInfo).subscribe(function (result) {
            console.log('bill created', result);
            _this.newbillArray = [];
            _this.grandTotal = parseInt(_this.EConsultfee);
            _this.eConsultfee = _this.EConsultfee;
            // this.sharedService.prescriptionId({});
            var notifydata = {
                type: 'success',
                title: 'Bill',
                msg: '  Created Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            // this.socketService.sendMessage('changeStatus',{doctorId:localStorage.getItem('loginId')});
            localStorage.removeItem('prescriptionId');
            _this.router.navigate(['/dashboard/main']);
        }, function (err) {
            console.log(err);
        });
    };
    // get bill by Prescriptionid
    BillsComponent.prototype.getBillPrescriptionId = function () {
        this.billService.getByPrescriptionId(this.prescriptionId).subscribe(function (data) {
            console.log(data);
        }, function (err) {
        });
    };
    // get bill by Prescriptionid
    BillsComponent.prototype.getBillDoctorId = function () {
        this.billService.getByDoctorId(localStorage.getItem('loginId')).subscribe(function (data) {
            console.log('list of bills', data);
        }, function (err) {
        });
    };
    //  to find grand total of bill
    BillsComponent.prototype.findsum = function (data, i) {
        if (Object.keys(data).length != 0 && data.particular && data.amount) {
            if (i < this.billDataArray.length) {
                this.billDataArray[i] = data;
                this.grandTotal = parseInt(this.EConsultfee);
                for (var j = 0; j < this.billDataArray.length; j++) {
                    this.grandTotal = parseInt(this.billDataArray[j].amount) + this.grandTotal;
                    this.eConsultfee = this.grandTotal;
                }
            }
            else {
                this.billDataArray.push(data);
                this.grandTotal = parseInt(this.EConsultfee);
                console.log(this.billDataArray);
                for (var j = 0; j < this.billDataArray.length; j++) {
                    this.grandTotal = parseInt(this.billDataArray[j].amount) + this.grandTotal;
                    //   console.log(this.billDataArray)
                    this.eConsultfee = this.grandTotal;
                }
            }
        }
    };
    // to add new bill form
    BillsComponent.prototype.addNewbill = function () {
        this.newbillArray.push({});
    };
    // to remove particular bill
    BillsComponent.prototype.removeBill = function (bill, i) {
        if (i !== -1) {
            this.newbillArray.splice(i, 1);
            if (Object.keys(bill).length != 0 && bill.particular && bill.amount) {
                this.billDataArray.splice(i, 1);
                this.grandTotal = this.grandTotal - parseInt(bill.amount);
                this.eConsultfee = this.grandTotal;
            }
        }
    };
    // reflect econsult fee
    BillsComponent.prototype.reflectFee = function (data) {
        if (data) {
            if (this.billDataArray.length != 0) {
                this.grandTotal = parseInt(data);
                for (var j = 0; j < this.billDataArray.length; j++) {
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
    };
    //cancel bill creation
    BillsComponent.prototype.billCancel = function () {
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    BillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bills',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/bills/bills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/bills/bills.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__meme_services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__meme_services_socket_service__["a" /* SocketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__meme_services_bill_service__["a" /* BillService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__meme_services_bill_service__["a" /* BillService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
    ], BillsComponent);
    return BillsComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=bills.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/consult.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nopadding0col{\n    padding: 0;\n}\n.nomaregin0row{\n    margin: 0;\n}\n.nopadding15col{\n    padding-left: 0;\n}\n@media screen and (min-width: 320px) and (max-width: 1024px) \n{\n    .nopadding0col{\n        padding: 0 15px;\n    }\n    .nopadding15col{\n        padding-left: 15px;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/consult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row nomaregin0row\">\n  <div class=\"col-md-7 nopadding15col\">\n  <router-outlet></router-outlet>\n  </div>\n  <div class=\"col-md-5 nopadding0col\">\n    <app-video [callerData]=\"callerData\"></app-video>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/consult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meme_services_socket_service__ = __webpack_require__("../../../../../src/app/meme-services/socket.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsultComponent = (function () {
    function ConsultComponent(route, socketService, router, sharedService) {
        var _this = this;
        this.route = route;
        this.socketService = socketService;
        this.router = router;
        this.sharedService = sharedService;
        this.callerData = {};
        // this.socketService.connect();
        this.route.queryParams.subscribe(function (param) {
            console.log(param);
            _this.callerData.callerId = param['callerId'];
            _this.callerData.callerEasyRTC = param['callerEasyRTC'];
            _this.callerData.roomId = param['roomId'];
        });
    }
    ConsultComponent.prototype.ngOnInit = function () {
    };
    ConsultComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-consult',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/consult.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/consult.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__meme_services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__meme_services_socket_service__["a" /* SocketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _d || Object])
    ], ConsultComponent);
    return ConsultComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=consult.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/consult.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_filter_pipe__ = __webpack_require__("../../../../ngx-filter-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__video_video_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/video/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__consult_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/consult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__diagnosis_diagnosis_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/diagnosis/diagnosis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bills_bills_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/bills/bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__diagnosis_form_diagnosis_form_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/diagnosis-form/diagnosis-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__medicine_medicine_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/medicine/medicine.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__suggest_suggest_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/suggest/suggest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__instruction_instruction_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/instruction/instruction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lifestyle_lifestyle_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/lifestyle/lifestyle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__follow_up_follow_up_component__ = __webpack_require__("../../../../../src/app/dashboard/consult/follow-up/follow-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultModule", function() { return ConsultModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__consult_component__["a" /* ConsultComponent */],
        children: [
            { path: '', redirectTo: 'diagnosis', pathMatch: 'full' },
            { path: 'diagnosis', component: __WEBPACK_IMPORTED_MODULE_8__diagnosis_diagnosis_component__["a" /* DiagnosisComponent */] },
            { path: 'bill', component: __WEBPACK_IMPORTED_MODULE_9__bills_bills_component__["a" /* BillsComponent */] },
            { path: 'diagnosisform', component: __WEBPACK_IMPORTED_MODULE_10__diagnosis_form_diagnosis_form_component__["a" /* DiagnosisFormComponent */] },
            { path: 'diagnosisform/:id', component: __WEBPACK_IMPORTED_MODULE_10__diagnosis_form_diagnosis_form_component__["a" /* DiagnosisFormComponent */] },
            { path: 'medicare', component: __WEBPACK_IMPORTED_MODULE_11__medicine_medicine_component__["a" /* MedicineComponent */] },
            { path: 'medicare/:id', component: __WEBPACK_IMPORTED_MODULE_11__medicine_medicine_component__["a" /* MedicineComponent */] },
            { path: 'suggest', component: __WEBPACK_IMPORTED_MODULE_12__suggest_suggest_component__["a" /* SuggestComponent */] },
            { path: 'suggest/:id', component: __WEBPACK_IMPORTED_MODULE_12__suggest_suggest_component__["a" /* SuggestComponent */] },
            { path: 'instruction', component: __WEBPACK_IMPORTED_MODULE_13__instruction_instruction_component__["a" /* InstructionComponent */] },
            { path: 'instruction/:id', component: __WEBPACK_IMPORTED_MODULE_13__instruction_instruction_component__["a" /* InstructionComponent */] },
            { path: 'lifestyle', component: __WEBPACK_IMPORTED_MODULE_14__lifestyle_lifestyle_component__["a" /* LifestyleComponent */] },
            { path: 'lifestyle/:id', component: __WEBPACK_IMPORTED_MODULE_14__lifestyle_lifestyle_component__["a" /* LifestyleComponent */] },
            { path: 'followup', component: __WEBPACK_IMPORTED_MODULE_15__follow_up_follow_up_component__["a" /* FollowUpComponent */] },
            { path: 'followup/:id', component: __WEBPACK_IMPORTED_MODULE_15__follow_up_follow_up_component__["a" /* FollowUpComponent */] },
            { path: 'lifestyle/:id', component: __WEBPACK_IMPORTED_MODULE_14__lifestyle_lifestyle_component__["a" /* LifestyleComponent */] }
        ]
    }
];
var ConsultModule = (function () {
    function ConsultModule() {
    }
    ConsultModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_16_ng2_completer__["a" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4_ngx_filter_pipe__["FilterPipeModule"],
                __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_filter_pipe__["FilterPipeModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__consult_component__["a" /* ConsultComponent */], __WEBPACK_IMPORTED_MODULE_6__video_video_component__["a" /* VideoComponent */], __WEBPACK_IMPORTED_MODULE_8__diagnosis_diagnosis_component__["a" /* DiagnosisComponent */], __WEBPACK_IMPORTED_MODULE_9__bills_bills_component__["a" /* BillsComponent */], __WEBPACK_IMPORTED_MODULE_10__diagnosis_form_diagnosis_form_component__["a" /* DiagnosisFormComponent */], __WEBPACK_IMPORTED_MODULE_11__medicine_medicine_component__["a" /* MedicineComponent */], __WEBPACK_IMPORTED_MODULE_12__suggest_suggest_component__["a" /* SuggestComponent */], __WEBPACK_IMPORTED_MODULE_13__instruction_instruction_component__["a" /* InstructionComponent */], __WEBPACK_IMPORTED_MODULE_14__lifestyle_lifestyle_component__["a" /* LifestyleComponent */], __WEBPACK_IMPORTED_MODULE_15__follow_up_follow_up_component__["a" /* FollowUpComponent */]]
        })
    ], ConsultModule);
    return ConsultModule;
}());

//# sourceMappingURL=consult.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/diagnosis-form/diagnosis-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.prescribebtn {\n    /* margin-right: 10px;\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #09bab1;\n    line-height: 25px;\n    font-size: 13px;\n    height:34px;\n    padding: 0 8px 0px 8px;\n    color: #09bab1;\n    font-family: Lato;\n    font-weight: 500!important;\n    width: 85px; */\n    background: transparent;\n    line-height: 30px;\n    width: 77px;\n    color: #09bab1;\n    font-size: 14px;\n    font-weight: 400;\n    font-family: 'Roboto',sans-serif;\n    border: 1px solid #09bab1;\n    border-radius: 20px;\n    margin: 4px 10px 0px 0;\n    padding: 0;\n}\n.prescribebtn:focus{\noutline:none;\n}\n.prescribebtn:hover{\nbackground: #09bab1;\ncolor: #fff;\nfont-family: lato;\nfont-weight: 600;\n}\n.cancelbtn{\n    /* border-radius: 50px;\n    background: #ffffff;\n    border: 0.5px solid #3c84fd;\n    line-height: 25px;\n    font-size: 13px;\n    height: 34px;\n    padding: 0 8px 0px 8px;\n    color:#3c84fd;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px; */\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #909090;\n    line-height: 30px;\n    font-size: 13px;\n    padding: 0 8px 0px 8px;\n    color: #909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px;\n}\n.cancelbtn:focus{\n    outline:none;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n   border:none;\n}\n.card.cardabc{\n    border: none;\n    box-shadow: 1px 1px 20px 4px #edf0fd;\n    border-radius: 6px;\n    padding: 20px;\n    margin: -1.5rem 0 1rem 0;\n    padding-top:0 !important;\n}\n.card.cardabc.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\np.provisionalc21 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    margin-left: 8px;\n    color: #8c8db8;\n}\ninput.referdoc {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\ninput.referdoc::-webkit-input-placeholder {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\ninput.referdoc:focus {\n    box-shadow: none;\n}\n.high {\n    padding-bottom: 20px;\n    padding-top: 1em;\n}\n.card-body {\n    padding-top: 7px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/diagnosis-form/diagnosis-form.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"provisionalc21\">Provisional Diagnosis</p>\n<div class=\"card cardabc custom-card\" >\n  <div class=\"card-body\">\n     <!-- <span [ngStyle]=\"{'-webkit-text-fill-color':'\tred'}\">{{messageDiagnosis}}</span> -->\n     <p [ngStyle]=\"{'-webkit-text-fill-color':'\tred', 'text-align':'center'}\">{{message}}</p>\n      <form [formGroup]=\"diagnosisFormNew\" novalidate>\n\n      <input type=\"text\" name=\"fname\" placeholder=\"Diagnosis for\" class=\"referdoc\"  formControlName=\"diagnosisFor\">\n      <span [ngStyle]=\"{'-webkit-text-fill-color':'\tred'}\" *ngIf=\"diagnosisFormErrors.diagnosisFor.required\">Please Provide Diagnosis Type</span>\n      <input type=\"text\" name=\"fname\" placeholder=\"Diagnosis brief\" class=\"referdoc\" formControlName=\"diagnosisBrief\">\n\n    </form>\n\n    \n  </div>\n</div>\n<div class=\"text-center high\" >\n    <button class=\"prescribebtn\" (click)=\"saveDiagnosis()\">Save</button>\n    <!-- <button class=\"prescribebtn\" *ngIf=\"hideSaveplus\" (click)=\"savePlus()\">SAVE +</button> -->\n    <button class=\"prescribebtn\" *ngIf=\"hideDelete\" (click)=\"deleteDiagnosisForm()\" >Delete</button>\n    <button class=\"cancelbtn\" (click)=\"closeForm()\">Cancel</button>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/diagnosis-form/diagnosis-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { RouterLink, ActivatedRoute, Router } from '@angular/router';



var DiagnosisFormComponent = (function () {
    function DiagnosisFormComponent(router, formBuilder, ePrescriptionService, sharedService, activatedRoute) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.ePrescriptionService = ePrescriptionService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.diagnosisArray = [];
        this.hideDelete = false;
        this.message = '';
        this.diagnosisFormErrors = {
            diagnosisFor: {}
        };
        this.prescriptionId = localStorage.getItem('prescriptionId');
    }
    DiagnosisFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnosisFormNew = this.creatediagnosisForm();
        this.diagnosisFormNew.valueChanges.subscribe(function () {
            _this.onDiagnosisFormValuesChanged();
        });
        this.activatedRoute.params.subscribe(function (params) {
            if (Object.keys(params).length != 0) {
                _this.diagnosisFormId = params['id'];
                _this.getDiagnosisValue(_this.diagnosisFormId);
                _this.hideDelete = true;
            }
        });
    };
    DiagnosisFormComponent.prototype.creatediagnosisForm = function () {
        return this.formBuilder.group({
            diagnosisFor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            diagnosisBrief: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]],
        });
    };
    DiagnosisFormComponent.prototype.onDiagnosisFormValuesChanged = function () {
        this.message = "";
        for (var field in this.diagnosisFormErrors) {
            if (!this.diagnosisFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.diagnosisFormErrors[field] = {};
            // Get the control
            var control = this.diagnosisFormNew.get(field);
            if (control && control.dirty && !control.valid) {
                this.diagnosisFormErrors[field] = control.errors;
            }
        }
    };
    // savePlus() {
    //   this.message='';
    //   this.messageDiagnosis = '';
    //   if (this.diagnosisFormNew.valid) {
    //     this.ePrescriptionService.createDiagnosis(this.prescriptionId, this.diagnosisFormNew.value).subscribe(result => {
    //       console.log(result);
    //       let notifydata = {
    //         type: 'success',
    //         title: 'Diagnosis',
    //         msg: 'Created Succesfully !'
    //       }
    //       this.sharedService.createNotification(notifydata);
    //       this.diagnosisFormNew.reset();
    //     }, err => {
    //     })
    //   }
    //   else {
    //     this.messageDiagnosis = "Please Enter Credentials";
    //   }
    // }
    //create diagnosis prescription
    DiagnosisFormComponent.prototype.saveDiagnosis = function () {
        var _this = this;
        this.message = '';
        // this.messageDiagnosis = '';
        if (this.diagnosisFormId) {
            this.updateDiagnosis();
        }
        else {
            if (this.diagnosisFormNew.valid) {
                this.ePrescriptionService.createDiagnosis(this.prescriptionId, this.diagnosisFormNew.value).subscribe(function (result) {
                    console.log(result);
                    var notifydata = {
                        type: 'success',
                        title: 'Diagnosis',
                        msg: 'Created Succesfully !'
                    };
                    _this.sharedService.createNotification(notifydata);
                    _this.router.navigate(['/dashboard/consultnew/diagnosis']);
                }, function (err) {
                });
            }
            else {
                this.message = "Please Enter Credentials";
            }
        }
    };
    DiagnosisFormComponent.prototype.closeForm = function () {
        this.diagnosisFormNew.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    // get diagnosisdata by id
    DiagnosisFormComponent.prototype.getDiagnosisValue = function (id) {
        var _this = this;
        this.ePrescriptionService.getDiagnosisById(id).subscribe(function (result) {
            console.log(result);
            _this.prescriptionDetail = result.result;
            _this.diagnosisFormNew.controls.diagnosisFor.setValue(_this.prescriptionDetail.diagnosisFor);
            _this.diagnosisFormNew.controls.diagnosisBrief.setValue(_this.prescriptionDetail.diagnosisBrief);
        }, function (err) {
        });
    };
    //update diagnosis details
    DiagnosisFormComponent.prototype.updateDiagnosis = function () {
        var _this = this;
        if (this.diagnosisFormNew.valid) {
            var data = {
                diagnosisId: this.diagnosisFormId,
                diagnosisFor: this.diagnosisFormNew.value.diagnosisFor,
                diagnosisBrief: this.diagnosisFormNew.value.diagnosisBrief
            };
            this.ePrescriptionService.updateDiagnosisDetail(data).subscribe(function (result) {
                console.log(result);
                var notifydata = {
                    type: 'success',
                    title: 'Diagnosis',
                    msg: 'Updated Succesfully !'
                };
                _this.sharedService.createNotification(notifydata);
                _this.diagnosisFormNew.reset();
                _this.router.navigate(['/dashboard/consultnew/diagnosis']);
            }, function (err) {
            });
        }
    };
    // delete  selected diagnosis form
    DiagnosisFormComponent.prototype.deleteDiagnosisForm = function () {
        var _this = this;
        this.ePrescriptionService.deleteDiagnosis(this.prescriptionId, this.diagnosisFormId).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Diagnosis',
                msg: 'Deleted Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    DiagnosisFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-diagnosis-form',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/diagnosis-form/diagnosis-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/diagnosis-form/diagnosis-form.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
    ], DiagnosisFormComponent);
    return DiagnosisFormComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=diagnosis-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/diagnosis/diagnosis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, " \n \n \n /* ************************************econsultdiagnosis*********************************  */\n/* card1 */\n\n.col-md-4.col-xs-4:focus {\n    outline: none;\n}\nsection.econsultdiagnosis {\n    background: #f8f8ff;\n    height: 100vh;\n    overflow:hidden;\n}\ndiv#padding-o {\n    padding: 0;\n}\ndiv#marbtm-0 {\n    margin-bottom:0px;\n   }\n.card {\n    box-shadow: 0px 1px 13px 0px rgba(23, 23, 25, 0.15);\n    border-radius: 5px;\n}\nsvg#pencil {\n    fill: #fff;\n    height: 27px;\n    float: right;\n    width: 19px;\n    padding: 3px;\n    margin-left: 5px;\n}\n.diagnosis:hover p {\n    color: #6048de;\n}\n.diagnosis:hover svg{\n    fill: #6048de !important;\n}\n.edit_icon {\n    background: #378ff8;\n    border-radius: 2px 4px 3px 28px;\n    float: right;\n}\nbutton.edit {\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n}\np.provisionalc2 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    color: #8c8db8;\n}\np.provisionalc1 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    color: #8c8db8;\n}\n.consult_text {\n    margin-top: 8px;\n\n    color: #8c8db8;\n}\np.serenity {\n    font-family: Lato;\n    font-size: 17px;\n    width: 96%;\n    color: #8b8ab6;\n    text-align: left;\n    line-height: 18px;\n    font-weight: 500\n}\n.space {\n    height: 53vh;\n    overflow-y: scroll;\n    padding:0 15px;\n}\n/* .space::-webkit-scrollbar { \n    display: none;\n  } */\n\nsvg#dot2 {\n    fill: rgba(149, 149, 149, 0.5);\n    height: 15px;\n    width: auto;\n    margin-top: 19px\n}\n.plus_btn {\n    margin-top: 2em;\n}\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\nbutton.plus {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    width: 40px;\n    color: #fff;\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n}\n.bottom0 {\n    margin-bottom: 0;\n}\nbutton.raise {\n    border-radius: 0 26px 26px 0;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-family: 'Lato', sans-serif;\n    font-size: 22px;\n    position: absolute;\n    left: -6%;\n    height: 44px;\n    text-align: left;\n    width: 92px;\n    color: #fff;\n    background: #ff0c52;\n}\np.raise_i {\n    line-height: 0px;\n    color: rgba(255, 255, 255, 0.81);\n    font-size: 10px;\n}\ndiv#orderjqueryt {\n    padding-left: 0;\n}\ndiv#orderjqueryv {\n    padding-right: 0;\n\n}\np.Angleso {\n    font-weight: 400;\n    font-size: 12px;\n    color: rgba(140, 141, 184, 0.85);\n    padding: 18px 8px;\n    margin-bottom: 0;\n}\np.serenity2 {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 15px;\n    color: rgba(140, 141, 184, 0.85);\n}\n.btn_txt {\n    margin-top: 4em;\n}\n.btnalign\n{\n    float: right;\n}\n.nopaddingrt{\n    padding-right: 0;\n}\nspan.rs {\n    font-family: Roboto;\n    font-size: 19px;\n}\nspan.rssign {\n    font-size: 16px;\n    font-family: Roboto;\n    font-weight: 300;\n    margin-right: 4px;\n}\n/* .card_texte {\n    overflow-y: scroll;\n    height: 115px;\n} */\n/* card1 */\n /* ************************************econsultdiagnosis*********************************  */\n /* ****Responsive**** */\n@media only screen and (min-width: 320px) and (max-width:767px){\n\n\n    .flexres\n    {\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    }\n\n  .responsiveorder2 {\n        -ms-flex-order: 2;\n            order: 2;\n    }\n   .responsiveorder1 {\n        -ms-flex-order: 1;\n            order: 1;\n    }\n    \n    /* .edit_icon {\n        border-radius: 25px 0px 0 0px;\n    } */\n   \n    div#orderjqueryv {\n       padding:15px;\n    \n    }\n    section.econsultdiagnosis{\n        background: #f8f8ff;\n        height: auto;\n        overflow:visible;\n    }\n    button.raise {\n        left: -5%;\n    }\n    div#padding_l {\n        padding-left: inherit;\n    }\n    div#padding_r {\n        padding-right: inherit;\n    \n    }\n}\n    /* ****Responsive**** */\n\n    /* *************************prescription css starts******************* */\n    .card.prescribe {\n        box-shadow: 0px 1px 13px 0px rgba(23, 23, 25, 0.15);\n        border-radius: 5px;\n        text-align: center;\n        padding: 14px 0 3px 0px;\n        margin-top: 1em;\n    }\n    .fixedwith{\n        position: -webkit-sticky;\n        position: sticky;\n        width: 100%;\n        bottom: 0;\n    }\n    svg#medi {\n        height: 41px!important;\n        width: 29px!important;\n        vertical-align: middle;\n        fill: #6048de;\n    }\n      /* svg#medi:hover{\n          fill: #6048de;\n      } */\n      .prescribe{\n        font-size: 14px;\n        text-align: center;\n        cursor: pointer;\n        padding-left: 0;\n        color: #7f7f7f;\n        font-family: Lato;\n        margin-bottom: 0;\n    }\n    svg#medi:hover{\n        color: #6048de;\n    }\n    .fixedwith{\n        padding:0 15px;\n\n    }\n    button.presbtn{\n    border-radius: 50px;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    box-shadow: 0px 1px 16px 3px rgba(58, 216, 123, 0.31);\n    font-size: 13px;\n    height: 32px;\n    width: 80px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #0bdb85;\n    margin: 0 30px;\n    }\n    button.cancelpres{\n        outline: none;\n        cursor: pointer;\n        border: none;\n        color: rgba(0, 0, 0, 0.57);\n        font-family: 'Roboto', sans-serif;\n        font-weight: 700;\n        background: transparent;\n        font-size: 14px;\n    }\n    .openbtn {\n        width: 100%;\n        text-align: center;\n        padding-bottom: 10px;\n        background: #f7f7ff;\n        display: none;\n    }\n    .cancelpres {\n        text-align: center;\n        padding-bottom: 5px;\n        padding-top: 10px;\n    }\n    /* ************************responsive css*********************************** */\n    @media screen and (min-width: 320px) and (max-width: 1024px) \n     {\n    .space{\n        padding: 0 !important;\n\n    }\n\n    .fixedwith{\n\n        padding: 0 !important;\n    }\n}\n.new_clinic {\n    text-align: center;\n    margin-top: 22px;\n    margin-bottom: 11px;\n   \n    padding: 1em;\n    border-radius: 5px;\n    font-weight: 400;\n    color:#fff;\n    font-family: 'Lato', sans-serif;\n    font-size: 16px;\n    background: linear-gradient(to right,#6160c7,#8851b9);\n    /* background: linear-gradient(to right,#3c84fd,#a76ff8); */\n}\n\n.btnprescribe {\n    margin-bottom: 2em;\n}\nbutton.btnprescrb {\n    background: #0bdb85;\n    line-height: 30px;\n    width: 88px;\n    color: #ffffff;\n    font-size: 14px;\n    font-weight: 400;\n    font-family: 'Roboto',sans-serif;\n    border: 1px solid #0bdb85;\n    border-radius: 20px;\n    padding: 0;\n    margin-top: 1em;\n    box-shadow: 0px 1px 16px 3px rgba(58, 216, 123, 0.31);\n}\n\nbutton.btnprescrb:hover{\n    background: #07c577;\n    color:#ffffff;\n}\n/* dropdown */\n.webdropdown {\n    position: relative;\n    display: inline-block;\n    float: right;\n    margin-top: 16px;\n}\nbutton.btn_circ{\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    outline: none;\n    padding: 0;\n}\nsvg#dot{\n    fill: rgba(149, 149, 149, 0.5);\n    height: 18px;\n    width: 34px;\n}\n.webdropdown:hover .webdropdown-content{\n    display: block;\n}\n.webdropdown-content{\n    display: block;\n    margin-left: -55px;\n    position: absolute;\n    background: #f7f7f7;\n    z-index: 999999;\n    opacity: initial;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    height: auto;\n}\nspan.triangle{\n    border-left: 9px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 10px solid #f7f7f7;\n    margin-top: 2px;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    margin-right: 14px;\n}\n.webdropdown-content a{\n    color: #000000;\n    padding: 8px 0 8px 9px;\n    text-decoration: none;\n    display: block;\n}\nhr.bor_derhr{\n    margin: 0;\n}\n.webdropdown {\n    position: relative;\n    display: inline-block;\n    float: right;\n}\n.webdropdown-content{\n    display: block;\n    margin-left: -55px;\n    position: absolute;\n    background: #f7f7f7;\n    z-index: 999999;\n    opacity: initial;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    height: auto;\n}\nsvg#edit_schedule {\n    fill: #000000;\n    height: 14px;\n    width: 14px;\n}\nspan.triangle {\n    border-left: 9px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 10px solid #f7f7f7;;\n    margin-top: 2px;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    margin-right: 14px;\n}\n.webdropdown-content a {\n    color:#000000;\n    padding: 8px 0 8px 9px;\n    text-decoration: none;\n    display: block;\n}\nul.list-inline.edditsp li:hover {\n    color: #3ad87b!important;\n}\nul.list-inline.edditsp.bor_der {\n    margin-bottom: -2px;\n}\nul.list-inline.edditsp.edditsp_up {\n    margin-top: -2px;\n}\nli:hover svg#edit_schedule {\n    fill: #3ad87b!important;\n}\nhr.bor_derhr {\n    margin: 0;\n}\nul.list-inline.edditsp {\n    margin-bottom: 0;\n}\n.webdropdown:hover .webdropdown-content {\n    display: block;\n}\nbutton.eddtn {\n    background: transparent;\n    border: none;\n    width: 72px;\n    text-align: left;\n}\n.webdropdown:hover .dropbtn {\n    background-color: #3e8e41;\n}\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/diagnosis/diagnosis.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- <div class=\"new_clinic\">Add New Prescription</div> -->\n  <div class=\"new_clinic\" *ngIf=\"provisionalData.length ==0 && recommendeData.length ==0 && medicalData.length ==0 && specificData.length ==0 && lifestyleData.length ==0 && adviseData.length ==0\">Add New Prescription</div>\n  <div class=\"new_clinic\" *ngIf=\"provisionalData.length !=0 || recommendeData.length !=0 || medicalData.length !=0 || specificData.length !=0 || lifestyleData.length !=0 || adviseData.length !=0\">Prescription List</div>\n  <div class=\"space\">\n  <div class=\"row\" id=\"marbtm-0\" *ngIf=\"provisionalData.length!= 0\">\n    <p class=\"provisionalc2\">Provisional diagnosis</p>\n    <div class=\"card\" *ngFor=\"let provisional of provisionalData\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"col-md-10 col-xs-10\">\n              <div class=\"consult_text\">\n                <p class=\"serenity\">{{provisional.diagnosisFor}}</p>\n                <p class=\"serenity2\">{{provisional.diagnosisBrief}}\n                </p>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-xs-2\" id=\"padding-o\">\n              <div class=\"edit_icon\">\n                <button class=\"edit\" (click)=\"editDiagnosis(provisional._id)\">\n                  <svg version=\"1.1\" id=\"pencil\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                    <g>\n                      <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                     c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                     l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                     S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                     l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                     s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                    </g>\n                  </svg>\n                </button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" id=\"marbtm-0\" *ngIf=\"recommendeData.length != 0\">\n    <p class=\"provisionalc1\">Test Recommended</p>\n    <div class=\"card\" *ngFor=\"let recommend of recommendeData\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"col-md-10 col-xs-10\">\n              <div class=\"consult_text\">\n                <p class=\"serenity\">{{recommend.categoryType}}</p>\n                <p class=\"serenity2\">{{recommend.testName}}\n                </p>\n                <p class=\"serenity2\">{{recommend.testDescription}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-xs-2\" id=\"padding-o\">\n              <div class=\"edit_icon\">\n                <button class=\"edit\" (click)=\"editSuggest(recommend._id)\">\n                  <svg version=\"1.1\" id=\"pencil\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                    <g>\n                      <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                       c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                       l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                       S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                       l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                       s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                    </g>\n                  </svg>\n                </button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" id=\"marbtm-0\" *ngIf=\"medicalData.length != 0\">\n    <p class=\"provisionalc1\">Medicine</p>\n    <div class=\"card\"  *ngFor=\"let medicine of medicalData let j =index\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"listing_medicine\">\n              <div class=\"col-md-4 col-sm-4 col-xs-4\">\n                <p class=\"Angleso\">{{medicine.medicineName}}</p>\n              </div>\n              <div class=\"col-md-4 col-sm-4 col-xs-4 \">\n                <p class=\"Angleso\">{{medicine.dosage}}</p>\n              </div>\n              <div class=\"col-md-4 col-sm-4 col-xs-4 nopaddingrt\">\n                <div class=\"row bottom0\">\n                  <div class=\"col-md-9 col-sm-9 col-xs-8\">\n                    <p class=\"Angleso\">{{medicine.frequency}}</p>\n                  </div>\n\n                  <div class=\"col-md-3 col-sm-3 col-xs-3 btnalign\">\n                      \n                    <!-- <svg version=\"1.1\" id=\"dot2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                      viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                      <g>\n                        <path d=\"M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z\" />\n                        <path d=\"M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z\" />\n                        <path d=\"M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z\" />\n                      </g>\n                    </svg> -->\n                    <div class=\"webdropdown\">\n                      <!-- <button class=\"btn_circ\" (click)= \"editSchedule(details._id)\"> -->\n                      <button class=\"btn_circ\" (click)=\"MedicineEdit(medicine._id,j)\">\n                        <svg version=\"1.1\" id=\"dot\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                          viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                          <g>\n                            <path d=\"M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z\" />\n                            <path d=\"M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z\" />\n                            <path d=\"M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z\" />\n                          </g>\n                        </svg>\n                      </button>\n      \n                      <div class=\"webdropdown-content\" *ngIf=\"show && j==select\">\n                        <span class=\"triangle\"></span>\n                        <a>\n                          <ul class=\"list-inline edditsp bor_der\">\n                            <li [routerLink]=\"['/dashboard/consultnew/medicare',medicine?._id]\">\n                              <button class=\"eddtn\" (click)=\"editMedicine(medicine._id)\">\n                                <svg version=\"1.1\" id=\"edit_schedule\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                                  y=\"0px\" viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                                  <g>\n                                    <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                                                 c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                                                 l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                                                 S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                                                 l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                                                 s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                                  </g>\n                                </svg>\n                                Edit\n                              </button>\n                            </li>\n                          </ul>\n                        </a>\n                        <hr class=\"bor_derhr\">\n                        <a class=\"dele_a\">\n      \n                          <ul class=\"list-inline edditsp edditsp_up\">\n                            <li>\n                              <button class=\"eddtn\" (click)=\"editMedicine(medicine._id)\" data-toggle=\"modal\" data-target=\"#mydelModal\">\n                                <svg version=\"1.1\" id=\"edit_schedule\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                                  y=\"0px\" viewBox=\"0 0 486.4 486.4\" style=\"enable-background:new 0 0 486.4 486.4;\" xml:space=\"preserve\">\n                                  <g>\n                                    <g>\n                                      <path d=\"M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5\n                                                   S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5\n                                                   S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2\n                                                   c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z\"\n                                      />\n                                      <path d=\"M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5\n                                                   C229.7,404.9,235.7,411,243.2,411z\" />\n                                      <path d=\"M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9\n                                                   C141.6,390.1,147.7,396.1,155.1,396.1z\" />\n                                      <path d=\"M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9\n                                                   C317.8,390.1,323.8,396.1,331.3,396.1z\" />\n                                    </g>\n                                  </g>\n                                </svg>\n                                Delete\n                              </button>\n                            </li>\n                          </ul>\n                        </a>\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n\n              </div>\n            </div>\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" id=\"marbtm-0\" *ngIf=\"specificData.length != 0\">\n    <p class=\"provisionalc2\">Specific Instruction</p>\n    <div class=\"card\" *ngFor=\"let lists of specificData\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"col-md-10 col-xs-10\">\n              <div class=\"consult_text\">\n                <p class=\"serenity\">{{lists.advice}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-xs-2\" id=\"padding-o\">\n              <div class=\"edit_icon\" (click)=\"editInstructionForm(lists._id)\">\n                <button class=\"edit\">\n                  <svg version=\"1.1\" id=\"pencil\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                    <g>\n                      <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                       c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                       l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                       S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                       l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                       s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                    </g>\n                  </svg>\n                </button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" id=\"marbtm-0\" *ngIf=\"lifestyleData.length != 0\">\n    <p class=\"provisionalc2\">LifeStyle Instruction</p>\n    <div class=\"card\" *ngFor=\"let list of lifestyleData\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"col-md-10 col-xs-10\">\n              <div class=\"consult_text\">\n                <p class=\"serenity\">{{list.advice}}</p>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-xs-2\" id=\"padding-o\">\n              <div class=\"edit_icon\">\n                <button class=\"edit\" (click)=\"editLifeStyle(list._id)\">\n                  <svg version=\"1.1\" id=\"pencil\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                    <g>\n                      <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                         c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                         l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                         S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                         l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                         s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                    </g>\n                  </svg>\n                </button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"row\" id=\"marbtm-0\" *ngIf=\"adviseData.length != 0\">\n    <p class=\"provisionalc2\">Advice Followup</p>\n    <div class=\"card\" *ngFor=\"let list of adviseData\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"col-md-10 col-xs-10\">\n              <div class=\"consult_text\">\n                <p class=\"serenity\">{{list.refferedDoctor}}</p>\n                <p class=\"serenity2\" *ngIf=\"list.day\">{{list.day}} day</p>\n                <p class=\"serenity2\" *ngIf=\"list.week\">{{list.week}} week</p>\n                <p class=\"serenity2\" *ngIf=\"list.month\">{{list.month}} month</p>\n              </div>\n            </div>\n            <div class=\"col-md-2 col-xs-2\" id=\"padding-o\">\n              <div class=\"edit_icon\">\n                <button class=\"edit\" [routerLink]=\"['/dashboard/consultnew/followup',list?._id]\">\n                  <svg version=\"1.1\" id=\"pencil\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                    viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                    <g>\n                      <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                           c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                           l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                           S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                           l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                           s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                    </g>\n                  </svg>\n                </button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <!-- *ngIf=\"adviseData.length != 0\" -->\n  <div class=\"row\" id=\"marbtm-0\" *ngIf=\"adviseData.length != 0\">\n    <p class=\"provisionalc1\">Advice Followup</p>\n    <div class=\"card\" *ngFor=\"let list of adviseData; let i=index\">\n      <div class=\"row\">\n        <div class=\"card_texte\">\n          <div class=\"col-md-12\" id=\"padding-o\">\n            <div class=\"listing_medicine\">\n              <div class=\"col-md-3 col-sm-3 col-xs-3 text-center\">\n                <!-- <p class=\"Angleso\">{{list.refferedDoctor}}</p> -->\n                <p class=\"Angleso\">{{list.refferedDoctor}}</p>\n              </div>\n              <div class=\"col-md-3 col-sm-3 col-xs-3 text-center\">\n                <p class=\"Angleso\" *ngIf=\"list.day\">{{list.day}} day</p>\n              </div>\n              <div class=\"col-md-3 col-sm-3 col-xs-3 text-center\">\n                  <p class=\"Angleso\" *ngIf=\"list.week\">{{list.week}} week</p>\n                </div>\n                <!-- <div class=\"col-md-3 col-sm-4 col-xs-4 \">\n                    <p class=\"Angleso\" *ngIf=\"list.month\">{{list.month}} month</p>\n                  </div> -->\n\n                  <div class=\"col-md-3 col-sm-3 col-xs-3 btnalign\">\n                    <!-- <svg version=\"1.1\" id=\"dot2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                      viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                      <g>\n                        <path d=\"M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z\" />\n                        <path d=\"M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z\" />\n                        <path d=\"M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z\" />\n                      </g>\n                    </svg> -->\n                    <div class=\"webdropdown\">\n                        <!-- <button class=\"btn_circ\" (click)= \"editSchedule(details._id)\"> -->\n                        <button class=\"btn_circ\" (click)=\"followUpEdit(list._id,i)\">\n                          <svg version=\"1.1\" id=\"dot\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                            viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                            <g>\n                              <path d=\"M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z\" />\n                              <path d=\"M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z\" />\n                              <path d=\"M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z\" />\n                            </g>\n                          </svg>\n                        </button>\n        \n                        <div class=\"webdropdown-content\" *ngIf=\"showEdit && i==selected\">\n                          <span class=\"triangle\"></span>\n                          <a>\n                            <ul class=\"list-inline edditsp bor_der\">\n                              <li  [routerLink]=\"['/dashboard/consultnew/followup',list?._id]\">\n                                <button class=\"eddtn\" (click)=\"editFollowUp(list._id)\">\n                                  <svg version=\"1.1\" id=\"edit_schedule\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                                    y=\"0px\" viewBox=\"0 0 469.331 469.331\" style=\"enable-background:new 0 0 469.331 469.331;\" xml:space=\"preserve\">\n                                    <g>\n                                      <path d=\"M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4\n                                                   c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6\n                                                   l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3\n                                                   S458.531,49.903,438.931,30.403z M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z M160.931,416.803l-44.1-44.1\n                                                   l245.1-245.1l44.1,44.1L160.931,416.803z M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4\n                                                   s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z\" />\n                                    </g>\n                                  </svg>\n                                  Edit\n                                </button>\n                              </li>\n                            </ul>\n                          </a>\n                          <hr class=\"bor_derhr\">\n                          <a class=\"dele_a\">\n        \n                            <ul class=\"list-inline edditsp edditsp_up\">\n                              <li>\n                                <button class=\"eddtn\" (click)=\"editFollowUp(list._id)\" data-toggle=\"modal\" data-target=\"#mydelModal\">\n                                  <svg version=\"1.1\" id=\"edit_schedule\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                                    y=\"0px\" viewBox=\"0 0 486.4 486.4\" style=\"enable-background:new 0 0 486.4 486.4;\" xml:space=\"preserve\">\n                                    <g>\n                                      <g>\n                                        <path d=\"M446,70H344.8V53.5c0-29.5-24-53.5-53.5-53.5h-96.2c-29.5,0-53.5,24-53.5,53.5V70H40.4c-7.5,0-13.5,6-13.5,13.5\n                                                     S32.9,97,40.4,97h24.4v317.2c0,39.8,32.4,72.2,72.2,72.2h212.4c39.8,0,72.2-32.4,72.2-72.2V97H446c7.5,0,13.5-6,13.5-13.5\n                                                     S453.5,70,446,70z M168.6,53.5c0-14.6,11.9-26.5,26.5-26.5h96.2c14.6,0,26.5,11.9,26.5,26.5V70H168.6V53.5z M394.6,414.2\n                                                     c0,24.9-20.3,45.2-45.2,45.2H137c-24.9,0-45.2-20.3-45.2-45.2V97h302.9v317.2H394.6z\"\n                                        />\n                                        <path d=\"M243.2,411c7.5,0,13.5-6,13.5-13.5V158.9c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v238.5\n                                                     C229.7,404.9,235.7,411,243.2,411z\" />\n                                        <path d=\"M155.1,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9\n                                                     C141.6,390.1,147.7,396.1,155.1,396.1z\" />\n                                        <path d=\"M331.3,396.1c7.5,0,13.5-6,13.5-13.5V173.7c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v208.9\n                                                     C317.8,390.1,323.8,396.1,331.3,396.1z\" />\n                                      </g>\n                                    </g>\n                                  </svg>\n                                  Delete\n                                </button>\n                              </li>\n                            </ul>\n                          </a>\n                        </div>\n                      </div>\n                  </div>\n              <!-- <div class=\"col-md-3 col-sm-4 col-xs-4 \">\n                <div class=\"row bottom0\">\n                  <div class=\"col-md-9 col-sm-9 col-xs-8\">\n                   \n                  </div>\n                  <div class=\"col-md-9 col-sm-9 col-xs-8\">\n                    <p class=\"Angleso\" *ngIf=\"list.month\">{{list.month}} month</p>\n                  </div>\n\n                  <div class=\"col-md-3 col-sm-3 col-xs-3 btnalign\" [routerLink]=\"['/dashboard/consultnew/followup',list?._id]\">\n                    <svg version=\"1.1\" id=\"dot2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                      viewBox=\"0 0 60 60\" style=\"enable-background:new 0 0 60 60;\" xml:space=\"preserve\">\n                      <g>\n                        <path d=\"M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z\" />\n                        <path d=\"M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z\" />\n                        <path d=\"M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z\" />\n                      </g>\n                    </svg>\n                  </div>\n                </div>\n\n\n              </div> -->\n            </div>\n\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"btnprescribe text-center\" [routerLink]=\"['/dashboard/consultnew/bill']\">\n    <button class=\"btnprescrb\" *ngIf=\"provisionalData.length!=0 ||recommendeData.length!=0 || medicalData.length!=0 || specificData.length!=0  || lifestyleData.length!=0  || adviseData.length!=0 \">Prescribe</button>\n  </div>\n</div>\n\n<!-- ************************prescription starts************************* -->\n<section class=\"fixedwith\">\n  <!-- **add prescription btn start**-->\n  \n  <!-- **add prescription btn end**-->\n  <div class=\"openbtn\">\n    <button type=\"btn\" class=\"presbtn\">PRESCRIBE</button>\n    <button type=\"btn\" class=\"presbtn\">SAVE</button>\n  </div>\n  <div class=\"card prescribe\">\n    <div class=\"row\">\n      <div class=\"col-md-4 col-xs-4\" [routerLink]=\"['/dashboard/consultnew/diagnosisform']\">\n\n        <div class=\"diagnosis\">\n          <svg version=\"1.1\" id=\"medi\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 512 512\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M444.875,109.792L338.208,3.125c-2-2-4.708-3.125-7.542-3.125h-224C83.135,0,64,19.135,64,42.667v426.667\n                                C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333v-352\n                                C448,114.5,446.875,111.792,444.875,109.792z M341.333,36.417l70.25,70.25h-48.917c-11.76,0-21.333-9.573-21.333-21.333V36.417z\n                                M426.667,469.333c0,11.76-9.573,21.333-21.333,21.333H106.667c-11.76,0-21.333-9.573-21.333-21.333V42.667\n                                c0-11.76,9.573-21.333,21.333-21.333H320v64C320,108.865,339.135,128,362.667,128h64V469.333z\"\n              />\n              <path d=\"M337.333,301c-4.604-3.667-11.302-2.917-15,1.667l-31.441,39.302l-48.62-68.066\n                                 c20.393-7.499,35.061-26.941,35.061-49.902c0-29.406-23.927-53.333-53.333-53.333h-42.667c-5.896,0-10.667,4.771-10.667,10.667\n                                  v149.333c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667v-53.333h26.514l58.531,81.943L237,409.333\n                                   c-3.677,4.604-2.927,11.313,1.667,15c1.969,1.573,4.323,2.333,6.656,2.333c3.135,0,6.229-1.375,8.344-4l36.272-45.34\n                                 l32.051,44.871c2.083,2.917,5.354,4.469,8.688,4.469c2.146,0,4.313-0.646,6.188-1.99c4.792-3.417,5.906-10.083,2.479-14.875\n                                  l-35.559-49.783L339,316C342.677,311.396,341.927,304.688,337.333,301z M192,256v-64h32c17.646,0,32,14.354,32,32\n                                   s-14.354,32-32,32H192z\" />\n            </g>\n          </svg>\n          <p class=\"prescribe\">Diagnosis</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-xs-4\" [routerLink]=\"['/dashboard/consultnew/suggest']\">\n        <div class=\"diagnosis\">\n          <svg version=\"1.1\" id=\"medi\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 114.882 114.881\" style=\"enable-background:new 0 0 114.882 114.881;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M68.222,26.486c1.655,0,3.026,1.356,3.026,3.026v2.654h2.648c1.667,0,3.026,1.354,3.026,3.026\n                                     c0,1.67-1.359,3.026-3.026,3.026h-2.648v2.65c0,1.67-1.371,3.026-3.026,3.026c-1.679,0-3.026-1.356-3.026-3.026v-2.65h-2.653\n                                       c-1.673,0-3.026-1.356-3.026-3.026c0-1.673,1.354-3.026,3.026-3.026h2.653v-2.654C65.195,27.836,66.543,26.486,68.222,26.486z\n                                     M90.115,12.998v98.857c0,1.667-1.371,3.026-3.026,3.026H8.027c-1.664,0-3.026-1.359-3.026-3.026V12.998\n                                     c0-1.673,1.362-3.026,3.026-3.026h19.86V3.026c0-1.67,1.36-3.026,3.026-3.026h33.289c1.655,0,3.027,1.356,3.027,3.026v6.939h19.859\n                                    C88.756,9.971,90.115,11.319,90.115,12.998z M33.939,18.164h27.237V6.059H33.939V18.164z M84.062,16.024H67.229v5.166\n                                    c0,1.673-1.372,3.026-3.027,3.026H30.913c-1.667,0-3.026-1.354-3.026-3.026v-5.166H11.053v92.805h73.009V16.024z M74.605,50.697\n                                    H20.507c-1.676,0-3.026,1.356-3.026,3.026c0,1.673,1.351,3.026,3.026,3.026h54.098c1.667,0,3.026-1.354,3.026-3.026\n                                    C77.632,52.053,76.272,50.697,74.605,50.697z M74.605,64.699H20.507c-1.676,0-3.026,1.348-3.026,3.027\n                                      c0,1.666,1.351,3.025,3.026,3.025h54.098c1.667,0,3.026-1.359,3.026-3.025C77.632,66.046,76.272,64.699,74.605,64.699z\n                                     M74.605,78.696H20.507c-1.676,0-3.026,1.359-3.026,3.026s1.351,3.026,3.026,3.026h54.098c1.667,0,3.026-1.359,3.026-3.026\n                                     C77.632,80.043,76.272,78.696,74.605,78.696z M74.605,92.693H20.507c-1.676,0-3.026,1.348-3.026,3.026\n                                    c0,1.667,1.351,3.026,3.026,3.026h54.098c1.667,0,3.026-1.359,3.026-3.026C77.632,94.041,76.272,92.693,74.605,92.693z\n                                       M103.592,46.116c-3.476,0-6.289,2.819-6.289,6.289v48.575c0,2.352,1.348,4.326,3.263,5.402v5.473c0,1.667,1.348,3.026,3.026,3.026\n                                        c1.667,0,3.026-1.359,3.026-3.026v-5.473c1.915-1.076,3.263-3.051,3.263-5.402V52.405\n                                                C109.881,48.935,107.056,46.116,103.592,46.116z\" />\n            </g>\n          </svg>\n          <p class=\"prescribe\">Suggest Test</p>\n\n        </div>\n      </div>\n      <div class=\"col-md-4 col-xs-4\" [routerLink]=\"['/dashboard/consultnew/medicare']\">\n        <div class=\"diagnosis\">\n          <svg version=\"1.1\" id=\"medi\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M398.397,213.687l12.142-12.142c43.432-43.434,43.446-113.712,0.031-157.13c-21.028-21.025-48.98-32.226-78.717-32.226\n                                c-0.013,0-0.03,0-0.042,0c-29.747,0-57.719,11.229-78.763,32.272L32.678,264.646C11.603,285.72-0.001,313.609,0,343.351\n                               c0.003,29.723,11.591,57.732,32.631,78.771c21.033,21.035,48.991,32.688,78.722,32.688c0.014,0,0.024,0,0.039,0\n                                    c29.714,0,57.651-11.669,78.659-32.677l35.849-35.9c14.293,64.89,72.221,113.578,141.343,113.578\n                              c79.819,0,144.756-64.95,144.756-144.769C512,285.92,463.288,227.979,398.397,213.687z M268.798,60.209\n                                      c16.839-16.84,39.22-25.75,63.022-25.75c0.012,0,0.022,0,0.034,0c23.787,0,46.15,8.886,62.968,25.704\n                            c34.733,34.732,34.72,91.072-0.031,125.822l-24.554,24.459c-0.999-0.021-1.99-0.122-2.993-0.122\n                                     c-44.395,0-84.167,20.083-110.742,51.648l-94.908-94.731L268.798,60.209z M222.487,355.033c0,1.005,0.056,2.043,0.076,3.042\n                                   l-48.261,48.308c-16.803,16.805-39.144,26.156-62.913,26.156c-0.009,0-0.02,0-0.031,0c-23.784,0-46.151-9.382-62.98-26.212\n                                 c-16.835-16.832-26.106-39.247-26.109-63.021c-0.001-23.793,9.286-46.211,26.155-63.077l97.421-97.432l97.486,97.48\n                            C230.11,302.113,222.487,327.697,222.487,355.033z M367.244,477.516c-67.539,0-122.486-54.947-122.486-122.486\n                            c0-29.769,10.685-57.082,28.407-78.332l172.411,172.41C424.326,466.831,397.013,477.516,367.244,477.516z M461.322,433.362\n                                l-172.41-172.411c21.249-17.722,48.564-28.407,78.332-28.407c67.539,0,122.486,54.947,122.486,122.486\n                             C489.73,384.799,479.046,412.112,461.322,433.362z\" />\n            </g>\n          </svg>\n          <p class=\"prescribe\">Medicare</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-xs-4\" [routerLink]=\"['/dashboard/consultnew/instruction']\">\n        <div class=\"diagnosis\">\n          <svg version=\"1.1\" id=\"medi\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 163.31 163.31\" style=\"enable-background:new 0 0 163.31 163.31;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M155.548,93.739c-4.882-4.8-11.331-7.441-18.17-7.441c-3.056,0-5.999,0.621-8.783,1.625V63.562\n                                   c0-10.973-8.925-19.908-19.896-19.908c-3.133,0-6.053,0.792-8.701,2.081C89.217,32.669,73.524,25.157,56.489,25.157\n                                  C25.343,25.157,0,50.505,0,81.646c0,31.144,25.343,56.495,56.489,56.495c12.634,0,24.811-4.256,34.714-11.98\n                                         c3.352,6.277,9.889,10.604,17.496,10.604c4.61,0,8.925-1.637,12.448-4.486c4.604,3.73,10.231,5.875,16.242,5.875\n                                         c7.005,0,13.565-2.748,18.489-7.736c4.847-4.93,7.482-11.467,7.43-18.383C163.231,105.076,160.478,98.592,155.548,93.739z\n                                        M148.945,96.145l-27.443,27.876c-5.733-7.708-5.226-18.673,1.714-25.741c3.76-3.83,8.796-5.929,14.162-5.929\n                                         C141.599,92.362,145.582,93.716,148.945,96.145z M122.542,63.547v22.739H94.844V63.547c0-7.636,6.213-13.852,13.855-13.852\n                                           C116.324,49.695,122.542,55.911,122.542,63.547z M59.516,131.94v-9.203c0-1.661-1.354-3.026-3.026-3.026\n                                           c-1.67,0-3.026,1.365-3.026,3.026v9.191C27.988,130.404,7.593,109.917,6.194,84.4h8.938c1.673,0,3.026-1.362,3.026-3.026\n                                       s-1.354-3.026-3.026-3.026H6.218c1.64-25.277,21.941-45.492,47.245-47.005v8.68c0,1.664,1.356,3.026,3.026,3.026\n                                             c1.673,0,3.026-1.362,3.026-3.026v-8.668c13.855,0.824,26.519,7.172,35.482,17.8c-3.807,3.632-6.203,8.719-6.203,14.381v53.31\n                                            c0,1.105,0.145,2.151,0.325,3.204C80.768,127.153,70.4,131.278,59.516,131.94z M94.844,116.845V92.326h26.108\n                                          c-0.686,0.568-1.419,1.064-2.051,1.703c-9.15,9.315-9.718,23.809-1.975,33.893c-2.376,1.772-5.213,2.766-8.216,2.766\n                                                  C101.057,130.699,94.844,124.487,94.844,116.845z M151.54,126.148c-6.714,6.832-18.004,7.512-25.712,2.121l27.427-27.869\n                                              c2.512,3.375,3.937,7.389,3.972,11.668C157.279,117.354,155.258,122.365,151.54,126.148z M59.516,54.397v27.993\n                                               c0,0.727-0.26,1.428-0.736,1.98l-14.375,16.645c-0.6,0.686-1.442,1.046-2.291,1.046c-0.7,0-1.404-0.242-1.977-0.738\n                                           c-1.265-1.088-1.404-3.003-0.316-4.268l13.636-15.785V54.403c0-1.664,1.356-3.026,3.026-3.026\n                                                                 C58.156,51.371,59.516,52.733,59.516,54.397z\" />\n            </g>\n          </svg>\n          <p class=\"prescribe\">Instructions</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-xs-4\" [routerLink]=\"['/dashboard/consultnew/lifestyle']\">\n        <div class=\"diagnosis\">\n          <svg version=\"1.1\" id=\"medi\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 512.001 512.001\" style=\"enable-background:new 0 0 512.001 512.001;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M305.553,410.719h-38.799c-5.522,0-9.999,4.476-9.999,9.999c0,5.523,4.477,9.999,9.999,9.999h38.799\n                                      c5.988,0,10.86,4.871,10.86,10.859c0,5.988-4.871,10.859-10.86,10.859H201.109c-15.7,0-30.464-6.922-40.504-18.992l-24.977-30.022\n                                          c-13.402-16.11-32.907-25.545-53.777-26.142v-59.067h36.816c18.156,0,35.347,6.944,48.408,19.552l53.908,52.035\n                                            c3.811,3.679,3.989,9.839,0.396,13.731c-3.662,3.966-9.878,4.225-13.857,0.578l-42.323-38.796\n                                                c-4.069-3.731-10.395-3.457-14.126,0.614c-3.732,4.071-3.457,10.396,0.614,14.127l42.323,38.796\n                                              c5.708,5.232,12.931,7.816,20.136,7.816c8.044,0,16.065-3.221,21.928-9.572c10.906-11.815,10.367-30.513-1.202-41.681\n                                            l-53.908-52.035c-16.809-16.226-38.933-25.162-62.297-25.162H79.909c-3.762-8.904-12.585-15.169-22.843-15.169H9.999\n                                                c-5.522,0-9.999,4.476-9.999,9.999v73.117c0,5.522,4.477,9.999,9.999,9.999c5.522,0,9.999-4.476,9.999-9.999v-63.119h37.069\n                                                        c2.64,0,4.787,2.148,4.787,4.787v80.143c0,2.639-2.147,4.787-4.787,4.787H46.682c-5.522,0-9.999,4.476-9.999,9.999\n                                                c0,5.522,4.477,9.999,9.999,9.999h10.384c10.396,0,19.311-6.436,22.986-15.531c15.588,0.089,30.227,6.992,40.203,18.984\n                                          l24.977,30.022c13.852,16.651,34.218,26.2,55.877,26.2h104.444c17.014,0,30.857-13.842,30.857-30.857\n                                              S322.567,410.719,305.553,410.719z\" />\n            </g>\n            <g>\n              <path d=\"M502.001,131.934c-5.522,0-9.999,4.476-9.999,9.999v67.025h-37.069c-2.64,0-4.787-2.148-4.787-4.787v-80.143\n                                            c0-2.639,2.147-4.787,4.787-4.787h9.651c5.522,0,9.999-4.476,9.999-9.999c0-5.522-4.477-9.999-9.999-9.999h-9.651\n                                          c-10.396,0-19.311,6.436-22.986,15.531c-15.588-0.089-30.227-6.992-40.203-18.984l-24.977-30.021\n                                                  c-13.851-16.651-34.218-26.201-55.878-26.201H206.447c-17.014,0-30.857,13.842-30.857,30.856\n                                            c0,17.014,13.843,30.856,30.857,30.856h42.708c5.522,0,9.999-4.476,9.999-9.999s-4.477-9.999-9.999-9.999h-42.708\n                                              c-5.988,0-10.86-4.871-10.86-10.859c0-5.987,4.871-10.859,10.86-10.859H310.89c15.701,0,30.465,6.922,40.505,18.992l24.977,30.021\n                                                c13.401,16.11,32.907,25.545,53.777,26.143v59.067h-36.816c-18.156,0-35.347-6.944-48.408-19.552L291.017,122.2\n                                            c-3.811-3.679-3.989-9.838-0.396-13.731c3.662-3.967,9.878-4.225,13.857-0.578l42.324,38.796\n                                                  c4.071,3.731,10.394,3.457,14.127-0.614c3.731-4.071,3.456-10.396-0.615-14.127L317.99,93.151\n                                                  c-12.08-11.073-30.948-10.284-42.064,1.756c-10.906,11.816-10.367,30.514,1.202,41.681l53.908,52.035\n                                              c16.809,16.226,38.933,25.162,62.297,25.162h38.758c3.762,8.904,12.585,15.169,22.843,15.169h47.068\n                                                  c5.522,0,9.999-4.476,9.999-9.999v-77.024C512,136.41,507.523,131.934,502.001,131.934z\"\n              />\n            </g>\n            <g>\n              <path d=\"M322.838,379.643c-2.274-5.032-8.184-7.277-13.212-5.004c-5.064,2.205-7.38,8.097-5.175,13.159\n                                            c1.638,3.763,5.314,6.009,9.172,6.009c1.333,0,2.687-0.268,3.987-0.834c0.042-0.018,0.174-0.077,0.215-0.095\n                                                C322.858,390.605,325.111,384.676,322.838,379.643z\" />\n            </g>\n            <g>\n              <path d=\"M347.693,362.809c-3.269-4.44-9.552-5.364-13.997-2.11c-4.455,3.262-5.423,9.519-2.161,13.974\n                                                    c1.959,2.675,4.995,4.093,8.075,4.093c2.05,0,4.119-0.628,5.899-1.931c0.016-0.011,0.11-0.081,0.125-0.092\n                                            C350.063,373.463,350.961,367.247,347.693,362.809z\" />\n            </g>\n            <g>\n              <path d=\"M294.884,390.868c-1.139-5.385-6.426-8.833-11.816-7.719c-5.384,1.069-8.904,6.284-7.872,11.684\n                                                  c0.916,4.79,5.107,8.123,9.81,8.123c0.622,0,1.255-0.059,1.888-0.18c0.065-0.013,0.229-0.046,0.295-0.06\n                                                C292.589,401.571,296.027,396.269,294.884,390.868z\" />\n            </g>\n            <g>\n              <path d=\"M368.581,341.061c-4.1-3.698-10.421-3.373-14.121,0.728c-0.049,0.055-0.164,0.185-0.212,0.24\n                                              c-3.608,4.181-3.142,10.495,1.039,14.102c1.889,1.63,4.213,2.428,6.526,2.428c2.777,0,5.538-1.15,7.512-3.394\n                                                  C373.007,351.064,372.676,344.754,368.581,341.061z M362.997,349.492l-1.112-1.006l1.204,1.086L362.997,349.492z\"\n              />\n            </g>\n            <g>\n              <path d=\"M394.031,286.873c-5.284-1.603-10.874,1.412-12.477,6.697c-1.624,5.278,1.338,10.873,6.616,12.497\n                                                            c0.979,0.302,1.969,0.445,2.943,0.445c4.274,0,8.231-2.762,9.553-7.061l0.042-0.137\n                                                C402.31,294.029,399.315,288.475,394.031,286.873z\" />\n            </g>\n            <g>\n              <path d=\"M406.838,235.267c-0.022-0.127-0.046-0.254-0.073-0.381c-1.129-5.404-6.425-8.861-11.827-7.734\n                                                c-5.383,1.122-8.844,6.386-7.76,11.768c0.917,4.771,5.098,8.11,9.806,8.11c0.585,0,1.179-0.051,1.774-0.158\n                                                  C404.194,245.899,407.811,240.703,406.838,235.267z\" />\n            </g>\n            <g>\n              <path d=\"M397.668,256.962c-5.483-0.484-10.353,3.581-10.838,9.081c-0.009,0.097-0.023,0.294-0.029,0.391\n                                    c-0.324,5.513,3.881,10.245,9.394,10.569c0.2,0.012,0.398,0.018,0.596,0.018c5.206,0,9.581-4.026,9.964-9.269\n                                            C407.211,262.272,403.153,257.446,397.668,256.962z\" />\n            </g>\n            <g>\n              <path d=\"M384.243,315.325c-4.8-2.721-10.906-1.035-13.628,3.77l-0.139,0.25c-2.633,4.854-0.856,10.967,3.997,13.6\n                                            c1.527,0.828,3.17,1.221,4.789,1.221c3.529,0,6.938-1.872,8.743-5.2l-8.692-4.942l8.699,4.93\n                                                C390.735,324.149,389.048,318.048,384.243,315.325z\" />\n            </g>\n            <g>\n              <path d=\"M202.895,124.9c-2.469-4.94-8.478-6.943-13.414-4.472l-0.089,0.044c-4.94,2.47-6.897,8.453-4.427,13.392\n                                            c1.749,3.499,5.293,5.513,8.967,5.513c1.514,0,3.05-0.342,4.491-1.062C203.363,135.846,205.364,129.84,202.895,124.9z\"\n              />\n            </g>\n            <g>\n              <path d=\"M231.822,116.563c-1.301-5.365-6.699-8.663-12.074-7.361c-0.046,0.011-0.188,0.047-0.234,0.059\n                                                c-5.348,1.378-8.587,6.835-7.21,12.182c1.163,4.512,5.21,7.511,9.659,7.511c0.824,0,1.662-0.103,2.498-0.318\n                                                C229.827,127.335,233.123,121.93,231.822,116.563z\" />\n            </g>\n            <g>\n              <path d=\"M176.456,139.319c-3.458-4.297-9.754-4.972-14.056-1.522l6.199,7.845l-6.229-7.822c-4.32,3.44-5.033,9.73-1.594,14.05\n                                        c1.976,2.48,4.889,3.771,7.83,3.771c2.182,0,4.381-0.712,6.222-2.177l0.132-0.106C179.25,149.893,179.914,143.616,176.456,139.319\n                                                    z\" />\n            </g>\n            <g>\n              <path d=\"M123.143,210.461c-5.328-1.452-10.824,1.687-12.277,7.015c-0.025,0.091-0.073,0.28-0.096,0.372\n                                                c-1.3,5.365,1.996,10.76,7.36,12.063c0.792,0.192,1.584,0.284,2.364,0.284c4.486,0,8.562-3.044,9.698-7.581\n                                                        C131.563,217.326,128.43,211.903,123.143,210.461z\" />\n            </g>\n            <g>\n              <path d=\"M116.773,239.84c-5.527-0.307-10.241,3.892-10.561,9.404c-0.008,0.129-0.013,0.257-0.017,0.385\n                                                  c-0.162,5.517,4.179,10.114,9.697,10.279c0.102,0.003,0.202,0.005,0.303,0.005c5.36,0,9.789-4.253,9.987-9.637\n                                                    C126.432,244.817,122.244,240.158,116.773,239.84z\" />\n            </g>\n            <g>\n              <path d=\"M135.727,183.136c-4.891-2.566-10.934-0.681-13.499,4.209l-0.163,0.322c-2.437,4.953-0.393,10.935,4.559,13.374\n                                                        c1.418,0.699,2.921,1.029,4.404,1.029c3.672,0,7.207-2.032,8.959-5.532C142.477,191.665,140.585,185.685,135.727,183.136z\"\n              />\n            </g>\n            <g>\n              <path d=\"M153.785,159.079c-4.249-3.527-10.553-2.942-14.08,1.306c-0.048,0.059-0.158,0.195-0.206,0.254\n                                                    c-3.428,4.327-2.695,10.605,1.63,14.035c1.836,1.457,4.026,2.163,6.202,2.163c2.933,0,5.841-1.284,7.816-3.746\n                                        C158.611,168.844,158.011,162.588,153.785,159.079z\" />\n            </g>\n            <g>\n              <path d=\"M128.073,278.028c-0.973-5.436-6.172-9.053-11.605-8.079c-5.436,0.974-9.053,6.169-8.08,11.605l0.018,0.098\n                                                  c0.866,4.833,5.063,8.19,9.804,8.19c0.591,0,1.19-0.052,1.792-0.16C125.438,288.709,129.047,283.464,128.073,278.028z\"\n              />\n            </g>\n            <g>\n              <path d=\"M290.332,202.125c-13.015,0-25.074,5.367-33.667,14.424c-8.594-9.057-20.652-14.424-33.667-14.424\n                                          c-25.603,0-46.432,20.829-46.432,46.432c0,13.815,6.093,26.817,16.715,35.673c0.064,0.054,0.13,0.107,0.196,0.16l56.981,45.112\n                                                    c1.818,1.44,4.012,2.159,6.206,2.159c2.204,0,4.408-0.726,6.23-2.178l59.395-47.31c0.291-0.231,0.568-0.479,0.831-0.741\n                                                c8.799-8.775,13.644-20.45,13.644-32.875C336.764,222.954,315.935,202.125,290.332,202.125z M309.36,266.908l-52.713,41.988\n                                                l-50.65-40.099c-5.996-5.044-9.433-12.413-9.433-20.238c-0.001-14.577,11.858-26.436,26.434-26.436\n                                                  c10.731,0,20.32,6.409,24.43,16.327c1.549,3.735,5.194,6.171,9.237,6.171c4.043,0,7.688-2.435,9.237-6.171\n                                                            c4.11-9.918,13.699-16.327,24.43-16.327c14.576,0,26.435,11.859,26.435,26.435C316.767,255.46,314.14,261.956,309.36,266.908z\"\n              />\n            </g>\n            <g>\n              <circle cx=\"9.999\" cy=\"402.76\" r=\"9.964\" />\n            </g>\n\n            <g>\n              <circle cx=\"502\" cy=\"109.24\" r=\"9.964\" />\n            </g>\n          </svg>\n          <p class=\"prescribe\">Lifestyle</p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-xs-4\" [routerLink]=\"['/dashboard/consultnew/followup']\">\n        <div class=\"diagnosis\">\n          <svg version=\"1.1\" id=\"medi\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n            viewBox=\"0 0 297 297\" style=\"enable-background:new 0 0 297 297;\" xml:space=\"preserve\">\n            <g>\n              <path d=\"M110.194,199.303c-7.897-8.085-18.455-13.49-30.515-15.797c17.042-5.709,29.361-21.814,29.361-40.753\n                           c0-23.696-19.279-42.976-42.976-42.976S23.09,119.057,23.09,142.753c0,18.939,12.319,35.044,29.36,40.753\n                           c-12.059,2.307-22.616,7.711-30.514,15.795C11.504,209.98,6.201,224.721,6.602,241.93c0.126,5.428,4.563,9.762,9.992,9.762h98.943\n                           c5.429,0,9.865-4.334,9.991-9.762C125.93,224.721,120.627,209.98,110.194,199.303z\" />\n              <path d=\"M275.064,139.336c-7.897-8.084-18.455-13.489-30.515-15.797c17.042-5.708,29.361-21.813,29.361-40.752\n                           c0-23.696-19.279-42.976-42.976-42.976s-42.976,19.279-42.976,42.976c0,18.938,12.319,35.044,29.36,40.752\n                           c-12.059,2.308-22.616,7.712-30.514,15.796c-10.433,10.679-15.735,25.42-15.334,42.629c0.126,5.427,4.563,9.762,9.991,9.762h98.943\n                           c5.429,0,9.866-4.335,9.992-9.762C290.799,164.755,285.496,150.014,275.064,139.336z\" />\n              <path d=\"M48.472,90.278c1.754,1.241,3.771,1.839,5.768,1.839c3.132,0,6.217-1.469,8.165-4.22\n                           c19.613-27.695,51.442-44.31,85.276-44.574l-6.248,6.247c-3.903,3.903-3.903,10.231,0,14.135c1.952,1.951,4.51,2.927,7.067,2.927\n                           s5.115-0.976,7.067-2.927l23.321-23.321c3.903-3.903,3.903-10.231,0-14.135L155.568,2.926c-3.904-3.901-10.23-3.901-14.135,0\n                           c-3.903,3.903-3.903,10.232,0,14.135l6.271,6.273C107.39,23.59,69.45,43.36,46.091,76.345\n                           C42.902,80.849,43.968,87.087,48.472,90.278z\" />\n              <path d=\"M248.94,206.516c-4.528-3.158-10.758-2.048-13.915,2.479c-18.145,26.01-46.938,42.375-78.213,44.855l6.418-6.418\n                           c3.903-3.903,3.903-10.232,0-14.135c-3.903-3.902-10.23-3.902-14.134,0l-23.321,23.32c-3.902,3.903-3.902,10.231,0,14.135\n                           l23.321,23.32c1.952,1.951,4.509,2.928,7.067,2.928c2.558,0,5.115-0.977,7.066-2.928c3.903-3.902,3.903-10.231,0-14.134\n                           l-6.07-6.071c37.679-2.613,72.444-22.165,94.258-53.437C254.575,215.904,253.466,209.673,248.94,206.516z\"\n              />\n            </g>\n          </svg>\n          <p class=\"prescribe\">Follow up</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"cancelpres\">\n    <button type=\"btn\" class=\"cancelpres\">CANCEL</button>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/diagnosis/diagnosis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosisComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Router } from '@angular/router';

var DiagnosisComponent = (function () {
    function DiagnosisComponent(route, ePrescriptionService, sharedService, router) {
        // this.prescriptionId = localStorage.getItem('prescriptionId');
        var _this = this;
        this.route = route;
        this.ePrescriptionService = ePrescriptionService;
        this.sharedService = sharedService;
        this.router = router;
        this.provisionalData = [];
        this.recommendeData = [];
        this.medicalData = [];
        this.specificData = [];
        this.lifestyleData = [];
        this.adviseData = [];
        this.currentURL = '';
        this.hidePrescribeButton = false;
        this.showEdit = false;
        this.show = false;
        this.callerData = {};
        this.sharedService.prescribeInfo.subscribe(function (data) {
            if (data == true) {
                _this.getEprescription();
            }
        });
        // this.pathName = (route.snapshot.url)[0].path;
        // console.log(this.pathName);
        // this.sharedService.setPath(this.pathName);
        this.currentURL = window.location.pathname;
        console.log(this.currentURL);
        this.sharedService.setPath(this.currentURL);
        // data from calling
        this.route.queryParams.subscribe(function (param) {
            if (Object.keys(param).length != 0) {
                _this.callerData.callerId = param['callerId'];
            }
        });
        //clinic visit prescription
        this.sharedService.appointmentType.subscribe(function (data) {
            if (Object.keys(data).length != 0) {
                _this.callerData.callerId = data.individualId;
                _this.hideVideo = true;
            }
        });
    }
    DiagnosisComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('prescriptionId')) {
            this.getPrescriptionID();
        }
        this.getEprescription();
    };
    // get prescription
    DiagnosisComponent.prototype.getEprescription = function () {
        var _this = this;
        if (localStorage.getItem('prescriptionId')) {
            this.ePrescriptionService.getPrescription(localStorage.getItem('prescriptionId'))
                .subscribe(function (result) {
                _this.prescriptionList = result.result;
                console.log(_this.prescriptionList); //prescription list
                if (_this.prescriptionList != 0)
                    // this.hidePrescribeButton=true
                    console.log('prescription list', result);
                _this.provisionalData = result.result.diagnosisId;
                _this.recommendeData = result.result.recommendedId;
                _this.medicalData = result.result.medicineId;
                _this.specificData = result.result.specificInstructionId;
                _this.lifestyleData = result.result.lifeStyleId;
                _this.adviseData = result.result.adviceId;
                console.log(_this.adviseData);
            }, function (err) {
            });
        }
    };
    // edit diagnosis form
    DiagnosisComponent.prototype.editDiagnosis = function (id) {
        this.router.navigate(['dashboard/consultnew/diagnosisform', id]);
    };
    //edit Instruction form
    DiagnosisComponent.prototype.editInstructionForm = function (id) {
        this.router.navigate(['dashboard/consultnew/instruction', id]);
    };
    //create prescription id
    // edit lifeStyle form
    DiagnosisComponent.prototype.editLifeStyle = function (id) {
        this.router.navigate(['dashboard/consultnew/lifestyle', id]);
    };
    // edit suggest form
    DiagnosisComponent.prototype.editSuggest = function (id) {
        this.router.navigate(['dashboard/consultnew/suggest', id]);
    };
    // edit suggest form
    DiagnosisComponent.prototype.editFollowUp = function (id) {
        this.router.navigate(['dashboard/consultnew/followup', id]);
    };
    // edit medicine form
    DiagnosisComponent.prototype.editMedicine = function (id) {
        this.router.navigate(['dashboard/consultnew/medicare', id]);
    };
    // create prescriptionid
    DiagnosisComponent.prototype.getPrescriptionID = function () {
        var _this = this;
        var prescriptionData = {
            adviceId: [],
            medicineId: [],
            lifeStyleId: [],
            diagnosisId: [],
            specificInstructionId: [],
            recommendedId: [],
            doctorId: localStorage.getItem('loginId'),
            individualId: this.callerData.callerId
        };
        this.ePrescriptionService.createPrescription(prescriptionData)
            .subscribe(function (result) {
            console.log('prescription id created', result);
            _this.prescriptionId = result.member._id;
            // this.sharedService.prescriptionId(result.member._id);
            localStorage.setItem('prescriptionId', _this.prescriptionId);
        }, function (err) {
        });
    };
    // hide & show on click
    DiagnosisComponent.prototype.followUpEdit = function (id, i) {
        this.selected = i;
        // this.showEdit = true;
        if (this.showEdit == true) {
            this.showEdit = !this.showEdit;
        }
        else if (this.showEdit == false) {
            this.showEdit = !this.showEdit;
        }
    };
    DiagnosisComponent.prototype.MedicineEdit = function (id, j) {
        this.select = j;
        // this.showEdit = true;
        if (this.show == true) {
            this.show = !this.show;
        }
        else if (this.show == false) {
            this.show = !this.show;
        }
    };
    DiagnosisComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-diagnosis',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/diagnosis/diagnosis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/diagnosis/diagnosis.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _d || Object])
    ], DiagnosisComponent);
    return DiagnosisComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=diagnosis.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/follow-up/follow-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.prescribebtn {\n    margin-right: 10px;\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #09bab1;\n    line-height: 25px;\n    font-size: 13px;\n    height:34px;\n    padding: 0 8px 0px 8px;\n    color: #09bab1;\n    font-family: Lato;\n    font-weight: 500!important;\n    width: 85px;\n}\n.prescribebtn:focus{\noutline:none;\n}\n.prescribebtn:hover{\nbackground: #09bab1;\ncolor: #fff;\nfont-family: lato;\nfont-weight: 600;\n}\n.cancelbtn{\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #909090;\n    line-height: 25px;\n    font-size: 13px;\n    height: 34px;\n    padding: 0 8px 0px 8px;\n    color:#909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px;\n}\ninput.referdoc:focus {\n    box-shadow: none;\n}\n.cancelbtn:focus{\n    outline:none;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n   border:none;\n}\n.card.cardabc{\n    border: none;\n    box-shadow: 1px 1px 20px 4px #edf0fd;\n    border-radius: 6px;\n    padding: 20px;\n    margin: -1.5rem 0 1rem 0;\n    padding-top:0 !important;\n}\n.card.cardabc.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\np.provisionalc21 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    margin-left: 8px;\n    color: #8c8db8;\n}\ninput.referdoc {\n    color: #84869d;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    margin-left: 30px;\n    width: 89%;\n    margin-bottom: 4px;\n}\ninput.referdoc::-webkit-input-placeholder {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\n.high {\n    padding-bottom: 20px;\n    padding-top: 1em;\n}\n\n\n        .vert-padding{\n            padding: 15px 0px 20px 0px !important; \n           \n           }\n           .revisit_tabs .nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n               color: #8a8ab7;\n               cursor: default;\n               background: #fafbff;\n               border-radius: 0;\n               font-family: 'Lato', sans-serif;\n               border: none;\n               border-bottom-color: linear-gradient(to right, #aa6ff8 , #7c78fa);\n               border-bottom: 3px solid #8475f9;\n           }\n           .revisit_tabs ul.nav.nav-tabs{\n               background: #fafbff;\n            border:none;\n               color:#8a8ab7;\n               width: 80%;\n               left: 0;\n               right: 0;\n               margin: 0 auto;\n           }\n           .revisit_tabs .nav-tabs>li>a:hover {\n               /* border-color:linear-gradient(to right, red , yellow); */\n               background-color: #fafbff;\n               border:none;       \n           }\n           .nav-tabs>li {\n            \n               margin: 0 1.2em;\n           }\n           .headcard{\n            padding-left: 30px;\n            color: rgba(85, 85, 85, .6);\n            line-height: 24px;\n            font-family: 'Lato', sans-serif;\n            padding-top: 14px;\n            margin-top: -21px;\n            padding-bottom: 3px;\n\n\n               \n           }\n           .revisit_tabs .nav-tabs>li.active>a:hover {\n               /* border-color:linear-gradient(to right, red , yellow); */\n               border-bottom-color: linear-gradient(to right, #aa6ff8 , #7c78fa);\n               border-bottom: 3px solid #8475f9;\n           \n           }\n           .revisit_tabs .tab-pane.active p{\n               text-align: center;\n               padding: 15px 30px 0 30px;\n               font-size: 30px;\n               font-family: 'Lato', sans-serif;\n               font-weight: 500;\n               color: rgba(85, 85, 85, .8);\n           }\n           .revisit_tabs .tab-pane.active span{\n               font-size: 18px;\n               vertical-align: text-top;\n               font-weight: 500;\n               margin-left: -5px;\n           }\n           .revisit_tabs ul.nav.nav-tabs li a {\n               color: #8a8ab7;\n               font-family: 'Lato', sans-serif;\n           }\n           .tabli{\n               border-bottom: 1px solid #eee;\n               border-top: 1px solid #eee;\n               width:100%;\n               background:#fafbff;\n           }\n           \n           p.range-field {\n               padding-top: 0px !important;\n           }\n           .referdoc{\n               padding: 0 30px;\n           }\n.error_message2{\n    margin-left: 30px;\n}\n\nspan.reffereddoc {\n    color: red;\n    padding-left: 2em;\n    font-size:13px;\n}\n@media only screen and (min-width: 320px) and (max-width:1024px){\n.revisit_tabs ul.nav.nav-tabs\n\n\n{\n    width:100%\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/follow-up/follow-up.component.html":
/***/ (function(module, exports) {

module.exports = "        <!-- **************Advice Followup************** -->\n        <p class=\"provisionalc21\">Advice followup</p>\n        <div class=\"card cardabc custom-card vert-padding\" >\n          <div class=\"card-body\">\n            <form [formGroup]=\"followForm\" novalidate>\n                <p class=\"error_message2\"[ngStyle]=\"{'-webkit-text-fill-color':'\tred','text-align':'center'}\">{{messageAdviceNew}}</p>\n                <p class=\"headcard\">Revisit schedule</p>\n            <div class=\"revisit_tabs\">\n              <div id=\"exTab2\">\n                <div class=\"tabli\">\n                  <ul class=\"nav nav-tabs\">\n\n                    <li class=\"active\">\n                      <a href=\"#1\" data-toggle=\"tab\">DAY</a>\n                    </li>\n                    <li>\n                      <a href=\"#2\" data-toggle=\"tab\">WEEK</a>\n                    </li>\n                    <li>\n                      <a href=\"#3\" data-toggle=\"tab\">MONTH</a>\n                    </li>\n                  </ul>\n                </div>\n                <div class=\"tab-content \">\n                  <div class=\"tab-pane active\" id=\"1\">\n                    <p>{{day}}\n                      <span>days</span>\n                    </p>\n                      <p class=\"range-field \">\n                        <input type=\"range\" id=\"test5\" min=\"0\" max=\"30\" (focusout)=\"checkTime()\" (change)=\"setDay($event,'days')\" data-show-value=\"true\" data-popup-enabled=\"true\" [(ngModel)]=\"daysTest\" [ngModelOptions]=\"{standalone: true}\"/>\n                      </p>\n                  </div>\n                  <div class=\"tab-pane\" id=\"2\">\n                    <p>{{week}}\n                      <span>Weeks</span>\n                    </p>\n                      <p class=\"range-field \">\n                        <input type=\"range\" id=\"test5\" min=\"0\" max=\"4\"(focusout)=\"checkTime()\" (change)=\"setDay($event,'Weeks')\" data-show-value=\"true\" data-popup-enabled=\"true\" [(ngModel)]=\"weekTest\" [ngModelOptions]=\"{standalone: true}\"/>\n                      </p>\n                  </div>\n                  <div class=\"tab-pane\" id=\"3\">\n                    <p>{{month}}\n                      <span>Months</span>\n                    </p>\n                      <p class=\"range-field \">\n                        <input type=\"range\" id=\"test5\" min=\"0\" max=\"12\" (focusout)=\"checkTime()\" (change)=\"setDay($event,'Months')\" data-show-value=\"true\" data-popup-enabled=\"true\" [(ngModel)]=\"monthTest\" [ngModelOptions]=\"{standalone: true}\"/>\n                      </p>\n                  </div>\n                </div>\n              </div>\n            </div>\n              <input type=\"text\" name=\"fname\" placeholder=\"Referred to another Doctor\" class=\"referdoc\" formControlName=\"refferedDoctor\">\n              <!-- <span class=\"reffereddoc\" *ngIf=\"followFormErrors.refferedDoctor.required\">Please Provide Reffered Doctor Name</span> -->\n            </form>\n\n          </div>\n        </div>\n        <div class=\"text-center high\">\n          <button class=\"prescribebtn\" (click)=\"createAdvice()\">Save</button>\n          <button class=\"prescribebtn\" *ngIf=\"deleteFollow\" (click)=\"deleteFollowupForm()\"  >Delete</button>\n          <!-- <button class=\"prescribebtn\" *ngIf=\"updateFollow\"  (click)=\"saveFollowArray()\" >Save +</button> -->\n          <button class=\"cancelbtn\" (click)=\"closeForm()\">Cancel</button>\n        </div>\n        <!-- **************Advice Followup************** -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/follow-up/follow-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowUpComponent = (function () {
    function FollowUpComponent(router, activatedRoute, formBuilder, ePrescriptionService, sharedService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.ePrescriptionService = ePrescriptionService;
        this.sharedService = sharedService;
        this.deleteFollow = false;
        this.followArray = [];
        this.daysTest = 0; //initally day range zero
        this.weekTest = 0; //initally week range zero
        this.monthTest = 0; //initally month range zero
        this.followFormErrors = {
            day: {},
            week: {},
            month: {},
            refferedDoctor: {}
        };
        this.prescriptionId = localStorage.getItem('prescriptionId');
    }
    FollowUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.followForm = this.createFollowForm();
        this.followForm.valueChanges.subscribe(function () {
            _this.onFollowFormValuesChanged();
        });
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            if (Object.keys(params).length != 0) {
                _this.followId = params['id'];
                _this.deleteFollow = true;
                _this.adviceDetail(_this.followId);
            }
        });
    };
    FollowUpComponent.prototype.createFollowForm = function () {
        return this.formBuilder.group({
            day: this.day,
            week: this.week,
            month: this.month,
            refferedDoctor: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]],
        });
    };
    FollowUpComponent.prototype.onFollowFormValuesChanged = function () {
        this.messageAdviceNew = "";
        for (var field in this.followFormErrors) {
            if (!this.followFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.followFormErrors[field] = {};
            // Get the control
            var control = this.followForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.followFormErrors[field] = control.errors;
            }
        }
    };
    // to set revisit schedule 
    FollowUpComponent.prototype.setDay = function (event, schedule) {
        if (schedule == "days") {
            this.day = event.target.value;
            this.followForm.controls.day.setValue(this.day);
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
    };
    // create advice presription
    FollowUpComponent.prototype.createAdvice = function () {
        var _this = this;
        if (this.followForm.valid) {
            this.messageAdviceNew = "";
            if (this.followId) {
                this.updateDetails();
            }
            else {
                // if (this.followArray.length != 0) {   
                this.ePrescriptionService.createAdvice(this.prescriptionId, this.followForm.value).subscribe(function (result) {
                    console.log(result);
                    _this.sharedService.prescriptionInfo(true);
                    var notifydata = {
                        type: 'success',
                        title: 'Follow-up',
                        msg: 'Created Succesfully'
                    };
                    _this.sharedService.createNotification(notifydata);
                    _this.followForm.reset();
                    _this.router.navigate(['/dashboard/consultnew/diagnosis']);
                    _this.day = '';
                    _this.week = '';
                    _this.month = '';
                }, function (err) {
                });
            }
        }
        else {
            this.messageAdviceNew = "Please Enter Credentials ";
            console.log('enter the credentials');
        }
    };
    FollowUpComponent.prototype.closeForm = function () {
        this.followForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    // check refferd advice
    FollowUpComponent.prototype.checkTime = function () {
        if (!(this.day || this.week || this.month)) {
            this.messageAdviceNew = "Please Enter Credentials ";
        }
        else {
            this.messageAdviceNew = "";
        }
    };
    // get single advice detail
    FollowUpComponent.prototype.adviceDetail = function (id) {
        var _this = this;
        this.ePrescriptionService.getSingleFollowDetails(id).subscribe(function (data) {
            console.log('medicine', data);
            _this.adviceData = data.result;
            console.log(_this.adviceData);
            if (Object.keys(_this.adviceData).length != 0) {
                _this.day = _this.adviceData.day;
                _this.week = _this.adviceData.week;
                _this.month = _this.adviceData.month;
                _this.followForm.controls.day.setValue(_this.adviceData.day);
                _this.followForm.controls.week.setValue(_this.adviceData.week);
                _this.followForm.controls.month.setValue(_this.adviceData.month);
                _this.followForm.controls.refferedDoctor.setValue(_this.adviceData.refferedDoctor);
                console.log(_this.followForm.value);
            }
        }, function (err) {
        });
    };
    // update followup details
    FollowUpComponent.prototype.updateDetails = function () {
        var _this = this;
        var data = {
            day: this.followForm.value.day,
            week: this.followForm.value.week,
            month: this.followForm.value.month,
            refferedDoctor: this.followForm.value.referredDoctor,
            adviceId: this.followId
        };
        this.ePrescriptionService.updateAdviceDetail(data).subscribe(function (result) {
            console.log(result);
            var notifydata = {
                type: 'success',
                title: 'Follow-up',
                msg: 'Updated Succesfully !'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    // delete  selected followup form
    FollowUpComponent.prototype.deleteFollowupForm = function () {
        var _this = this;
        this.ePrescriptionService.deleteFollowup(this.prescriptionId, this.followId).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Follow-up',
                msg: 'Deleted Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    FollowUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-follow-up',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/follow-up/follow-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/follow-up/follow-up.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
    ], FollowUpComponent);
    return FollowUpComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=follow-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/instruction/instruction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.prescribebtn {\n    margin-right: 10px;\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #09bab1;\n    line-height: 25px;\n    font-size: 13px;\n    height:34px;\n    padding: 0 8px 0px 8px;\n    color: #09bab1;\n    font-family: Lato;\n    font-weight: 500!important;\n    width: 85px;\n}\n.prescribebtn:focus{\noutline:none;\n}\n.prescribebtn:hover{\nbackground: #09bab1;\ncolor: #fff;\nfont-family: lato;\nfont-weight: 600;\n}\n.cancelbtn{\n    border-radius: 50px;\n    background:transparent;\n    border: 1px solid #909090;\n    line-height: 25px;\n    font-size: 13px;\n    height: 34px;\n    padding: 0 8px 0px 8px;\n    color:#909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px;\n}\n.cancelbtn:focus{\n    outline:none;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n   border:none;\n}\n.card.cardabc{\n    border: none;\n    box-shadow: 1px 1px 20px 4px #edf0fd;\n    border-radius: 6px;\n    padding: 20px;\n    margin: -1.5rem 0 1rem 0;\n    padding-top:0 !important;\n}\n.card.cardabc.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\np.provisionalc21 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    margin-left: 8px;\n    color: #8c8db8;\n}\ninput.referdoc {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\ninput.referdoc::-webkit-input-placeholder {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\nbutton.crossbtnmed {\n    background: transparent;\n    outline: none;\n    border: none;\n    float: right;\n    padding: 0;\n    margin: 10px -14px 0 0;\n}\nsvg#cancelbtn {\n    height: 8px;\n    width: 11px;\n    fill: #989090;\n}\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\n.plus_btn {\n    margin: 2em 1.5em 0 0;\n}\nbutton.plus {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    width: 40px;\n    color: #fff;\n    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2);\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n}\ninput.referdoc:focus {\n    box-shadow: none;\n}\n.high {\n    padding-bottom: 20px;\n    padding-top: 1em;\n}\n\n.card-body {\n    padding-top: 7px;\n}\n\n.error_message2 {\n    color: red;\n    text-align:center;\n}\np.errormessage {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/instruction/instruction.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"provisionalc21\">Specific Instructions</p>\n        <div class=\"card cardabc custom-card\">\n            <!-- <button class=\"crossbtnmed\">\n                <svg version=\"1.1\" id=\"cancelbtn\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                  y=\"0px\" viewBox=\"0 0 212.982 212.982\" style=\"enable-background:new 0 0 212.982 212.982;\" xml:space=\"preserve\">\n                  <g id=\"Close\">\n                    <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312\n                 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312\n                 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937\n                 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z\" />\n                  </g>\n                </svg>\n                </button>\n          -->\n          <div class=\"card-body\">\n              \n            <form [formGroup]=\"instructionForm\" novalidate>\n              <p class=\"error_message2\">{{message}}</p>\n              <input type=\"text\" name=\"fname\" placeholder=\"Advice\" class=\"validate spacem referdoc\" formControlName=\"advice\">\n              <p class=\"errormessage\" *ngIf=\"instructionFormErrors.advice.required\">Please Enter Advice </p>\n            </form>\n\n\n          </div>\n        </div>\n        <div class=\"text-center high\" >\n          <button class=\"prescribebtn\" (click)=\"saveInstructionForm()\" >Save</button>\n          <button class=\"prescribebtn\" *ngIf=\"hideSavePlusButton\" (click)=\"savePlus()\">Save +</button>\n          <button class=\"prescribebtn\" *ngIf=\"hideDelete\" (click)=\"deleteSpecificForm()\">Delete</button>\n          <button class=\"cancelbtn\" (click)=\"closeInstructionForm()\">Cancel</button>\n        </div>\n        <!-- <div class=\"row\" *ngIf=\"showAddButton\">\n            <div class=\"plus_btn pull-right\" >\n              <button class=\"plus\" (click)=\"addButton()\">+</button>\n            </div>\n          </div> -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/instruction/instruction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meme_services_socket_service__ = __webpack_require__("../../../../../src/app/meme-services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InstructionComponent = (function () {
    function InstructionComponent(router, ePrescriptionService, sharedService, socketService, formBuilder, activatedRoute) {
        this.router = router;
        this.ePrescriptionService = ePrescriptionService;
        this.sharedService = sharedService;
        this.socketService = socketService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.hideSavePlusButton = true;
        this.showAddButton = true; //show save+
        this.adviceForm = [];
        this.hideDelete = false;
        this.instructionFormErrors = {
            advice: {}
        };
    }
    InstructionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //form 
        this.instructionForm = this.createInstructionForm();
        this.instructionForm.valueChanges.subscribe(function () {
            _this.onInstructionFormValuesChanged();
        });
        this.prescriptionId = localStorage.getItem('prescriptionId');
        // this.editInstructionForm();
        this.activatedRoute.params.subscribe(function (params) {
            if (Object.keys(params).length != 0) {
                _this.specificInstructionId = params['id'];
                console.log(_this.specificInstructionId); // get url id
                _this.hideSavePlusButton = false;
                _this.hideDelete = true;
                _this.getInstructionDetailById();
            }
        });
    };
    //crete instruction form
    InstructionComponent.prototype.createInstructionForm = function () {
        return this.formBuilder.group({
            advice: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    };
    InstructionComponent.prototype.onInstructionFormValuesChanged = function () {
        this.message = "";
        for (var field in this.instructionFormErrors) {
            if (!this.instructionFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.instructionFormErrors[field] = {};
            // Get the control
            var control = this.instructionForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.instructionFormErrors[field] = control.errors;
            }
        }
    };
    // create Advice form
    InstructionComponent.prototype.saveInstructionForm = function () {
        var _this = this;
        // this.submitted=true;
        if (this.instructionForm.valid) {
            if (this.specificInstructionId) {
                this.editInstructionForm();
            }
            else {
                this.message = '';
                console.log(this.instructionForm.value);
                this.hideSavePlusButton = true;
                this.ePrescriptionService.createSpecificInstruction(this.prescriptionId, this.instructionForm.value).subscribe(function (result) {
                    console.log(result);
                    _this.sharedService.prescriptionInfo(true);
                    _this.instructionForm.reset();
                    var notifydata = {
                        type: 'success',
                        title: 'Instruction',
                        msg: 'Created Succesfully'
                    };
                    _this.sharedService.createNotification(notifydata);
                    _this.router.navigate(['/dashboard/consultnew/diagnosis']);
                    _this.instructionForm.reset();
                }, function (err) {
                });
            }
        }
        else {
            this.message = "Please Enter Credentials";
        }
    };
    // adding extra Instruction
    InstructionComponent.prototype.savePlus = function () {
        var _this = this;
        if (this.instructionForm.valid) {
            this.message = '';
            console.log(this.instructionForm.value);
            this.hideSavePlusButton = true;
            this.ePrescriptionService.createSpecificInstruction(this.prescriptionId, this.instructionForm.value).subscribe(function (result) {
                console.log(result);
                _this.sharedService.prescriptionInfo(true);
                _this.instructionForm.reset();
                var notifydata = {
                    type: 'success',
                    title: 'Instruction',
                    msg: 'Created Succesfully'
                };
                _this.sharedService.createNotification(notifydata);
                _this.instructionForm.reset();
            }, function (err) {
            });
        }
        else {
            this.message = "Please Enter Credentials";
        }
    };
    // close Instruction form on close button
    InstructionComponent.prototype.closeInstructionForm = function () {
        this.instructionForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    // get instruction by id
    InstructionComponent.prototype.getInstructionDetailById = function () {
        var _this = this;
        // this.submitted=false;
        this.ePrescriptionService.getSpecificInstructionById(this.specificInstructionId).subscribe(function (result) {
            console.log(result);
            _this.individualPrescriptionDetail = result.result;
            console.log(_this.individualPrescriptionDetail);
            // this.hideSavePlusButton = false;
            console.log('detail', _this.individualPrescriptionDetail);
            _this.instructionForm.controls.advice.setValue(_this.individualPrescriptionDetail.advice);
        }, function (err) {
        });
    };
    //update Instruction form 
    InstructionComponent.prototype.editInstructionForm = function () {
        var _this = this;
        this.hideSavePlusButton = false;
        var data = {
            advice: this.instructionForm.value.advice,
            specificInstructionId: this.specificInstructionId
        };
        if (Object.keys(data.advice).length != 0) {
            this.ePrescriptionService.updateSpecificInstruction(data).subscribe(function (data) {
                console.log(data);
                _this.instructionForm.reset();
                var notifydata = {
                    type: 'success',
                    title: 'Instruction',
                    msg: '  Updated Succesfully'
                };
                _this.sharedService.createNotification(notifydata);
                _this.instructionForm.reset();
                _this.router.navigate(['/dashboard/consultnew/diagnosis']);
            });
        }
    };
    // delete  selected specific instruction form
    InstructionComponent.prototype.deleteSpecificForm = function () {
        var _this = this;
        this.ePrescriptionService.deleteSpecific(this.prescriptionId, this.specificInstructionId).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Instruction',
                msg: 'Deleted Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    InstructionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-instruction',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/instruction/instruction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/instruction/instruction.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__meme_services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meme_services_socket_service__["a" /* SocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
    ], InstructionComponent);
    return InstructionComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=instruction.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/lifestyle/lifestyle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.prescribebtn {\n    margin-right: 10px;\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #09bab1;\n    line-height: 25px;\n    font-size: 13px;\n    height:34px;\n    padding: 0 8px 0px 8px;\n    color: #09bab1;\n    font-family: Lato;\n    font-weight: 500!important;\n    width: 85px;\n}\n\n.prescribebtn:focus{\noutline:none;\n}\n.prescribebtn:hover{\nbackground: #09bab1;\ncolor: #fff;\nfont-family: lato;\nfont-weight: 600;\n}\n.cancelbtn{\n    border-radius: 50px;\n    background:transparent;\n    border: 1px solid #909090;\n    line-height: 25px;\n    font-size: 13px;\n    height: 34px;\n    padding: 0 8px 0px 8px;\n    color:#909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px;\n}\n.cancelbtn:focus{\n    outline:none;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n   border:none;\n}\n.card.cardabc{\n    border: none;\n    box-shadow: 1px 1px 20px 4px #edf0fd;\n    border-radius: 6px;\n    padding: 20px;\n    margin: -1.5rem 0 1rem 0;\n    padding-top:0 !important;\n}\n.card.cardabc.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\np.provisionalc21 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    margin-left: 8px;\n    color: #8c8db8;\n}\nbutton.crossbtnmed {\n    background: transparent;\n    outline: none;\n    border: none;\n    float: right;\n    padding: 0;\n    margin: 10px -14px 0 0;\n}\nsvg#cancelbtn {\n    height: 8px;\n    width: 11px;\n    fill: #989090;\n}\ninput.referdoc {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\ninput.referdoc::-webkit-input-placeholder {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\n.plus_btn {\n    margin: 2em 1.5em 0 0;\n}\nbutton.plus {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    width: 40px;\n    color: #fff;\n    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2);\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n}\ninput.referdoc:focus {\n    box-shadow: none;\n}\n.high {\n    padding-bottom: 20px;\n    padding-top: 1em;\n}\n\n.card-body {\n    padding-top: 7px;\n}\n.error_message2 {\n    color: red;\n    text-align:center;\n}\np.errormessage {\n    color: red;\n}\n\n@media only screen and (min-width: 320px) and (max-width:1024px){\n\n    button.prescribebtn {\n        \n        width: 80px;\n    }\n\n    .cancelbtn{\n        \n        width: 85px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/lifestyle/lifestyle.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"provisionalc21\">Lifestyle Instructions</p>\n        <div class=\"card cardabc custom-card\">\n            <!-- <button class=\"crossbtnmed\">\n                <svg version=\"1.1\" id=\"cancelbtn\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\"\n                  y=\"0px\" viewBox=\"0 0 212.982 212.982\" style=\"enable-background:new 0 0 212.982 212.982;\" xml:space=\"preserve\">\n                  <g id=\"Close\">\n                    <path style=\"fill-rule:evenodd;clip-rule:evenodd;\" d=\"M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312\n                 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312\n                 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937\n                 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z\" />\n                  </g>\n                </svg>\n                </button> -->\n         <div class=\"card-body\">\n            <form  >\n                <div >\n                    <div [formGroup]=\"lifeStyleForm\" novalidate>\n              <p class=\"error_message2\">{{messageLifeStyle}}</p>\n              <span>{{message}}</span>\n              <input type=\"text\" name=\"fname\" placeholder=\"Advice\" class=\"validate spacem\" class=\"referdoc\"   formControlName=\"advice\">\n              <p class=\"errormessage\" *ngIf=\"lifeStyleFormErrors.advice.required\"> Please Enter Advice </p>\n           </div>\n           </div>\n            </form>\n\n          </div>\n        </div>\n        <div class=\"text-center high\">\n          <button class=\"prescribebtn\" (click)=\"createLifeStyle()\">Save</button>\n          <button class=\"prescribebtn\" *ngIf=\"hideSavePlus\" (click)=\"savePlusInstructions()\">Save +</button>\n          <button class=\"prescribebtn\"*ngIf=\"hideDelete\"  (click)=\"deleteLifestyleForm()\">Delete</button>\n          <button class=\"cancelbtn\" (click)=\"clearData()\">Cancel</button>\n        </div>\n     "

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/lifestyle/lifestyle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestyleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Router, ActivatedRoute, Params } from '@angular/router';
var LifestyleComponent = (function () {
    function LifestyleComponent(SharedService, activatedRoute, formBuilder, router, ePrescriptionService) {
        var _this = this;
        this.SharedService = SharedService;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.router = router;
        this.ePrescriptionService = ePrescriptionService;
        this.lifeStyleArray = [];
        this.close = false;
        this.hideSavePlus = true;
        this.hideDelete = false;
        this.lifeStyleFormErrors = {
            advice: {}
        };
        this.prescriptionId = localStorage.getItem('prescriptionId');
        // get lifestyle id from path
        this.activatedRoute.params.subscribe(function (params) {
            if (Object.keys(params).length != 0) {
                _this.lifestyleId = params['id'];
                console.log(_this.lifestyleId); // get url id
                _this.hideSavePlus = false;
                _this.hideDelete = true;
                _this.getLifestyleById(_this.lifestyleId);
            }
        });
    }
    LifestyleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lifeStyleForm = this.createLifeStyleForm();
        this.lifeStyleForm.valueChanges.subscribe(function () {
            _this.onLifeStyleFormValuesChanged();
        });
    };
    LifestyleComponent.prototype.createLifeStyleForm = function () {
        return this.formBuilder.group({
            advice: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    LifestyleComponent.prototype.onLifeStyleFormValuesChanged = function () {
        this.messageLifeStyle = "";
        this.message = "";
        for (var field in this.lifeStyleFormErrors) {
            if (!this.lifeStyleFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.lifeStyleFormErrors[field] = {};
            // Get the control
            var control = this.lifeStyleForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.lifeStyleFormErrors[field] = control.errors;
            }
        }
    };
    // add input
    LifestyleComponent.prototype.savePlusInstructions = function () {
        var _this = this;
        if (this.lifeStyleForm.valid) {
            this.ePrescriptionService.createLifeStyleInstruction(this.prescriptionId, this.lifeStyleForm.value).subscribe(function (result) {
                console.log(result);
                _this.lifeStyleForm.reset();
                var notifydata = {
                    type: 'success',
                    title: 'LifeStyle',
                    msg: 'Created Succesfully !'
                };
                _this.SharedService.createNotification(notifydata);
                _this.lifeStyleForm.reset();
            }, function (err) {
            });
        }
        else {
            this.messageLifeStyle = "Please Enter Credentials";
        }
    };
    // close form
    LifestyleComponent.prototype.clearData = function () {
        this.close = true;
        this.lifeStyleForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    // save lifestyle form
    LifestyleComponent.prototype.createLifeStyle = function () {
        var _this = this;
        if (this.lifestyleId) {
            this.updateLifeStyle();
        }
        else {
            if (this.lifeStyleForm.valid) {
                this.ePrescriptionService.createLifeStyleInstruction(this.prescriptionId, this.lifeStyleForm.value).subscribe(function (result) {
                    console.log(result);
                    _this.lifeStyleForm.reset();
                    var notifydata = {
                        type: 'success',
                        title: 'LifeStyle',
                        msg: 'Created Succesfully !'
                    };
                    _this.SharedService.createNotification(notifydata);
                    _this.router.navigate(['/dashboard/consultnew/diagnosis']);
                    // this.getEprescription(this.prescriptionId);
                }, function (err) {
                });
            }
            else {
                this.messageLifeStyle = "Please Enter Credentials";
            }
        }
    };
    //get lifestyle detail by id
    LifestyleComponent.prototype.getLifestyleById = function (id) {
        var _this = this;
        this.ePrescriptionService.getLifeStyleDetails(this.lifestyleId).subscribe(function (result) {
            console.log(result);
            _this.lifestyleDetails = result.result;
            _this.lifeStyleForm.controls.advice.setValue(_this.lifestyleDetails.advice);
        }, function (err) {
        });
    };
    //update lifestyle
    LifestyleComponent.prototype.updateLifeStyle = function () {
        var _this = this;
        if (this.lifeStyleForm.valid) {
            var data = {
                lifeStyleId: this.lifestyleId,
                advice: this.lifeStyleForm.controls.advice.value
            };
            this.ePrescriptionService.updateLifeStyleDetails(data).subscribe(function (result) {
                console.log(result);
                var notifydata = {
                    type: 'success',
                    title: 'LifeStyle',
                    msg: 'Updated Succesfully !'
                };
                _this.SharedService.createNotification(notifydata);
                _this.lifeStyleForm.reset();
                _this.router.navigate(['/dashboard/consultnew/diagnosis']);
            }, function (err) {
            });
        }
    };
    // delete  selected lifestyle form
    LifestyleComponent.prototype.deleteLifestyleForm = function () {
        var _this = this;
        this.ePrescriptionService.deleteLifestyle(this.prescriptionId, this.lifestyleId).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'LifeStyle',
                msg: 'Deleted Succesfully'
            };
            _this.SharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    LifestyleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lifestyle',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/lifestyle/lifestyle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/lifestyle/lifestyle.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _e || Object])
    ], LifestyleComponent);
    return LifestyleComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=lifestyle.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/medicine/medicine.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.prescribebtn {\n    margin-right: 10px;\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #09bab1;\n    line-height: 25px;\n    font-size: 13px;\n    height:34px;\n    padding: 0 8px 0px 8px;\n    color: #09bab1;\n    font-family: Lato;\n    font-weight: 500!important;\n    width: 85px;\n}\n.prescribebtn:focus{\noutline:none;\n}\n.prescribebtn:hover{\nbackground: #09bab1;\ncolor: #fff;\nfont-family: lato;\nfont-weight: 600;\n}\n.provisionalc21frequency {\n    font-size: 14px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top: 1em;\n    color: #8c8db8;\n}\n.day_tab p{\n    text-align: center;\n    /* padding: 15px 30px 0 30px; */\n    font-size: 27px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 500;\n    color: rgba(85, 85, 85, .8);\n}\n .day_tab span{\n    font-size: 15px;\n    vertical-align: text-top;\n    font-weight: 500;\n    margin-left: -5px;\n}\np.range-field {\n    padding-top: 0px !important;\n}\n.cancelbtn{\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #909090;\n    line-height: 25px;\n    font-size: 13px;\n    height: 34px;\n    padding: 0 8px 0px 8px;\n    color:#909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px;\n}\n.cancelbtn:focus{\n    outline:none;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n   border:none;\n}\ninput.referdoc:focus {\n    box-shadow: none;\n}\n.card.cardabc{\n    border: none;\n    box-shadow: 1px 1px 20px 4px #edf0fd;\n    border-radius: 6px;\n    padding: 20px;\n    margin: -1.5rem 0 1rem 0;\n    padding-top:0 !important;\n}\n.card.cardabc.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\np.provisionalc21 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    margin-left: 8px;\n    color: #8c8db8;\n}\ninput.referdoc {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 4px;\n}\ninput.referdoc::-webkit-input-placeholder {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\nbutton.crossbtnmed {\n    background: transparent;\n    outline: none;\n    border: none;\n    float: right;\n    padding: 0;\n    margin: 10px -14px 0 0;\n}\nsvg#cancelbtn {\n    height: 8px;\n    width: 11px;\n    fill: #989090;\n}\n.plus_btn {\n    margin: 2em 1.5em 0 0;\n}\ntextarea.text2area {\n    resize: none;\n    border: none;\n    outline: none;\n    border-bottom: 1px solid rgba(169, 169, 169, 0.62);\n    color: #84869d;\n    font-family: 'Lato', sans-serif;\n    font-size: 13px;\n    height:4em;\n}\np.range-field {\n    padding-top: 0px !important;\n}\ninput[type=\"text\"]{\n    text-indent:4px;\n    -o-border-image: linear-gradient(rgb(87, 107, 235), #cccccc);\n       border-image: linear-gradient(rgb(87, 107, 235), #cccccc);\n    border-width: 1px;\n    border-image-slice: 1;\n}\np.provisionalc21frequency {\n    font-size: 14px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top: 1em;\n    color: #8c8db8;\n}\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\n.plus_btn {\n    margin: 2em 1.5em 0 0;\n}\nbutton.plus {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    width: 40px;\n    color: #fff;\n    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.2);\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n}\n.high {\n    padding-bottom: 20px;\n    padding-top: 3em;\n}\n:host >>> .completer-dropdown {\n    overflow-y: auto;\n    overflow-x:hidden;\n    font-family: 'Lato', sans-serif;\n    font-weight:400;\n    max-height: 200px;\n    background:#fff!important;\n    color:#000!important;\n    width:92% !important;\n    padding:0 !important;\n    margin-top:0px!important;\n    border-bottom: 1px solid rgba(238, 238, 238, 1);\n  \n  }\n  :host /deep/ .completer-input {\n    color: rgb(132, 132, 132);\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    height: 2.4rem !important;\n    margin-bottom: 10px !important;\n    border-bottom: 1px solid rgba(238, 238, 238, 1) !important;\n    }\n    :host >>> .completer-selected-row{\n      background: #37cdb6!important;\n  \n    }\n    :host /deep/ input.completer-input:-ms-input-placeholder {\n        color: #8c8db8 ;\n        font-size: 13px;\n    }\n    :host /deep/ input.completer-input::placeholder {\n        color: #8c8db8 ;\n        font-size: 13px;\n    }\n    .card-body {\n        background: white;\n        padding: 12px 20px 21px 20px;\n        box-shadow: 1px 1px 20px 4px #edf0fd;\n        border-radius: 6px;\n    }\n    input.referdoc:-ms-input-placeholder {\n        color: #7b87b3 !important;\n        font-size: 13px;\n    }\n    input.referdoc::placeholder {\n        color: #7b87b3 !important;\n        font-size: 13px;\n    }\n    span.errormessage {\n        color: red;\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/medicine/medicine.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"provisionalc21\">Prescribe Medicine</p>\n<div class=\"card-body\">\n  <p class=\"error_message2\" [ngStyle]=\"{'-webkit-text-fill-color':'\tred','text-align':'center'}\">{{messageMedicine}}</p>\n  <span class=\"error_message2\" [ngStyle]=\"{'-webkit-text-fill-color':'\tred'}\">{{saveMedicine}}</span>\n  <form [formGroup]=\"medicineForm\" novalidate>\n    <ng2-completer class=\"referdoc\" placeholder=\"Medicine Name\" formControlName=\"medicineName\"  [datasource]=\"medicineService\" [minSearchLength]=\"0\"  (keyup)=\"getMedicineList($event.target.value)\"></ng2-completer>\n\n    <span class=\"errormessage\" *ngIf=\"medicineFormErrors.medicineName.required\">Please Provide Medicine Name</span>\n    <input type=\"text\" name=\"fname\" [textMask]=\"{mask: mask, guide: false}\" placeholder=\"Dosage\" formControlName=\"dosage\" class=\"referdoc\">\n    <span class=\"errormessage\" *ngIf=\"medicineFormErrors.dosage.required\">Please Provide Medicine Dosage</span>\n    <div class=\"f_range\">\n      <span class=\"provisionalc21frequency\">Frequency</span>\n      <div class=\"day_tab\">\n\n        <p> {{frequency}}\n          <span>X</span>\n        </p>\n        <p class=\"range-field \">\n          <input  #myInput type=\"range\" id=\"test5\" startValue=\"0\" min=\"0\" max=\"5\"(change)=\"setFrequency($event)\" data-show-value=\"true\" data-popup-enabled=\"true\" [(ngModel)]=\"frequencyTest\" [ngModelOptions]=\"{standalone: true}\" />\n        </p>\n\n      </div>\n    </div>\n    <span class=\"provisionalc21frequency\">Days</span>\n\n    <div class=\"day_tab\">\n      <p>{{days}}\n        <span>days</span>\n      </p>\n\n      <p class=\"range-field \">\n        <input #myOutput type=\"range\" id=\"test5\" min=\"0\" max=\"30\" (change)=\"setDay($event)\" data-show-value=\"true\" data-popup-enabled=\"true\" [(ngModel)]=\"daysTest\" [ngModelOptions]=\"{standalone: true}\"/>\n      </p>\n\n    </div>\n    <p class=\"provisionalc21frequency\">Instructions</p>\n    <textarea class=\"text2area\" placeholder=\"Enter your instruction here\" formControlName=\"instructions\"></textarea>\n    <!-- <span class=\"errormessage\" *ngIf=\"medicineFormErrors.instructions.required\">Please Provide Instructions </span> -->\n  </form>\n\n\n</div>\n<div class=\"text-center high\" [hidden]=\"!closeMedicine\">\n  <button class=\"prescribebtn\" (click)=\"createMedicine()\">Save</button>\n  <button class=\"prescribebtn\" *ngIf=\"update\" (click)=\"saveMedicineArray()\">Save +</button>\n  <button class=\"prescribebtn\" *ngIf=\"hideDelete\" (click)=\"deleteMedicineForm()\">Delete</button>\n  <!-- (click)=\"createMedicine()\" -->\n  <button class=\"cancelbtn\" (click)=\"closeForm()\">Cancel</button>\n  <!-- (click)=\"closeForm('Prescribe Medicine')\" -->\n</div>\n<!-- <div class=\"row\">\n          <div class=\"plus_btn pull-right\" >\n            \n            <button class=\"plus\" (click)=\"addButton()\">+</button>\n          \n          </div>\n        </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/medicine/medicine.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_completer__ = __webpack_require__("../../../../ng2-completer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedicineComponent = (function () {
    function MedicineComponent(router, activatedRoute, ePrescriptionService, formBuilder, completerService, sharedService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.ePrescriptionService = ePrescriptionService;
        this.formBuilder = formBuilder;
        this.completerService = completerService;
        this.sharedService = sharedService;
        this.medicineArray = [];
        this.frequency = '';
        this.days = '';
        this.messageMedicine = '';
        this.medicine = false;
        this.closeMedicine = true;
        this.update = true;
        this.hideDelete = false;
        this.saveMedicine = '';
        this.frequencyTest = 0; //initally frequency range zero
        this.daysTest = 0; //initally day range zero
        this.mask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
        this.medicineFormErrors = {
            medicineName: {},
            dosage: {},
            frequency: {},
            days: {}
            // instructions: {}
        };
        this.prescriptionId = localStorage.getItem('prescriptionId');
    }
    MedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineForm = this.createmedicineForm();
        this.medicineForm.valueChanges.subscribe(function () {
            _this.onMedicineFormValuesChanged();
        });
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            if (Object.keys(params).length != 0) {
                _this.medicineId = params['id'];
                _this.update = false;
                _this.hideDelete = true;
                _this.medicineDetail(_this.medicineId);
            }
        });
        // this.getMedicineList();
    };
    // save medicine and stay in same page
    MedicineComponent.prototype.saveMedicineArray = function () {
        var _this = this;
        this.messageMedicine = '';
        this.saveMedicine = '';
        if (this.medicineForm.valid && this.frequency != "" && this.days != "") {
            this.ePrescriptionService.createMedicine(this.prescriptionId, this.medicineForm.value).subscribe(function (result) {
                console.log(result);
                _this.reset();
                _this.medicine = true;
                _this.medicineForm.reset();
                _this.days = '';
                _this.frequency = '';
                _this.sharedService.prescriptionInfo(true);
                var notifydata = {
                    type: 'success',
                    title: 'medicine',
                    msg: 'Created Succesfully'
                };
                _this.sharedService.createNotification(notifydata);
            }, function (err) {
            });
        }
        else {
            this.messageMedicine = "Please Enter Credentials";
        }
    };
    MedicineComponent.prototype.createmedicineForm = function () {
        return this.formBuilder.group({
            medicineName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            dosage: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            frequency: this.frequency,
            days: this.days,
            instructions: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]],
        });
    };
    MedicineComponent.prototype.onMedicineFormValuesChanged = function () {
        this.messageMedicine = "";
        for (var field in this.medicineFormErrors) {
            if (!this.medicineFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.medicineFormErrors[field] = {};
            // Get the control
            var control = this.medicineForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.medicineFormErrors[field] = control.errors;
            }
        }
    };
    // create medicine presription
    MedicineComponent.prototype.createMedicine = function () {
        var _this = this;
        this.messageMedicine = '';
        this.saveMedicine = '';
        if (this.medicineForm.valid) {
            if (this.medicineId) {
                this.updateMedicineDetail();
            }
            else {
                // if (this.medicineForm.valid){
                this.ePrescriptionService.createMedicine(this.prescriptionId, this.medicineForm.value).subscribe(function (result) {
                    console.log(result);
                    _this.medicine = true;
                    _this.medicineForm.reset();
                    _this.frequency = '';
                    _this.days = '';
                    _this.sharedService.prescriptionInfo(true);
                    var notifydata = {
                        type: 'success',
                        title: 'Medicine',
                        msg: 'Created Succesfully'
                    };
                    _this.sharedService.createNotification(notifydata);
                    _this.router.navigate(['/dashboard/consultnew/diagnosis']);
                }, function (err) {
                });
            }
        }
        else {
            this.messageMedicine = "Please Enter Credentials ";
        }
    };
    // get medicine through prescription id
    MedicineComponent.prototype.getMedicine = function () {
        this.ePrescriptionService.getMedicine(this.prescriptionId)
            .subscribe(function (result) {
            console.log(result);
        }, function (err) {
        });
    };
    // get medicine list
    MedicineComponent.prototype.getMedicineList = function (value) {
        var _this = this;
        this.ePrescriptionService.getMedicineList(value).subscribe(function (data) {
            console.log('medicine', data);
            _this.medicineList = data;
            console.log(_this.medicineList);
            _this.medicineService = _this.completerService.local(_this.medicineList, 'PrescribingInformation', 'PrescribingInformation');
        }, function (err) {
        });
    };
    // close Instruction form on close button
    MedicineComponent.prototype.closeForm = function () {
        this.medicineForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    // to set frequency range for medicine
    MedicineComponent.prototype.setFrequency = function (event) {
        this.frequency = '';
        this.frequency = event.target.value;
        this.medicineForm.controls.frequency.setValue(this.frequency);
    };
    // to set time duration range for medicine
    MedicineComponent.prototype.setDay = function (event) {
        this.days = event.target.value;
        this.medicineForm.controls.days.setValue(this.days);
    };
    // get single medicine data
    MedicineComponent.prototype.medicineDetail = function (id) {
        var _this = this;
        this.ePrescriptionService.getSingleMedicineDetails(id).subscribe(function (data) {
            console.log('medicine', data);
            _this.medicineData = data.result;
            console.log(_this.medicineData);
            _this.medicineForm.controls.medicineName.setValue(_this.medicineData.medicineName);
            _this.medicineForm.controls.dosage.setValue(_this.medicineData.dosage);
            _this.frequency = _this.medicineData.frequency;
            _this.days = _this.medicineData.days;
            _this.medicineForm.controls.instructions.setValue(_this.medicineData.instructions);
            console.log(_this.medicineForm.value);
        }, function (err) {
        });
    };
    // medicine update
    MedicineComponent.prototype.updateMedicineDetail = function () {
        var _this = this;
        var data = {
            medicineName: this.medicineForm.value.medicineName,
            dosage: this.medicineForm.value.dosage,
            days: this.medicineForm.value.days,
            frequency: this.medicineForm.value.frequency,
            instructions: this.medicineForm.value.instructions,
            medicineId: this.medicineId
        };
        this.ePrescriptionService.updateMedicine(data).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Medicine',
                msg: 'Updated Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    // delete  selected medicine form
    MedicineComponent.prototype.deleteMedicineForm = function () {
        var _this = this;
        this.ePrescriptionService.deleteMedicine(this.prescriptionId, this.medicineId).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Medicine',
                msg: 'Deleted Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    MedicineComponent.prototype.reset = function () {
        this.myInputVariable.nativeElement.value = "";
        this.myOutputVariable.nativeElement.value = "";
        this.daysTest = 0;
        this.frequencyTest = 0;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", Object)
    ], MedicineComponent.prototype, "myInputVariable", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myOutput'),
        __metadata("design:type", Object)
    ], MedicineComponent.prototype, "myOutputVariable", void 0);
    MedicineComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medicine',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/medicine/medicine.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/medicine/medicine.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["b" /* CompleterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_completer__["b" /* CompleterService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _f || Object])
    ], MedicineComponent);
    return MedicineComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=medicine.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/suggest/suggest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button.prescribebtn {\n    background: transparent;\n    line-height: 30px;\n    width: 77px;\n    color: #09bab1;\n    font-size: 14px;\n    font-weight: 400;\n    font-family: 'Roboto',sans-serif;\n    border: 1px solid #09bab1;\n    border-radius: 20px;\n    margin: 4px 10px 0px 0;\n    padding: 0;\n    outline:none;\n}\n.card-body {\n    margin-bottom: -5px;\n}\n.prescribebtn:hover{\nbackground: #09bab1;\ncolor: #fff;\n}\n.cancelbtn{\n    border-radius: 50px;\n    background: transparent;\n    border: 1px solid #909090;\n    line-height: 30px;\n    font-size: 13px;\n    padding: 0 8px 0px 8px;\n    color: #909090;\n    font-family: Lato;\n    font-weight: 500;\n    width: 85px;\n    outline:none;\n}\n.cancelbtn:hover{\n   background: #909090;\n   color:white;\n}\n.card.cardabc1{\n    border: none;\n    box-shadow: 1px 1px 20px 4px #edf0fd;\n    border-radius: 6px;\n    padding: 2px 0px 10px 0;\n    margin: -1.5rem 0 1rem 0;\n}\ninput.referdoc:focus {\n    box-shadow: none;\n} \n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\n.card.cardabc1.custom-card {\n    width: 98%;\n    margin: 0px auto;\n    margin-bottom: 25px;\n}\np.provisionalc21 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top:1em;\n    margin-left: 8px;\n    color: #8c8db8;\n}\nbutton.crossadvice{\n    background: transparent;\n    outline: none;\n    border: none;\n    float: right;\n    padding: 0;\n    margin: 2px 9px 0 0;\n}\nsvg#cancelbtn {\n    height: 8px;\n    width: 11px;\n    fill: #989090;\n}\ninput.referdoc {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    margin-bottom: 4px;\n}\ninput.referdoc::-webkit-input-placeholder {\n    color:#84869d ;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\n.radio_btn select {\n    border: none;\n    width: 98%;\n    padding-left: 8px;\n    outline: none;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    color: #8c8db8;\n}\n\np.provisionalc212 {\n    font-size: 15px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-left: 2em;\n    padding: 1em 0;\n    margin-bottom: 0;\n    color: #8c8db8;\n}\nhr.full_width {\n    margin: 0;\n}\n.allignspace {\n    text-align: center;\n    padding: 10px 2em;\n}\nspan.error_message2 {\n    color: red;\n    text-align: left;\n    display: block;\n    margin-left: 30px;\n    font-size: 13px;\n    margin-top: 3px;\n}\n.plus_btn {\n    margin: 2em 1.5em 0 0;\n}\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\nbutton.plus {\n    border-radius: 50%;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-size: 20px;\n    height: 40px;\n    width: 40px;\n    color: #fff;\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n}\n.high {\n    padding-bottom: 20px;\n    padding-top: 1em;\n}\n\nspan.errormessage {\n    color: red;\n    font-size: 13px;\n}\n\n.allignspace.text-left {\n    text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/suggest/suggest.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- **************Test Recommended box************** -->\n<div class=\"content_suggest\">\n\n  <form [formGroup]=\"suggestForm\" novalidate>\n    <p class=\"provisionalc21\">Test Recommended</p>\n    <div class=\"card cardabc1 custom-card\">\n\n      <div class=\"card-body\">\n        <div class=\"radio_btn\">\n          <select class=\"browser-default\" formControlName=\"categoryType\" (change)=\"testRecommend($event.target.value)\">\n            <option [value]=\"null\">Please select test category</option>\n            <option *ngFor=\"let test of testTypes\" value={{test}}>{{test}}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    <!-- **************Test Recommended box************** -->\n    <!-- **************Test Recommended************** -->\n    <p class=\"provisionalc21\" *ngIf=\"hideTestRecommended\">Test Recommended</p>\n    <div *ngIf=\"hideTestRecommended\">\n      <div class=\"card cardabc1 custom-card\">\n        <div class=\"card-body\">\n          <p class=\"provisionalc212\">{{tests}}</p>\n          <hr class=\"full_width\">\n          <span class=\"error_message2\" [ngStyle]=\"{'-webkit-text-fill-color':'\tred','text-align':'center'}\">{{messageTest}}</span>\n          <div class=\"allignspace text-left\">\n            <input type=\"text\" name=\"fname\" placeholder=\"Test Name\" class=\"referdoc\" formControlName=\"testName\">\n            <span class=\"errormessage\" *ngIf=\"suggestFormErrors.testName.required\">Please Provide Test Name </span>\n            <input type=\"text\" name=\"fname\" placeholder=\"Test Description\" class=\"referdoc\" formControlName=\"testDescription\">\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"text-center high\" *ngIf=\"hideTestRecommended\">\n  <button class=\"prescribebtn\" (click)=\"createSuggestTest()\">Save</button>\n  <button class=\"prescribebtn\" *ngIf=\"update\" (click)=\"saveSuggestForm()\">Save +</button>\n  <button class=\"prescribebtn\" *ngIf=\"hideDelete\" (click)=\"deleteSuggestForm()\" >Delete</button>\n  <button class=\"cancelbtn\"  (click)=\"closeForm()\">Cancel</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/suggest/suggest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meme_services_socket_service__ = __webpack_require__("../../../../../src/app/meme-services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SuggestComponent = (function () {
    function SuggestComponent(router, ePrescriptionService, sharedService, socketService, formBuilder, activatedRoute) {
        this.router = router;
        this.ePrescriptionService = ePrescriptionService;
        this.sharedService = sharedService;
        this.socketService = socketService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.testTypes = ['Radiology', 'Imaging', 'Clinical', 'UltraSound', 'Laboratory'];
        this.recommendedForm = [];
        this.testDetails = false;
        this.hideTestRecommended = false; //hide test recommended form
        this.hideAddbutton = false;
        this.messageSuggest = '';
        this.update = true;
        this.hideDelete = false;
        this.suggestFormErrors = {
            categoryType: {},
            testName: {},
            testDescription: {}
        };
    }
    SuggestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.suggestForm = this.createSuggestForm();
        this.suggestForm.valueChanges.subscribe(function () {
            _this.onSuggestFormValuesChanged();
        });
        this.activatedRoute.params.subscribe(function (params) {
            console.log(params);
            if (Object.keys(params).length != 0) {
                _this.suggestId = params['id'];
                _this.update = false;
                _this.hideDelete = true;
                _this.suggestDetail(_this.suggestId);
            }
        });
        this.prescriptionId = localStorage.getItem('prescriptionId');
    };
    SuggestComponent.prototype.onSuggestFormValuesChanged = function () {
        this.messageTest = "";
        for (var field in this.suggestFormErrors) {
            if (!this.suggestFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.suggestFormErrors[field] = {};
            // Get the control
            var control = this.suggestForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.suggestFormErrors[field] = control.errors;
            }
        }
    };
    SuggestComponent.prototype.createSuggestForm = function () {
        return this.formBuilder.group({
            categoryType: this.tests,
            testName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            testDescription: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"]],
        });
    };
    // create recommended test
    SuggestComponent.prototype.createSuggestTest = function () {
        var _this = this;
        this.suggestForm.controls.categoryType.setValue(this.tests);
        if (this.suggestForm.valid && this.tests.length != 0 && this.tests != 'null') {
            if (this.suggestId) {
                this.updateSuggestDetail();
            }
            else {
                this.ePrescriptionService.createRecommendedTest(this.suggestForm.value, this.prescriptionId).subscribe(function (result) {
                    console.log(result);
                    _this.sharedService.prescriptionInfo(true);
                    _this.suggestForm.reset();
                    _this.hideTestRecommended = false;
                    _this.hideSaveButton = false;
                    var notifydata = {
                        type: 'success',
                        title: 'Suggest',
                        msg: 'Created Succesfully'
                    };
                    _this.sharedService.createNotification(notifydata);
                    _this.router.navigate(['/dashboard/consultnew/diagnosis']);
                    _this.suggestForm.reset();
                    _this.tests = '';
                }, function (err) {
                });
            }
        }
        else {
            this.messageTest = "Please Enter Credentials";
        }
    };
    // at save+ add extra suggestion 
    SuggestComponent.prototype.saveSuggestForm = function () {
        var _this = this;
        if (this.suggestForm.valid && this.tests.length != 0 && this.tests != 'null') {
            this.ePrescriptionService.createRecommendedTest(this.suggestForm.value, this.prescriptionId).subscribe(function (result) {
                console.log(result);
                _this.sharedService.prescriptionInfo(true);
                _this.suggestForm.reset();
                _this.hideTestRecommended = true;
                _this.hideSaveButton = false;
                var notifydata = {
                    type: 'success',
                    title: 'Suggest',
                    msg: 'Created Succesfully'
                };
                _this.sharedService.createNotification(notifydata);
                _this.suggestForm.reset();
                _this.tests = '';
            }, function (err) {
            });
        }
        else {
            this.messageTest = "Please Enter Credentials";
            console.log('enter the credentials');
        }
    };
    // get single suggest detail
    SuggestComponent.prototype.suggestDetail = function (id) {
        var _this = this;
        this.ePrescriptionService.getSingleSuggest(id).subscribe(function (data) {
            console.log('suggest', data);
            _this.suggestData = data.result;
            console.log(_this.suggestData);
            _this.hideTestRecommended = true;
            _this.tests = _this.suggestData.categoryType;
            _this.suggestForm.controls.categoryType.setValue(_this.suggestData.categoryType);
            _this.suggestForm.controls.testName.setValue(_this.suggestData.testName);
            _this.suggestForm.controls.testDescription.setValue(_this.suggestData.testDescription);
            console.log(_this.suggestForm.value);
        }, function (err) {
        });
    };
    // update suggest form
    SuggestComponent.prototype.updateSuggestDetail = function () {
        var _this = this;
        var data = {
            categoryType: this.suggestForm.value.categoryType,
            testName: this.suggestForm.value.testName,
            testDescription: this.suggestForm.value.testDescription,
            recommendedId: this.suggestId
        };
        this.ePrescriptionService.updateSuggest(data).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Suggest',
                msg: 'Updated Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
            _this.tests = '';
        }, function (err) {
        });
    };
    // select data from dropdown
    SuggestComponent.prototype.testRecommend = function (value) {
        this.tests = value;
        this.suggestForm.controls.categoryType.setValue(this.tests);
        this.hideTestRecommended = true;
        this.hideAddbutton = true;
    };
    // close suggest form on close button
    SuggestComponent.prototype.closeForm = function () {
        this.suggestForm.reset();
        this.router.navigate(['/dashboard/consultnew/diagnosis']);
    };
    // delete  selected recommended form
    SuggestComponent.prototype.deleteSuggestForm = function () {
        var _this = this;
        this.ePrescriptionService.deleteSuggest(this.prescriptionId, this.suggestId).subscribe(function (data) {
            console.log(data);
            var notifydata = {
                type: 'success',
                title: 'Suggest',
                msg: 'Deleted Succesfully'
            };
            _this.sharedService.createNotification(notifydata);
            _this.router.navigate(['/dashboard/consultnew/diagnosis']);
        }, function (err) {
        });
    };
    SuggestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-suggest',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/suggest/suggest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/suggest/suggest.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__meme_services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__meme_services_socket_service__["a" /* SocketService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]) === "function" && _f || Object])
    ], SuggestComponent);
    return SuggestComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=suggest.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/video/video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ******************** video part*******************  */\nsection.video {\n    background: #fff;\n    height: 90vh;\n    overflow-y: scroll;\n}\nsection.video::-webkit-scrollbar { \n    display: none;\n  }\n.nomargin0row{\n    margin: 0;\n}\nimg.logo_img2video{\n    width: 84px;\n    height: auto;\n    border-radius: 50%;\n}\np.namelocplayer {\n    text-align: left;\n    font-weight: 400;\n    font-size: 22px;\n    color: rgb(70, 79, 108);\n    font-family: 'Lato', sans-serif;\n    word-spacing: 2px;\n}\nspan.video2_player {\npadding-left: 11px;\nposition: relative;\n}\nspan.from {\n    font-size: 14px;\n    color: rgba(140, 141, 184, 0.85);\n}\nspan.video2_player::before {\n    content: '';\n    background: #272424;\n    padding-top: 0;\n    height: 11px;\n    width: 1px;\n    position: absolute;\n    left: 4px;\n    top: 3px;\n}\np.namelocplayer4{\n    text-align: left;\n    font-size: 11px;\n    line-height: 14px;\n    font-weight: 500;\n    color: rgb(70, 79, 108);\n    font-family: 'Lato', sans-serif;\n}\n.active_call {\n    float: right;\n    margin-top: 2em;\n}\ndiv#padding-o {\n    padding: 0;\n}\n.text_nav2 {\n    margin-left:1em;\npadding-top:2em;\nline-height: 7px;\n}\n.doe .row {\n    margin-bottom: 18px;\n}\n.plus_btn {\n    margin: 2em 2em 0 0;\n}\nbutton.plus:hover{\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\nbutton.call_button {\n    border-radius: 50px;\n    outline: none;\n    cursor: pointer;\n    border: none;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\nbox-shadow: 0px 1px 16px 3px rgba(58, 216, 123, 0.31);\n    font-size: 13px;\n    height: 32px;\n    width: 80px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #0bdb85;\n}\n.found_bg {\n    background: #fcfcfc;\n    padding: 4% 0 6% 0;\n    line-height: 14px;\n}\np.found {\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    color: rgba(140, 141, 184, 0.85);\n}\nbutton.funnel_btn {\n    background: transparent;\n    outline: none;\n    border: none;\n    width: 140px;\n    cursor: pointer;\n    margin-top: -6px;\n}\nsvg#funnel {\n    fill: #5990f0;\n    vertical-align: middle;\n    height: 20px;\n    width: 20px;\n    float: right;\n}\nhr.card_hr {\n    margin: 9px 7px;\n}\n.march .row {\n    margin-bottom: 0;\n}\nbutton.call_button:hover {\n    background: linear-gradient(to bottom, #5451e8, rgba(56, 145, 239, 0.82));\n}\n.march p {\n    margin: 0;\n}\np.temp {\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    color: rgba(140, 141, 184, 0.89);\n}\np.te_nov {\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 13px;\n    color: rgb(140, 141, 184);\n}\n.padding-card {\n    border-radius: 5px;\n    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.08);\n    margin: 11px 1em\n}\n.novomox {\n    padding: 12px 0;\n}\n.established p {\n    padding: 8px 0 25px 17px;\n    width: 76%;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 300;\n    font-size: 14px;\n    line-height: 16px;\n    color:rgba(140, 141, 184, 0.96);\n}\n\n/* ******************** video part*******************  */\n/* ******************************video section********************* */\n  #video-background {\n    width: 100%;\n    height: 245px;\n    border: none;\n  }\n  .img_player {\n    background:#fff;\n    position: absolute;\n    top: 14px;\n    right: 14px;\n}\nimg.img_playersub_img {\n    height: 82px;\n    width: auto;\n}\n.icons_music {\n    background: rgba(92, 96, 123, 0.47);\n    width: 100%;\n    position: absolute;\n    bottom: 4px;\n    /* padding: 2em 0; */\n    font-size: 9px;\n    color: #fff;\n}\nul.list-inline.volume li {\n    padding: 0px 2px;\n    margin: 16px 0px;\n}\nul.list-inline.volume li button {\n    background: transparent;\n    border: none;\n    outline: none;\n    cursor: pointer;\n}\nul.list-inline.volume {\n    margin-bottom: 0;\n}\nsvg#speaker {\n    height: 25px;\n    width: 34px;\n    fill: #fff;\n    vertical-align: middle;\n}\n.video_play {\n    position:relative;\n    text-align: center;\n}\n\nsvg#expandvideo {\n    height: 24px;\n    width: 22px;\n    vertical-align: middle;\n}\n.scrly {\n    overflow-y: auto;\n    height: 29vh;\n}\ndiv#orderjqueryv {\n    overflow-y: visible;\n}\nul.list-inline.volume {\n    display: none;\n}\nimg.img_playersub_img {\n    display: none;\n}\n/* ******************************video section********************* */\n/* ******************************Dropdown section*********************************** */\n/* .dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n} */\n\n/* .dropbtn:hover, .dropbtn:focus {\n    background-color: #3e8e41;\n} */\n\n.dropdowna {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content_video {\n    background: linear-gradient(to bottom, #20de9e, #08b9b1);\n    display: block;\n    margin-left: -1em;\n    position: absolute;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    margin-top: 11px;\n    z-index: 1;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    right: 0;\n}\nspan.triangle2 {\n    border-left: 9px solid transparent;\n    border-right: 9px solid transparent;\n    border-bottom: 10px solid #23e29c;\n    margin-top: 2px;\n    position: absolute;\n    top: 16px;\n    right: 9px;\n}\n.dropdown-content_video a {\n    padding: 8px 16px;\n    text-decoration: none;\n    font-size: 12px;\n    cursor:pointer;\n    font-family: 'Roboto', sans-serif;\n    display: block;\n    color: #fff;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.dropdowna a:hover {\n    color: #000;\n}\n\n.show {display:block;}\n/* ******************************Dropdown section*********************************** */\n /* ****Responsive**** */\n @media only screen and (min-width: 320px) and (max-width:1024px){\n     .padding0res\n     {\n         padding:0;\n     }\n     section.video {\n        text-align: center;\n        background: #fff;\n        height:100%;\n    }\n     .scrly{\n        overflow-y: auto;\n        height: 80px;\n    }\n     p.found {\n       \n        font-size: 12px;\n     }\n\n     button.call_button {\n        \n        height: 32px;\n        width: 70px;\n        font-size: 12px;\n        color: rgba(255, 255, 255, 0.8);\n        background: #0bdb85;\n    }\n\n    \n    .active_call {\n        float: none;\n    }\n    p.namelocplayer4{\n        text-align: center;\n        font-size: 13px;\n        line-height: 14px;\n        font-weight: 500;\n        color: rgb(70, 79, 108);\n        font-family: 'Lato', sans-serif;\n    }\n    p.namelocplayer{\n        text-align: center;\n    }\n\n    .established p{\n       \n        width: 100%;\n        font-size: 12px;\n        text-align: left;\n    }\n\n    .padding-card{\n       \n        margin-top: 6px;\n    }\n    \n}\n    /* ****Responsive**** */\n    @media screen and (min-width: 800px) and (max-width: 1024px) \n    {\n        section.video{\n            height: 90vh;\n            overflow-y: scroll;\n        }\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<!--******************** video part******************* -->\n<section class=\"video\">\n  <div class=\"row\">\n    <div class=\"video_play\">\n      <!-- <video autoplay loop id=\"video-background\" muted plays-inline>\n        <source src=\"https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761\"\n          type=\"video/mp4\">\n      </video> -->\n\n      <!-- <iframe src=\"https://www.youtube.com/embed/XGSy3_Czz8k\" id=\"video-background\">\n      </iframe> -->\n      <!-- src=\"https://call.meme.care\" -->\n      <iframe   [src]=\"url\"  id=\"video-background\" *ngIf=\"!hideVideo\" allow=\"geolocation; microphone; camera\">\n      </iframe>\n\n      <div class=\"icons_music\">\n        <ul class=\"list-inline volume\">\n          <li>\n            <button>\n              <svg version=\"1.1\" id=\"speaker\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 488.75 488.75\" style=\"enable-background:new 0 0 488.75 488.75;\" xml:space=\"preserve\">\n                <g>\n                  <g>\n                    <path d=\"M281.4,74.713c-10.4-6.1-23-6.1-33.5,0c-0.4,0.2-0.8,0.5-1.2,0.8l-99.3,68.6c-8.2,5.6-10.2,16.9-4.6,25\n                 c5.6,8.2,16.9,10.2,25,4.6l94.3-65.1v271.4l-89.7-64.9c-3.1-2.2-6.8-3.4-10.5-3.4H76.7c-22.4,0-40.7-18.2-40.7-40.7v-53.4\n                 c0-22.4,18.2-40.7,40.7-40.7c9.9,0,18-8.1,18-18c0-9.9-8.1-18-18-18c-42.3,0-76.7,34.4-76.7,76.7v53.4c0,42.3,34.4,76.7,76.7,76.7\n                 H156l90.5,65.4c0.5,0.4,1,0.7,1.5,1c5.2,3,11,4.5,16.7,4.5c5.8,0,11.5-1.5,16.7-4.5c10.5-6.1,16.7-16.9,16.7-29v-281.4\n                 C298.1,91.613,291.8,80.813,281.4,74.713z\" />\n                  </g>\n                </g>\n                <g>\n                  <g>\n                    <path d=\"M436.7,244.413l46.8-46.8c7-7,7-18.4,0-25.4s-18.4-7-25.5,0l-119,119c-7,7-7,18.4,0,25.5c3.5,3.5,8.1,5.3,12.7,5.3\n                 c4.6,0,9.2-1.8,12.7-5.3l46.8-46.8l46.8,46.8c3.5,3.5,8.1,5.3,12.7,5.3c4.6,0,9.2-1.8,12.7-5.3c7-7,7-18.4,0-25.5L436.7,244.413z\"\n                    />\n                  </g>\n                </g>\n                <g>\n                  <g>\n                    <path d=\"M384.3,192.012l-19.9-19.9c-7-7-18.4-7-25.5,0c-7,7-7,18.4,0,25.5l20,19.9c3.5,3.5,8.1,5.3,12.7,5.3\n                 c4.6,0,9.2-1.8,12.7-5.3C391.3,210.512,391.3,199.113,384.3,192.012z\" />\n                  </g>\n                </g>\n              </svg>\n            </button>\n          </li>\n          <li>\n            <button>\n              <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"speaker\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 508.52 508.52\" style=\"enable-background:new 0 0 508.52 508.52;\" xml:space=\"preserve\" width=\"512px\"\n                height=\"512px\">\n                <g>\n                  <g>\n                    <g>\n                      <path d=\"M397.281,190.695c-8.74,0-15.891,7.119-15.891,15.891v47.674c0,83.461-64.01,127.13-127.13,127.13     c-61.245,0-127.13-39.792-127.13-127.13v-47.674c0-8.772-7.119-15.891-15.891-15.891s-15.891,7.119-15.891,15.891v47.674     c0,90.262,59.846,143.212,127.13,155.861v66.616h-47.674c-8.772,0-15.891,7.151-15.891,15.891s7.119,15.891,15.891,15.891     h158.912c8.74,0,15.891-7.151,15.891-15.891s-7.151-15.891-15.891-15.891h-47.674V409.93     c66.203-13.094,127.13-66.68,127.13-155.671v-47.674C413.172,197.814,406.021,190.695,397.281,190.695z\"\n                        fill=\"#FFFFFF\" />\n                      <path d=\"M254.26,349.607c52.568,0,95.347-42.779,95.347-95.347V95.347C349.607,42.779,306.828,0,254.26,0     s-95.347,42.779-95.347,95.347V254.26C158.912,306.828,201.692,349.607,254.26,349.607z M190.695,95.347     c0-35.12,28.445-63.565,63.565-63.565s63.565,28.445,63.565,63.565V254.26c0,35.12-28.445,63.565-63.565,63.565     s-63.565-28.445-63.565-63.565V95.347z\"\n                        fill=\"#FFFFFF\" />\n                    </g>\n                  </g>\n                </g>\n              </svg>\n            </button>\n          </li>\n          <li>\n            <button>\n              <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"speaker\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 16 16\" style=\"enable-background:new 0 0 16 16;\" xml:space=\"preserve\" width=\"512px\" height=\"512px\">\n                <g>\n                  <path d=\"M2.121,9c-0.553,0-1,0.448-1,1s0.447,1,1,1h1.465l-3.293,3.293c-0.391,0.391-0.391,1.023,0,1.414   C0.488,15.902,0.744,16,1,16s0.512-0.098,0.707-0.293l3.414-3.414V14c0,0.552,0.447,1,1,1S7,14.552,7,14V9H2.121z\"\n                    fill=\"#FFFFFF\" />\n                  <path d=\"M3,7c0.552,0,1-0.448,1-1V4h2c0.553,0,1-0.448,1-1S6.553,2,6,2H2.001L2,6C2,6.552,2.447,7,3,7z\" fill=\"#FFFFFF\" />\n                  <path d=\"M13,9c-0.553,0-1,0.448-1,1v2h-2c-0.553,0-1,0.448-1,1s0.447,1,1,1h4v-4C14,9.448,13.553,9,13,9z\" fill=\"#FFFFFF\" />\n                  <path d=\"M14.293,0.293L11,3.586V2c0-0.552-0.447-1-1-1S9,1.448,9,2v5h5c0.552,0,1-0.448,1-1s-0.447-1-1-1   h-1.586l3.293-3.292c0.391-0.391,0.391-1.023,0-1.414S14.684-0.098,14.293,0.293z\"\n                    fill=\"#FFFFFF\" />\n                </g>\n              </svg> -->\n              <!-- <svg version=\"1.1\" id=\"speaker\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\" enable-background=\"new 0 0 64 64\" xml:space=\"preserve\" >\n                <g id=\"Responsive-scales\">\n                  <path d=\"M44.8451996,18.5058994h-8c-0.5527,0-1,0.4473-1,1s0.4473,1,1,1h5.5859985L32.4310989,30.5069008l1.4141006,1.4139996   l10-10.0008011V27.5049c0,0.5527992,0.4473,1,1,1s1-0.4472008,1-1v-7.9990005   C45.8451996,18.9531994,45.3978996,18.5058994,44.8451996,18.5058994z\" fill=\"#FFFFFF\"/>\n                  <path d=\"M22.3178005,42.0918007L10.8451996,53.5644989v-6.0585976c0-0.5527-0.4473-1-1-1s-1,0.4473-1,1v7.9990005   c0,0.5527992,0.4473,1,1,1h8c0.5527,0,1-0.4472008,1-1c0-0.5527-0.4473-1-1-1h-5.1122999l10.9989996-10.9990005   L22.3178005,42.0918007z\" fill=\"#FFFFFF\"/>\n                  <path d=\"M57.3041992,0H16.7884998C13.4946003,0,10.8139,2.6807001,10.8139,5.9747v4.1181002H6.6947999   c-3.2939,0-5.9735999,2.6807003-5.9735999,5.9745998v41.9580002C0.7212,61.3194008,3.4008999,64,6.6947999,64h40.5165977   c3.2938995,0,5.9746017-2.6805992,5.9746017-5.9746017v-2.6766968h4.1181984c3.2938995,0,5.9746017-2.6807022,5.9746017-5.9746017   V5.9747C63.278801,2.6807001,60.5980988,0,57.3041992,0z M51.1860008,58.0253983   C51.1860008,60.2168007,49.4028015,62,47.2113991,62H6.6947999C4.5033998,62,2.7212,60.2168007,2.7212,58.0253983V16.0674   c0-2.1913996,1.7821999-3.9745998,3.9735999-3.9745998h40.5165977c2.1914024,0,3.9746017,1.7832003,3.9746017,3.9745998V58.0253983   z M61.278801,49.3740997c0,2.1913986-1.7831993,3.9746017-3.9746017,3.9746017h-4.1181984V16.0674   c0-3.2938995-2.6807022-5.9745998-5.9746017-5.9745998H12.8139V5.9747C12.8139,3.7832999,14.5971003,2,16.7884998,2h40.5157013   c2.1914024,0,3.9746017,1.7832999,3.9746017,3.9747V49.3740997z\" fill=\"#FFFFFF\"/>\n                </g>\n                \n                </svg> -->\n              <svg version=\"1.1\" id=\"expandvideo\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\n                <path style=\"fill:#ffffff\" d=\"M466.702,512H197.603c-8.063,0-14.599-6.537-14.599-14.599c0-8.062,6.536-14.599,14.599-14.599\n               h269.099c6.345,0,11.507-5.162,11.507-11.507V125.589c0-6.345-5.162-11.507-11.507-11.507h-336.52\n               c-6.346,0-11.508,5.162-11.508,11.507c0,8.062-6.536,14.599-14.599,14.599s-14.599-6.537-14.599-14.599\n               c0-22.445,18.26-40.705,40.706-40.705h336.52c22.446,0,40.705,18.26,40.705,40.705v345.706C507.407,493.74,489.148,512,466.702,512z\n               \" />\n                <path style=\"fill:transparent;\" d=\"M130.182,99.483h277.742V40.705c0-14.418-11.688-26.106-26.106-26.106H45.298\n               c-14.418,0-26.106,11.688-26.106,26.106v345.706c0,14.418,11.688,26.106,26.106,26.106h58.778V125.591\n               C104.076,111.173,115.764,99.483,130.182,99.483z\" />\n                <g>\n                  <path style=\"fill:#ffffff;\" d=\"M104.076,427.116H45.298c-22.446,0-40.705-18.26-40.705-40.706V40.705\n                 C4.593,18.26,22.852,0,45.298,0h336.52c22.446,0,40.705,18.26,40.705,40.705v58.78c0,8.062-6.536,14.599-14.599,14.599H130.182\n                 c-6.345,0-11.507,5.162-11.507,11.507v286.927C118.675,420.58,112.139,427.116,104.076,427.116z M45.298,29.198\n                 c-6.345,0-11.507,5.162-11.507,11.507v345.706c0,6.346,5.162,11.508,11.507,11.508h44.179v-272.33\n                 c0-22.445,18.26-40.705,40.705-40.705h263.144V40.705c0-6.345-5.162-11.507-11.507-11.507H45.298z\" />\n                  <path style=\"fill:#ffffff;\" d=\"M210.799,400.667c-3.736,0-7.473-1.426-10.323-4.276c-5.701-5.701-5.702-14.945,0-20.647\n                 L378.219,198c5.701-5.699,14.945-5.699,20.647,0c5.701,5.701,5.701,14.945,0,20.647L221.124,396.391\n                 C218.271,399.242,214.535,400.667,210.799,400.667z\" />\n                  <path style=\"fill:#ffffff;\" d=\"M390.941,303.04c-0.718,0-1.444-0.053-2.175-0.161c-7.974-1.191-13.473-8.622-12.282-16.596\n                 l11.573-77.474l-77.474,11.576c-7.975,1.18-15.405-4.308-16.596-12.282c-1.191-7.974,4.307-15.405,12.282-16.596l96.984-14.49\n                 c4.571-0.676,9.208,0.844,12.479,4.115c3.273,3.273,4.8,7.902,4.115,12.481l-14.488,96.986\n                 C404.278,297.84,398.049,303.04,390.941,303.04z\" />\n                  <path style=\"fill:#ffffff;\" d=\"M191.473,419.991c-3.842,0-7.565-1.518-10.323-4.276c-3.272-3.273-4.799-7.902-4.115-12.481\n                 l14.488-96.986c1.191-7.975,8.625-13.469,16.596-12.282c7.974,1.191,13.473,8.622,12.282,16.596l-11.574,77.474l77.474-11.574\n                 c7.97-1.184,15.403,4.308,16.596,12.282c1.191,7.974-4.308,15.405-12.282,16.596l-96.984,14.488\n                 C192.911,419.937,192.19,419.991,191.473,419.991z\" />\n                </g>\n\n              </svg>\n            </button>\n          </li>\n        </ul>\n      </div>\n      <div class=\"img_player\">\n        <img src=\"../assets/images/doctor.png\" class=\"img_playersub_img\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"col-md-3 col-xs-3 padding0res\">\n        <a href=\"#\">\n          <img src=\"../assets/images/userimage.png\" class=\"logo_img2video\" [hidden]=\"individualHealth?.profileImage\">\n          <img [src]=\"imgUrlPrefix\" class=\"logo_img2video\" [hidden]=\"!individualHealth?.profileImage\" >\n        </a>\n      </div>\n      <div class=\"col-md-6 col-xs-6\" id=\"padding-o\">\n        <div class=\"text_nav2\">\n          <p class=\"namelocplayer\">{{individualHealth?.name}}\n          </p>\n          <p class=\"namelocplayer4\">{{individualHealth?.gender}},{{age}}\n            <span class=\"video2_player\">{{individualHealth?.location}}</span>\n          </p>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-xs-3\">\n        <div class=\"active_call\">\n          <button class=\"call_button\">Active Call</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"doe\">\n    <div class=\"row\">\n      <div class=\"found_bg\">\n\n        <div class=\"col-md-12\">\n          <div class=\"col-md-6 col-xs-6 right0\">\n            <p class=\"found\">{{individualHealth?.healthRecord.length}} Health records found</p>\n          </div>\n          <div class=\"col-md-6 col-xs-6 text-right\">\n            <!-- <button class=\"funnel_btn\">\n              <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"funnel\" style=\"enable-background:new 0 0 485.008 485.008;\"\n                version=\"1.1\" viewBox=\"0 0 485.008 485.008\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\n                <g>\n                  <g>\n                    <path d=\"M171.501,464.698v-237.9l-166.3-192.6c-8.9-10.9-7.9-33.3,15.1-33.3h443.6c21.6,0,26.6,19.8,15.1,33.3l-162.3,187.5v147.2\n                              c0,6-2,11.1-7.1,15.1l-103.8,95.8C193.801,488.698,171.501,483.898,171.501,464.698z M64.701,41.298l142.2,164.3c3,4,5,8.1,5,13.1\n                              v200.6l64.5-58.5v-146.1c0-5,2-9.1,5-13.1l138.1-160.3L64.701,41.298L64.701,41.298z\"></path>\n                  </g>\n                </g>\n              </svg>\n            </button> -->\n\n            <div class=\"dropdowna\">\n              <!-- <button onclick=\"myFunction()\" class=\"dropbtn\">Dropdown</button> -->\n              <button class=\"funnel_btn \" (click)=\"hideFilterData()\" >\n                <svg xml:space=\"preserve\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"funnel\" style=\"enable-background:new 0 0 485.008 485.008;\"\n                  version=\"1.1\" viewBox=\"0 0 485.008 485.008\" x=\"0px\" xmlns=\"http://www.w3.org/2000/svg\" y=\"0px\">\n                  <g>\n                    <g>\n                      <path d=\"M171.501,464.698v-237.9l-166.3-192.6c-8.9-10.9-7.9-33.3,15.1-33.3h443.6c21.6,0,26.6,19.8,15.1,33.3l-162.3,187.5v147.2\n                                      c0,6-2,11.1-7.1,15.1l-103.8,95.8C193.801,488.698,171.501,483.898,171.501,464.698z M64.701,41.298l142.2,164.3c3,4,5,8.1,5,13.1\n                                      v200.6l64.5-58.5v-146.1c0-5,2-9.1,5-13.1l138.1-160.3L64.701,41.298L64.701,41.298z\"></path>\n                    </g>\n                  </g>\n                </svg>\n              </button>\n              <div class=\"dropdown_doctor\" *ngIf=\"hideDetail\">\n                <span class=\"triangle2\"></span>\n                <div id=\"myDropdown\" class=\"dropdown-content_video \" >\n                  <a *ngFor=\"let li of healthType\"  (click)=\"getType(li)\" >{{li}}</a>\n                  <!-- <a>Family History</a>\n                  <a>Current Complaints</a>\n                  <a>Medicine Details</a>\n                  <a>Immunization</a>\n                  <a>Allergies</a> -->\n                </div>\n              </div>\n            </div>\n            <!-- class=\"dropdown-content_video\" -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"scrly\">\n      <div class=\"col-md-12\"  *ngFor=\"let record of healthRecord | filterBy:filterField\">\n        <div class=\"card padding-card\"  *ngIf=\"record.healthRecordType =='Family History'\">\n          <div class=\"march\">\n            <div class=\"row\">\n              <div class=\"novomox\">\n                <div class=\"col-md-6 col-xs-6 text-left\">\n                  <p class=\"temp\">{{record.medicalCondition}}</p>\n                  <p class=\"te_nov\">{{record.createdDate | date}}</p>\n                </div>\n                <div class=\"col-md-6 col-xs-6 text-right\">\n                  <p class=\"temp\">{{record?.duration.months+' months '+record?.duration.days+' days'}}</p>\n                  <p class=\"te_nov\">{{record.healthRecordType}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr class=\"card_hr\">\n          <div class=\"established\">\n            <p>\n              {{record.notes}}\n            </p>\n          </div>\n        </div>\n          <!-- card1 -->\n      <div class=\"card padding-card\" *ngIf=\"record.healthRecordType =='Immunization'\">\n        <div class=\"march\">\n          <div class=\"row\">\n            <div class=\"novomox\">\n              <div class=\"col-md-6 col-xs-6 text-left\">\n                <p class=\"temp\">{{record.ageGroup}}</p>\n                <p class=\"te_nov\">{{record.createdDate | date}}</p>\n              </div>\n              <div class=\"col-md-6 col-xs-6 text-right\">\n                <p class=\"temp\">{{record.scheduleDate}}</p>\n                <p class=\"te_nov\">{{record.healthRecordType}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr class=\"card_hr\">\n        <div class=\"established\">\n          <p>\n            {{record.vaccine}}\n          </p>\n        </div>\n      </div>\n        <!-- card2 -->\n        <div class=\"card padding-card\" *ngIf=\"record.healthRecordType =='Medical History'\">\n          <div class=\"march\">\n            <div class=\"row\">\n              <div class=\"novomox\">\n                <div class=\"col-md-6 col-xs-6 text-left\">\n                  <p class=\"temp\">{{record.sympton}}</p>\n                  <p class=\"te_nov\">{{record.createdDate | date}}</p>\n                </div>\n                <div class=\"col-md-6 col-xs-6 text-right\">\n                  <p class=\"temp\">{{ record?.duration.months+' months '+record?.duration.days+' days'}}</p>\n                  <p class=\"te_nov\">{{record.healthRecordType}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr class=\"card_hr\">\n          <div class=\"established\">\n            <p>\n              {{record.sufferingFrom}}\n            </p>\n          </div>\n        </div>\n         <!-- card3 -->\n      <div class=\"card padding-card\" *ngIf=\"record.healthRecordType =='Current Complaints'\">\n        <div class=\"march\">\n          <div class=\"row\">\n            <div class=\"novomox\">\n              <div class=\"col-md-6 col-xs-6 text-left\">\n                <p class=\"temp\">{{record.diseaseCondition}}</p>\n                <p class=\"te_nov\">{{record.createdDate | date}}</p>\n              </div>\n              <div class=\"col-md-6 col-xs-6 text-right\">\n                <p class=\"temp\">{{record.startDate}}</p>\n                <p class=\"te_nov\">{{record.healthRecordType}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr class=\"card_hr\">\n        <div class=\"established\">\n          <p>\n            {{record.severity}}\n          </p>\n        </div>\n      </div>\n        <!--  card4-->\n        <div class=\"card padding-card\" *ngIf=\"record.healthRecordType =='Medicine Details'\">\n          <div class=\"march\">\n            <div class=\"row\">\n              <div class=\"novomox\">\n                <div class=\"col-md-6 col-xs-6 text-left\">\n                  <p class=\"temp\">{{record.dosage}}</p>\n                  <p class=\"te_nov\">{{record.createdDate | date}}</p>\n                </div>\n                <div class=\"col-md-6 col-xs-6 text-right\">\n                  <p class=\"temp\">{{record.medicationDate}}</p>\n                  <p class=\"te_nov\">{{record.healthRecordType}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr class=\"card_hr\">\n          <div class=\"established\">\n            <p>\n              {{record.medicineName}}\n            </p>\n          </div>\n        </div>\n         <!-- card5 -->\n      <!-- <div class=\"card padding-card\" *ngIf=\"record.healthRecordType ==''\">\n          <div class=\"march\">\n            <div class=\"row\">\n              <div class=\"novomox\">\n                <div class=\"col-md-6 col-xs-6 text-left\">\n                  <p class=\"temp\">{{record.medicalCondition}}</p>\n                  <p class=\"te_nov\">{{record.createdDate | date}}</p>\n                </div>\n                <div class=\"col-md-6 col-xs-6 text-right\">\n                  <p class=\"temp\">{{record.dateOfDiagnosis}}</p>\n                  <p class=\"te_nov\">{{record.healthRecordType}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr class=\"card_hr\">\n          <div class=\"established\">\n            <p>\n              {{record.notes}}\n            </p>\n          </div>\n        </div>\n    \n      </div>\n        </div> -->\n          <!-- card6 -->\n      <div class=\"card padding-card\" *ngIf=\"record.healthRecordType =='Surgical History'\">\n        <div class=\"march\">\n          <div class=\"row\">\n            <div class=\"novomox\">\n              <div class=\"col-md-6 col-xs-6 text-left\">\n                <p class=\"temp\">{{record.disease}}</p>\n                <p class=\"te_nov\">{{record.createdDate | date}}</p>\n              </div>\n              <div class=\"col-md-6 col-xs-6 text-right\">\n                <p class=\"temp\">{{record.dateOfDiagnosis}}</p>\n                <p class=\"te_nov\">{{record.healthRecordType}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr class=\"card_hr\">\n        <div class=\"established\">\n          <p>\n            {{record.otherInformation}}\n          </p>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--******************** video part******************* -->"

/***/ }),

/***/ "../../../../../src/app/dashboard/consult/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meme_services_socket_service__ = __webpack_require__("../../../../../src/app/meme-services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DomSanitizer } from '@angular/platform-browser';



// import { SearchHealthRecordPipe } from '../../search-health-record.pipe';
var VideoComponent = (function () {
    function VideoComponent(ePrescriptionService, sharedService, renderer, sanitizer, socketService, myElement) {
        var _this = this;
        this.ePrescriptionService = ePrescriptionService;
        this.sharedService = sharedService;
        this.renderer = renderer;
        this.sanitizer = sanitizer;
        this.socketService = socketService;
        this.hideVideo = false;
        this.healthRecord = [];
        this.hideDetail = false;
        this.filterField = {
            healthRecordType: ''
        };
        this.healthType = ['Medical History', 'Family History', 'Current Complaints', 'Medicine Details', 'Immunization', 'Allergies'];
        var _base = this;
        // window.addEventListener('message', function (event) {
        //   switch (event.data.message) {
        //     case 'connected':
        //       _base.sharedService.changeEasyRTCid(event.data.easyRTCid);
        //       break;
        //     case 'disconnected':
        //       // _base.sharedService.makeCall(true);
        //       break;;
        //   }
        // });
        this.socketService.callDisconnected().subscribe(function (data) {
            _this.hideVideo = true;
        });
        this.elementRef = myElement;
        this.sharedService.appointmentType.subscribe(function (data) {
            if (Object.keys(data).length != 0) {
                _this.consultId = data.individualId;
                _this.individualHealthRecord();
                _this.hideVideo = true;
            }
        });
    }
    VideoComponent.prototype.ngOnInit = function () {
        this.individualHealthRecord();
        this.iframeElement = document.getElementById('video-background');
        console.log("caller", this.callerData);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["b" /* videoURL */] + '?app=' + this.callerData.roomId + '&self=' + localStorage.getItem('loginId') + '&selfRole=doctor&peerRole=individual&peer=' + this.callerData.callerId + '&caller=' + this.callerData.callerEasyRTC);
        // this.sharedService.callTrigger.subscribe(data => {
        //   if (data == false)
        //     return;
        //   if (data == true)
        //     return;
        //   let msg = { message: 'call', easyRTCid: data }
        //   this.iframeElement.contentWindow.postMessage(msg, '*');
        // })
    };
    // individula details from profile id
    VideoComponent.prototype.getindividualDetails = function () {
        var _this = this;
        this.ePrescriptionService.getindividualDetails(this.callerData.callerId).subscribe(function (data) {
            _this.individualDetails = data.registrationDetails;
        }, function (err) {
        });
    };
    // individula details from profile id
    VideoComponent.prototype.individualHealthRecord = function () {
        var _this = this;
        this.individualId = this.callerData ? this.callerData.callerId : this.consultId;
        this.ePrescriptionService.getHealthRecord(this.individualId).subscribe(function (data) {
            _this.individualHealth = data.result;
            _this.dob = _this.individualHealth.dob;
            console.log('patient detail', _this.individualHealth);
            _this.healthRecord = _this.individualHealth.healthRecord;
            _this.healthRecord = _this.individualHealth.healthRecord;
            _this.imgUrlPrefix = _this.sanitizer.bypassSecurityTrustResourceUrl(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + "file/fileShow?fileId=" + _this.individualHealth.profileImage);
            _this.getAge(_this.dob);
        }, function (err) {
        });
        // }
    };
    VideoComponent.prototype.getAge = function (dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        this.age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            this.age--;
        }
        return this.age;
    };
    VideoComponent.prototype.getType = function (name) {
        this.filterField.healthRecordType = name;
    };
    // hide and show details on click
    VideoComponent.prototype.hideFilterData = function () {
        if (this.hideDetail == true) {
            this.hideDetail = !this.hideDetail;
        }
        else if (this.hideDetail == false) {
            this.hideDetail = !this.hideDetail;
        }
    };
    // Detecting Clicks Outside the Component
    VideoComponent.prototype.handleClick = function (event) {
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
        }
        else {
            console.log('outside');
            if (this.hideDetail == true) {
                this.hideDetail = !this.hideDetail;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VideoComponent.prototype, "callerData", void 0);
    VideoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-video',
            template: __webpack_require__("../../../../../src/app/dashboard/consult/video/video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/consult/video/video.component.css")],
            host: {
                '(document:click)': 'handleClick($event)',
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__meme_services_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__meme_services_socket_service__["a" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
    ], VideoComponent);
    return VideoComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=video.component.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map