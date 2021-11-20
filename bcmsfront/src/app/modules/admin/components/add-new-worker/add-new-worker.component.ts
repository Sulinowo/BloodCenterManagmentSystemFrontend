import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewWorker } from 'src/app/core/models/add-worker';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-new-worker',
  templateUrl: './add-new-worker.component.html',
  styleUrls: ['./add-new-worker.component.scss']
})
export class AddNewWorkerComponent {
  @Output() addWorker = new EventEmitter<NewWorker>();

  public addWorkerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog,) {
    this.addWorkerForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      firstName: [null, Validators.required],
      surname: [null, Validators.required],
    });
  }

  public onAddWorkerDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Czy napewno chcesz dodać nowego pracownika?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.addWorker.emit(this.addWorkerForm.value);
      }
    });
  }

}
