import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonatorDonationDetailsPageComponent } from '../../pages/blood-donator/blood-donator-donation-details-page/blood-donator-donation-details-page.component';
import { BloodDonatorDonationsPageComponent } from '../../pages/blood-donator/blood-donator-donations-page/blood-donator-donations-page.component';
import { BloodDonatorDetailsPagesComponent } from '../../pages/blood-donator/blood-donator-details-pages/blood-donator-details-pages.component';

const routes: Routes = [
  { path: `blooddonators/:id`, component: BloodDonatorDetailsPagesComponent },
  {
    path: `blooddonators/:userId/donations`,
    component: BloodDonatorDonationsPageComponent,
  },
  {
    path: `blooddonators/:userId/donations/:donationId/details`,
    component: BloodDonatorDonationDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodDonatorRoutingModule {}
