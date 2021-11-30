import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Donator } from 'src/app/core/models/donator';
import { UserData } from 'src/app/core/models/user-data';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDataComponent implements OnChanges {
  @Input() showEditable = false;
  @Input() state?: Donator | null;
  @Output() profileEdit = new EventEmitter<UserData>();

  public userDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,) {
    this.userDataForm = this.formBuilder.group({
      pesel: [null],
      homeAdress: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      ammountOfBloodDonated: [null],
      bloodTypeName: [null],
      email: [null, [Validators.required]],
      firstName: [null],
      surname: [null],
    });
    this.onEditClicked();
  }

  public ngOnChanges(): void {
    this.userDataForm.patchValue({
      ...this.state,
      ...(this.state?.user || {}),
      bloodTypeName: this.state?.bloodType?.bloodTypeName,
    });
  }

  public onEditClicked(): void {
    this.showEditable = !this.showEditable;
    this.showEditable === false
      ? this.userDataForm.enable()
      : this.userDataForm.disable();
    this.userDataForm.get('pesel')?.disable();
    this.userDataForm.get('ammountOfBloodDonated')?.disable();
    this.userDataForm.get('bloodTypeName')?.disable();
    this.userDataForm.get('firstName')?.disable();
  }

  public onEditProfileDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Czy napewno chcesz edytować konto?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.profileEdit.emit(this.userDataForm.value);
      }
    });
  }


}
