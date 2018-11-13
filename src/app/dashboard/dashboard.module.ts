import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes, RouterLink } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchHealthRecordPipe } from "../search-health-record.pipe";
import { FilterPipeModule } from "ngx-filter-pipe";
import { Ng2CompleterModule } from "ng2-completer";
import { ConsultModule } from "./consult/consult.module";
import { TextMaskModule } from "angular2-text-mask";
import { BsDatepickerModule } from "ngx-bootstrap";
import { ToastyModule } from "ng2-toasty";
import { DashboardComponent } from "./dashboard.component";
import { MainComponent } from "./main/main.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { RightsidenavComponent } from "./rightsidenav/rightsidenav.component";
import { ManageClinicComponent } from "./manage-clinic/manage-clinic.component";
import { ProfileComponent } from "./profile/profile.component";
import { ManageaccountComponent } from "./manageaccount/manageaccount.component";
import { RaiseBillComponent } from "./raise-bill/raise-bill.component";
import { AppointmentnewComponent } from "./appointmentnew/appointmentnew.component";
import { NotificationComponent } from "./notification/notification.component";
import { TimepickerModule } from 'ngx-bootstrap';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "main", pathMatch: "full" },
      { path: "main", component: MainComponent },
      { path: "clinic", component: ManageClinicComponent },
      { path: "profile", component: ProfileComponent },
      { path: "account", component: ManageaccountComponent },
      { path: "raisebill", component: RaiseBillComponent },
      {
        path: "consultnew",
        loadChildren: "./consult/consult.module#ConsultModule"
      },
      { path: "appnew", component: AppointmentnewComponent },

    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    FilterPipeModule,
    Ng2CompleterModule,
    TextMaskModule,
    BsDatepickerModule.forRoot(),
    ToastyModule.forRoot(),
    TimepickerModule.forRoot(),

  ],
  declarations: [
    SearchHealthRecordPipe,
    DashboardComponent,
    MainComponent,
    RightsidenavComponent,
    NavbarComponent,
    SidenavComponent,
    ManageClinicComponent,
    ProfileComponent,
    ManageaccountComponent,
    RaiseBillComponent,
    AppointmentnewComponent,
    NotificationComponent
  ]
})
export class DashboardModule { }
