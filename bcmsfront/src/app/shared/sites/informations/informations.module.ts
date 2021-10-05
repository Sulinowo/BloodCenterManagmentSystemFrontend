import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsComponent } from './components/informations/informations.component';
import { InformationsPageComponent } from './pages/informations-page/informations-page.component';
import { InformationsRoutingModule } from './informations-routing.module';



@NgModule({
  declarations: [
    InformationsComponent,
    InformationsPageComponent
  ],
  imports: [
    CommonModule,
    InformationsRoutingModule
  ]
})
export class InformationsModule { }
