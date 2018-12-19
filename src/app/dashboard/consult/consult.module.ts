import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from "ngx-filter-pipe";
import { TextMaskModule } from "angular2-text-mask";

import { VideoComponent } from './video/video.component';
import { ConsultComponent } from './consult.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { BillsComponent } from './bills/bills.component';
import { DiagnosisFormComponent } from './diagnosis-form/diagnosis-form.component';
import { MedicineComponent } from './medicine/medicine.component';
import { SuggestComponent } from './suggest/suggest.component';
import { InstructionComponent } from './instruction/instruction.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FollowUpComponent } from './follow-up/follow-up.component';
import { Ng2CompleterModule } from "ng2-completer";

const routes: Routes = [
  {
    path: '',
    component: ConsultComponent,
    children: [
      { path: '', redirectTo: 'diagnosis', pathMatch: 'full' },
      { path: 'diagnosis', component: DiagnosisComponent },
      { path: 'bill', component: BillsComponent },
      { path: 'diagnosisform', component: DiagnosisFormComponent },
      { path: 'diagnosisform/:id', component: DiagnosisFormComponent },
      { path: 'medicare', component: MedicineComponent },
      { path: 'medicare/:id', component: MedicineComponent },
      { path: 'suggest', component: SuggestComponent },
      { path: 'suggest/:id', component: SuggestComponent },
      { path: 'instruction', component: InstructionComponent },
      { path: 'instruction/:id', component: InstructionComponent },      
      { path: 'lifestyle', component: LifestyleComponent },
      { path: 'lifestyle/:id', component: LifestyleComponent },
      { path: 'followup', component: FollowUpComponent },
      { path: 'followup/:id', component: FollowUpComponent },
      { path: 'lifestyle/:id', component: LifestyleComponent }
    ]
  }
]
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    RouterModule.forChild(routes),
    FilterPipeModule,
    TextMaskModule,
    FilterPipeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [ConsultComponent,VideoComponent,DiagnosisComponent, BillsComponent, DiagnosisFormComponent, MedicineComponent, SuggestComponent, InstructionComponent, LifestyleComponent, FollowUpComponent]
})
export class ConsultModule { }
