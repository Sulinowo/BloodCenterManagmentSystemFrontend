import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonatorDetailsPagesComponent } from './pages/blood-donator-details-pages/blood-donator-details-pages.component';
import { BloodDonatorDonationDetailsPageComponent } from './pages/blood-donator-donation-details-page/blood-donator-donation-details-page.component';
import { BloodDonatorDonationsPageComponent } from './pages/blood-donator-donations-page/blood-donator-donations-page.component';
import { BloodDonatorPagesComponent } from './pages/blood-donator-pages/blood-donator-pages.component';

const routes: Routes = [
  { path: '', component: BloodDonatorPagesComponent },
  { path: `:id`, component: BloodDonatorDetailsPagesComponent },
  {
    path: `:userId/donations`,
    component: BloodDonatorDonationsPageComponent,
  },
  {
    path: `:id/details`,
    component: BloodDonatorDonationDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
