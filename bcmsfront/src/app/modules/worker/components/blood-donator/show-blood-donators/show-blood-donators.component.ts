import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Donator } from 'src/app/core/models/donator';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-show-blood-donators',
  templateUrl: './show-blood-donators.component.html',
  styleUrls: ['./show-blood-donators.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowBloodDonatorsComponent {
  @Input() dataSource: Donator[];
  @Output() donatorClick = new EventEmitter<Donator>();
  @Output() addDonationClick = new EventEmitter<Donator>();

  searchText: string;

  displayedColumns: string[] = ['imie', 'nazwisko', 'pesel','donacja','edycja'];
  public searchBloodDonatorForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {
    this.searchBloodDonatorForm = this.formBuilder.group({
      pesel: [null],
    });
  }

  public donatorListClick(donator: Donator): void {
    this.donatorClick.emit(donator);
    console.log('siema', donator);
  }

  public onAddDonationClick(donator: Donator): void {
    this.addDonationClick.emit(donator);
    console.log("hey",donator);
  }


  onAddDonationDialog(donator: Donator) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{
      data:{
        message: 'Czy napewno chcesz zarejestrować donacje dla tego użytkownika?',
        buttonText: {
          ok: 'Tak',
          cancel: 'Anuluj'
        }
      }
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.addDonationClick.emit(donator);
      }
    });
  }
}