import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExaminationsPageComponent } from './pages/examination/examinations-page/examinations-page.component';
import { DonationPageComponent } from './pages/donation/donation-page/donation-page.component';
import { AddExaminationComponent } from './components/examinations/add-examination/add-examination.component';
import { UpdateExaminationComponent } from './components/examinations/update-examination/update-examination.component';
import { AddDonationComponent } from './components/donation/add-donation/add-donation.component';
import { ShowAllDonationsComponent } from './components/donation/show-all-donations/show-all-donations.component';
import { ShowDonationComponent } from './components/donation/show-donation/show-donation.component';
import { ShowDonationsQueueComponent } from './components/donation/show-donations-queue/show-donations-queue.component';
import { MatTableModule } from '@angular/material/table';
import { WorkerRoutingModule } from './worker-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/shared.module';
import { BloodDonatorModule } from './modules/blood-donator/blood-donator.module';
import { BloodStorageModule } from './modules/blood-storage/blood-storage.module';

const MATERIAL_ELEMENTS = [
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    ExaminationsPageComponent,
    DonationPageComponent,
    AddExaminationComponent,
    UpdateExaminationComponent,
    AddDonationComponent,
    ShowAllDonationsComponent,
    ShowDonationComponent,
    ShowDonationsQueueComponent,
  ],
  imports: [
    CommonModule, 
    WorkerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    MATERIAL_ELEMENTS,
    BloodDonatorModule,
    BloodStorageModule,
  ],
})
export class WorkerModule {}
