import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Layout3RoutingModule } from './layout3-routing.module';
import { Layout3Component } from './layout3/layout3.component';

@NgModule({
  imports: [
    CommonModule,
    Layout3RoutingModule
  ],
  declarations: [Layout3Component]
})
export class Layout3Module { }
