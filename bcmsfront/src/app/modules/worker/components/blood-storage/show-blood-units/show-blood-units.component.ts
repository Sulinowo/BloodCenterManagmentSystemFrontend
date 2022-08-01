import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BloodStorage } from 'src/app/core/models/bloodstorage';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-show-blood-units',
  templateUrl: './show-blood-units.component.html',
  styleUrls: ['./show-blood-units.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowBloodUnitsComponent {
  @Input() dataSource: BloodStorage[];
  @Output() bloodUnitClick = new EventEmitter<BloodStorage>();

  displayedColumns: string[] = [
    'id',
    'lokalizacja',
    'covid',
    'grupaKrwii',
    'ustawNiedostepny',
  ];

  constructor(private dialog: MatDialog) {}

  public bloodUnitListClick(bloodUnit: BloodStorage): void {
    this.bloodUnitClick.emit(bloodUnit);
  }

  public bloodUnitListDialog(bloodUnit: BloodStorage): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz ustawić jednostkę krwii na niedostępną?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.bloodUnitClick.emit(bloodUnit);
      }
    });
  }
}
