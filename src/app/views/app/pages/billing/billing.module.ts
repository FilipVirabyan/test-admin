import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './pages/billing/billing.component';
import { BillingRoutingModule } from './billing-routing.module';



@NgModule({
  declarations: [
    BillingComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
