import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DonationDetails } from '../../../../core/models/donation-details';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationDetailsComponent {
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
