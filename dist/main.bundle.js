webpackJsonp([5],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./consult/consult.module": [
		"../../../../../src/app/dashboard/consult/consult.module.ts",
		2,
		0
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		1,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-notify></app-notify>\n\n<router-outlet></router-outlet>\n\n\n\n<!-- /**** -->\n<!-- <app-econsultrightbar></app-econsultrightbar>  -->\n<!-- <app-prescribe></app-prescribe> -->\n<!-- <app-navigation></app-navigation> -->\n<!-- <app-creditview></app-creditview> -->\n<!-- <app-econsultdiagnosis></app-econsultdiagnosis> -->\n<!-- <app-clinicview></app-clinicview> -->\n<!-- <app-schedule></app-schedule> -->\n\n<!-- dd -->\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { RouterModule, Routes, Router, NavigationEnd } from '@angular/router';


var AppComponent = (function () {
    function AppComponent(route, router, sharedService) {
        this.route = route;
        this.router = router;
        this.sharedService = sharedService;
        this.title = 'app';
        this.doctorProfileId = localStorage.getItem('doctorId');
        if (this.doctorProfileId) {
            this.router.navigate(['/dashboard/main']);
        }
        else {
            return;
        }
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
        // private router: Router
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _c || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_chips__ = __webpack_require__("../../../../ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_messaging__ = __webpack_require__("../../../fire/messaging/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__ = __webpack_require__("../../../fire/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__ = __webpack_require__("../../../fire/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire__ = __webpack_require__("../../../fire/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_firestore__ = __webpack_require__("../../../fire/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__meme_services_appointment_service__ = __webpack_require__("../../../../../src/app/meme-services/appointment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mefyservice_docregistration_service__ = __webpack_require__("../../../../../src/app/mefyservice/docregistration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__mefyservice_login_service__ = __webpack_require__("../../../../../src/app/mefyservice/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__mefyservice_clinic_service__ = __webpack_require__("../../../../../src/app/mefyservice/clinic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__mefyservice_accountt_service__ = __webpack_require__("../../../../../src/app/mefyservice/accountt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mefyservice_profile_service__ = __webpack_require__("../../../../../src/app/mefyservice/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mefyservice_dashboardd_service__ = __webpack_require__("../../../../../src/app/mefyservice/dashboardd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__mefyservice_sockets_service__ = __webpack_require__("../../../../../src/app/mefyservice/sockets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__mefyservice_messaging_service__ = __webpack_require__("../../../../../src/app/mefyservice/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__mefyservice_prescription_service__ = __webpack_require__("../../../../../src/app/mefyservice/prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__meme_services_meme_login_service__ = __webpack_require__("../../../../../src/app/meme-services/meme-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__meme_services_schedule_service__ = __webpack_require__("../../../../../src/app/meme-services/schedule.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__meme_services_dashboard_service__ = __webpack_require__("../../../../../src/app/meme-services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__meme_services_socket_service__ = __webpack_require__("../../../../../src/app/meme-services/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__meme_services_doctorregister_service__ = __webpack_require__("../../../../../src/app/meme-services/doctorregister.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__meme_services_doctor_prescription_service__ = __webpack_require__("../../../../../src/app/meme-services/doctor-prescription.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__mefyservice_appointments_service__ = __webpack_require__("../../../../../src/app/mefyservice/appointments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__meme_services_account_service__ = __webpack_require__("../../../../../src/app/meme-services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__meme_services_bill_service__ = __webpack_require__("../../../../../src/app/meme-services/bill.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__newlogin_newlogin_component__ = __webpack_require__("../../../../../src/app/newlogin/newlogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_angularx_qrcode__ = __webpack_require__("../../../../angularx-qrcode/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__newregistration_newregistration_component__ = __webpack_require__("../../../../../src/app/newregistration/newregistration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__notify_notify_component__ = __webpack_require__("../../../../../src/app/notify/notify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__privacypolicy_privacypolicy_component__ = __webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.ts");
/* unused harmony export firebaseCredentials */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















/********************NEW SERVICES************************** */




















// import { LoginComponent } from './login/login.component';







// import { ManageaccountComponent } from './dashboard/manageaccount/manageaccount.component';
var firebaseCredentials = {
    apiKey: "AIzaSyDmXOAO_fii6dBbztAnymjE-0JLejSp67E",
    authDomain: "mefyfcm.firebaseapp.com",
    databaseURL: "https://mefyfcm.firebaseio.com",
    projectId: "mefyfcm",
    storageBucket: "mefyfcm.appspot.com",
    messagingSenderId: "373942446543"
};
// console.log("firebase initialized App ", firebaseCredentials);
var approutes = [
    // {
    //   path: 'register',
    //   loadChildren: './registration/registration.module#RegistrationModule'
    // },
    {
        path: '',
        redirectTo: '/newlogin',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [__WEBPACK_IMPORTED_MODULE_37__auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'newlogin',
        component: __WEBPACK_IMPORTED_MODULE_39__newlogin_newlogin_component__["a" /* NewloginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_41__newregistration_newregistration_component__["a" /* NewregistrationComponent */]
    },
    { path: "privacy", component: __WEBPACK_IMPORTED_MODULE_43__privacypolicy_privacypolicy_component__["a" /* PrivacypolicyComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* AppComponent */],
                // LoginComponent,
                __WEBPACK_IMPORTED_MODULE_39__newlogin_newlogin_component__["a" /* NewloginComponent */],
                __WEBPACK_IMPORTED_MODULE_41__newregistration_newregistration_component__["a" /* NewregistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_42__notify_notify_component__["a" /* NotifyComponent */],
                __WEBPACK_IMPORTED_MODULE_43__privacypolicy_privacypolicy_component__["a" /* PrivacypolicyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_40_angularx_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(approutes),
                __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_8_ngx_chips__["a" /* TagInputModule */],
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["a" /* TypeaheadModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_toasty__["a" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_fire_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_fire_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_messaging__["a" /* AngularFireMessagingModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseCredentials),
            ],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__meme_services_meme_login_service__["a" /* MemeLoginService */],
                __WEBPACK_IMPORTED_MODULE_28__meme_services_schedule_service__["a" /* ScheduleService */],
                __WEBPACK_IMPORTED_MODULE_29__meme_services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_30__mefyservice_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_31__meme_services_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_32__meme_services_doctorregister_service__["a" /* DoctorregisterService */],
                __WEBPACK_IMPORTED_MODULE_33__meme_services_doctor_prescription_service__["a" /* DoctorPrescriptionService */],
                __WEBPACK_IMPORTED_MODULE_17__meme_services_appointment_service__["a" /* AppointmentService */],
                __WEBPACK_IMPORTED_MODULE_35__meme_services_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_38__meme_services_bill_service__["a" /* BillService */],
                __WEBPACK_IMPORTED_MODULE_22__mefyservice_profile_service__["a" /* ProfileService */],
                // ProfilenavService,
                //new services
                __WEBPACK_IMPORTED_MODULE_18__mefyservice_docregistration_service__["a" /* DocregistrationService */],
                __WEBPACK_IMPORTED_MODULE_19__mefyservice_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_20__mefyservice_clinic_service__["a" /* ClinicService */],
                __WEBPACK_IMPORTED_MODULE_21__mefyservice_accountt_service__["a" /* AccounttService */],
                __WEBPACK_IMPORTED_MODULE_23__mefyservice_dashboardd_service__["a" /* DashboarddService */],
                __WEBPACK_IMPORTED_MODULE_34__mefyservice_appointments_service__["a" /* AppointmentsService */],
                __WEBPACK_IMPORTED_MODULE_24__mefyservice_sockets_service__["a" /* SocketsService */],
                __WEBPACK_IMPORTED_MODULE_25__mefyservice_messaging_service__["a" /* MessagingService */],
                __WEBPACK_IMPORTED_MODULE_26__mefyservice_prescription_service__["a" /* PrescriptionService */],
                /**************/
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                // ManageaccountComponent,
                __WEBPACK_IMPORTED_MODULE_37__auth_guard__["a" /* AuthGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_36__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.doctorProfileId = localStorage.getItem('doctorId');
        if (this.doctorProfileId) {
            // logged in so return true'
            // this.router.navigate(['/dashboard'])
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/newlogin']);
        return false;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a;
}());

//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/accountt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccounttService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccounttService = (function () {
    function AccounttService(httpClient) {
        this.httpClient = httpClient;
    }
    /******************ADD BANK ACCOUNT**********************/
    AccounttService.prototype.addBankAccount = function (accountData) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'account/addBankAccount', accountData);
    };
    /******************DELETE BANK ACCOUNT**********************/
    AccounttService.prototype.deleteBankAccount = function (accountId) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'account/' + accountId);
    };
    /******************GET BANK ACCOUNT LIST BY DOCTORID**********************/
    AccounttService.prototype.getBankAccountList = function (doctorId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'account/bankList?doctorId=' + doctorId);
    };
    AccounttService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], AccounttService);
    return AccounttService;
    var _a;
}());

//# sourceMappingURL=accountt.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/appointments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppointmentsService = (function () {
    function AppointmentsService(httpClient) {
        this.httpClient = httpClient;
    }
    // FIND INDIVIDUAL'S
    AppointmentsService.prototype.findIndividualByNumber = function (phoneNumber) {
        console.log(phoneNumber);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/findindividual?phoneNumber=' + phoneNumber);
    };
    // CREATE INDIVIDUAL
    AppointmentsService.prototype.createIndividual = function (data) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/createindividual', data);
    };
    // CREATE APPOINTMENT
    AppointmentsService.prototype.createAppointment = function (data) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'appointment/bookAppointment', data);
    };
    // GET APPOITNEMENT LIST
    AppointmentsService.prototype.getAppointmentList = function (doctorId, appointmentDate) {
        console.log('apponitment', doctorId, appointmentDate);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'appointment/doctorAppointmentList?doctorId=' + doctorId + '&appointmentDate=' + appointmentDate);
    };
    /*********************CANCEL APPOINTMENT LIST************************/
    AppointmentsService.prototype.changeAppointmentStatus = function (data) {
        return this.httpClient.put(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'appointment/appointmentstatus', data);
    };
    /************************GET DOCTOR"S CURRENT SCHEDULE LIST******************** */
    AppointmentsService.prototype.getDoctorCurrentAppointment = function (doctorId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'appointment/getDoctorEvents?doctorId=' + doctorId);
    };
    AppointmentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], AppointmentsService);
    return AppointmentsService;
    var _a;
}());

//# sourceMappingURL=appointments.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/clinic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClinicService = (function () {
    function ClinicService(httpClient) {
        this.httpClient = httpClient;
    }
    // GET DOCTOR CLINIC LIST  
    ClinicService.prototype.getCliniclist = function (doctorId) {
        console.log(doctorId);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/clinicByDoctorId/' + doctorId);
    };
    // GET SPECIFIC CLINIC DETAIL
    ClinicService.prototype.getSingleClinicDetail = function (clinicId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/' + clinicId);
    };
    // DOCTOR CREATE CLINIC  
    ClinicService.prototype.addClinic = function (data) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/addclinic', data);
    };
    // DOCTOR UPDATE CLINIC
    ClinicService.prototype.updateClinic = function (clinicId, data) {
        return this.httpClient.put(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/updateClinic/' + clinicId, data);
    };
    // DOCTOR DELETE CLINIC
    ClinicService.prototype.deleteClinic = function (clinicId) {
        return this.httpClient.delete(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/' + clinicId);
    };
    // GET CLINIC LIST BY DOCTORID,DATE,TYPE
    ClinicService.prototype.clinicByDateType = function (doctorId, date, type) {
        console.log(doctorId, date, type);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/clinicbydate?doctorId=' + doctorId + '&date=' + date + '&type=' + type);
    };
    //GET CLINIC SLOTS
    ClinicService.prototype.clinicSlots = function (clinicId, date) {
        console.log(clinicId, date);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'clinic/getTimeSlot?clinicId=' + clinicId + '&date=' + date);
    };
    ClinicService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], ClinicService);
    return ClinicService;
    var _a;
}());

//# sourceMappingURL=clinic.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/dashboardd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboarddService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboarddService = (function () {
    function DashboarddService(httpClient) {
        this.httpClient = httpClient;
    }
    /************GET DOCTOR"S DASHBOARD DETAIL************************ */
    DashboarddService.prototype.getDoctorDashboardDetail = function (doctorId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/doctorDashboard?doctorId=' + doctorId);
    };
    DashboarddService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], DashboarddService);
    return DashboarddService;
    var _a;
}());

//# sourceMappingURL=dashboardd.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/docregistration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocregistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocregistrationService = (function () {
    function DocregistrationService(httpClient) {
        this.httpClient = httpClient;
    }
    /*********************GET LANGUAGE JSON FILE****************************/
    DocregistrationService.prototype.getLanguageList = function (data) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/getList?language=' + data.language);
    };
    /*********************GET EDUCATION JSON FILE****************************/
    DocregistrationService.prototype.getEducationList = function (data) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/getList?education=' + data.education);
    };
    /*********************GET SPECIALITY JSON FILE****************************/
    DocregistrationService.prototype.getSpecialityList = function (data) {
        console.log(data);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/getList?speciality=' + data.speciality);
    };
    /*********************GET STATE JSON FILE****************************/
    DocregistrationService.prototype.getStateList = function (data) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/getList?state=' + data.state);
    };
    /*********************GET ISSUE AUTHORITY JSON FILE****************************/
    DocregistrationService.prototype.getIsuueAuthorityList = function (data) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/getList?issuingAuthority=' + data.issuingAuthority);
    };
    /*************************DOCTOR'S PREREGISTRATION************************************ */
    DocregistrationService.prototype.preRegistrationApi = function (data) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User/preregistration', data);
    };
    /*************************DOCTOR'S REGISTRATION************************************ */
    DocregistrationService.prototype.doctorRegistrationApi = function (data) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User/registration', data);
    };
    /*********************NUMBER VERIFIACTION**********************/
    DocregistrationService.prototype.numberVerifivcation = function (data) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User/verifyNumber', data);
    };
    DocregistrationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], DocregistrationService);
    return DocregistrationService;
    var _a;
}());

//# sourceMappingURL=docregistration.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    /************************** CREATE NEW USER*********************/
    LoginService.prototype.newdoctor = function (data) {
        console.log("Data", data);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User/login', data);
    };
    LoginService.prototype.getAllUsers = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User');
    };
    // scanner(data) {
    //   console.log("Data",data)
    //   return this.http.post(APIURL + 'User/loginByScanner', data)
    // }
    /*******************DOCOTOR WEB LOGIN*****************/
    LoginService.prototype.doctorWebLogin = function (logindata) {
        console.log('logindata', logindata);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User/doctorWebLogin', logindata);
    };
    /****************VERIFY OTP*************************/
    LoginService.prototype.verifyOtp = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'User/verifyotp', data);
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__("../../../fire/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__("../../../fire/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_messaging__ = __webpack_require__("../../../fire/messaging/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/_esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagingService = (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.currentMessage = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["BehaviorSubject"](null);
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            console.log('bcbbdb', _messaging);
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
  * update token in firebase database
  *
  * @param userId userId as a key
  * @param token token as a value
  */
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["take"])(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            console.log('data', data);
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        this.angularFireMessaging.requestToken.subscribe(function (token) {
            console.log(token);
            _this.updateToken(userId, token);
        }, function (err) {
            console.error('Unable to get permission to notify.', err);
        });
    };
    /**
     * hook method when new notification received in foreground
     */
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.angularFireMessaging.messages.subscribe(function (payload) {
            console.log("new message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_fire_messaging__["b" /* AngularFireMessaging */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_fire_messaging__["b" /* AngularFireMessaging */]) === "function" && _c || Object])
    ], MessagingService);
    return MessagingService;
    var _a, _b, _c;
}());

//# sourceMappingURL=messaging.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/prescription.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrescriptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrescriptionService = (function () {
    function PrescriptionService(httpClient) {
        this.httpClient = httpClient;
    }
    /*********************GET MEDICINE JSON FILE****************************/
    PrescriptionService.prototype.getmedicineList = function (data) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/getList?medicine=' + data);
    };
    /*********************CREATE PRESCRIPTION**********************/
    PrescriptionService.prototype.createPrescription = function (prescribeData) {
        console.log('service', prescribeData);
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'prescription/create', prescribeData);
    };
    /*************GET PRESCRIPTION BY INDIVIDUAL ID************************/
    PrescriptionService.prototype.getPrescriptionByIndividualId = function (individualId) {
        console.log('service', individualId);
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'prescription/individualprescription?individualId=' + individualId);
    };
    /*************************************** GET INDIVIDUAL MEDICAL HISTORY *************************************** */
    PrescriptionService.prototype.getIndvMedicalRecords = function (individualId) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'individual/getHealthrecords?individualId=' + individualId);
    };
    /************************************** GET INDIVIDUAL PROFILE DETAIL ********************************************* */
    PrescriptionService.prototype.getIndvProfile = function (individualid) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'individual/' + individualid);
    };
    PrescriptionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], PrescriptionService);
    return PrescriptionService;
    var _a;
}());

//# sourceMappingURL=prescription.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    //get doctor details
    ProfileService.prototype.getDocDetail = function (id) {
        // console.log('ff', id)
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/' + id);
    };
    // doctor availability
    ProfileService.prototype.doctorAvailability = function (available) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/profile/' + available.userId, { availability: available.availability });
    };
    ProfileService.prototype.updateDetail = function (userId, doctoridetail) {
        console.log('updatedDetail', doctoridetail);
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["a" /* APIURL */] + 'doctor/profile/' + userId, doctoridetail);
    };
    /********************************DOCTOR"S IMAGE UPLOAD***************************** */
    ProfileService.prototype.doctorImageUpload = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__urlsConfig__["b" /* IMAGEURL */] + '/upload', data);
    };
    ProfileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService() {
        this.loginInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        // easyRTCid: BehaviorSubject<any> = new BehaviorSubject('');
        // callTrigger: BehaviorSubject<any> = new BehaviorSubject(false);
        this.prescriptionID = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.updatedInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.prescribeInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.accountDetails = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.clinicVisit = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.creditInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.doctorDetails = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.dashBoardInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.filterAppointmentList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.urlPathInfo = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.notificationType = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.appointmentDate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.appointmentType = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.consultHide = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.appointmentList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.cancelAppointmentList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.diagnosisdata = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.suggestionData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.medicinedata = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.followUpData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.lifeStyleData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.instructionData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.storeIndividualId = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.storeAppointmentId = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.sidenav = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    // save details of login agent
    SharedService.prototype.saveLoginDetail = function (loginInfo) {
        this.loginInfo.next(loginInfo);
    };
    // makeCall(id) {
    //   this.callTrigger.next(id);
    // }
    // changeEasyRTCid(id) {
    //   this.easyRTCid.next(id)
    // }
    // save profile data
    SharedService.prototype.doctorInfo = function (data) {
        this.info = data;
        console.log('doctorData', this.info);
    };
    // get prescription id
    SharedService.prototype.prescriptionId = function (param) {
        this.prescriptionID.next(param);
        console.log('prescriptionId', param);
    };
    //get updated info
    SharedService.prototype.updatedDoctorInfo = function (param) {
        this.updatedInfo.next(param);
    };
    //get updated info
    SharedService.prototype.prescriptionInfo = function (param) {
        this.prescribeInfo.next(param);
    };
    // get updated info
    SharedService.prototype.accountInfo = function (param) {
        this.accountDetails.next(param);
    };
    // get updated info
    SharedService.prototype.creditInformation = function (param) {
        this.creditInfo.next(param);
    };
    // get dashboard updated data
    SharedService.prototype.updatedDasboardInfo = function (param) {
        this.dashBoardInfo.next(param);
    };
    // get name on which we need to filter appointment list
    SharedService.prototype.filterDoctorAppointment = function (param) {
        this.filterAppointmentList.next(param);
    };
    SharedService.prototype.doctorDetail = function (param) {
        this.doctorDetails.next(param);
    };
    //get urlpath for generating active class for navbar
    SharedService.prototype.setPath = function (param) {
        this.urlPathInfo.next(param);
    };
    //GET APPOINTMNET DATE
    SharedService.prototype.getAppointmnetDate = function (param) {
        this.appointmentDate.next(param);
    };
    //get notification type
    SharedService.prototype.createNotification = function (param) {
        console.log('notification.', param);
        this.notificationType.next(param);
    };
    //GET APPOINTMNET Type
    SharedService.prototype.getAppointmnetType = function (param) {
        this.appointmentType.next(param);
    };
    // toggling sidenav in mobile view
    SharedService.prototype.togglesidenav = function (param) {
        this.sidenav.next(param);
    };
    SharedService.prototype.saveClinicvisit = function (param) {
        this.clinicVisit.next(param);
    };
    SharedService.prototype.saveAppointmentList = function (param) {
        this.appointmentList.next(param);
    };
    /***** Rightside Nav Appointment data */
    SharedService.prototype.cancdelAppointmentData = function (param) {
        this.cancelAppointmentList.next(param);
    };
    //get Diagnosis Form
    SharedService.prototype.createDiagnosis = function (param) {
        console.log('Diagnosis', param);
        this.diagnosisdata.next(param);
    };
    //get Suggest Form
    SharedService.prototype.createTest = function (param) {
        console.log('Suggest Form', param);
        this.suggestionData.next(param);
    };
    /*********STORE MEDICINE DATA FROM PRESCRIPTION FORM **************/
    SharedService.prototype.createMedicineData = function (param) {
        this.medicinedata.next(param);
    };
    /*********STORE FOLLOWUP DATA FROM PRESCRIPTION FORM **************/
    SharedService.prototype.createFollowUpData = function (param) {
        this.followUpData.next(param);
    };
    /*********STORE LIFESTYLE DATA FROM PRESCRIPTION FORM **************/
    SharedService.prototype.createLifeStyleData = function (param) {
        this.lifeStyleData.next(param);
    };
    /*********STORE INSTRUCTION DATA FROM PRESCRIPTION FORM **************/
    SharedService.prototype.createInstructionData = function (param) {
        this.instructionData.next(param);
    };
    /*********STORE INDIVIDUALID  IN PRESCRIPTION FORM **************/
    SharedService.prototype.storeIndividual = function (param) {
        this.storeIndividualId.next(param);
    };
    /*********STORE INDIVIDUALID  IN PRESCRIPTION FORM **************/
    SharedService.prototype.storeAppointment = function (param) {
        this.storeAppointmentId.next(param);
    };
    SharedService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/mefyservice/sockets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketsService = (function () {
    // public socket:any = io('http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023');
    function SocketsService() {
        this.url = 'http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023';
        // let _base=this;
        // // _base.socket = io(this.url);
        // _base.socket.on('connection',(socket)=>{
        //   debugger;
        //   console.log('dat"""""""""',_base.socket)
        //   console.log
        // })
        // debugger;
        // console.log('::::::::',this.socket)
    }
    SocketsService.prototype.connect = function () {
        var _base = this;
        _base.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url);
        console.log('jkfgdghjkhgfh', _base.socket);
        console.log('socket connection', _base.socket.ids);
        console.log('LLLLLLL', _base.socket.id ? _base.socket.id : 'jyt');
        // localStorage.setItem('socketId',_base.socket.Socket)
        // localStorage.setItem('socketId',this.socket.ids)
        // console.log('SOCKET SERVICE id',this.socket.id);
    };
    SocketsService.prototype.getSocketId = function () {
        var _base = this;
        console.log(_base.socket);
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _base.socket.on('connect', function (data) {
                console.log('socket data', data);
                observer.next(data);
            });
            return function () {
            };
        });
        console.log(observable);
        return observable;
    };
    SocketsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketsService);
    return SocketsService;
}());

//# sourceMappingURL=sockets.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountService = (function () {
    function AccountService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    //create account
    AccountService.prototype.createAccount = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'account/create', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get account list by doctorId
    AccountService.prototype.getAccountListByDoctorList = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'account/getByDoctorId?doctorId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get account list by accountId
    AccountService.prototype.getAccountByAccountId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'account/getByAccountId?accountId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // update Account 
    AccountService.prototype.accountUpdate = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'account/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete Account
    AccountService.prototype.deleteAccount = function (id) {
        console.log("delete Account");
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'account/delete?_id=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], AccountService);
    return AccountService;
    var _a;
}());

//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppointmentService = (function () {
    function AppointmentService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    //create appointment
    AppointmentService.prototype.createAppointment = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'appointment/create', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get appoitmnet list
    AppointmentService.prototype.getAppointmentList = function (id, date) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'appointment/getByDate?doctorId=' + id + '&date=' + date)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get appoitmnet list
    AppointmentService.prototype.getTimeSlots = function (id, date, clinicId, time) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'individual/getTimeSlots?doctorId=' + id + '&date=' + date + '&clinicId=' + clinicId + '&currentTime=' + time)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //create appointment
    AppointmentService.prototype.createIndividual = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'doctor/createIndividual?_id=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get individual number list
    AppointmentService.prototype.getIndividualList = function (data) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'doctor/getIndividualByPhonenumber?phoneNumber=' + data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Cancel Acppointment 
    AppointmentService.prototype.cancelAppointmentById = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'appointment/cancel', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get individual number list
    AppointmentService.prototype.getAppointmentByClinicId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'appointment/getByClinicId?clinicId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete appointment
    AppointmentService.prototype.deleteAppointment = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'appointment/delete?appointmentId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AppointmentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], AppointmentService);
    return AppointmentService;
    var _a;
}());

//# sourceMappingURL=appointment.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/bill.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillService = (function () {
    function BillService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    // bill create
    BillService.prototype.createBill = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'bill/create?ePrescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get bill by prescriptionId
    BillService.prototype.getByPrescriptionId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'bill/getByPrescriptionId', id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get biil by doctorId
    BillService.prototype.getByDoctorId = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'bill/getByDoctorId?doctorId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // econsult fee
    BillService.prototype.econsultFee = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'doctor/eConsultFee', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get bill by date
    BillService.prototype.getBillByDate = function (id, date) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'bill/getByDate?doctorId=' + id + '&date=' + date)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BillService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], BillService);
    return BillService;
    var _a;
}());

//# sourceMappingURL=bill.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    //get Dashboard Details through profile id of doctor
    DashboardService.prototype.getDoctorList = function (id, date) {
        console.log("Get Dashboard Details");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'doctor/getDashboardDetails?_id=' + id + '&date=' + date)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // doctor availability
    DashboardService.prototype.doctorAvailability = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'doctor/availability', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // doctor profile update
    DashboardService.prototype.doctorProfile = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'doctor/doctorProfileUpdate', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/doctor-prescription.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPrescriptionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DoctorPrescriptionService = (function () {
    function DoctorPrescriptionService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    //create prescription to get prescription id
    DoctorPrescriptionService.prototype.createPrescription = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescription/create', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get prescription through prescription id
    DoctorPrescriptionService.prototype.getPrescription = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescription/getSingle?prescriptionId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create diagnosis prescriptions
    DoctorPrescriptionService.prototype.createDiagnosis = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'diagnosis/create?prescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create lifestyle prescriptions
    DoctorPrescriptionService.prototype.createLifeStyleInstruction = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'lifeStyleInstruction/create?prescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create specific instructions prescriptions
    DoctorPrescriptionService.prototype.createSpecificInstruction = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'specificInstruction/create?prescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create medicine prescription
    DoctorPrescriptionService.prototype.createMedicine = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescribeMedicine/create?prescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create medicine prescription
    DoctorPrescriptionService.prototype.createAdvice = function (id, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'advice/create?prescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // create recommended test prescription
    DoctorPrescriptionService.prototype.createRecommendedTest = function (data, id) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'recommended/create?prescriptionId=' + id, data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get individual details through profile id
    DoctorPrescriptionService.prototype.getindividualDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'individual/getindividualDetails?_id=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get individual health records 
    DoctorPrescriptionService.prototype.getHealthRecord = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'individual/getHealthRecords?_id=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get medicine through prescription id
    DoctorPrescriptionService.prototype.getMedicine = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescribeMedicine/getListByPrescriptionId?id=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get medicine list
    DoctorPrescriptionService.prototype.getMedicineList = function (medicine) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/medicine?medicineName=' + medicine)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //Update(edit) medicine detail
    DoctorPrescriptionService.prototype.updateMedicine = function (id) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescribeMedicine/update', id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get medicine list
    DoctorPrescriptionService.prototype.getDiagnosisById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'diagnosis/getSingle?diagnosisId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get Single medicine Details through medicine id
    DoctorPrescriptionService.prototype.getSingleMedicineDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescribeMedicine/getSingle?prescribeMedicineId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // update diagnosis details
    DoctorPrescriptionService.prototype.updateDiagnosisDetail = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'diagnosis/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get specific instruction by specificInstructionId
    DoctorPrescriptionService.prototype.getSpecificInstructionById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'specificInstruction/getSingle?specificInstructionId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //update specific instruction
    DoctorPrescriptionService.prototype.updateSpecificInstruction = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'specificInstruction/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get Single advice followup Details through advice id
    DoctorPrescriptionService.prototype.getSingleFollowDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'advice/getSingle?adviceId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get life style details
    DoctorPrescriptionService.prototype.getLifeStyleDetails = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'lifeStyleInstruction/getSingle?lifeStyleId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // update advice details
    DoctorPrescriptionService.prototype.updateAdviceDetail = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'advice/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // update lifestyle details
    DoctorPrescriptionService.prototype.updateLifeStyleDetails = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'lifeStyleInstruction/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DoctorPrescriptionService.prototype.getSingleSuggest = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'recommended/getSingle?recommendedId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // update suggest details
    DoctorPrescriptionService.prototype.updateSuggest = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'recommended/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete diagnosis 
    DoctorPrescriptionService.prototype.deleteDiagnosis = function (id, diagnosisId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'diagnosis/delete?prescriptionId=' + id + '&diagnosisId=' + diagnosisId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete followup 
    DoctorPrescriptionService.prototype.deleteFollowup = function (id, adviceId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'advice/delete?prescriptionId=' + id + '&adviceId=' + adviceId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete lifestyle
    DoctorPrescriptionService.prototype.deleteLifestyle = function (id, lifeStyleId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'lifeStyleInstruction/delete?prescriptionId=' + id + '&lifeStyleId=' + lifeStyleId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete specific instructions
    DoctorPrescriptionService.prototype.deleteSpecific = function (id, specificInstructionId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'specificInstruction/delete?prescriptionId=' + id + '&specificInstructionId=' + specificInstructionId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete recommended test
    DoctorPrescriptionService.prototype.deleteSuggest = function (id, recommendedId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'recommended/delete?prescriptionId=' + id + '&recommendedId=' + recommendedId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete recommended test
    DoctorPrescriptionService.prototype.deleteMedicine = function (id, medicineId) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'prescribeMedicine/delete?prescriptionId=' + id + '&medicineId=' + medicineId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DoctorPrescriptionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], DoctorPrescriptionService);
    return DoctorPrescriptionService;
    var _a;
}());

//# sourceMappingURL=doctor-prescription.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/doctorregister.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorregisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DoctorregisterService = (function () {
    function DoctorregisterService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    // doctor registration
    DoctorregisterService.prototype.register = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'user/registration', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //verifyotp api
    DoctorregisterService.prototype.verifyOTP = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'user/verifyOTP', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // addprofile details of doctor
    DoctorregisterService.prototype.addDoctorprofile = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/doctorProfile', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //update doctor profile
    DoctorregisterService.prototype.updateDocProfile = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/doctorProfileUpdate', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // upload profile picture
    DoctorregisterService.prototype.profilePicture = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'file/fileUpload', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get education list
    DoctorregisterService.prototype.getDegreeList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/education')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get speciality list
    DoctorregisterService.prototype.getSpecialityList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/speciality')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get language list
    DoctorregisterService.prototype.getLanguageList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/language')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get state list
    DoctorregisterService.prototype.getStateList = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__urlsConfig__["a" /* APIURL */] + 'doctor/state')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DoctorregisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], DoctorregisterService);
    return DoctorregisterService;
    var _a;
}());

//# sourceMappingURL=doctorregister.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/meme-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemeLoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemeLoginService = (function () {
    function MemeLoginService(http) {
        this.http = http;
        // http://mitapi.memeinfotech.com:5020/user/resendOtp
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    // doctor login 
    MemeLoginService.prototype.login = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__urlsConfig__["a" /* APIURL */] + 'user/login', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // OTP verification
    MemeLoginService.prototype.verifyOTP = function (otp) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__urlsConfig__["a" /* APIURL */] + 'user/verifyOTP', otp)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //get doctor details
    MemeLoginService.prototype.getDoctorDetail = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__urlsConfig__["a" /* APIURL */] + 'doctor/getDoctorDetails?_id=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // resend otp
    MemeLoginService.prototype.resendOtp = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__urlsConfig__["a" /* APIURL */] + 'user/resendOtp', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MemeLoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], MemeLoginService);
    return MemeLoginService;
    var _a;
}());

//# sourceMappingURL=meme-login.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/schedule.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
        // catch errors
        this.handleError = function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json());
        };
    }
    //for create Clinic
    ScheduleService.prototype.clinicCreate = function (data) {
        console.log("schedule");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/create', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //for Doctor Clinic List
    //"5a3373fafcff662d9497e298"
    ScheduleService.prototype.getClinicList = function (id) {
        console.log("Get Schedule");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/doctorClinicList?doctorId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get Single Clinic Details through Clinic id
    ScheduleService.prototype.getSingleClinicList = function (id) {
        console.log("Get Schedule");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/getSingle?clinicId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    //Update(edit) clinic
    ScheduleService.prototype.updateClinic = function (data) {
        console.log("Get Schedule");
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/update', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete clinic
    ScheduleService.prototype.deleteClinic = function (id) {
        console.log("Get Schedule");
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/delete?clinicId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // delete clinic after confirmation
    // delete clinic
    ScheduleService.prototype.deleteClinicByStatus = function (id) {
        console.log("Get Schedule");
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/delete?clinicId=' + id + '&status=appointments')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // clinic availability
    ScheduleService.prototype.clinicAvailability = function (data) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'clinic/changeAvailabilty', data)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // get clinic by date
    ScheduleService.prototype.getClinicByDate = function (id, date) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__urlsConfig__["a" /* APIURL */] + 'individual/getClinicByDate?date=' + date + '&doctorId=' + id)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ScheduleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
    ], ScheduleService);
    return ScheduleService;
    var _a;
}());

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ "../../../../../src/app/meme-services/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urlsConfig__ = __webpack_require__("../../../../../src/app/urlsConfig.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketService = (function () {
    function SocketService(router) {
        this.router = router;
        this.url = __WEBPACK_IMPORTED_MODULE_4__urlsConfig__["a" /* APIURL */];
    }
    SocketService.prototype.sendMessage = function (message, data) {
        this.socket.emit(message, data);
    };
    SocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.url, { query: "profileId=" + localStorage.getItem('loginId') + "&role=doctor" });
        console.log(this.socket);
    };
    SocketService.prototype.incomingCall = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('incomingCall', function (data) {
                observer.next(data);
            });
            return function () {
            };
        });
        return observable;
    };
    SocketService.prototype.reject = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('reject', function (data) {
                observer.next(data);
            });
            return function () {
            };
        });
        return observable;
    };
    SocketService.prototype.newAppointment = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('newAppointment', function (data) {
                console.log("new appointment", data);
                observer.next(data);
            });
            return function () {
            };
        });
        return observable;
    };
    SocketService.prototype.accept = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('accept', function (data) {
                observer.next(data);
            });
            return function () {
            };
        });
        return observable;
    };
    SocketService.prototype.callDisconnected = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('callDisconnected', function (data) {
                observer.next(data);
            });
            return function () {
            };
        });
        return observable;
    };
    // handle sockect if gets disconnected
    SocketService.prototype.socketDisconnectHandle = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('disconnect', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    // disconnect socket and navigate to login page
    SocketService.prototype.disconnectsocket = function () {
        this.socket.disconnect();
        this.router.navigate['/login'];
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], SocketService);
    return SocketService;
    var _a;
}());

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/newlogin/newlogin.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".verticalform {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 100vh;\n    background:green;\n    background: linear-gradient(to right,#ffffff9e,#683d9094,#683d90),url(" + escape(__webpack_require__("../../../../../src/assets/images/background.jpg")) + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.leftContent {\n    background: #683d90;\n    border-radius: 0 50% 50% 0;\n    position: absolute;\n    top: -45px;\n    border-style: inset;\n    border-right: 20px solid #8e51b7;\n    left: -7em;\n    height: 89vh;\n    width: 34vw;\n}\ndiv#noPadding {\n    padding: 0;\n}\n.loginform {\n    height: 100vh;\n    overflow: hidden;\n}\n.leftData {\n    position: relative;\n}\n.leftData h1 {\n    color: #fff;\n    margin: auto;\n    text-align: center;\n    font-size: 25px;\n    font-weight: 600;\n}\n.FormContent {\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\n    border-radius: 9px;\n    position: relative;\n    background: #fff;\n    overflow: hidden;\n    height: auto;\n    width: 58vw;\n}\n.loginContent {\n    /* padding-left: 4em;\n    margin-top:6em;\n    margin-right: 2em; */\n    margin: 18% 8%;\n}\n.loginContent h1 {\n    color: #9151b7;\n    font-size: 26px;\n    text-align: center;\n    margin: 0;\n}\n.loginContent p {\n    text-align: center;\n}\n.backCover {\n    background: #9151b7;\n    height: 611px;\n    width: 730px;\n    float: right;\n    position: unset;\n    border-radius: 264px 0 0 264px;\n    top: 0;\n}\n.loginRegister {\n    text-align: left;\n    margin-top: 2em;\n}\nbutton.loginbutton {\n    border-radius: 50px;\n    height: 39px;\n    padding: 0 26px;\n    margin-top: 1em;\n    cursor: pointer;\n    letter-spacing: 1px;\n    opacity: 0.9;\n    outline: none;\n    border: none;\n    color: #ffffff;\n    background: linear-gradient(to right, #7645dd, #e090ec);\n    font-family: Lato;\n    font-size: 14px;\n}\n.row.nomargin {\n    margin: 0;\n}\nimg.scanner {\n    height: 153px;\n    width: auto;\n    background: #fff;\n}\n.put {\n    position: absolute;\n    left: 12vw;\n    top: 19vh;\n}\na.createaccm {\n    text-decoration: none;\n    color: #884fb3;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n}\ninput.form-control.inputPhone:-ms-input-placeholder {\n    font-family: Roboto;\n}\ninput.form-control.inputPhone::placeholder {\n    font-family: Roboto;\n}\ninput[type=\"text\"]:-ms-input-placeholder {\n    color: rgba(101, 99, 99, 0.79);\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n}\ninput[type=\"text\"]::placeholder {\n    color: rgba(101, 99, 99, 0.79);\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n}\n.noaccount p {\n    margin: 0;\n    font-size: 14px;\n    text-align: left;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n    font-style: italic;\n}\n.noaccount {\n    margin-top: 15px;\n    text-align: center;\n}\ninput.form-control.inputPhone{\n    height: 34px;\n    margin: 0px;\n    font-style: italic;\n    position: relative;\n}\ni.fa.fa-mobile.right {\n    font-size: 22px;\n    position: absolute;\n    top: 32px;\n    right: 0;\n    color: #8e51b7;\n}\n.form-group.phoneDiv {\n    position: relative;\n}\np.code {\n    text-align: center;\n    font-size: 18px;\n    margin: 7px 0 0 0;\n    font-style: italic;\n    color: #fcfbfb99;\n    font-family: 'Roboto', sans-serif;\n}\nqrcode {\n    margin: 0 1px;\n}\nimg.mefyLogo {\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: 10px;\n    left: 2em;\n}\nul.dropdown-menu.ng-star-inserted li a h5 {\n    font-size: 14px !important;\n}\nsvg#otp {\n    height: 50px;\n    width: 24vw;\n}\n\n\nh1.loginheading {\n    font-size: 27px;\n    font-family: Lato;\n    text-transform: uppercase;\n    text-align: left;\n    font-weight: 600;\n    color: #7846dd;\n    margin-bottom: 5px;\n    margin-left: 6%;\n    margin-top: 3em;\n}\np.subtxt {\n    font-size: 15px;\n    text-align: left;\n    font-family: lato;\n    font-style: italic;\n    color: #333;\n    /* text-align: center; */\n    margin-left: 6%;\n}\nbutton.loginbutton:hover {\n    background: linear-gradient(to right, #e090ec, #7645dd);\n    transition: all 2s linear 0.3s;\n}\n/* responsive css */\n@media only screen and (min-width : 1440px) and (max-width : 1920px) {\n\n\n    .FormContent{\n        height:56vh;\n       \n}\n}\n\n@media only screen and (min-width : 320px) and (max-width : 1024px) {\n    .leftContent {\n        display: none;\n    }\n    .FormContent{\n       \n        width: 90%;\n        margin: 0 auto;\n    }\n    h1.loginheading {\n        \n        margin-top: 1em;\n        text-align: center;\n    }\n    input.form-control.inputPhone.ng-pristine.ng-invalid.ng-touched:-ms-input-placeholder {\n        font-size: 12px;\n    }\n    input.form-control.inputPhone.ng-pristine.ng-invalid.ng-touched::placeholder {\n        font-size: 12px;\n    }\n    .loginRegister{\n        text-align: center;\n       \n    }\n    p.subtxt {\n       \n        text-align: center;\n    }\n    .noaccount p {\n      \n        text-align: center;\n    }\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newlogin/newlogin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- login ui -->\n<div class=\"loginform\">\n  <!-- Login form -->\n  <img src=\"../../assets/images/mefylogo.png\" class=\"mefyLogo\">\n  <div class=\"verticalform\">\n    <div class=\"FormContent\">\n      <!-- /* loader */ -->\n      <div class=\"loading\" *ngIf=\"loader\">\n        <div class=\"sk-circle\">\n          <div class=\"sk-circle1 sk-child\"></div>\n          <div class=\"sk-circle2 sk-child\"></div>\n          <div class=\"sk-circle3 sk-child\"></div>\n          <div class=\"sk-circle4 sk-child\"></div>\n          <div class=\"sk-circle5 sk-child\"></div>\n          <div class=\"sk-circle6 sk-child\"></div>\n          <div class=\"sk-circle7 sk-child\"></div>\n          <div class=\"sk-circle8 sk-child\"></div>\n          <div class=\"sk-circle9 sk-child\"></div>\n          <div class=\"sk-circle10 sk-child\"></div>\n          <div class=\"sk-circle11 sk-child\"></div>\n          <div class=\"sk-circle12 sk-child\"></div>\n        </div>\n      </div>\n      <!-- /* loader */ -->\n      <div class=\"row nomargin\">\n        <div class=\"col-md-12\" id=\"noPadding1\">\n          <div class=\"col-md-6\" id=\"noPadding1\">\n            <div class=\"leftContent\">\n              <div class=\"leftData\">\n                <div class=\"put\">\n                  <h1>MeFy</h1>\n                  <qrcode [qrdata]=\"scannerdata\" [colorlight]=\"'#fff'\" [colordark]=\"'#683d90'\" [size]=\"172\" [level]=\"'M'\"></qrcode>\n                  <p class=\"code\">Scan your qr code</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\" id=\"noPadding1\">\n            <!-- login screen -->\n            <h1 class=\"loginheading\">Login</h1>\n            <p class=\"subtxt\">Please login to your account</p>\n            <div class=\"loginContent\" *ngIf=\"loginShow\">\n\n              <form [formGroup]=\"loginForm\">\n                <div class=\"form-group phoneDiv\">\n                  <label></label>\n                  <input type=\"text\" class=\"form-control inputPhone\" [textMask]=\"{mask: mask, guide: false}\" minlength=\"8\" placeholder=\"Enter your Phone Number\"\n                    formControlName=\"phoneNumber\">\n                  <p class=\"errormessage\" [ngStyle]=\"{'font-size':'11px'}\" *ngIf=\"loginFormErrors.phoneNumber.required || (loginForm.controls.phoneNumber.pristine && submitted)\">Number can not be empty</p>\n                  <p class=\"errormessage\" [ngStyle]=\"{'font-size':'11px'}\" *ngIf=\"loginFormErrors.phoneNumber.minlength \">Please Enter Valid Phone Number\n                  </p>\n                  <i class=\"fa fa-mobile right\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"loginRegister\">\n                  <button class=\"loginbutton\" type=\"button\" (click)=\"login()\">Login\n                    <!-- <i class=\"fa fa-arrow-right\"></i> -->\n                  </button>\n                </div>\n                <div class=\"noaccount\">\n                  <p>Don't have an account ?\n                    <a href=\"\" class=\"createaccm\" [routerLink]=\"['/register']\">Create an account</a>\n                  </p>\n\n                </div>\n              </form>\n            </div>\n            <!-- login screen -->\n            <!-- otp screen-->\n            <div class=\"loginContent\" *ngIf=\"otpShow\">\n              <svg version=\"1.1\" id=\"otp\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 489.1 489.1\" style=\"enable-background:new 0 0 489.1 489.1;\" xml:space=\"preserve\">\n                <g>\n                  <g>\n                    <path style=\"fill:#884fb3;\" d=\"M416.85,133.2h-190.1c-17.2,0-31.3,14.1-31.3,31.3v116c0,17.2,14.1,31.3,31.3,31.3h24.5v55.4\nl57.8-55.4h107.7c17.2,0,31.3-14.1,31.3-31.3v-116C448.05,147.3,434.05,133.2,416.85,133.2z\" />\n                    <path d=\"M321.75,100c5,0,9.1-4.1,9.1-9.1V51.4c0-28.4-23.1-51.4-51.4-51.4H85.05c-28.4,0-51.4,23.1-51.4,51.4v315.8\nc0,5,4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1V51.4c0-18.4,14.9-33.3,33.3-33.3h194.3c18.4,0,33.3,14.9,33.3,33.3v10.8H84.35\nc-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1h228.4V91C312.65,96,316.75,100,321.75,100z\" />\n                    <path d=\"M328.05,435.4v-83.2c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1v83.2c0,17.5-11.4,35.7-30.5,35.7H85.05c-18.3,0-35-17-35-35.7\nv-14.7h221.6c5,0,9.1-4.1,9.1-9.1s-4.1-9.1-9.1-9.1H41.05c-5,0-9.1,4.1-9.1,9.1v23.7c0,28.7,24.8,53.8,53.1,53.8h194.3\nC306.65,489.2,328.05,465.6,328.05,435.4z\" />\n                    <path d=\"M457.15,280.5v-116c0-22.2-18.1-40.3-40.4-40.3h-190c-22.2,0-40.4,18.1-40.4,40.3v116c0,22.2,18.1,40.4,40.4,40.4h15.5\nv46.3c0,3.6,2.2,6.9,5.5,8.3c1.1,0.5,2.4,0.7,3.6,0.7c2.3,0,4.6-0.9,6.3-2.5l55.2-52.9h104.1\nC439.05,320.8,457.15,302.7,457.15,280.5z M309.05,302.7c-2.3,0-4.6,0.9-6.3,2.5l-42.5,40.7v-34.2c0-5-4.1-9.1-9.1-9.1h-24.5\nc-12.3,0-22.2-10-22.2-22.2v-116c0-12.3,10-22.2,22.2-22.2h190.1c12.3,0,22.2,10,22.2,22.2v116c0,12.3-10,22.2-22.2,22.2h-107.7\nV302.7z\" />\n                    <path d=\"M321.75,217.2c-2.4,0-4.7,1-6.4,2.6c-1.7,1.7-2.6,4-2.6,6.4s1,4.7,2.7,6.4s4,2.7,6.4,2.7s4.7-1,6.4-2.7\nc1.7-1.7,2.7-4,2.7-6.4s-1-4.7-2.7-6.4C326.45,218.2,324.15,217.2,321.75,217.2z\" />\n                    <path d=\"M355.45,217.2c-2.4,0-4.7,1-6.4,2.6c-1.7,1.7-2.6,4-2.6,6.4s1,4.7,2.6,6.4c1.7,1.7,4,2.7,6.4,2.7s4.7-1,6.4-2.7\nc1.7-1.7,2.6-4,2.6-6.4s-1-4.7-2.6-6.4C360.25,218.2,357.85,217.2,355.45,217.2z\" />\n                    <path d=\"M288.05,217.2c-2.4,0-4.7,1-6.4,2.6c-1.7,1.7-2.6,4-2.6,6.4s1,4.7,2.6,6.4c1.7,1.7,4,2.7,6.4,2.7s4.7-1,6.4-2.7\nc1.7-1.7,2.7-4,2.7-6.4s-1-4.7-2.7-6.4C292.75,218.2,290.45,217.2,288.05,217.2z\" />\n                  </g>\n                </g>\n              </svg>\n              <p>Please enter the OTP you received</p>\n              <form [formGroup]=\"otpForm\">\n                <div class=\"form-group phoneDiv\">\n                  <!-- <label>OTP</label> -->\n                  <input type=\"text\" class=\"form-control inputPhone\" formControlName=\"otp\">\n                  <p class=\"errormessage\" *ngIf=\"otpFormErrors.otp.required || (otpForm.controls.otp.pristine && submitted)\">Can't be empty</p>\n                </div>\n                <div class=\"loginRegister\">\n                  <button class=\"loginbutton\" (click)=\"verifyOtp()\">Submit\n                    <i class=\"fa fa-arrow-right\"></i>\n                  </button>\n                </div>\n                <div class=\"noaccount\">\n                  <p>Don't have an account ?</p>\n                  <a href=\"\" class=\"createaccm\" [routerLink]=\"['/register']\">Create an account</a>\n                </div>\n              </form>\n            </div>\n            <!-- otp screen -->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Login form -->\n\n</div>\n<!-- login ui -->"

/***/ }),

/***/ "../../../../../src/app/newlogin/newlogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_login_service__ = __webpack_require__("../../../../../src/app/mefyservice/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mefyservice_profile_service__ = __webpack_require__("../../../../../src/app/mefyservice/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mefyservice_sockets_service__ = __webpack_require__("../../../../../src/app/mefyservice/sockets.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewloginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewloginComponent = (function () {
    function NewloginComponent(formBuilder, loginService, router, sharedServices, SocketService, profileService) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.sharedServices = sharedServices;
        this.SocketService = SocketService;
        this.profileService = profileService;
        this.myAngularxQrCode = null;
        this.loginShow = true;
        this.loader = false;
        this.otpShow = false;
        this.userarr = [];
        this.submitted = false; //SHOW ERROR,IF INVALID FORM IS SUBMITTED
        this.phoneNumber = [];
        this.allUserList = [];
        this.scannerdata = "socket.id";
        this.mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // Phone number validation 
        // socket:any;
        this.socket = __WEBPACK_IMPORTED_MODULE_6_socket_io_client___default()('http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023');
        this.splitarr = [];
        // this.scanData();
        // this.myAngularxQrCode = this.scannerdata;
        this.loginFormErrors = {
            phoneNumber: {},
        };
        this.otpFormErrors = {
            otp: {},
        };
    }
    NewloginComponent.prototype.scanData = function () {
        var _base = this;
        _base.socket.on('connect', function () {
            console.log("connect", _base.socket, _base.socket.id);
            _base.scannerdata = _base.socket.id;
            console.log(_base.scannerdata);
        });
        _base.socket.on('loginByScanner', function (data) {
            console.log("data print", data);
            _base.router.navigate(['/dashboard']);
        });
        _base.socket.on('disconnect', function () {
            console.log("connection closed");
        });
    };
    NewloginComponent.prototype.ngOnInit = function () {
        // console.log('njfhjjg',this.socket);
        var _this = this;
        this.loginForm = this.createLoginForm();
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
        this.otpForm = this.createOtpForm();
        this.otpForm.valueChanges.subscribe(function () {
            _this.onOtpFormValuesChanged();
        });
        // this.hii();
        this.getAllUsers();
    };
    NewloginComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.loginService.getAllUsers().subscribe(function (data) {
            // console.log(data)
            var result = {};
            result = data;
            _this.allUserList = result;
        });
    };
    /******************************IT CATCHES ALL CHANGES IN FORM******************/
    NewloginComponent.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    /******************************IT CATCHES ALL CHANGES IN FORM******************/
    NewloginComponent.prototype.onOtpFormValuesChanged = function () {
        for (var field in this.otpFormErrors) {
            if (!this.otpFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.otpFormErrors[field] = {};
            // Get the control
            var control = this.otpForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.otpFormErrors[field] = control.errors;
            }
        }
    };
    NewloginComponent.prototype.createLoginForm = function () {
        return this.formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    NewloginComponent.prototype.createOtpForm = function () {
        return this.formBuilder.group({
            otp: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
    };
    /*******************DOCTOR'S LOGIN********************/
    NewloginComponent.prototype.login = function () {
        var _this = this;
        var result = {};
        this.loader = true;
        if (this.loginForm.valid) {
            var logindata = {
                phoneNumber: this.loginForm.value.phoneNumber,
                role: 'doctor'
            };
            this.loginService.doctorWebLogin(logindata).subscribe(function (value) {
                console.log('result', value);
                result = value;
                _this.loader = false;
                if (result.result.message == 'OTP sent to registered number') {
                    _this.loginShow = false;
                    _this.otpShow = true;
                    var notifydata = {
                        type: 'success',
                        title: 'OTP',
                        msg: 'Sent to registered number'
                    };
                    console.log('data', notifydata);
                    _this.sharedServices.createNotification(notifydata);
                }
                else {
                    var notifydata = {
                        type: 'warning',
                        title: 'User',
                        msg: 'Not Registered'
                    };
                    console.log('data', notifydata);
                    _this.sharedServices.createNotification(notifydata);
                }
            }, function (err) {
                _this.loader = false;
                console.log("Network Issue");
                var notifydata = {
                    type: 'warning',
                    title: 'Network Issue',
                    msg: 'Somethnig Went Wrong'
                };
                console.log('data', notifydata);
                _this.sharedServices.createNotification(notifydata);
            });
        }
        else {
            this.submitted = true;
            this.loader = false;
        }
    };
    /************************VERIFY OTP**************************/
    NewloginComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.loader = true;
        if (this.otpForm.valid) {
            // this.loader=true;          
            var verficationData = {
                otp: parseInt(this.otpForm.value.otp),
                phoneNumber: this.loginForm.value.phoneNumber,
                role: 'doctor'
            };
            this.loginService.verifyOtp(verficationData).subscribe(function (value) {
                console.log('result', value);
                var result = {};
                result = value;
                if (result.result.message == " Otp verification failed") {
                    _this.loader = false;
                    var notifydata = {
                        type: 'error',
                        title: 'Otp verification failed!'
                    };
                    _this.sharedServices.createNotification(notifydata);
                }
                else {
                    localStorage.setItem('doctorId', result.result.result.doctorId);
                    _this.loader = false;
                    console.log("userid", _this.splitarr);
                    _this.userarr = result.result.result.userId;
                    _this.myarr = _this.userarr.split("#")[1];
                    console.log('id', _this.myarr);
                    _this.uid = _this.myarr;
                    console.log('y', _this.uid);
                    localStorage.setItem('userId', _this.uid);
                    // this.SocketService.connect();
                    console.log('socket id', _this.socket.id);
                    localStorage.setItem('socketId', _this.socket.id);
                    _this.profileService.updateDetail(localStorage.getItem('userId'), { socketId: _this.socket.id }).subscribe(function (data) {
                        console.log('socket id updated', data);
                    });
                    _this.router.navigate(['/dashboard/main']);
                }
            }, function (err) {
                _this.loader = false;
                console.log(err);
                var notifydata = {
                    type: 'warning',
                    title: 'Network Issue',
                    msg: 'Somethnig Went Wrong'
                };
                console.log('data', notifydata);
                _this.sharedServices.createNotification(notifydata);
            });
        }
        else {
            this.loader = false;
            this.submitted = true;
        }
    };
    NewloginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newlogin',
            template: __webpack_require__("../../../../../src/app/newlogin/newlogin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newlogin/newlogin.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__mefyservice_sockets_service__["a" /* SocketsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__mefyservice_sockets_service__["a" /* SocketsService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__mefyservice_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__mefyservice_profile_service__["a" /* ProfileService */]) === "function" && _f || Object])
    ], NewloginComponent);
    return NewloginComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=newlogin.component.js.map

/***/ }),

/***/ "../../../../../src/app/newregistration/newregistration.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @import url(https://fonts.googleapis.com/css?family=Montserrat); */\n.verticalform {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    height: 100vh;\n    background:green;\n    background: linear-gradient(to right,#ffffff9e,#683d9094,#683d90),url(" + escape(__webpack_require__("../../../../../src/assets/images/background.jpg")) + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n.leftContent {\n    background: #683d90;\n    border-radius: 0 50% 50% 0;\n    position: absolute;\n    top: -45px;\n    border-style: inset;\n    border-right: 20px solid #8e51b7;\n    left: -7em;\n    height: 96vh;\n    width: 34vw;\n}\ndiv#noPadding {\n    padding: 0;\n}\n.relpos i {\n    position: absolute;\n    right: 0;\n    bottom: 16px;\n}\n.relpos {\n    position: relative;\n}\n.loginform {\n    height: 100vh;\n    overflow: hidden;\n}\n.leftData {\n    position: relative;\n}\n.leftData h1 {\n    color: #fff;\n    margin: auto;\n    text-align: center;\n    font-size: 25px;\n    font-weight: 600;\n}\n.FormContent {\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\n    border-radius: 9px;\n    position: relative;\n    background: #fff;\n    overflow: hidden;\n    height: auto;\n    width: 60%;\n}\nh1.regheading {\n    font-size: 27px;\n    font-family: Lato;\n    text-transform: uppercase;\n    text-align: left;\n    font-weight: 600;\n    color: #7846dd;\n    margin-bottom: 5px;\n   \n    margin-top: 25px !important;\n}\n/* .loginContent {\n    margin-right: 2em;\n} */\n.loginContent h1 {\n    color: #9151b7;\n    font-size: 26px;\n    text-align: center;\n    margin: 0;\n}\n.loginContent p {\n    text-align: left;\n    \n}\np.genderm {\n    margin-left: 0px;\n    margin-bottom:0px;\n}\n.row.genderoptions {\n    margin-left: 25px;\n}\n.backCover {\n    background: #9151b7;\n    height: 611px;\n    width: 730px;\n    float: right;\n    position: unset;\n    border-radius: 264px 0 0 264px;\n    top: 0;\n}\n.genderoptions .col-md-4.col-xs-4.nomarginrw {\n    margin-top: 12px;\n}\n.loginRegister {\n    text-align: center;\n}\nbutton.loginbutton {\n    border-radius: 50px;\n    height: 39px;\n    width: 113px;\n    margin-top: 1em;\n    cursor: pointer;\n    outline: none;\n    border: none;\n    color: #fff;\n    /* background: linear-gradient(to bottom,#683d90,#9a57c7); */\n    background: linear-gradient(to right, #7645dd, #e090ec);\n}\n.row.nomargin {\n    margin: 0;\n}\nimg.scanner {\n    height: 153px;\n    width: auto;\n    background: #fff;\n}\n.put {\n    position: absolute;\n    left: 12vw;\n    top: 19vh;\n}\na.createaccm {\n    text-decoration: none;\n    color: #884fb3;\n    font-weight: 500;\n    font-family: 'Roboto', sans-serif;\n}\ninput.form-control.inputPhone:-ms-input-placeholder {\n    color: #656363 !important;\n    font-family: Roboto;\n}\ninput.form-control.inputPhone::placeholder {\n    color: #656363 !important;\n    font-family: Roboto;\n}\ninput[type=\"text\"]:-ms-input-placeholder {\n    color: rgba(101, 99, 99, 0.79);\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n}\ninput[type=\"text\"]::placeholder {\n    color: rgba(101, 99, 99, 0.79);\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n}\nul.list-inline.radiobtn {\n    text-align: left;\n    padding-left: 1em;\n    color: rgba(101, 99, 99, 0.79);\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n}\ninput.next.action-button {\n    color: #fff !important;\n}\n.noaccount p {\n    margin: 0;\n    font-size: 15px;\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 400;\n}\n.noaccount {\n    margin-top: 15px;\n    text-align: center;\n}\ninput.form-control.inputPhone {\n    height: 34px;\n    position: relative;\n}\ni.fa.fa-mobile.right {\n    font-size: 26px;\n    position: absolute;\n    top: 29px;\n    right: 15px;\n}\n.form-group.phoneDiv {\n    position: relative;\n}\np.code {\n    text-align: center;\n    font-size: 18px;\n    margin: 7px 0 0 0;\n    font-style: italic;\n    color: #fcfbfb99;\n    font-family: 'Roboto', sans-serif;\n}\nqrcode {\n    margin: 0 1px;\n}\nimg.mefyLogo {\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: 10px;\n    left: 2em;\n}\nsvg#otp {\n    height: 50px;\n    width: 24vw;\n}\np.errormessage {\n    color: red;\n    margin: 0;\n    font-weight: 400;\n    font-style: italic;\n    position: absolute;\n    left: 30px;\n    font-family: Lato\n}\np.gmalef.topspace {\n    margin-top: 4px;\n}\n.top4\n{\n    margin-top:4px;\n}\nimg.registerLogo {\n    height: 150px;\n    width: 150px;\n}\n/* multistepform */\n#msform {\n\ttext-align: center;\n\tposition: relative;\n}\n#msform {\n    width: 100%;\n    margin-top: 3em !important;\n    /* margin: 50px auto; */\n    text-align: center;\n    /* position: relative; */\n    margin: 0 auto;\n}\n#msform fieldset {\n\tbackground: white;\n\tborder: 0 none;\n\tborder-radius: 3px;\n\tbox-sizing: border-box;\n\twidth: 100%;\n    position: relative;\n    padding-bottom:0px;\n    height: 215px;\n    overflow-y: scroll;\n    overflow-x: hidden;\n}\n.floatleft\n{\n    float:left;\n}\n#msform fieldset:not(:first-of-type) {\n\tdisplay: none;\n}\n#msform input, #msform textarea {\n    /* padding: 15px 0 0 15px; */\n    border-bottom: 1px solid #9e9e9e;\n    border-radius: 0px;\n    margin-bottom: 0px !important;\n    width: 100%;\n    box-sizing: border-box;\n    color: #444;\n    font-size: 16px;\n    font-family: Lato;\n}\n\n#msform input, #msform textarea:-ms-input-placeholder{\n    /* color: #656363 !important; */\n    font-family: Roboto;\n  \n    height: 50px;\n    /* padding-bottom: 0px !important; */\n}\n\n#msform input, #msform textarea::placeholder{\n    /* color: #656363 !important; */\n    font-family: Roboto;\n  \n    height: 50px;\n    /* padding-bottom: 0px !important; */\n}\n#msform .action-button {\n\n    width: 100px;\n    background: linear-gradient(to right, #7645dd, #e090ec);\n    border-radius: 50px;\n    font-weight: bold;\n    border: 0 none;\n    cursor: pointer;\n    outline: none;\n    padding: 6px 5px;\n    margin-top: 22px;\n}\n.pleft0 {\n    padding-left: 0px;\n}\n.pleft16\n{\n    padding-left: 16px;\n}\na.errormessage {\n    color: red;\n    font-style: italic;\n    text-decoration: none;\n    font-weight: 400;\n    font-size: 13px !important;\n    margin-left: 8px;\n    font-family: Lato;\n}\n.pleft30\n{\n    padding-left: 30px;\n}\n#msform .action-button:hover, #msform .action-button:focus {\n\tbox-shadow: 0 0 0 2px white, 0 0 0 3px #683d90;\n}\n/* .fs-title {\n\tfont-size: 15px;\n\ttext-transform: uppercase;\n\tcolor: #2C3E50;\n\tmargin-bottom: 10px;\n}\n.fs-subtitle {\n\tfont-weight: normal;\n\tfont-size: 13px;\n\tcolor: #666;\n\tmargin-bottom: 20px;\n} */\n#progressbar {\n\tmargin-bottom: 12px;\n\toverflow: hidden;\n\tcounter-reset: step;\n}\n#progressbar li {\n\tlist-style-type: none;\n\tcolor:#5b357f;\n\ttext-transform: uppercase;\n\tfont-size: 9px;\n\twidth: 24.33%;\n\tfloat: left;\n\tposition: relative;\n}\ninput[type=\"radio\"]{\n    -webkit-appearance: radio;\n}\n#progressbar li:before {\n\tcontent: counter(step);\n    counter-increment: step;\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    line-height: 28px;\n    display: block;\n    font-size: 10px;\n    border: 2px solid #8a50b6;\n    color: #333;\n    background: white;\n    margin: 0 auto 5px auto;\n}\n#progressbar li:after {\n\tcontent: '';\n\twidth: 61%;\n\theight: 2px;\n    background: #683d90;\n\tposition: absolute;\n\tleft: -31%;\n\ttop: 14px;\n\tz-index: 0;\n}\n#progressbar li:first-child:after {\n\tcontent: none; \n}\n#progressbar li.stepactive:before,  #progressbar li.stepactive:after{\n\tbackground: #683d90;\n\tcolor: white;\n}\nfieldset.secondFieldset {\n    padding: 0 !important;\n}\n/* multistepform */\n/* input#test2 {\n    opacity: 1;\n}\ninput#test4 {\n    opacity: 1;\n} */\np.genderm {\n    font-family: 'Roboto',sans-serif;\n    color: rgba(101, 99, 99, 0.79);\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: 500;\n  }\n  .haveaccount {\n    margin-top: 5px;\n    text-align: center;\n    padding-left: 0em;\n}\n.haveaccount p {\n    margin-bottom: 20px;\n    text-align: center;\n    font-style: italic;\n    margin-top: 9px;\n    font-family: lato;\n    color: #444;\n    font-weight: 500;\n    font-size: 14px;\n}\n.top_space {\n    margin-top: 1em;\n}\n.selecta {\n    margin-top: 1em;\n    }\n\n@media only screen and (min-width : 320px) and (max-width : 1024px) {\n    .leftContent {\n        display: none;\n    }\n    .FormContent{\n        width: 94%;\n    }\n    .res30 {\n        padding-left: 30px;\n    }\n    \n    }\n\n\n\n    h5.ng-star-inserted {\n        font-size: 15px;\n    }\n    /* scrollbar css */\n::-webkit-scrollbar {\n    width: 8px;\n}\n\n::-webkit-scrollbar-track {\n    /* box-shadow: inset 0 0 5px grey;  */\n    border-radius: 10px;\n}\n \n::-webkit-scrollbar-thumb {\n    background: grey; \n    border-radius: 10px;\n}\n   /* scrollbar css */\n\n   .bottomspace {\n    margin-bottom: 15px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/newregistration/newregistration.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Registration ui -->\n<div class=\"loginform\">\n  <img src=\"../../assets/images/mefylogo.png\" class=\"mefyLogo\">\n  <div class=\"verticalform\">\n    <div class=\"FormContent\">\n      <div class=\"row nomargin\">\n        <div class=\"col-md-12\" id=\"noPadding\">\n          <!-- <div class=\"col-md-6\" id=\"noPadding\">\n            <div class=\"leftContent\">\n              <div class=\"leftData\">\n                <div class=\"put\">\n                  <h1>MeFy</h1>\n                  <p class=\"code\">Welcome To Registration</p>\n                  <img src=\"../../assets/images/mefylogo.png\" class=\"registerLogo\">\n                </div>\n              </div>\n            </div>\n          </div> -->\n          <!-- /* loader */ -->\n          <div class=\"loading\" *ngIf=\"loader\">\n            <div class=\"sk-circle\">\n              <div class=\"sk-circle1 sk-child\"></div>\n              <div class=\"sk-circle2 sk-child\"></div>\n              <div class=\"sk-circle3 sk-child\"></div>\n              <div class=\"sk-circle4 sk-child\"></div>\n              <div class=\"sk-circle5 sk-child\"></div>\n              <div class=\"sk-circle6 sk-child\"></div>\n              <div class=\"sk-circle7 sk-child\"></div>\n              <div class=\"sk-circle8 sk-child\"></div>\n              <div class=\"sk-circle9 sk-child\"></div>\n              <div class=\"sk-circle10 sk-child\"></div>\n              <div class=\"sk-circle11 sk-child\"></div>\n              <div class=\"sk-circle12 sk-child\"></div>\n            </div>\n          </div>\n          <!-- /* loader */ -->\n\n          <div>\n\n            <div class=\"\" id=\"noPadding\">\n              <!-- Registration screen -->\n              <div class=\"loginContent\">\n                <h1 class=\"regheading\">Registration Form</h1>\n                <form id=\"msform\">\n                  <!-- progressbar -->\n                  <ul id=\"progressbar\" class=\"progressbar\">\n                    <li [ngClass]=\"{'stepactive':activeStep1==true}\">Step1</li>\n                    <li [ngClass]=\"{'stepactive':activeStep2==true}\">Personal Details</li>\n                    <li [ngClass]=\"{'stepactive':activeStep3==true}\">More Details</li>\n                    <li [ngClass]=\"{'stepactive':activeStep4==true}\">OTP</li>\n                  </ul>\n\n                  <!--  *******************FORM 1************ -->\n\n                  <fieldset *ngIf=\"firstreg\">\n                    <form [formGroup]=\"step1Form\">\n                      <div class=\"col-md-12 bottomspace\">\n                        <div class=\"col-md-6\">\n                          <input class=\"errormessage\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\" />\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.name.required || (step1Form.controls.name.pristine && submitted1)\">Name Cannot Be Empty</p>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <input class=\"errormessage\" type=\"text\" name=\"mobile\" formControlName=\"phoneNumber\" [textMask]=\"{mask: mask, guide: false}\"\n                            placeholder=\"Mobile Number\" minlength=\"8\" />\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.phoneNumber.required || (step1Form.controls.phoneNumber.pristine && submitted1)\">PhoneNumber Cannot Be Empty</p>\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.phoneNumber.minlength \">Please Enter Valid Phone Number\n                          </p>\n                        </div>\n                      </div>\n\n\n                      <!-- <div class=\"col-md-12\">\n                          <input type=\"text\" formControlName=\"dob\" placeholder=\"Date Of Birth\" #dp=\"bsDatepicker\" class=\"form-control\" bsDatepicker\n                            (bsValueChange)=\"compareDob($event)\">\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.dob.required || (step1Form.controls.dob.pristine && submitted2)\">Date of Birth Cannot Be Empty</p>\n\n                        </div> -->\n                      <div class=\"row\">\n                        <div class=\"col-md-6 pleft30\">\n                          <div class=\"relpos\">\n                            <input type=\"text\" formControlName=\"dob\" placeholder=\"Date Of Birth\" #dp=\"bsDatepicker\" class=\"form-control\" bsDatepicker\n                              (bsValueChange)=\"compareDob($event)\">\n                            <i style=\"font-size:12px\" class=\"fa\">&#xf073;</i>\n                          </div>\n\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.dob.required || (step1Form.controls.dob.pristine && submitted2)\">Date of Birth Cannot Be Empty</p>\n                        </div>\n                        <div class=\"col-md-6 pleft16 res30\">\n                          <p class=\"genderm top4\">Gender\n                            <a class=\"errormessage text-center\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.gender.required || (step1Form.controls.gender.pristine && submitted1)\">choose the gender</a>\n                          </p>\n\n                          <div class=\"col-md-4 col-xs-4 nomarginrw pleft0\">\n                            <p class=\"gmalef topspace\">\n                              <input name=\"gender\" type=\"radio\" id=\"test1\" value=\"Male\" formControlName=\"gender\" />\n                              <label for=\"test1\">Male</label>\n                            </p>\n                          </div>\n                          <div class=\"col-md-4 col-xs-4 nomarginrw pleft0\">\n                            <p class=\"gmalef topspace\">\n                              <input name=\"gender\" type=\"radio\" id=\"test2\" value=\"Female\" formControlName=\"gender\" />\n                              <label for=\"test2\">Female</label>\n                            </p>\n                          </div>\n                          <div class=\"col-md-4 col-xs-4 nomarginrw pleft0\">\n                            <p class=\"gmalef topspace\">\n                              <input name=\"gender\" type=\"radio\" id=\"test5\" value=\"Others\" formControlName=\"gender\" />\n                              <label for=\"test5\">Others</label>\n                            </p>\n                          </div>\n\n\n                        </div>\n                      </div>\n\n                      <!-- \n                      <div class=\"top_space\">\n                        <div class=\"col-md-12 col-xs-12 nomarginrw\">\n\n                          <p class=\"genderm text-left\">Gender</p>\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step1FormErrors.gender.required || (step1Form.controls.gender.pristine && submitted1)\">choose the gender\n                        </div>\n                        <div class=\"row genderoptions\">\n                          <div class=\"col-md-4 col-xs-4 nomarginrw\">\n                            <p class=\"gmalef\">\n                              <input name=\"gender\" type=\"radio\" id=\"test1\" value=\"Male\" formControlName=\"gender\" />\n                              <label for=\"test1\">Male</label>\n                            </p>\n                          </div>\n                          <div class=\"col-md-4 col-xs-4 nomarginrw\">\n                            <p class=\"gmalef\">\n                              <input name=\"gender\" type=\"radio\" id=\"test2\" value=\"Female\" formControlName=\"gender\" />\n                              <label for=\"test2\">Female</label>\n                            </p>\n                          </div>\n                          <div class=\"col-md-4 col-xs-4 nomarginrw\">\n                            <p class=\"gmalef\">\n                              <input name=\"gender\" type=\"radio\" id=\"test5\" value=\"Others\" formControlName=\"gender\" />\n                              <label for=\"test5\">Others</label>\n                            </p>\n                          </div>\n                        </div>\n\n                      </div> -->\n                      <div class=\"col-md-12\">\n                        <input type=\"button\" name=\"next\" class=\"next action-button\" (click)=\"firststep()\" value=\"Next\" />\n                      </div>\n\n\n                    </form>\n\n                  </fieldset>\n\n                  <!-- ****************** END OF FORM 1************ -->\n\n                  <!--  *******************FORM 2************ -->\n                  <fieldset *ngIf=\"secondreg\">\n                    <form [formGroup]=\"step2Form\">\n                      <div class=\"col-md-12 bottomspace pleft0\">\n\n                        <tag-input class=\"languagedrpdwn\" formControlName=\"language\" (onAdd)=\"onAddLanguage($event)\" onlyFromAutocomplete=\"true\"\n                          blinkIfDupe=\"true\" secondaryPlaceholder=\"Add Language\" placeholder=\"Add more\">\n                          <tag-input-dropdown [appendToBody]=\"false\" [identifyBy]=\"'langName'\" [displayBy]=\"'langName'\" [showDropdownIfEmpty]=\"false\"\n                            [autocompleteItems]=\"languageOfObjects\">\n                          </tag-input-dropdown>\n                        </tag-input>\n                        <p class=\"errormessage floatleft\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step2FormErrors.language.required || (step2Form.controls.language.pristine && submitted1)\">Language Cannot Be Empty</p>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n\n                          <input type=\"text\" name=\"city\" formControlName=\"city\" placeholder=\"City\" id=\"pac-input\" (click)=\"initmap()\" />\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step2FormErrors.city.required || (step2Form.controls.city.pristine && submitted2)\">City Cannot Be Empty</p>\n                        </div>\n\n                        <div class=\"col-md-6\">\n\n                          <ng-template #customItemTemplate let-model=\"item\" let-index=\"index\">\n                            <h5>{{ model.states }} </h5>\n                          </ng-template>\n                          <input class=\"form-control\" [typeaheadItemTemplate]=\"customItemTemplate\" formControlName=\"state\" (typeaheadOnSelect)=\"onSelectedState($event)\"\n                            placeholder=\"State\" typeaheadOptionField=\"states\" [typeahead]=\"stateList\" class=\"form-control\"\n                            (typeaheadNoResults)=\"typeaheadNoStateResults($event)\">\n                          <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step2FormErrors.state.required || (step2Form.controls.state.pristine && submitted2)\">State can't be empty</p>\n                        </div>\n\n                      </div>\n\n\n\n                      <!-- <input type=\"text\" name=\"dob\" formControlName=\"dob\"  placeholder=\"Date Of Birth\" /> -->\n                      <!-- <div class=\"col-xs-12 col-12 col-md-4 form-group\"> -->\n                      <!-- <div class=\"col-md-12 pleft0\">\n                        <tag-input formControlName=\"education\" (onAdd)=\"onAddEducation($event)\" onlyFromAutocomplete=\"true\" blinkIfDupe=\"true\" secondaryPlaceholder=\"Add Education\"\n                          placeholder=\"Add more\">\n                          <tag-input-dropdown [appendToBody]=\"false\" [identifyBy]=\"'educationName'\" [displayBy]=\"'educationName'\" [showDropdownIfEmpty]=\"false\"\n                            [autocompleteItems]=\"educationOfObjects\">\n                          </tag-input-dropdown>\n                        </tag-input>\n                        <a class=\"errormessage floatleft\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step2FormErrors.education.required || (step2Form.controls.education.pristine && submitted2)\">Education Cannot Be Empty</a>\n                      </div> -->\n\n\n\n\n                      <!-- <input type=\"text\" name=\"dob\" formControlName=\"dob\"  placeholder=\"Date Of Birth\" /> -->\n                      <!-- <div class=\"col-xs-12 col-12 col-md-4 form-group\"> -->\n                      <div class=\"col-md-12 pleft0\">\n                        <tag-input formControlName=\"education\" (onAdd)=\"onAddEducation($event)\" onlyFromAutocomplete=\"true\" blinkIfDupe=\"true\" secondaryPlaceholder=\"Add Education\"\n                          placeholder=\"Add more\" [maxItems]='5'>\n                          <tag-input-dropdown [appendToBody]=\"false\" [identifyBy]=\"'educationName'\" [displayBy]=\"'educationName'\" [showDropdownIfEmpty]=\"false\"\n                            [autocompleteItems]=\"educationOfObjects\">\n                          </tag-input-dropdown>\n                        </tag-input>\n                        <a class=\"errormessage floatleft\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step2FormErrors.education.required || (step2Form.controls.education.pristine && submitted2)\">Education Cannot Be Empty</a>\n                      </div>\n\n                      <input type=\"button\" name=\"previous\" class=\"previous action-button\" (click)=\"previousfirst()\" value=\"Previous\" />\n                      <input type=\"button\" name=\"next\" class=\"next action-button\" (click)=\"secondstep() \" value=\"Next\" />\n                    </form>\n                  </fieldset>\n                  <!-- ****************** END OF FORM 2************ -->\n                  <!--  *******************FORM 3************ -->\n\n                  <fieldset *ngIf=\"thirdreg\" class=\"pageScroll\">\n                    <form [formGroup]=\"step3Form\">\n                      <!-- <input type=\"text\" name=\"education\"  formControlName=\"education\" placeholder=\"Qualifications\" /> -->\n                      <!-- <label>Education:</label> -->\n\n                      <!-- <input type=\"text\" name=\"speciality\"  formControlName=\"speciality\" placeholder=\"Speciality\" /> -->\n                      <!-- <label>Speciality:</label> -->\n                      <tag-input formControlName=\"speciality\" (onAdd)=\"onAddSpeciality($event)\" onlyFromAutocomplete=\"true\" blinkIfDupe=\"true\"\n                        secondaryPlaceholder=\"Add Speciality\" placeholder=\"Add more\" [maxItems]='5'>\n                        <tag-input-dropdown [appendToBody]=\"false\" [identifyBy]=\"'specialityName'\" [displayBy]=\"'specialityName'\" [showDropdownIfEmpty]=\"false\"\n                          [autocompleteItems]=\"specialityOfObjects\">\n                        </tag-input-dropdown>\n                      </tag-input>\n                      <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step3FormErrors.speciality.required || (step3Form.controls.speciality.pristine && submitted3)\">Speciality Cannot Be Empty</p>\n                      <input type=\"text\" name=\"regno\" placeholder=\"Registration No.\" formControlName=\"registrationNumber\" />\n                      <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step3FormErrors.registrationNumber.required || (step3Form.controls.registrationNumber.pristine && submitted3)\">Registration Number can't be empty</p>\n                      <input type=\"text\" name=\"practisingsince\" [textMask]=\"{mask: practisingYear, guide: false}\" placeholder=\"Practising Since\"\n                        formControlName=\"practicingSince\" (blur)=\"comparePracticingYear(step3Form.value.practicingSince)\" />\n                      <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step3FormErrors.practicingSince.required || (step3Form.controls.practicingSince.pristine && submitted3)\">Practicing Since can't be empty</p>\n\n                      <ng-template #customItemTemplate1 let-model=\"item\" let-index=\"index\">\n                        <h5>{{ model.issuingAuthority }} </h5>\n                      </ng-template>\n                      <input class=\"form-control\" [typeaheadItemTemplate]=\"customItemTemplate1\" formControlName=\"issuingAuthority\" (typeaheadOnSelect)=\"onSelectedIssueAuthority($event)\"\n                        placeholder=\"Issue Authority\" typeaheadOptionField=\"issuingAuthority\" [typeahead]=\"issuingAuthorityList\"\n                        class=\"form-control\" (typeaheadNoResults)=\"typeaheadNoselectedAuthority($event)\">\n                      <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step3FormErrors.issuingAuthority.required || (step3Form.controls.issuingAuthority.pristine && submitted3)\">State can't be empty</p>\n                      <input type=\"button\" name=\"previous\" class=\"previous action-button\" (click)=\"previouslast()\" value=\"Previous\" />\n                      <input type=\"submit\" name=\"submit\" class=\"submit action-button\" value=\"Next\"  (click)=\"thirdstep()\" />\n                    </form>\n                  </fieldset>\n                  <!-- ****************** END OF FORM 3************ -->\n                  <!--  *******************FORM 4************ -->\n                  <fieldset *ngIf=\"fourthreg\" class=\"secondFieldset\">\n                    <form [formGroup]=\"step4Form\">\n                      <svg version=\"1.1\" id=\"otp\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                        viewBox=\"0 0 489.1 489.1\" style=\"enable-background:new 0 0 489.1 489.1;\" xml:space=\"preserve\">\n                        <g>\n                          <g>\n                            <path style=\"fill:#884fb3;\" d=\"M416.85,133.2h-190.1c-17.2,0-31.3,14.1-31.3,31.3v116c0,17.2,14.1,31.3,31.3,31.3h24.5v55.4\n    l57.8-55.4h107.7c17.2,0,31.3-14.1,31.3-31.3v-116C448.05,147.3,434.05,133.2,416.85,133.2z\" />\n                            <path d=\"M321.75,100c5,0,9.1-4.1,9.1-9.1V51.4c0-28.4-23.1-51.4-51.4-51.4H85.05c-28.4,0-51.4,23.1-51.4,51.4v315.8\n    c0,5,4.1,9.1,9.1,9.1s9.1-4.1,9.1-9.1V51.4c0-18.4,14.9-33.3,33.3-33.3h194.3c18.4,0,33.3,14.9,33.3,33.3v10.8H84.35\n    c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1h228.4V91C312.65,96,316.75,100,321.75,100z\" />\n                            <path d=\"M328.05,435.4v-83.2c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1v83.2c0,17.5-11.4,35.7-30.5,35.7H85.05c-18.3,0-35-17-35-35.7\n    v-14.7h221.6c5,0,9.1-4.1,9.1-9.1s-4.1-9.1-9.1-9.1H41.05c-5,0-9.1,4.1-9.1,9.1v23.7c0,28.7,24.8,53.8,53.1,53.8h194.3\n    C306.65,489.2,328.05,465.6,328.05,435.4z\" />\n                            <path d=\"M457.15,280.5v-116c0-22.2-18.1-40.3-40.4-40.3h-190c-22.2,0-40.4,18.1-40.4,40.3v116c0,22.2,18.1,40.4,40.4,40.4h15.5\n    v46.3c0,3.6,2.2,6.9,5.5,8.3c1.1,0.5,2.4,0.7,3.6,0.7c2.3,0,4.6-0.9,6.3-2.5l55.2-52.9h104.1\n    C439.05,320.8,457.15,302.7,457.15,280.5z M309.05,302.7c-2.3,0-4.6,0.9-6.3,2.5l-42.5,40.7v-34.2c0-5-4.1-9.1-9.1-9.1h-24.5\n    c-12.3,0-22.2-10-22.2-22.2v-116c0-12.3,10-22.2,22.2-22.2h190.1c12.3,0,22.2,10,22.2,22.2v116c0,12.3-10,22.2-22.2,22.2h-107.7\n    V302.7z\" />\n                            <path d=\"M321.75,217.2c-2.4,0-4.7,1-6.4,2.6c-1.7,1.7-2.6,4-2.6,6.4s1,4.7,2.7,6.4s4,2.7,6.4,2.7s4.7-1,6.4-2.7\n    c1.7-1.7,2.7-4,2.7-6.4s-1-4.7-2.7-6.4C326.45,218.2,324.15,217.2,321.75,217.2z\" />\n                            <path d=\"M355.45,217.2c-2.4,0-4.7,1-6.4,2.6c-1.7,1.7-2.6,4-2.6,6.4s1,4.7,2.6,6.4c1.7,1.7,4,2.7,6.4,2.7s4.7-1,6.4-2.7\n    c1.7-1.7,2.6-4,2.6-6.4s-1-4.7-2.6-6.4C360.25,218.2,357.85,217.2,355.45,217.2z\" />\n                            <path d=\"M288.05,217.2c-2.4,0-4.7,1-6.4,2.6c-1.7,1.7-2.6,4-2.6,6.4s1,4.7,2.6,6.4c1.7,1.7,4,2.7,6.4,2.7s4.7-1,6.4-2.7\n    c1.7-1.7,2.7-4,2.7-6.4s-1-4.7-2.7-6.4C292.75,218.2,290.45,217.2,288.05,217.2z\" />\n                          </g>\n                        </g>\n                      </svg>\n                      <p>Please enter the OTP you received</p>\n                      <input type=\"text\" name=\"otp\" placeholder=\"OTP\" formControlName=\"otp\" />\n                      <p class=\"errormessage\" [ngStyle]=\"{'font-size':'12px'}\" *ngIf=\"step4FormErrors.otp.required || (step4Form.controls.otp.pristine && submitted4)\">Otp Cannot Be Empty</p>\n                      <div class=\"row\">\n                        <div class=\"col-md-6 col-xs-6 text-right\">\n                          <input type=\"button\" name=\"previous\" class=\"previous action-button\" (click)=\"previouspagelast()\" value=\"Previous\" />\n\n                        </div>\n                        <div class=\"col-md-6 col-xs-6 text-left\">\n                          <input type=\"button\" name=\"next\" class=\"next action-button\" (click)=\"saveRegistrationForm()\" value=\"Next\" />\n                        </div>\n                      </div>\n                    </form>\n                  </fieldset>\n                  <!-- ****************** END OF FORM 4************ -->\n\n\n\n                  <div class=\"haveaccount\">\n                    <p>Already have an account ?\n                      <a href=\"\" class=\"createaccm\" [routerLink]=\"['/newlogin']\">Login Here</a>\n                    </p>\n\n                  </div>\n\n                </form>\n\n              </div>\n              <!-- Registration screen -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Registration ui -->"

/***/ }),

/***/ "../../../../../src/app/newregistration/newregistration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_docregistration_service__ = __webpack_require__("../../../../../src/app/mefyservice/docregistration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewregistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ConsoleReporter } from 'jasmine';
// import { ToastrService } from 'ngx-toastr';
var NewregistrationComponent = (function () {
    function NewregistrationComponent(formBuilder, docService, router, sharedServices) {
        this.formBuilder = formBuilder;
        this.docService = docService;
        this.router = router;
        this.sharedServices = sharedServices;
        this.submitted1 = false;
        this.submitted2 = false;
        this.submitted3 = false;
        this.submitted4 = false;
        this.firstreg = true;
        this.secondreg = true;
        this.thirdreg = true;
        this.fourthreg = true;
        /******FOR HIGHLIGHTS THE STEP****** */
        this.activeStep1 = true;
        this.activeStep2 = false;
        this.activeStep3 = false;
        this.activeStep4 = false;
        /*********** */
        this.noStateResult = false;
        this.loader = false;
        this.selectedLanguage = [];
        this.selectedEducatiom = [];
        this.selectedSpeciality = [];
        this.languageList = [];
        this.educationList = [];
        this.specialityList = [];
        this.stateList = [];
        this.issuingAuthorityList = [];
        this.languageOfObjects = [];
        this.specialityOfObjects = [];
        this.educationOfObjects = [];
        this.practisingYear = [/[1-9]/, /\d/, /\d/, /\d/]; // practising year validation
        this.mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]; // Phone number validation 
        // private toastr: ToastrService
        /***********STEP 1*************/
        this.step1FormErrors = {
            phoneNumber: {},
            name: {},
            dob: {},
            gender: {}
        };
        /***********STEP 2*************/
        this.step2FormErrors = {
            city: {},
            state: {},
            education: {},
            language: {}
        };
        /***********STEP 3*************/
        this.step3FormErrors = {
            registrationNumber: {},
            speciality: {},
            practicingSince: {},
            issuingAuthority: {}
        };
        /***********STEP 4*************/
        this.step4FormErrors = {
            otp: {}
        };
    }
    NewregistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*******STEP 1******** */
        this.step1Form = this.createStep1Form();
        this.step1Form.valueChanges.subscribe(function () {
            _this.onStep1FormValuesChanged();
        });
        /*********STEP 2********/
        this.step2Form = this.createStep2Form();
        this.step2Form.valueChanges.subscribe(function () {
            _this.onStep2FormValuesChanged();
        });
        /*********STEP 3*******/
        this.step3Form = this.createStep3Form();
        this.step3Form.valueChanges.subscribe(function () {
            _this.onStep3FormValuesChanged();
        });
        /*********STEP 4********/
        this.step4Form = this.createStep4Form();
        this.step4Form.valueChanges.subscribe(function () {
            _this.onStep4FormValuesChanged();
        });
        this.getLanguageList();
        this.getEducationList();
        this.getSpecialityList();
        this.getStateList();
        this.getIssueAuthorityList();
        // for autocomplete location
        // var input = (<HTMLInputElement>document.getElementById('pac-input'));
        // console.log(input);
        // let autocomplete = new google.maps.places.Autocomplete(input);
        // console.log(autocomplete);
        this.initmap();
    };
    NewregistrationComponent.prototype.initmap = function () {
        console.log('data');
        var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(-33.8902, 151.1759), new google.maps.LatLng(-33.8474, 151.2631));
        var input = document.getElementById('pac-input');
        var options = {
            bounds: defaultBounds,
            types: ['(cities)'],
            componentRestrictions: { country: "in" }
        };
        var autocomplete = new google.maps.places.Autocomplete(input, options);
    };
    /******************************IT CATCHES ALL CHANGES IN STEP FORM 1******************/
    NewregistrationComponent.prototype.onStep1FormValuesChanged = function () {
        for (var field in this.step1FormErrors) {
            if (!this.step1FormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.step1FormErrors[field] = {};
            // Get the control
            var control = this.step1Form.get(field);
            if (control && control.dirty && !control.valid) {
                this.step1FormErrors[field] = control.errors;
            }
        }
    };
    /******************************IT CATCHES ALL CHANGES IN STEP FORM 2******************/
    NewregistrationComponent.prototype.onStep2FormValuesChanged = function () {
        for (var field in this.step1FormErrors) {
            if (!this.step2FormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.step2FormErrors[field] = {};
            // Get the control
            var control = this.step2Form.get(field);
            if (control && control.dirty && !control.valid) {
                this.step2FormErrors[field] = control.errors;
            }
        }
    };
    /******************************IT CATCHES ALL CHANGES IN STEP FORM 2******************/
    NewregistrationComponent.prototype.onStep3FormValuesChanged = function () {
        for (var field in this.step3FormErrors) {
            if (!this.step3FormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.step3FormErrors[field] = {};
            // Get the control
            var control = this.step3Form.get(field);
            if (control && control.dirty && !control.valid) {
                this.step3FormErrors[field] = control.errors;
            }
        }
    };
    /******************************IT CATCHES ALL CHANGES IN STEP FORM 2******************/
    NewregistrationComponent.prototype.onStep4FormValuesChanged = function () {
        for (var field in this.step4FormErrors) {
            if (!this.step4FormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.step4FormErrors[field] = {};
            // Get the control
            var control = this.step2Form.get(field);
            if (control && control.dirty && !control.valid) {
                this.step4FormErrors[field] = control.errors;
            }
        }
    };
    NewregistrationComponent.prototype.createStep1Form = function () {
        return this.formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            dob: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    NewregistrationComponent.prototype.createStep2Form = function () {
        return this.formBuilder.group({
            language: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            education: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            city: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    NewregistrationComponent.prototype.createStep3Form = function () {
        return this.formBuilder.group({
            speciality: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            practicingSince: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            registrationNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            issuingAuthority: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    NewregistrationComponent.prototype.createStep4Form = function () {
        return this.formBuilder.group({
            otp: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    NewregistrationComponent.prototype.firststep = function () {
        var _this = this;
        if (this.step1Form.valid && this.error != 'Invalid DOB') {
            var data = {
                phoneNumber: this.step1Form.value.phoneNumber
            };
            this.docService.numberVerifivcation(data).subscribe(function (data) {
                console.log('numberVerfication', data);
                var result = {};
                result = data;
                _this.verficationMessage = result.message;
                console.log(_this.verficationMessage);
                if (_this.verficationMessage === "User Already Registered!Please Login") {
                    var notifydata = {
                        type: 'warning',
                        title: 'User already Registered',
                        msg: 'from this number'
                    };
                    _this.sharedServices.createNotification(notifydata);
                }
                else {
                    console.log(_this.step1Form.value);
                    _this.firstreg = false;
                    _this.secondreg = true;
                    _this.thirdreg = false;
                    /******* FOR STYLING ******/
                    _this.activeStep1 = false;
                    _this.activeStep2 = true;
                    _this.activeStep3 = false;
                    _this.activeStep4 = false;
                    /****************** */
                }
            });
        }
        else {
            var notifydata = {
                type: 'warning',
                title: 'Not Valid',
            };
            console.log('not valid', this.step1Form.value);
            this.sharedServices.createNotification(notifydata);
            this.submitted1 = true;
            this.firstreg = true;
            this.secondreg = false;
            this.thirdreg = false;
            /******* FOR STYLING ******/
            this.activeStep1 = true;
            this.activeStep2 = false;
            this.activeStep3 = false;
            this.activeStep4 = false;
            /****************** */
        }
    };
    NewregistrationComponent.prototype.secondstep = function () {
        this.selectedCity = document.getElementById('pac-input').value;
        console.log('selectedCity', this.selectedCity);
        this.step2Form.controls.city.setValue(this.selectedCity);
        if (this.step2Form.valid) {
            console.log(this.step2Form.value);
            this.firstreg = false;
            this.secondreg = false;
            this.thirdreg = true;
            /******* FOR STYLING ******/
            this.activeStep1 = false;
            this.activeStep2 = false;
            this.activeStep3 = true;
            this.activeStep4 = false;
            /****************** */
        }
        else {
            var notifydata = {
                type: 'warning',
                title: 'Not Valid',
            };
            this.sharedServices.createNotification(notifydata);
            this.submitted2 = true;
            this.firstreg = false;
            this.secondreg = true;
            this.thirdreg = false;
            /******* FOR STYLING ******/
            this.activeStep1 = false;
            this.activeStep2 = true;
            this.activeStep3 = false;
            this.activeStep4 = false;
            /****************** */
        }
    };
    NewregistrationComponent.prototype.previousfirst = function () {
        this.firstreg = true;
        this.secondreg = false;
        this.thirdreg = false;
        /******* FOR STYLING ******/
        this.activeStep1 = true;
        this.activeStep2 = false;
        this.activeStep3 = false;
        this.activeStep4 = false;
        /****************** */
    };
    NewregistrationComponent.prototype.previouslast = function () {
        this.firstreg = false;
        this.secondreg = true;
        this.thirdreg = false;
        /******* FOR STYLING ******/
        this.activeStep1 = false;
        this.activeStep2 = true;
        this.activeStep3 = false;
        this.activeStep4 = false;
        /****************** */
    };
    NewregistrationComponent.prototype.thirdstep = function () {
        if (this.comparePracticingYear(this.step3Form.value.practicingSince)) {
            if (this.step3Form.valid) {
                console.log(this.step3Form.value);
                this.preRgistration();
                // this.submitted = false;
                this.firstreg = false;
                this.secondreg = false;
                this.thirdreg = false;
                this.fourthreg = true;
                /******* FOR STYLING ******/
                this.activeStep1 = false;
                this.activeStep2 = false;
                this.activeStep3 = false;
                this.activeStep4 = true;
                /****************** */
            }
            else {
                var notifydata = {
                    type: 'warning',
                    title: 'Not Valid',
                };
                this.sharedServices.createNotification(notifydata);
                this.submitted3 = true;
                this.firstreg = false;
                this.secondreg = false;
                this.thirdreg = true;
                this.fourthreg = false;
                /******* FOR STYLING ******/
                this.activeStep1 = false;
                this.activeStep2 = false;
                this.activeStep3 = true;
                this.activeStep4 = false;
                /****************** */
            }
        }
        else {
            this.error = 'Invalid Practicing Year';
        }
    };
    NewregistrationComponent.prototype.previouspagelast = function () {
        this.firstreg = false;
        this.secondreg = false;
        this.thirdreg = true;
        this.fourthreg = false;
        /******* FOR STYLING ******/
        this.activeStep1 = true;
        this.activeStep2 = false;
        this.activeStep3 = true;
        this.activeStep4 = false;
        /****************** */
    };
    /***********************LANGUAGE ON SELECT IN STEP 2*********/
    NewregistrationComponent.prototype.onAddLanguage = function (evt) {
        // console.log(evt);
        this.selectedLanguage.push(evt.value);
        console.log('selectedLanguage', this.selectedLanguage);
    };
    /***********************EDUCATION ON SELECT IN STEP 3*********/
    NewregistrationComponent.prototype.onAddEducation = function (evt) {
        // console.log(evt);
        this.selectedEducatiom.push(evt.value);
    };
    /***********************SPECIALITY ON SELECT IN STEP 3*********/
    NewregistrationComponent.prototype.onAddSpeciality = function (evt) {
        // console.log(evt);
        this.selectedSpeciality.push(evt.value);
        // console.log('selectedSpeciality',this.selectedSpeciality)
    };
    /***********************STATE ON SELECT IN STEP 3*********/
    NewregistrationComponent.prototype.onSelectedState = function (evt) {
        console.log(evt);
        this.selectedState = evt.value;
        console.log('sate', this.selectedState);
        // console.log('selectedSpeciality',this.selectedSpeciality)
    };
    /**************IF RESULT IS NOT FOUND THEN SHOW MESSAGE */
    NewregistrationComponent.prototype.typeaheadNoStateResults = function (event) {
        this.noStateResult = event;
    };
    /***********************STATE ON SELECT IN STEP 3*********/
    NewregistrationComponent.prototype.onSelectedIssueAuthority = function (evt) {
        console.log(evt);
        this.selectedIssueAuthority = evt.value;
        console.log('sate', this.selectedIssueAuthority);
        // console.log('selectedSpeciality',this.selectedSpeciality)
    };
    /**************IF RESULT IS NOT FOUND THEN SHOW MESSAGE */
    NewregistrationComponent.prototype.typeaheadNoselectedAuthority = function (event) {
        this.noStateResult = event;
    };
    /********************GET LIST OF LANGUAGE *****************/
    NewregistrationComponent.prototype.getLanguageList = function () {
        var _this = this;
        var data = {
            language: "language"
        };
        this.docService.getLanguageList(data).subscribe(function (data) {
            console.log('languagelist', data);
            var value = {};
            value = data;
            _this.languageList = value.result.result;
            console.log(_this.languageList);
            for (var i = 0; i < _this.languageList.length; i++) {
                var lang = {
                    langName: _this.languageList[i].Language,
                };
                _this.languageOfObjects.push(lang);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /*************************END************************************ */
    /********************GET LIST OF Education *****************/
    NewregistrationComponent.prototype.getEducationList = function () {
        var _this = this;
        var data = {
            education: "education"
        };
        this.docService.getEducationList(data).subscribe(function (data) {
            var value = {};
            value = data;
            _this.educationList = value.result.result;
            console.log(_this.educationList);
            for (var i = 0; i < _this.educationList.length; i++) {
                var edu = {
                    educationName: _this.educationList[i].Degree,
                };
                _this.educationOfObjects.push(edu);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /*************************END************************************ */
    /********************GET LIST OF SPECIALITY *****************/
    NewregistrationComponent.prototype.getSpecialityList = function () {
        var _this = this;
        var data = {
            speciality: "speciality"
        };
        this.docService.getSpecialityList(data).subscribe(function (data) {
            var value = {};
            value = data;
            _this.specialityList = value.result.result;
            console.log(_this.specialityList);
            for (var i = 0; i < _this.specialityList.length; i++) {
                var spec = {
                    specialityName: _this.specialityList[i].GeneralSpeciality,
                };
                _this.specialityOfObjects.push(spec);
            }
        }, function (err) {
            console.log(err);
        });
    };
    /********************GET LIST OF STATE *****************/
    NewregistrationComponent.prototype.getStateList = function () {
        var _this = this;
        var data = {
            state: "state"
        };
        this.docService.getStateList(data).subscribe(function (data) {
            var value = {};
            value = data;
            _this.stateList = value.result.result;
            console.log(_this.stateList);
        }, function (err) {
            console.log(err);
        });
    };
    /********************GET LIST OF ISSUE AUTHORITY *****************/
    NewregistrationComponent.prototype.getIssueAuthorityList = function () {
        var _this = this;
        var data = {
            issuingAuthority: "issuingAuthority"
        };
        this.docService.getIsuueAuthorityList(data).subscribe(function (data) {
            var value = {};
            value = data;
            _this.issuingAuthorityList = value.result.result;
            console.log(_this.issuingAuthorityList);
        }, function (err) {
            console.log(err);
        });
    };
    /****************compare dob *******************/
    NewregistrationComponent.prototype.compareDob = function (dob) {
        console.log('dob', dob);
        this.error = '';
        var startdat = __WEBPACK_IMPORTED_MODULE_5_moment__();
        var startdate = __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(23, "year");
        // console.log(startdat);
        var presentDat;
        presentDat = __WEBPACK_IMPORTED_MODULE_5_moment__(startdate).utcOffset(0);
        // console.log('presentDat',presentDat);
        presentDat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 });
        presentDat.toISOString();
        presentDat.format("DD-MM-YYYY");
        // console.log('presentDat......',presentDat);
        var enddat = __WEBPACK_IMPORTED_MODULE_5_moment__();
        var enddat = __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(100, "year");
        // console.log('enddat....',enddat);
        var Dat;
        Dat = __WEBPACK_IMPORTED_MODULE_5_moment__(enddat).utcOffset(0);
        Dat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 });
        Dat.toISOString();
        Dat.format("DD-MM-YYYY");
        // console.log('Dat..',Dat);
        if ((__WEBPACK_IMPORTED_MODULE_5_moment__(dob)).isAfter(presentDat._d)) {
            this.error = 'Invalid DOB';
            var notifydata = {
                type: 'error',
                title: 'Registration',
                msg: 'Invalid DOB'
            };
            console.log('data', notifydata);
            this.sharedServices.createNotification(notifydata);
            return false;
        }
        else if ((__WEBPACK_IMPORTED_MODULE_5_moment__(dob)).isBefore(Dat._d)) {
            this.error = 'Invalid DOB';
            var notifydata = {
                type: 'error',
                title: 'Registration',
                msg: 'Invalid DOB'
            };
            console.log('data', notifydata);
            this.sharedServices.createNotification(notifydata);
            return false;
        }
        else {
            return true;
        }
    };
    NewregistrationComponent.prototype.comparePracticingYear = function (year) {
        console.log('year', year);
        if (year != null && Object.keys(year).length != 0) {
            this.error = '';
            var formattedYear;
            formattedYear = JSON.parse(year);
            var presentDat = void 0;
            presentDat = __WEBPACK_IMPORTED_MODULE_5_moment__().utcOffset(0);
            presentDat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 });
            presentDat.toISOString();
            var currentYear;
            currentYear = __WEBPACK_IMPORTED_MODULE_5_moment__(presentDat, "DD/MM/YYYY").year();
            console.log(currentYear);
            var enddat = __WEBPACK_IMPORTED_MODULE_5_moment__();
            var enddat = __WEBPACK_IMPORTED_MODULE_5_moment__().subtract(70, "year");
            var Dat = void 0;
            Dat = __WEBPACK_IMPORTED_MODULE_5_moment__(enddat).utcOffset(0);
            Dat.set({ hour: 1, minute: 0, second: 0, millisecond: 0 });
            Dat.toISOString();
            var maxYear;
            maxYear = __WEBPACK_IMPORTED_MODULE_5_moment__(Dat, "DD/MM/YYYY").year();
            console.log(maxYear);
            if ((formattedYear) > (currentYear)) {
                var notifydata = {
                    type: 'error',
                    title: 'Invalid Practicing Year',
                };
                this.sharedServices.createNotification(notifydata);
                return false;
            }
            else if ((formattedYear) < (maxYear)) {
                var notifydata = {
                    type: 'error',
                    title: 'Invalid Practicing Year',
                };
                this.sharedServices.createNotification(notifydata);
                return false;
            }
            else {
                return true;
            }
        }
    };
    /**********************************DOCTOR"S REGISTRATION PART 1 *******************/
    NewregistrationComponent.prototype.preRgistration = function () {
        var _this = this;
        var preRegistrationData = {
            phoneNumber: this.step1Form.value.phoneNumber,
            role: 'doctor'
        };
        this.docService.preRegistrationApi(preRegistrationData).subscribe(function (data) {
            console.log('data', data);
            _this.loader = false;
            var result = {};
            result = data;
            console.log(result.result.message);
            if (result.result.message == 'OTP sent to registered number') {
                var notifydata = {
                    type: 'success',
                    title: 'OTP',
                    msg: 'Sent to registered number'
                };
                console.log('data', notifydata);
                _this.sharedServices.createNotification(notifydata);
            }
            else {
                var notifydata = {
                    type: 'error',
                    title: 'Server Issue!',
                    msg: 'Something Went Wrong',
                };
                _this.sharedServices.createNotification(notifydata);
            }
        }, function (err) {
            console.log(err);
            var notifydata = {
                type: 'error',
                title: 'Server Issue!',
                msg: 'Something Went Wrong',
            };
            _this.sharedServices.createNotification(notifydata);
        });
    };
    /********************************** FINAL DOCTOR"S REGISTRATION *********/
    NewregistrationComponent.prototype.saveRegistrationForm = function () {
        var _this = this;
        console.log(this.step4Form.value);
        this.loader = true;
        if (this.step4Form.valid) {
            this.compareDob(event);
            var registrationData = {
                name: this.step1Form.value.name,
                phoneNumber: this.step1Form.value.phoneNumber,
                otp: parseInt(this.step4Form.value.otp),
                language: this.selectedLanguage,
                city: this.step2Form.value.city,
                dob: (__WEBPACK_IMPORTED_MODULE_5_moment__(this.step1Form.value.dob).format('DD-MM-YYYY')),
                education: this.selectedEducatiom,
                speciality: this.selectedSpeciality,
                practicingSince: this.step3Form.value.practicingSince,
                state: this.selectedState,
                registrationNumber: this.step3Form.value.registrationNumber,
                gender: this.step1Form.value.gender,
                issuingAuthority: this.step3Form.value.issuingAuthority,
                role: 'doctor',
                token: '12345'
            };
            console.log('registrationData', registrationData);
            this.docService.doctorRegistrationApi(registrationData).subscribe(function (value) {
                // debugger;
                console.log('result', value);
                var result = {};
                result = value;
                if (result.result.message == "  Otp verification failed") {
                    _this.loader = false;
                    var notifydata = {
                        type: 'error',
                        title: 'Otp verification failed!'
                    };
                    _this.sharedServices.createNotification(notifydata);
                }
                else {
                    console.log("userrrr", result.result.user.doctorId);
                    localStorage.setItem('doctorId', result.result.user.doctorId);
                    localStorage.setItem('userId', result.result.user.userId);
                    _this.loader = false;
                    _this.router.navigate(['/dashboard/main']);
                }
            }, function (err) {
                console.log(err);
                var notifydata = {
                    type: 'error',
                    title: 'Server Issue!',
                    msg: 'Something Went Wrong',
                };
                _this.sharedServices.createNotification(notifydata);
            });
        }
        else {
            var notifydata = {
                type: 'warning',
                title: 'Not Valid!'
            };
            this.sharedServices.createNotification(notifydata);
            this.loader = false;
            this.submitted4 = true;
        }
    };
    NewregistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newregistration',
            template: __webpack_require__("../../../../../src/app/newregistration/newregistration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/newregistration/newregistration.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_docregistration_service__["a" /* DocregistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_docregistration_service__["a" /* DocregistrationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _e || Object])
    ], NewregistrationComponent);
    return NewregistrationComponent;
    var _a, _b, _c, _e;
}());

//# sourceMappingURL=newregistration.component.js.map

/***/ }),

/***/ "../../../../../src/app/notify/notify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notify/notify.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-toasty  [position]=\"'top-right'\"></ng2-toasty>\n"

/***/ }),

/***/ "../../../../../src/app/notify/notify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__ = __webpack_require__("../../../../../src/app/mefyservice/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotifyComponent = (function () {
    function NotifyComponent(sharedService, toastyService, toastyConfig) {
        this.sharedService = sharedService;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.toastyConfig.theme = "bootstrap";
    }
    NotifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.notificationType.subscribe(function (data) {
            if (Object.keys(data).length != 0) {
                switch (data.type) {
                    case 'success':
                        _this.successNotification(data.title, data.msg);
                        break;
                    case 'warning':
                        _this.warningNotifications(data.title, data.msg);
                        break;
                    case 'error':
                        _this.errorNotifications(data.title, data.msg);
                        break;
                }
            }
        });
    };
    NotifyComponent.prototype.warningNotifications = function (title, msg) {
        this.toastyService.warning({
            title: title,
            msg: msg,
            showClose: true,
            timeout: 1200,
            theme: "bootstrap",
        });
    };
    NotifyComponent.prototype.errorNotifications = function (title, msg) {
        this.toastyService.error({
            title: title,
            msg: msg,
            showClose: true,
            timeout: 1500,
            theme: "bootstrap",
        });
    };
    NotifyComponent.prototype.successNotification = function (title, msg) {
        this.toastyService.success({
            title: title,
            msg: msg,
            showClose: true,
            timeout: 3000,
            theme: "bootstrap",
        });
    };
    NotifyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__("../../../../../src/app/notify/notify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notify/notify.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mefyservice_shared_service__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _c || Object])
    ], NotifyComponent);
    return NotifyComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=notify.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacypolicy/privacypolicy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Poppins);", ""]);

// module
exports.push([module.i, ".page-header {\n    position: relative;\n    background: linear-gradient(to right, #7645dd, #e090ec);\n    background: -o-linear-gradient(to right, #7645dd, #e090ec);\n    text-align: center;\n    margin: 0;\n}\nh1.privacyPolicy {\n    font-size: 30px;\n    color: #fff;\n    margin-bottom: 2px;\n}\n.page-header-title p {\n    font-size: 14px;\n    color: #fff;\n}\n.page-privacy-policy {\n    padding: 7em 4em;\n}\n.privacy-list ul li a {\n    font-size: 14px;\n    font-weight: 500;\n    color: #8d97ad;\n    transition: all 0.3s;\n    text-decoration: none;\n    font-family: 'Poppins', sans-serif;\n}\n.privacy-list ul li {\n    padding: 8px 0;\n}\n.privacy-list ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.privacy-content h3 {\n    font-size: 21px;\n    font-weight: 600;\n    color: #3e4555;\n    margin-bottom: 0.7em;\n    font-family: 'Poppins', sans-serif;\n    letter-spacing: 1px;\n}\n.privacy-content p {\n    font-size: 14px;\n    color: #8d97ad;\n    line-height: 1.7em;\n    margin-bottom: 1.7em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacypolicy/privacypolicy.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"page-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <!-- Page Header start -->\n        <div class=\"page-header-title\">\n          <h1 class=\"privacyPolicy\">Terms of Service</h1>\n          <p>Last updated : 23 FEBRUARY 2018</p>\n        </div>\n        <!-- Page Header start -->\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"page-privacy-policy\">\n  <div class=\"\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"privacy-sidebar\">\n          <div class=\"privacy-list\">\n            <ul>\n              <li><a href=\"#\">Eligibility & Registration</a></li>\n              <li><a href=\"#\">Nature of Service & Limitations</a></li>\n              <li><a href=\"#\">No Doctor-Patient Relationship between Us</a></li>\n              <li><a href=\"#\">Not for Medical Emergencies</a></li>\n              <li><a href=\"#\">Use of Service</a></li>\n              <li><a href=\"#\">Payment for Service</a></li>\n              <li><a href=\"#\">Your Data and Information</a></li>\n              <li><a href=\"#\">Intellectual Property Rights</a></li>\n              <li><a href=\"#\">Changes to Service</a></li>\n              <li><a href=\"#\">Third Party Links and Advertisements</a></li>\n              <li><a href=\"#\">Warranty Disclaimer</a></li>\n              <li><a href=\"#\">Limitation & Exclusion of Liability</a></li>\n\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-9\">\n        <div class=\"privacy-content\">\n          <p>These Terms of Service together with the applicable policies which are incorporated herein by way of\n            reference (“these Terms”) govern the access or use of the website www.MeFy.care (“the Website”), the\n            application known as ‘MeFy Care’ and ‘MeFy Doctor’ available for download on your communication device\n            (“Application” or “App”) and MeFy Edge Clinic together with all the content, tools, facilities and services\n            made available through the Website or the App or the Clinic (collectively “the Service”). Therefore, please\n            read these Terms very carefully.\n            By agreeing to the Terms & Conditions, you are indicating that you have read and understood these Terms and\n            agree that these Terms constitute a legal and binding agreement between you and MeFy Information Technology\n            Private Limited, Head Office: A3/203, Sunway, Megapolis, Rajiv Gandhi Infotech Park, Phase 3, Hinjewadi,\n            Pune – 411057, and Delivery Centre: Module - 104, 106 Webel IT Park, Barjora, Bankura, West Bengal -\n            722168, India, (“we”, “us” or “our”). If you do not understand the Terms or if these Terms or any part of\n            these Terms is not acceptable to you, please do not access or use the Service or any part thereof. In these\n            Terms, “you” / “yours” / “yourself” denotes the natural person who accesses/uses the Service or any part\n            thereof.\n            We reserve the right to update or modify these Terms at any time in our sole discretion without any prior\n            notice to you. If we update or modify these Terms, we will post the revised version of these Terms on the\n            Website / App and such revision shall become effective immediately on such posting. It is your\n            responsibility to review these Terms periodically for updates / modifications. Your continued access or use\n            of any of the Service after any revision becomes effective shall be deemed to constitute your acceptance\n            and agreement to be bound by the revised Terms.</p>\n\n          <h3>Eligibility & Registration</h3>\n          <p>The access/use of the Service is meant only for persons who are competent to contract as per Indian law.\n            If you are not ‘competent to contract’ as per Indian law (i.e. if you have not attained the age of majority\n            according to the law to which you are subject, if you are not of sound mind or if you are disqualified from\n            contracting by any law to which you are subject), you should not register or access/use the Service or any\n            part thereof. If the law applicable to you does not allow you to receive the Services in your territory,\n            you should not use this Service. If you are the parent/legal guardian/authorized person acting on behalf of\n            a patient, you should disclose the same to us and by registering with us or accessing / using the Service\n            on behalf of your ward, you affirm that you have the full and proper authority to represent the patient and\n            accept these Terms on his/her behalf. </p>\n          <p>To avail of the all the features of the Service, you must download the App from ‘Google Play Store’ or\n            ‘Apple Store’ (which are third party applications, the use and access of which will be subject to Google’s\n            Terms of Service or Apple’s Terms and Conditions respectively) and install the App onto your communication\n            device. To install and/or use the App, you will need a communication device that meets certain technical\n            requirements, which may change from time to time, a working internet connection and compatible software,\n            for all of which you are solely responsible.</p>\n          <p>Once you successfully install the App on your communication device, you have to provide certain\n            information about yourself as requested when you attempt to register with us and start using the Service.\n            You may be required to authenticate your identity using a one-time password (“OTP”) as a confirmation code,\n            which will be transmitted to your mobile number provided to us when you seek to register with us through\n            the short message service (“SMS”). If you cannot provide the OTP when required to do so or the\n            authentication through the OTP fails, you may not be able to register with us and/or avail of the Service.\n            However, you may still be able to access and use the Service always subject to these Terms </p>\n          <p>When you register with us and/or access or use the Service, you confirm that you have provided accurate,\n            current and complete information about yourself and that you will keep all such information current,\n            complete and accurate at all times for as long as you use the Service. All the data and information that\n            you provide or that is collected from your access/use of the Service shall be treated and protected in\n            accordance with our Privacy Policy, which is deemed a part of these Terms. </p>\n          <p>Your registration with us and/or your right to access the Service is personal to you and you may not\n            transfer this to anyone else. You may not use anyone else’s account at any time. You understand that anyone\n            with access to your communication device may use your account and therefore, you should ensure that you\n            have appropriate security measures on your communication device to prevent unauthorized use of your account\n            with the Service. You will be solely responsible for any and all activities that occur under your account\n            with us and we will not be liable for any loss or damage that may occur as a result of someone else using\n            the Service through your account with us or obtaining your personal information from your communication\n            device, either with or without your knowledge. If you become aware of any unauthorized use of your account\n            with us, please notify us by writing to hello@mefy.care with the title “Unauthorized Use of Account” and we\n            will initiate action to stop further access under the said account.</p>\n          <p>We reserve the right to terminate your registration and / or refuse to register you or to provide you with\n            access to the Service, without notice, if we have reasonable cause to believe that you are in violation of\n            or are likely to violate these Terms.\n            Grant of License & Reservation of Rights\n            We grant you a non-exclusive, personal, non-transferable, revocable, right and license, subject always to\n            these Terms to access/use the Service solely for your personal, non-commercial use.\n            Except for the limited rights and license granted to you by these Terms, all rights in the Service\n            (including all intellectual property rights therein or underlying the same, including in the Website and\n            the App) are reserved by us. </p>\n\n\n          <h3>No Doctor-Patient Relationship between Us</h3>\n          <p>We do not practice medicine and do not provide medical consultation. We merely provide a technology\n            platform and infrastructure that enables you to connect with participating medical practitioners listed on\n            the Service and to use the messaging or communication facilities of the\n            Service that are designed to enable you to communicate with others (‘Communication Tools”) to consult with\n            a medical practitioner recommended to you.</p>\n          <p>Medical practitioners listed on the Service have signed / accepted contracts with us and represented to us\n            that they are duly qualified to practice medicine in India and are enrolled on the Medical Register in one\n            of the States in India or Medical council of India. While we make reasonable enquiries to confirm the\n            veracity of this representation made to us by the medical practitioners, we shall not be responsible for\n            any misrepresentation or fraud in this regard. We do not recommend or endorse any medical practitioners or\n            make any representations or warranties with respect to the quality of the medical services a medical\n            practitioner may provide to you.</p>\n          <p>The use of the Service does not create a doctor/patient relationship between you and us. All medical\n            consultation shall be provided to you by the concerned medical practitioner directly and as such, the\n            medical practitioner you consult with shall be solely responsible for compliance with all requirements\n            applicable to his or her professional services provided to you and liable to you for all medical\n            consultation, medical advice, diagnosis or treatment recommended or provided to you. We shall not be\n            responsible or liable for any defect or deficiency in the medical consultation, diagnosis or treatment\n            recommended to you by any medical practitioner. </p>\n          <p>Any diet plans or advice or information that may be provided on or through the Service is for information\n            only, does not constitute a medical opinion or advice or a diagnosis or treatment and is not a substitute\n            for professional medical advice, diagnosis or treatment.</p>\n          <p>We are not responsible for the accuracy of the results of any test done through our ‘Anytime Health\n            Checkup Machine’ (AHCM). These tests are solely for information purposes to suggest probable risks to users\n            having a particular health issue and the results of the tests do not constitute a medical opinion or\n            diagnosis. You should consult a medical professional before acting on the results of any such tests.\n          </p>\n\n\n          <h3>Not for Medical Emergencies</h3>\n          <p>The Service we provide is NOT for medical emergencies, for life threatening conditions or for when you\n            need acute care. You should not disregard or delay to seek medical advice from your physician based on\n            anything that appears or is provided to you by or through the Service.\n            You should seek emergency help or follow-up care when recommended by a medical practitioner or when you are\n            of the opinion that such help or care is prudent in your sole opinion.\n            Limitations of Online Consultation and Informed Consent </p>\n          <p>When you seek consultation with any medical practitioner using the Communication Tools made available\n            through our Service, you understand the limitations and potential risk of online consultations, including\n            but not limited to the inability to carry out a physical examination or other extensive investigations;\n            delays or failure arising from the disruption of communication devices or Communication Tools; the\n            insufficient quality of information transmitted online, lack of access to your medical records or medical\n            history amongst others and the inherent risks of breach of privacy associated with sharing your sensitive\n            personal information or medical information through the Communication Tools. You take full responsibility\n            for ensuring that any information you submit is complete and accurate and understand that the medical\n            practitioner\n            relies solely on information provided by you. We shall not be responsible for any errors in transmission or\n            for the corruption or compromise of any information communicated over telecommunication services.\n            Therefore, before sharing any information or acting on any information or advice offered to you by or\n            through the Service, you should confirm that you have understood and accept the associated limitations and\n            risks and agree that you are not using the Service as a substitute for consultation with your primary care\n            physician.</p>\n          <p>The transmission, storage and/or retrieval of data and information and the provision of the Service\n            through the internet is subject to a variety of factors beyond our reasonable control, including any\n            interruption or unavailability of third-party telecommunication services used to host / provide the\n            Service. In no event will we be liable for any failure or interruption of the Service, including without\n            limitation those failures or interruptions resulting in part or entirely from circumstances beyond our\n            reasonable control. </p>\n          <p>Without prejudice to the above, a medical practitioner may, in his or her sole discretion and professional\n            judgment, determine that the online consultations through the Service are not appropriate for some or all\n            of your needs and, accordingly, may elect not to provide services to you through the Service.</p>\n\n\n          <h3>Use of Service</h3>\n          <p>You agree to use the Service (including the Communication Tools) only in accordance with these Terms and\n            all applicable laws. You may not use the Service in any manner that could damage, disable, overburden or\n            impair our computer systems or interfere with any other party’s use and enjoyment of any Service. You\n            should not attempt to gain unauthorized access to any Service. You may not obtain or attempt to obtain any\n            materials or information through any means not intentionally made available through the Service. </p>\n          <p>Without prejudice to the above, you agree not to host, display, upload, modify, publish, transmit, update\n            or share any information that:\n            Belongs to another person and to which you do not have any right to;\n            Is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, pedophilic, libelous,\n            invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or\n            encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;\n            Harm minors in any way;\n            Infringes any patent, trademark, copyright or other proprietary rights;\n            Violates any law for the time being in force;\n            Deceives or misleads the addressee about the origin of such messages or communicates any information which\n            is grossly offensive or menacing in nature;\n            Impersonates another person;\n            Contains software viruses or any other computer code, files or programs designed to interrupt, destroy or\n            limit the functionality of any computer resource; or\n            Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign\n            states, or public order or causes incitement to the commission of any cognizable offence or prevents\n            investigation of any offence or is insulting any other nation.</p>\n          <p>You are solely responsible for all information you transmit or share using the Communication Tools and we\n            are not obliged to monitor the same. However, we reserve the right to review any information or materials\n            you share using the Communication Tools and to remove (without notice to you) any information or materials\n            that we find, in our sole discretion, violates any applicable law or these Terms. To this extent, you\n            hereby waive doctor-patient confidentiality and expressly authorize us to review all information you\n            transmit or share using the Communication Tools. In the event of non-compliance with the Terms, we may\n            (without notice to you), immediately terminate your registration with us and/or prevent your access or use\n            of the Service.</p>\n\n          <h3>Payment for Service </h3>\n          <p>Some parts of the Service are chargeable as may be specified from time to time. We will tell you about\n            applicable charges for any paid Service and the payment terms presented to you when you use or order a paid\n            Service are deemed part of these Terms of Use. As a convenience to you, we also collect payments due to\n            medical practitioners, pharmacies and diagnostic laboratories / centers for their services that you avail\n            or book through the Service. Subject to receipt of the payments from you, we will be responsible to pass on\n            the payments due to these third parties. We reserve the right to change our charges and payment terms at\n            any time provided however that the new charges will not be applicable to orders accepted before the change\n            is notified. If you don't pay for paid Service on time, we reserve the right to suspend or cancel your\n            order for the said Service or to not provide you with the ordered Service. We shall not be responsible for\n            any Service that is not provided to you if you fail to pay the applicable charges for the same. Charges\n            paid are non-refundable except in our sole discretion.\n            We use a third party payment gateway for processing payments due to us. The processing of payments will be\n            subject to the terms, conditions and privacy policies of the payment gateway, in addition to these Terms.\n            We don’t control and are not liable for the security or performance of the payment gateway. You agree to\n            pay us, through the payment gateway, all charges at the rates then in effect for any purchase in accordance\n            with the applicable payment terms. We reserve the right to correct, or to instruct our payment gateway to\n            correct, any errors or mistakes, even if payment has already been requested or received. </p>\n\n          <h3>Your Data and Information</h3>\n          <p>When you register with us and/or access the Service, you will be required to provide certain personal data\n            and information about yourself to us. When you access or use the Service, we also collect and store certain\n            information and data about you and your access/use. Our Privacy Policy which is available here and explains\n            what personal information and data we collect and how we treat your personal data and information and\n            protect your privacy. The terms of our Privacy Policy are deemed incorporated in these Terms and forms a\n            part of these Terms. Therefore, please read our Privacy Policy carefully. When you access or use the\n            Service, you\n            consent to the collection and use of your personal data and information in accordance with our Privacy\n            Policy.</p>\n          <p>Notwithstanding anything contained in these Terms, you hereby permit us to store all information you\n            transmit or share using the Communication Tools (including your patient / medical records) and to share the\n            same with medical practitioners who you consult with to enable them to render their medical services to\n            you. You hereby permit us to transit prescriptions for medicines with pharmacies, including online medical\n            pharmacies that refer you to us, to enable them to service your order for the drugs and medicinal\n            preparations ordered by you. Subject to the above, all your medical / patient records pertaining to the\n            services you avail through the Service shall remain your property. </p>\n          <p>through the Service shall remain your property.\n            We are requesting for your email address, so we can send you invoices for the transactions you make on MeFy\n            Care and also to help you refer your friends and family and therefore earn referral bonus.</p>\n\n          <h3>Intellectual Property Rights</h3>\n          <p>We/our licensors own all copyright, trademarks, domain names and other intellectual property rights in or\n            related to the Service and all its various components. Except for your personal data and information, all\n            information, content and material contained on the Website, the App, MeFy Edge Clinic and/or Service is our\n            intellectual property. No information, content or material from any part of the Service may be copied,\n            reproduced, republished, uploaded, recorded, posted, transmitted or distributed in any way (including by\n            using any automated programs, software, or any other method of screen scraping), except for your personal\n            and non-commercial use, without our express written permission.</p>\n\n          <h3>Changes to Service</h3>\n          <p>We reserve the sole and complete discretion with respect to the operation of the Service and we may add,\n            modify, suspend or discontinue any functionality or feature of the Service or any of the services provided\n            by us without any notice to you. </p>\n\n          <h3>Third Party Links and Advertisements </h3>\n          <p>The Service may contain links to third party websites/applications and third party advertisements that are\n            not maintained or controlled by us. Third party links and advertisements are provided for your convenience\n            only and do not imply endorsement or any representation or warranty by us to content, goods or services\n            that may be offered by these third parties.\n            When you click on any of these third party links, you are leaving the Service and will be subject to the\n            terms of use and privacy and security policies of the third party site. You link to any such third party\n            website /applications entirely at your own risk.</p>\n\n          <h3>Warranty Disclaimer</h3>\n          <p>You acknowledge and agree that your use of the Service is solely at your own risk, and that you assume\n            full responsibility for all risks associated therewith. All information, products or services contained on\n            or provided through the Service are provided “as is”, without any warranty of any kind, express or implied.\n            We do not make any warranty or representation as to the quality,\n            quantity, potency, purity, standard, nature or manner of performance of any of the information, products or\n            services contained on or provided through the Service. We hereby disclaim, to the maximum extent permitted\n            by applicable law, all representations and warranties, express or implied, statutory or otherwise,\n            including but not limited to warranties of merchantability, fitness for any particular purpose, title,\n            non-infringement, reliability, accuracy, completeness, timeliness or that the availability of the Service\n            will be uninterrupted, timely, secure, or error free.</p>\n\n          <h3>Limitation & Exclusion of Liability</h3>\n          <p>To the fullest extent permitted by law, in no event will we be liable for any direct, indirect, special,\n            incidental, punitive, exemplary or consequential damages, whether or not we have been warned of the\n            possibility of such damages. In any event, our total aggregate liability to you, if any, will not exceed\n            the charges paid to us by you (if any) for the particular Service. </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/privacypolicy/privacypolicy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacypolicyComponent = (function () {
    function PrivacypolicyComponent() {
    }
    PrivacypolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacypolicyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacypolicy',
            template: __webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/privacypolicy/privacypolicy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacypolicyComponent);
    return PrivacypolicyComponent;
}());

//# sourceMappingURL=privacypolicy.component.js.map

/***/ }),

/***/ "../../../../../src/app/urlsConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export videoURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IMAGEURL; });
// export const APIURL = "http://mitapi.memeinfotech.com:5020/";
// export const APIURL = "https://api.meme.care/";
var videoURL = "https://call.dev.meme.care";
var APIURL = "http://ec2-13-232-207-92.ap-south-1.compute.amazonaws.com:5023/api/";
var IMAGEURL = "http://ec2-13-232-107-184.ap-south-1.compute.amazonaws.com:5000";
// export const APIURL = "https://test.meme.care/";
// export const videoURL="https://call.test.meme.care/";
// https://memeapi.memeinfotech.com/
// export const APIURL = "https://mitapi.memeinfotech.com:5021/";
//  new line added 
//# sourceMappingURL=urlsConfig.js.map

/***/ }),

/***/ "../../../../../src/assets/images/background.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.2d6504298f9600de5517.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map