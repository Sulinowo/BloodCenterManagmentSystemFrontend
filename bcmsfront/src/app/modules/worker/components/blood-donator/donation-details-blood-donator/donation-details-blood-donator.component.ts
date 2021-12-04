import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DonationDetails } from 'src/app/core/models/donation-details';

@Component({
  selector: 'app-donation-details-blood-donator',
  templateUrl: './donation-details-blood-donator.component.html',
  styleUrls: ['./donation-details-blood-donator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationDetailsBloodDonatorComponent {
  @Input() dataSource: DonationDetails | null;

  columns: string[] = [
    'stage',
    'donationDate',
    'rejectionReason',
    'hb',
    'ht',
    'rbc',
    'wbc',
    'plt',
    'mch',
    'mchc',
    'mcv',
    'ne',
    'eo',
    'ba',
    'ly',
    'mo',
    'bloodPressureUpper',
    'bloodPressureLower',
    'height',
    'weight',
  ];
}
