import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationsComponent {}
