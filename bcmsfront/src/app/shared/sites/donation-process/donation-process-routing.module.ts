import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationProcessPageComponent } from './pages/donation-process-page/donation-process-page.component';

const routes: Routes = [{ path: '', component: DonationProcessPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationProcessRoutingModule {}
