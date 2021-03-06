import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DonationDetailsPageComponent } from './pages/donation-details-page/donation-details-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';

const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'resetpassword', component: ResetPasswordPageComponent },
  { path: ':donationId', component: DonationDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonatorRoutingModule {}
