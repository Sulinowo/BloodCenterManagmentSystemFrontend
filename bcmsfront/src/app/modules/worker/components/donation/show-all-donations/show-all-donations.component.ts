import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DonationGet } from 'src/app/core/models/donation-full';

@Component({
  selector: 'app-show-all-donations',
  templateUrl: './show-all-donations.component.html',
  styleUrls: ['./show-all-donations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowAllDonationsComponent {
  @Input() dataSource: DonationGet[] | null;
  @Output() donationsClick = new EventEmitter<DonationGet>();

  columns: string[] = [
    'stage',
    'donationDate',
    'pesel',
    'firstName',
    'surname',
  ];

  public onDonationsClick(data: DonationGet): void {
    this.donationsClick.emit(data);
  }
}
