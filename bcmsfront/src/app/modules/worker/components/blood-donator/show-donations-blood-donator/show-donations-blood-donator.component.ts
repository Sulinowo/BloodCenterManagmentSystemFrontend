import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Donation } from 'src/app/core/models/donation';

@Component({
  selector: 'app-show-donations-blood-donator',
  templateUrl: './show-donations-blood-donator.component.html',
  styleUrls: ['./show-donations-blood-donator.component.scss'],
})
export class ShowDonationsBloodDonatorComponent {
  @Input() dataSource: Donation[];
  @Output() donationClick = new EventEmitter<Donation>();

  columns: string[] = ['dataDonacji', 'etapDonacji', 'powodOdrzuceniaDonacji'];

  constructor() {}

  public donationListClick(donation: Donation): void {
    this.donationClick.emit(donation);
  }
}
