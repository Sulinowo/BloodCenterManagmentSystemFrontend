import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsPageComponent } from './pages/informations-page/informations-page.component';
import { InformationsRoutingModule } from './informations-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrationHoursComponent } from './components/registration-hours/registration-hours.component';
import { CovidInformationComponent } from './components/covid-information/covid-information.component';
import { TripsComponent } from './components/trips/trips.component';

@NgModule({
  declarations: [
    InformationsPageComponent,
    RegistrationHoursComponent,
    CovidInformationComponent,
    TripsComponent,
  ],
  imports: [CommonModule, InformationsRoutingModule, FlexLayoutModule],
})
export class InformationsModule {}
