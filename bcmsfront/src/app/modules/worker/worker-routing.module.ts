import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonatorPagesComponent } from './pages/blood-donator/blood-donator-pages/blood-donator-pages.component';
import { BloodStoragePageComponent } from './pages/blood-storage/blood-storage-page/blood-storage-page.component';
import { DonationsPageComponent } from './pages/donation/donations-page/donations-page.component';
import { WorkerProfilePageComponent } from './pages/worker-profile-page/worker-profile-page.component';

const routes: Routes = [
  { path: 'blooddonators', component: BloodDonatorPagesComponent },
  { path: 'bloodstorage', component: BloodStoragePageComponent },
  { path: 'donations', component: DonationsPageComponent },
  { path: 'profile', component: WorkerProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
