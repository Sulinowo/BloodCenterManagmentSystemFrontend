import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutPageComponent } from './layout/pages/layout-page/layout-page.component';
import { BloodAmountPipe } from './pipe/blood-amount.pipe';
import { DonationsStagePipe } from './pipe/donations-stage.pipe';
import { BloodStoragePipe } from './pipe/blood-storage.pipe';
import { BloodTypeNamePipePipe } from './pipe/blood-type-name-pipe.pipe';

@NgModule({
  declarations: [BloodAmountPipe, DonationsStagePipe, BloodStoragePipe, BloodTypeNamePipePipe],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutPageComponent, BloodAmountPipe, DonationsStagePipe, BloodStoragePipe, BloodTypeNamePipePipe],
})
export class SharedModule {}
