import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DonationFull } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-donation-registered',
  templateUrl: './donation-registered.component.html',
  styleUrls: ['./donation-registered.component.scss'],
})
export class DonationRegisteredComponent {
  @Input() dataSource: [DonationFull | null];
  @Input() editable = false;
  @Input() editable2 = false;
  @Output() detailsClick = new EventEmitter();
  @Output() examinationAddClick = new EventEmitter();
  @Output() statusChangeClick = new EventEmitter();
  @Output() examinationEditClick = new EventEmitter();

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

  public onExamiationAddClick(): void {
    this.examinationAddClick.emit();
  }

  public onStatusChangeClick(): void {
    this.statusChangeClick.emit();
  }

  public onExamiationEditClick(): void {
    this.examinationEditClick.emit();
  }
}
