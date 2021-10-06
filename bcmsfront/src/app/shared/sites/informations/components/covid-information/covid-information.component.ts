import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-information',
  templateUrl: './covid-information.component.html',
  styleUrls: ['./covid-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CovidInformationComponent {}
