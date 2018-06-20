import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work/work.component';

@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule
  ],
  declarations: [WorkComponent]
})
export class WorkModule { }
