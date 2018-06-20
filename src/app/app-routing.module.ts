import { WorkComponent } from './work/work/work.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { QuotationComponent } from './quotation/quotation/quotation.component';
import { Layout3Component } from './layout3/layout3/layout3.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'work', component: WorkComponent },
  { path: 'quotation', component: QuotationComponent },
  { path: 'layout3/:id', component: Layout3Component },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: false,
    enableTracing: true // 開啟路由追蹤
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
