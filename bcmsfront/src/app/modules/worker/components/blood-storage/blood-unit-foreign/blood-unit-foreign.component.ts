import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BloodStorageForeign } from 'src/app/core/models/bloodstorage';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

interface BloodType {
  value: string;
  viewValue: string;
}

interface Covid {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-blood-unit-foreign',
  templateUrl: './blood-unit-foreign.component.html',
  styleUrls: ['./blood-unit-foreign.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BloodUnitForeignComponent {
  @Output() onAddBloodUnitClick = new EventEmitter<BloodStorageForeign>();

  public addForeignBloodUnitForm: FormGroup;

  bloodTypeName: BloodType[] = [
    { value: '0Rh+', viewValue: '0Rh+' },
    { value: '0Rh-', viewValue: '0Rh-' },
    { value: 'ARh+', viewValue: 'ARh+' },
    { value: 'ARh-', viewValue: 'ARh-' },
    { value: 'BRh+', viewValue: 'BRh+' },
    { value: 'BRh-', viewValue: 'BRh-' },
    { value: 'ABRh+', viewValue: 'ABRh+' },
    { value: 'ABRh-', viewValue: 'ABRh-' },
  ];

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.addForeignBloodUnitForm = this.formBuilder.group({
      bloodTypeName: [null, Validators.required],
      foreignBloodUnitId: [null],
      bloodUnitLocation: [null],
      isAfterCovid: [null, Validators.required],
    });
  }

  public onAddBloodUnit(): void {
    this.onAddBloodUnitClick.emit(this.addForeignBloodUnitForm.value);
  }

  afterCovid: Covid[] = [
    { value: true, viewValue: 'Tak' },
    { value: false, viewValue: 'Nie' },
  ];

  public onAddBloodUnitDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz dodać jednostkę krwii?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onAddBloodUnitClick.emit(this.addForeignBloodUnitForm.value);
      }
    });
  }
}
