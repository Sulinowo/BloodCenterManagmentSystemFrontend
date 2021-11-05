import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DonationGet } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-show-donations-queue',
  templateUrl: './show-donations-queue.component.html',
  styleUrls: ['./show-donations-queue.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDonationsQueueComponent {
  @Input() dataSource: DonationGet[] ; 
  @Output() donationQueueClick = new EventEmitter<DonationGet>();

  displayedColumns: string[] = [
    'stage',
    'donationDate',
    'pesel',
    'firstName',
    'surname',
  ];

  public onDonationQueueClick(data: DonationGet): void {
    this.donationQueueClick.emit(data);
  }
}
