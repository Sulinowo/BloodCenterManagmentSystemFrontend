import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationProcessComponent } from './components/donation-process/donation-process.component';
import { DonationProcessPageComponent } from './pages/donation-process-page/donation-process-page.component';
import { DonationProcessRoutingModule } from './donation-process-routing.module';



@NgModule({
  declarations: [
    DonationProcessComponent,
    DonationProcessPageComponent
  ],
  imports: [
    CommonModule,
    DonationProcessRoutingModule
  ]
})
export class DonationProcessModule { }
