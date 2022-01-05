import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Donation } from 'src/app/core/models/donation';

@Component({
  selector: 'app-user-donations',
  templateUrl: './user-donations.component.html',
  styleUrls: ['./user-donations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDonationsComponent {
  @Input() dataSource: Donation[];
  @Output() donationClick = new EventEmitter<Donation>();

  columns: string[] = ['dataDonacji', 'etapDonacji', 'powodOdrzuceniaDonacji'];

  constructor() {}

  public donationListClick(donation: Donation): void {
    this.donationClick.emit(donation);
    console.log('siema', donation);
  }
}
