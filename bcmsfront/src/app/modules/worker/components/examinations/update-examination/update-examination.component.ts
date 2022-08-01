import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ExaminationPatch } from 'src/app/core/models/examination';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-update-examination',
  templateUrl: './update-examination.component.html',
  styleUrls: ['./update-examination.component.scss'],
})
export class UpdateExaminationComponent implements OnInit {
  @Output() onAddDoctorExaminationClick = new EventEmitter<ExaminationPatch>();

  public addDoctorExaminationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.addDoctorExaminationForm = this.formBuilder.group({
      donationId: [parseInt(donationId)],
      bloodPressureUpper: [null, Validators.required],
      bloodPressureLower: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onAddDoctorExaminationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz dodać wyniki badania lekarskiego?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onAddDoctorExaminationClick.emit(
          this.addDoctorExaminationForm.value
        );
      }
    });
  }
}
