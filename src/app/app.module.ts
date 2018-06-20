import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { WorkModule } from './work/work.module';
import { QuotationModule } from './quotation/quotation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    WorkModule,
    QuotationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
