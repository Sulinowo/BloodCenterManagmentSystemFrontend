import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Examination } from 'src/app/core/models/examination';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-add-examination',
  templateUrl: './add-examination.component.html',
  styleUrls: ['./add-examination.component.scss'],
})
export class AddExaminationComponent {
  @Output() onAddExaminationClick = new EventEmitter<Examination>();

  public addExaminationForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    
    this.addExaminationForm = this.formBuilder.group({
      donationId: [parseInt(donationId)],
      hb: [null, Validators.required],
      ht: [null, Validators.required],
      rbc: [null, Validators.required],
      wbc: [null, Validators.required],
      plt: [null, Validators.required],
      mch: [null, Validators.required],
      mchc: [null, Validators.required],
      mcv: [null, Validators.required],
      ne: [null, Validators.required],
      eo: [null, Validators.required],
      ba: [null, Validators.required],
      ly: [null, Validators.required],
      mo: [null, Validators.required],
    });
  }

  // public onAddExamination(): void {
  //   this.onAddExaminationClick.emit(this.addExaminationForm.value);
  // }

  public onAddExaminationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Czy napewno chcesz dodać badania krwii?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onAddExaminationClick.emit(this.addExaminationForm.value);
      }
    });
  }
}
