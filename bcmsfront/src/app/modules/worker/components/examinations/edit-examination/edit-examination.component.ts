import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DonationDetails } from 'src/app/core/models/donation-details';
import { EditExamination } from 'src/app/core/models/examination';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-examination',
  templateUrl: './edit-examination.component.html',
  styleUrls: ['./edit-examination.component.scss'],
})
export class EditExaminationComponent implements OnChanges {
  @Output() onEditExaminationClick = new EventEmitter<EditExamination>();
  @Input() state?: DonationDetails | null;

  public editExaminationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.editExaminationForm = this.formBuilder.group({
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

  public ngOnChanges(): void {
    this.editExaminationForm.patchValue({
      ...this.state,
      ...(this.state?.resultOfExamination || {}),
    });
  }

  public onEditExaminationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz edytować wyniki badań krwii?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onEditExaminationClick.emit(this.editExaminationForm.value);
      }
    });
  }
}
