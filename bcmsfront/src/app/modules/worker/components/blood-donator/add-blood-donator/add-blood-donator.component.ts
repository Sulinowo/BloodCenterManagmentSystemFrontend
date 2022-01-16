import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Donator } from 'src/app/core/models/donator';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

interface BloodType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-blood-donator',
  templateUrl: './add-blood-donator.component.html',
  styleUrls: ['./add-blood-donator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBloodDonatorComponent {
  @Output() onAddDonator = new EventEmitter<Donator>();

  public addBloodDonatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.addBloodDonatorForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      surname: [null, Validators.required],
      pesel: [null, Validators.required],
      email: [null],
      phoneNumber: [null, Validators.required],
      homeAdress: [null, Validators.required],
      bloodTypeName: [null, Validators.required],
    });
  }

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

  onAddBloodDonatorDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz dodać użytkownika?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onAddDonator.emit(this.addBloodDonatorForm.value);
      }
    });
  }
}
