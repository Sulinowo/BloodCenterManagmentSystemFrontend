import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodNeededComponent } from './components/blood-needed/blood-needed.component';
import { BloodNeededPageComponent } from './pages/blood-needed-page/blood-needed-page.component';
import { BloodNeededRouting } from './blood-needed-routing.module';



@NgModule({
  declarations: [
    BloodNeededComponent,
    BloodNeededPageComponent
  ],
  imports: [
    CommonModule,
    BloodNeededRouting
  ]
})
export class BloodNeededModule { }
