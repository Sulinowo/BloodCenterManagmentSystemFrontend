import {  ChangeDetectionStrategy,Component,EventEmitter,Input,Output,SimpleChanges,OnChanges } from '@angular/core';
import { Donation } from 'src/app/core/models/donation';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-donations',
  templateUrl: './user-donations.component.html',
  styleUrls: ['./user-donations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDonationsComponent {
  // @Input() data: Donation[] = [];
  // @Output() donationClick = new EventEmitter<Donation>();

  // donationData = new MatTableDataSource<Partial<Record<keyof Donation, any>>>([]);

  // public ngOnChanges(changes: SimpleChanges) {
  //   if (!changes.data.firstChange && changes.data.currentValue) {
  //     const data = this.data?.map(
  //       ({
  //         id,
  //         donationDate,
  //         stage,
  //         rejectionReason,
  //       }) => ({
  //         id,
  //         donationDate,
  //         stage,
  //         rejectionReason
  //       })
  //     );
  //     this.donationData = new MatTableDataSource<
  //     Partial<Record<keyof Donation, any>>
  //   >(data);
  // }}

  
  // public donationListClick(donation: Donation){
  //   this.donationClick.emit(donation);
  // }
}
