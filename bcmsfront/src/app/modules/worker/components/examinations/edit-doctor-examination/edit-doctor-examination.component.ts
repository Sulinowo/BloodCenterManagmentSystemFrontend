import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ExaminationPatch } from 'src/app/core/models/examination';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-edit-doctor-examination',
  templateUrl: './edit-doctor-examination.component.html',
  styleUrls: ['./edit-doctor-examination.component.scss'],
})
export class EditDoctorExaminationComponent implements OnInit {
  @Output() onEditDoctorExaminationClick = new EventEmitter<ExaminationPatch>();

  public editDoctorExaminationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.editDoctorExaminationForm = this.formBuilder.group({
      donationId: [parseInt(donationId)],
      bloodPressureUpper: [null, Validators.required],
      bloodPressureLower: [null, Validators.required],
      height: [null, Validators.required],
      weight: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  public onEditDoctorExaminationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz edytować wyniki badania lekarskiego?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onEditDoctorExaminationClick.emit(
          this.editDoctorExaminationForm.value
        );
      }
    });
  }
}
