import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

interface Stage {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-status-donation',
  templateUrl: './status-donation.component.html',
  styleUrls: ['./status-donation.component.scss'],
})
export class StatusDonationComponent {
  @Output() onChangeStatusClick = new EventEmitter<DonationPatch>();

  public changeStatusForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.changeStatusForm = this.formBuilder.group({
      id: [parseInt(donationId)],
      stage: [null, Validators.required],
      rejectionReason: [null],
    });
  }

  // public onChangeStatus(): void {
  //   this.onChangeStatusClick.emit(this.changeStatusForm.value);
  //   console.log(this.changeStatusForm.value);
  // }

  stage: Stage[] = [
    { value: 'registered', viewValue: 'Zarejestrowany' },
    { value: 'blood examined', viewValue: 'Krew zbadana' },
    { value: 'abandoned', viewValue: 'Porzucony' },
    { value: 'qualified', viewValue: 'Zakwalifikowany' },
    { value: 'not qualified', viewValue: 'Niezakwalifikowany' },
  ];

  public onChangeStatusDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Czy napewno chcesz zmienić status donacji?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj',
        },
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onChangeStatusClick.emit(this.changeStatusForm.value);
      }
    });
  }
}
