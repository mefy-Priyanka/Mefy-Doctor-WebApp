import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { Ng2CompleterModule } from "ng2-completer";
import { TextMaskModule } from 'angular2-text-mask';
import { BsDatepickerModule } from "ngx-bootstrap";
import { RegistrationComponent } from './registration.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
const routes: Routes = [
  {
      path     : '',
      component: RegistrationComponent,
      children : [
        { path: '', redirectTo: 'step1', pathMatch: 'full' },
        { path: 'step1', component: Step1Component },
        { path: 'step2', component: Step2Component },
        { path: 'step3', component: Step3Component },
        { path: 'step4', component: Step4Component },
        { path: 'step5', component: Step5Component }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    BsDatepickerModule.forRoot(),
    Ng2CompleterModule,
    TextMaskModule
  ],
  declarations: [
    RegistrationComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component
  ]
})
export class RegistrationModule { }
