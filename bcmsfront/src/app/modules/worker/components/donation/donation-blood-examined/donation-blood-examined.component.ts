import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DonationFull } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-donation-blood-examined',
  templateUrl: './donation-blood-examined.component.html',
  styleUrls: ['./donation-blood-examined.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationBloodExaminedComponent {
  @Input() dataSource: [DonationFull | null];
  @Input() editable = false;
  @Output() detailsClick = new EventEmitter();
  @Output() doctorExamiationAddClick = new EventEmitter();
  @Output() statusChangeClick = new EventEmitter();

  columns: string[] = [
    'stage',
    'donationDate',
    'pesel',
    'email',
    'firstName',
    'surname',
    'bloodTypeName',
    'phoneNumber',
    'homeAdress',
    'rejectionReason',
  ];

  public onDetailsClick(): void {
    this.detailsClick.emit();
  }

  public onDoctorExamiationAddClick(): void {
    this.doctorExamiationAddClick.emit();
  }

  public onStatusChangeClick(): void {
    this.statusChangeClick.emit();
  }
}
