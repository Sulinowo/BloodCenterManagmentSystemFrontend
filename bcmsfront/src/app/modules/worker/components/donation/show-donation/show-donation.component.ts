import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DonationFull } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-show-donation',
  templateUrl: './show-donation.component.html',
  styleUrls: ['./show-donation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDonationComponent{
  @Input() dataSource: [DonationFull | null];
  @Output() donationClick = new EventEmitter<DonationFull>();

  columns: string[] = [
    'stage',
    'donationDate',
    'pesel',
    'email',
    'firstName',
    'surname',
    'bloodTypeName',
    'ammountOfBloodDonated',
    'phoneNumber',
    'homeAdress',
    'rejectionReason'
  ];

  public onDonationClick(data: DonationFull): void {
    this.donationClick.emit(data);
  }
}
