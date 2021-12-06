import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonatorPagesComponent } from './pages/blood-donator/blood-donator-pages/blood-donator-pages.component';
import { BloodStoragePageComponent } from './pages/blood-storage/blood-storage-page/blood-storage-page.component';
import { DonationsPageComponent } from './pages/donation/donations-page/donations-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { WorkerPanelPageComponent } from './pages/worker-panel-page/worker-panel-page.component';
import { WorkerProfilePageComponent } from './pages/worker-profile-page/worker-profile-page.component';

const routes: Routes = [
  { path: 'resetpassword', component: ResetPasswordPageComponent },
  { path: 'blooddonators', component: BloodDonatorPagesComponent },
  { path: 'bloodstorage', component: BloodStoragePageComponent },
  { path: 'donations', component: DonationsPageComponent },
  { path: 'profile', component: WorkerProfilePageComponent },
  { path: 'panel', component: WorkerPanelPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
