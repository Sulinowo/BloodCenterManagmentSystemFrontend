import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodStorageAddForeignBloodPageComponent } from '../../pages/blood-storage/blood-storage-add-foreign-blood-page/blood-storage-add-foreign-blood-page.component';
import { BloodStorageEndDonationPageComponent } from '../../pages/blood-storage/blood-storage-end-donation-page/blood-storage-end-donation-page.component';
import { BloodStoragePageComponent } from '../../pages/blood-storage/blood-storage-page/blood-storage-page.component';

const routes: Routes = [
  {
    path: `bloodstorage`,
    component: BloodStoragePageComponent,
  },
  {
    path: `bloodstorage/addforeignbloodunit`,
    component: BloodStorageAddForeignBloodPageComponent,
  },
  {
    path: `bloodstorage/:donationId/enddonation`,
    component: BloodStorageEndDonationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloodStorageRoutingModule {}
