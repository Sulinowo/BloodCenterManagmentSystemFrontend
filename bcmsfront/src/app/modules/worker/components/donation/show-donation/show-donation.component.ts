import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DonationFull } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-show-donation',
  templateUrl: './show-donation.component.html',
  styleUrls: ['./show-donation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowDonationComponent {
  @Input() dataSource: [DonationFull | null];
  @Output() detailsClick = new EventEmitter();

  columns: string[] = [
    'stage',
    'donationDate',
    'pesel',
    'email',
    'firstName',
    'surname',
    'bloodTypeName',
    'rejectionReason',
  ];

  public onDetailsClick(): void {
    this.detailsClick.emit();
  }
}
