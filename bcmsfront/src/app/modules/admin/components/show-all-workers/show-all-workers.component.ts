import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Worker } from 'src/app/core/models/worker';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-show-all-workers',
  templateUrl: './show-all-workers.component.html',
  styleUrls: ['./show-all-workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowAllWorkersComponent {
  @Input() dataSource: Worker[];
  @Output() deleteWorkerClick = new EventEmitter<Worker>();

  constructor(private dialog: MatDialog) {}

  displayedColumns: string[] = [
    'firstName',
    'surname',
    'role',
    'email',
    'delete',
  ];

  public onDeleteWorkerDialog(worker: Worker): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz usunąć pracownika?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteWorkerClick.emit(worker);
      }
    });
  }
}
