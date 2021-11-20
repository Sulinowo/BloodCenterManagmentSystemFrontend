import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodDonatorPagesComponent } from '../../pages/blood-donator/blood-donator-pages/blood-donator-pages.component';
import { AddBloodDonatorComponent } from '../../components/blood-donator/add-blood-donator/add-blood-donator.component';
import { ShowBloodDonatorsComponent } from '../../components/blood-donator/show-blood-donators/show-blood-donators.component';
import { BloodDonatorDetailsPagesComponent } from '../../pages/blood-donator/blood-donator-details-pages/blood-donator-details-pages.component';
import { BloodDonatorDonationsPageComponent } from '../../pages/blood-donator/blood-donator-donations-page/blood-donator-donations-page.component';
import { SearchBloodDonatorComponent } from '../../components/blood-donator/search-blood-donator/search-blood-donator.component';
import { ShowDonationsBloodDonatorComponent } from '../../components/blood-donator/show-donations-blood-donator/show-donations-blood-donator.component';
import { EditAccountBloodDonatorComponent } from '../../components/blood-donator/edit-account-blood-donator/edit-account-blood-donator.component';
import { UserDetailsBloodDonatorComponent } from '../../components/blood-donator/user-details-blood-donator/user-details-blood-donator.component';
import { BloodDonatorDonationDetailsPageComponent } from '../../pages/blood-donator/blood-donator-donation-details-page/blood-donator-donation-details-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { BloodDonatorRoutingModule } from './blood-donator-routing.module';
import { DonationDetailsBloodDonatorComponent } from '../../components/blood-donator/donation-details-blood-donator/donation-details-blood-donator.component';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_ELEMENTS = [
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    BloodDonatorPagesComponent, 
    AddBloodDonatorComponent, 
    ShowBloodDonatorsComponent, 
    BloodDonatorDetailsPagesComponent,
    BloodDonatorDonationsPageComponent,
    SearchBloodDonatorComponent,
    ShowDonationsBloodDonatorComponent,
    EditAccountBloodDonatorComponent,
    UserDetailsBloodDonatorComponent,
    BloodDonatorDonationDetailsPageComponent,
    DonationDetailsBloodDonatorComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_ELEMENTS,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    BloodDonatorRoutingModule
  ],
  exports: [
    BloodDonatorPagesComponent, 
    AddBloodDonatorComponent, 
    ShowBloodDonatorsComponent, 
    BloodDonatorDetailsPagesComponent,
    BloodDonatorDonationsPageComponent,
    SearchBloodDonatorComponent,
    ShowDonationsBloodDonatorComponent,
    EditAccountBloodDonatorComponent,
    UserDetailsBloodDonatorComponent,
    BloodDonatorDonationDetailsPageComponent,
    DonationDetailsBloodDonatorComponent,
  ],
})
export class BloodDonatorModule { }
