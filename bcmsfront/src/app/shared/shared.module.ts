import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutPageComponent } from './layout/pages/layout-page/layout-page.component';
import { BloodAmountPipe } from './pipe/blood-amount.pipe';

@NgModule({
  declarations: [
    BloodAmountPipe,
  ],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    LayoutPageComponent,
    BloodAmountPipe
  ]
})
export class SharedModule {}
