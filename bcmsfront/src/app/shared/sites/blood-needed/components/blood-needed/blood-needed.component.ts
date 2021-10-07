import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BloodType } from 'src/app/core/models/blood-type';

@Component({
  selector: 'app-blood-needed',
  templateUrl: './blood-needed.component.html',
  styleUrls: ['./blood-needed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BloodNeededComponent {
  @Input() bloodAmount:any;

}
