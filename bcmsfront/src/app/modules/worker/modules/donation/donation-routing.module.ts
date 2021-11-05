import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BloodDonatorDonationDetailsPageComponent } from '../../pages/blood-donator/blood-donator-donation-details-page/blood-donator-donation-details-page.component';
import { DonationPageComponent } from '../../pages/donation/donation-page/donation-page.component';
import { DonationQueueRegisteredComponent } from '../../pages/donation/donation-queue-registered-page/donation-queue-registered.component';
import { DonationStatusPageComponent } from '../../pages/donation/donation-status-page/donation-status-page.component';
import { DonationsPageComponent } from '../../pages/donation/donations-page/donations-page.component';
import { DonationsQueueBloodExaminedComponent } from '../../pages/donation/donations-queue-blood-examined/donations-queue-blood-examined.component';
import { DonationsQueueQualifiedPageComponent } from '../../pages/donation/donations-queue-qualified-page/donations-queue-qualified-page.component';
import { RegisteredDonationPageComponent } from '../../pages/donation/registered-donation-page/registered-donation-page.component';
import { ExaminationsPageComponent } from '../../pages/examination/examinations-page/examinations-page.component';

const routes: Routes = [
  { 
    path: `donations`, 
    component: DonationsPageComponent
  },
  { 
    path: `donations/:donationId`, 
    component: DonationPageComponent
  },
  { 
    path: `donations/:donationId/details`, 
    component: BloodDonatorDonationDetailsPageComponent
  },
  { 
    path: `queue/registered`, 
    component: DonationQueueRegisteredComponent
  },
  { 
    path: `queue/registered/:donationId`, 
    component: RegisteredDonationPageComponent
  },
  { 
    path: `queue/registered/:donationId/addexamination`, 
    component: ExaminationsPageComponent
  },
  { 
    path: `queue/bloodexamined`, 
    component: DonationsQueueBloodExaminedComponent
  },
  { 
    path: `queue/qualified`, 
    component: DonationsQueueQualifiedPageComponent
  },
  { 
    path: `donation/:donationId/changestatus`, 
    component: DonationStatusPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationsRoutingModule { }
