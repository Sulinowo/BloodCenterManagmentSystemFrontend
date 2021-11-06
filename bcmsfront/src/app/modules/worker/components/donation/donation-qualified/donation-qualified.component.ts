import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DonationFull } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-donation-qualified',
  templateUrl: './donation-qualified.component.html',
  styleUrls: ['./donation-qualified.component.scss']
})
export class DonationQualifiedComponent {
  @Input() dataSource: [DonationFull | null];
  @Output() detailsClick = new EventEmitter();
  @Output() donationEndClick = new EventEmitter();

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
    'rejectionReason'
  ];

  public onDetailsClick(): void {
    this.detailsClick.emit();
  }

  public onDonationEndClick(): void {
    this.donationEndClick.emit();
  }

}
