import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodDonatorPagesComponent } from './pages/blood-donator/blood-donator-pages/blood-donator-pages.component';

const routes: Routes = [
  { path: '', component: BloodDonatorPagesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
