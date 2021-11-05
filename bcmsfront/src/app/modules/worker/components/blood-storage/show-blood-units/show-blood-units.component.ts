import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BloodStorage } from 'src/app/core/models/bloodstorage';

@Component({
  selector: 'app-show-blood-units',
  templateUrl: './show-blood-units.component.html',
  styleUrls: ['./show-blood-units.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowBloodUnitsComponent {
  @Input() dataSource: BloodStorage[];
  @Output() bloodUnitClick = new EventEmitter<BloodStorage>();

  displayedColumns: string[] = ['lokalizacja', 'dostepnosc', 'covid', 'grupaKrwii','ustawNiedostepny'];

  constructor() {}

  public bloodUnitListClick(bloodUnit: BloodStorage): void {
    this.bloodUnitClick.emit(bloodUnit);
  }
}
