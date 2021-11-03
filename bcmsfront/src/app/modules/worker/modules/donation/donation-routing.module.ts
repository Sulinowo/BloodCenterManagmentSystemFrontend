import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DonationPageComponent } from '../../pages/donation/donation-page/donation-page.component';
import { DonationsPageComponent } from '../../pages/donation/donations-page/donations-page.component';

const routes: Routes = [
  { 
    path: `donations`, 
    component: DonationsPageComponent
  },
  { 
    path: `donations/:donationId`, 
    component: DonationPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationsRoutingModule { }
