import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditWorker, WorkerAccount } from 'src/app/core/models/edit-worker';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent {
  @Input() showEditable = false;
  @Input() state?: WorkerAccount | null;
  @Output() profileEdit = new EventEmitter<EditWorker>();
  @Output() setNewPass = new EventEmitter<void>();

  public adminDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.adminDataForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      firstname: [null],
      surname: [null, [Validators.required]],
      role: [null],
    });
    this.onEditClicked();
  }

  public ngOnChanges(): void {
    this.adminDataForm.patchValue({
      ...this.state,
    });
  }

  public onEditClicked(): void {
    this.showEditable = !this.showEditable;
    this.showEditable === false
      ? this.adminDataForm.enable()
      : this.adminDataForm.disable();
    this.adminDataForm.get('firstname')?.disable();
    this.adminDataForm.get('role')?.disable();
  }

  public onEditProfileDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz edytować konto?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.profileEdit.emit(this.adminDataForm.value);
      }
    });
  }

  public onSetNewPasswordClick(): void {
    this.setNewPass.emit();
  }
}
