import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DonationDetailsComponent } from './components/donation-details/donation-details.component';
import { DonationDetailsPageComponent } from './pages/donation-details-page/donation-details-page.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { UserDonationsComponent } from './components/user-donations/user-donations.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DonatorRoutingModule } from './donator-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    ProfilePageComponent,
    DonationDetailsPageComponent,
    DonationDetailsComponent,
    EditAccountComponent,
    UserDataComponent,
    UserDonationsComponent,
  ],
  imports: [
    CommonModule,
    DonatorRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
    SharedModule,
  ],
})
export class DonatorModule {}
