import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodStoragePageComponent } from '../../pages/blood-storage/blood-storage-page/blood-storage-page.component';
import { AddBloodUnitComponent } from '../../components/blood-storage/add-blood-unit/add-blood-unit.component';
import { ShowBloodUnitsComponent } from '../../components/blood-storage/show-blood-units/show-blood-units.component';
import { BloodUnitForeignComponent } from '../../components/blood-storage/blood-unit-foreign/blood-unit-foreign.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { BloodStorageRoutingModule } from './blood-storage-routing.module';
import { BloodStorageAddForeignBloodPageComponent } from '../../pages/blood-storage/blood-storage-add-foreign-blood-page/blood-storage-add-foreign-blood-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BloodStorageEndDonationPageComponent } from '../../pages/blood-storage/blood-storage-end-donation-page/blood-storage-end-donation-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const MATERIAL_ELEMENTS = [
  MatTableModule,
  MatIconModule,
  MatTabsModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatPaginatorModule
];

@NgModule({
  declarations: [
    BloodStoragePageComponent, 
    AddBloodUnitComponent, 
    ShowBloodUnitsComponent, 
    BloodUnitForeignComponent,
    BloodStorageAddForeignBloodPageComponent,
    BloodStorageEndDonationPageComponent,
  ],
  imports: [
    CommonModule,
    MATERIAL_ELEMENTS,
    SharedModule,
    BloodStorageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BloodStoragePageComponent, 
    AddBloodUnitComponent, 
    ShowBloodUnitsComponent, 
    BloodUnitForeignComponent,
    BloodStorageAddForeignBloodPageComponent,
    BloodStorageEndDonationPageComponent,
  ],
})
export class BloodStorageModule { }
