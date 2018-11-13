import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';


import { RegistrationModule } from './registration/registration.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { MemeLoginService } from './meme-services/meme-login.service';
import { ScheduleService } from './meme-services/schedule.service';
import { DashboardService } from './meme-services/dashboard.service';
import { SharedService } from './meme-services/shared.service';
import { SocketService } from './meme-services/socket.service';
import { DoctorregisterService } from './meme-services/doctorregister.service';
import { DoctorPrescriptionService } from './meme-services/doctor-prescription.service';
import { AppointmentService } from './meme-services/appointment.service';
import { AccountService } from './meme-services/account.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './auth.guard';
import { BillService } from './meme-services/bill.service';
import { NewloginComponent } from './newlogin/newlogin.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NewregistrationComponent } from './newregistration/newregistration.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ManageaccountComponent } from './dashboard/manageaccount/manageaccount.component';


const approutes: Routes = [
  {
    path: 'register',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'newlogin',
    component: NewloginComponent
  },
  {
    path: 'newregister',
    component: NewregistrationComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewloginComponent,
    NewregistrationComponent,
 
    // ManageaccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    QRCodeModule,
    // BrowserAnimationsModule,
    RouterModule.forRoot(approutes),   //,{useHash: true}
    TextMaskModule
   
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
    // ManageaccountComponent,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
