import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-informations-page',
  templateUrl: './informations-page.component.html',
  styleUrls: ['./informations-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationsPageComponent {}
