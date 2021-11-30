import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditWorker, WorkerAccount } from 'src/app/core/models/edit-worker';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.component.html',
  styleUrls: ['./worker-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkerProfileComponent implements OnChanges {
  @Input() showEditable = false;
  @Input() state?: WorkerAccount | null;
  @Output() profileEdit = new EventEmitter<EditWorker>();

  public workerDataForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,) {
    this.workerDataForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      firstname: [null],
      surname: [null, [Validators.required]],
      role: [null],
    });
    this.onEditClicked();
  }

  public ngOnChanges(): void {
    this.workerDataForm.patchValue({
      ...this.state,
    });
  }

  public onEditClicked(): void {
    this.showEditable = !this.showEditable;
    this.showEditable === false
      ? this.workerDataForm.enable()
      : this.workerDataForm.disable();
    this.workerDataForm.get('firstname')?.disable();
    this.workerDataForm.get('role')?.disable();
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
        this.profileEdit.emit(this.workerDataForm.value);
      }
    });
  }
}
