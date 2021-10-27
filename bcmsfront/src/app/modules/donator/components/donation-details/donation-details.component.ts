import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Donation } from 'src/app/core/models/donation';

@Component({
  selector: 'app-donation-details',
  templateUrl: './donation-details.component.html',
  styleUrls: ['./donation-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationDetailsComponent {
  @Input() dataSource: Donation;

  columns: string[] = ['stage', 'donationDate', 'rejectionReason','hb','ht','rbc','wbc','plt','mch',
  'mchc','mcv','ne','eo','ba','ly','mo','bloodPressureUpper','bloodPressureLower','height','weight'];
}
