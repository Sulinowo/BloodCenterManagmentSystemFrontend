import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodDonatorPagesComponent } from './pages/blood-donator-pages/blood-donator-pages.component';
import { BloodStoragePageComponent } from './pages/blood-storage-page/blood-storage-page.component';
import { ExaminationsPageComponent } from './pages/examinations-page/examinations-page.component';
import { DonationPageComponent } from './pages/donation-page/donation-page.component';
import { AddBloodDonatorComponent } from './components/blood-donator/add-blood-donator/add-blood-donator.component';
import { ShowBloodDonatorsComponent } from './components/blood-donator/show-blood-donators/show-blood-donators.component';
import { AddBloodUnitComponent } from './components/blood-storage/add-blood-unit/add-blood-unit.component';
import { ShowBloodUnitsComponent } from './components/blood-storage/show-blood-units/show-blood-units.component';
import { BloodUnitForeignComponent } from './components/blood-storage/blood-unit-foreign/blood-unit-foreign.component';
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
import { SearchBloodDonatorComponent } from './components/blood-donator/search-blood-donator/search-blood-donator.component';
import { MatButtonModule } from '@angular/material/button';
import { BloodDonatorDetailsPagesComponent } from './pages/blood-donator-details-pages/blood-donator-details-pages.component';
import { BloodDonatorDonationsPageComponent } from './pages/blood-donator-donations-page/blood-donator-donations-page.component';
import { ShowDonationsBloodDonatorComponent } from './components/blood-donator/show-donations-blood-donator/show-donations-blood-donator.component';

@NgModule({
  declarations: [BloodDonatorPagesComponent, BloodStoragePageComponent, ExaminationsPageComponent, DonationPageComponent, AddBloodDonatorComponent,ShowBloodDonatorsComponent
    ,AddBloodUnitComponent, ShowBloodUnitsComponent, BloodUnitForeignComponent, AddExaminationComponent, UpdateExaminationComponent,AddDonationComponent, 
    ShowAllDonationsComponent, ShowDonationComponent, ShowDonationsQueueComponent, SearchBloodDonatorComponent, BloodDonatorDetailsPagesComponent, BloodDonatorDonationsPageComponent, ShowDonationsBloodDonatorComponent ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    WorkerRoutingModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class WorkerModule { }
