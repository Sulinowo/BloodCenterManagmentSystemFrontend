import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonatorPagesComponent } from './pages/blood-donator/blood-donator-pages/blood-donator-pages.component';
import { BloodStoragePageComponent } from './pages/blood-storage/blood-storage-page/blood-storage-page.component';

const routes: Routes = [
  { path: 'blooddonator', component: BloodDonatorPagesComponent },
  { path: 'bloodstorage', component: BloodStoragePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
