import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { LayoutPageComponent } from './layout/pages/layout-page/layout-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
  ],
  exports: [
    LayoutPageComponent
  ]
})
export class SharedModule { }
