import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagInputModule } from 'ngx-chips';
import { TypeaheadModule } from 'ngx-bootstrap';
import { ToastyModule } from "ng2-toasty";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppointmentService } from './meme-services/appointment.service';
/********************NEW SERVICES************************** */
import { DocregistrationService } from './mefyservice/docregistration.service';
import { LoginService } from './mefyservice/login.service';
import { ClinicService } from './mefyservice/clinic.service';
import { AccounttService } from './mefyservice/accountt.service';
import { ProfileService } from './mefyservice/profile.service';
import { DashboarddService } from './mefyservice/dashboardd.service';
import { SocketsService } from './mefyservice/sockets.service';
/******************END OF NEW SERVICES************************************ */

// import { RegistrationModule } from './registration/registration.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { MemeLoginService } from './meme-services/meme-login.service';
import { ScheduleService } from './meme-services/schedule.service';
import { DashboardService } from './meme-services/dashboard.service';
import { SharedService } from './mefyservice/shared.service';
import { SocketService } from './meme-services/socket.service';
import { DoctorregisterService } from './meme-services/doctorregister.service';
import { DoctorPrescriptionService } from './meme-services/doctor-prescription.service';
import { AppointmentsService } from './mefyservice/appointments.service';
import { AccountService } from './meme-services/account.service';

import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BillService } from './meme-services/bill.service';
import { NewloginComponent } from './newlogin/newlogin.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { NotifyComponent } from './notify/notify.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

// import { ManageaccountComponent } from './dashboard/manageaccount/manageaccount.component';


const approutes: Routes = [
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
    loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard]
  },

  {
    path: 'newlogin',
    component: NewloginComponent
  },
  {
    path: 'register',
    component: NewregistrationComponent
  },
  { path: "privacy", component: PrivacypolicyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    NewloginComponent,
    NewregistrationComponent,
    NotifyComponent,
    PrivacypolicyComponent,

    // ManageaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    QRCodeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(approutes),   //,{useHash: true}
    TextMaskModule,
    TagInputModule,
    BsDatepickerModule.forRoot(),
    TypeaheadModule.forRoot(),
    ToastyModule.forRoot(),

  ],

  exports: [],
  providers: [
    MemeLoginService,
    ScheduleService,
    DashboardService,
    SharedService,
    SocketService,
    DoctorregisterService,
    DoctorPrescriptionService,
    AppointmentService,
    AccountService,
    BillService,
    ProfileService,
    // ProfilenavService,
    //new services
    DocregistrationService,
    LoginService,
    ClinicService,
    AccounttService,
    DashboarddService,
    AppointmentsService,
    SocketsService,
    /**************/
    HttpClientModule,
    // ManageaccountComponent,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }