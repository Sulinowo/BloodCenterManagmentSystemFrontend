import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDonationComponent } from '../../components/donation/add-donation/add-donation.component';
import { ShowAllDonationsComponent } from '../../components/donation/show-all-donations/show-all-donations.component';
import { ShowDonationComponent } from '../../components/donation/show-donation/show-donation.component';
import { DonationsPageComponent } from '../../pages/donation/donations-page/donations-page.component';
import { DonationsRoutingModule } from './donation-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DonationPageComponent } from '../../pages/donation/donation-page/donation-page.component';
import { DonationQueueRegisteredComponent } from '../../pages/donation/donation-queue-registered-page/donation-queue-registered.component';
import { DonationsQueueQualifiedPageComponent } from '../../pages/donation/donations-queue-qualified-page/donations-queue-qualified-page.component';
import { DonationsQueueBloodExaminedComponent } from '../../pages/donation/donations-queue-blood-examined/donations-queue-blood-examined.component';
import { StatusDonationComponent } from '../../components/donation/status-donation/status-donation.component';
import { DonationStatusPageComponent } from '../../pages/donation/donation-status-page/donation-status-page.component';
import { ShowDonationsQueueComponent } from '../../components/donation/show-donations-queue/show-donations-queue.component';
import { RegisteredDonationPageComponent } from '../../pages/donation/registered-donation-page/registered-donation-page.component';
import { DonationRegisteredComponent } from '../../components/donation/donation-registered/donation-registered.component';
import { DonationQualifiedComponent } from '../../components/donation/donation-qualified/donation-qualified.component';
import { DonationChangeStatusPageComponent } from '../../pages/donation/donation-change-status-page/donation-change-status-page.component';
import { QualifiedDonationPageComponent } from '../../pages/donation/qualified-donation-page/qualified-donation-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSortModule } from '@angular/material/sort';

const MATERIAL_ELEMENTS = [
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatDialogModule,
  MatCardModule,
  MatSortModule,
];

@NgModule({
  declarations: [
    AddDonationComponent,
    ShowAllDonationsComponent,
    ShowDonationComponent,
    ShowDonationsQueueComponent,
    DonationsPageComponent,
    DonationPageComponent,
    DonationQueueRegisteredComponent,
    DonationsQueueQualifiedPageComponent,
    DonationsQueueBloodExaminedComponent,
    StatusDonationComponent,
    DonationStatusPageComponent,
    RegisteredDonationPageComponent,
    DonationRegisteredComponent,
    DonationQualifiedComponent,
    DonationChangeStatusPageComponent,
    QualifiedDonationPageComponent,
  ],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MATERIAL_ELEMENTS,
    SharedModule,
  ],
  exports: [
    AddDonationComponent,
    ShowAllDonationsComponent,
    ShowDonationComponent,
    ShowDonationsQueueComponent,
    DonationsPageComponent,
    DonationPageComponent,
    DonationQueueRegisteredComponent,
    DonationsQueueQualifiedPageComponent,
    DonationsQueueBloodExaminedComponent,
    StatusDonationComponent,
    DonationStatusPageComponent,
    RegisteredDonationPageComponent,
    DonationRegisteredComponent,
    DonationQualifiedComponent,
    DonationChangeStatusPageComponent,
    QualifiedDonationPageComponent,
  ],
})
export class DonationModule {}
