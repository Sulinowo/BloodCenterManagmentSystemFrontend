import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloodNeededComponent } from './components/blood-needed/blood-needed.component';
import { BloodNeededPageComponent } from './pages/blood-needed-page/blood-needed-page.component';
import { BloodNeededRouting } from './blood-needed-routing.module';
import { SharedModule } from '../../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BloodNeededComponent, BloodNeededPageComponent],
  imports: [CommonModule, BloodNeededRouting, SharedModule, FlexLayoutModule],
})
export class BloodNeededModule {}
