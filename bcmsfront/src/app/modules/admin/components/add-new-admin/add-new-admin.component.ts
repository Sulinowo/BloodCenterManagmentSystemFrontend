import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewWorker } from 'src/app/core/models/add-worker';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.scss']
})
export class AddNewAdminComponent {
  @Output() addAdmin = new EventEmitter<NewWorker>();

  public addAdminForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,) {
    this.addAdminForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      surname: [null, Validators.required],
    });
  }

  public onAddAdminDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Czy napewno chcesz dodać nowego administratora?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.addAdmin.emit(this.addAdminForm.value);
      }
    });
  }
}
