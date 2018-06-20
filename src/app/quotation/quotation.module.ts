import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotationRoutingModule } from './quotation-routing.module';
import { QuotationComponent } from './quotation/quotation.component';

@NgModule({
  imports: [
    CommonModule,
    QuotationRoutingModule
  ],
  declarations: [QuotationComponent]
})
export class QuotationModule { }
