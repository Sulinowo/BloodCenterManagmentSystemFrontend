import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutPageComponent } from './layout/pages/layout-page/layout-page.component';
import { BloodAmountPipe } from './pipe/blood-amount.pipe';
import { DonationsStagePipe } from './pipe/donations-stage.pipe';

@NgModule({
  declarations: [BloodAmountPipe, DonationsStagePipe],
  imports: [CommonModule, LayoutModule],
  exports: [LayoutPageComponent, BloodAmountPipe, DonationsStagePipe],
})
export class SharedModule {}
