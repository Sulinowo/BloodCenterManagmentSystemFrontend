import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EndDonation } from 'src/app/core/models/end-donation';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

interface Covid {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-add-blood-unit',
  templateUrl: './add-blood-unit.component.html',
  styleUrls: ['./add-blood-unit.component.scss'],
})
export class AddBloodUnitComponent {
  @Output() onAddBloodUnitClick = new EventEmitter<EndDonation>();

  public addBloodUnitForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';

    this.addBloodUnitForm = this.formBuilder.group({
      donationId: [parseInt(donationId)],
      isAfterCovid: [null, Validators.required],
    });
  }

  public onAddBloodUnit(): void {
    this.onAddBloodUnitClick.emit(this.addBloodUnitForm.value);
    console.log(this.addBloodUnitForm.value);
  }

  afterCovid: Covid[] = [
    { value:true, viewValue:"Tak" },
    { value:false, viewValue:"Nie" },
  ]

  public onAddBloodUnitDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Czy napewno chcesz zakończyć donację?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onAddBloodUnitClick.emit(this.addBloodUnitForm.value);
      }
    });
  }
}
