import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';

@Component({
  selector: 'app-user-donations',
  templateUrl: './user-donations.component.html',
  styleUrls: ['./user-donations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDonationsComponent {
  @Input() dataSource: DonationDetails;
  @Output() donationClick = new EventEmitter<Donation>();

  columns: string[] = ['dataDonacji', 'etapDonacji', 'powodOdrzuceniaDonacji'];

  constructor() {}

  public donationListClick(donation: Donation): void {
    this.donationClick.emit(donation);
    console.log('siema', donation);
  }
}
