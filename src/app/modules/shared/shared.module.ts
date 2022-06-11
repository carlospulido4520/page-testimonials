import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SelectFormComponent } from './components/select-form/select-form.component';


// Angular Material
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SelectFormComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

    MatSelectModule
  ],
  exports: [
    SelectFormComponent
  ]
})
export class SharedModule { }
