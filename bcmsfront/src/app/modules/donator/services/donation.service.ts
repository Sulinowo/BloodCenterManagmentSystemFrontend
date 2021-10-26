import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  public donations$ = new BehaviorSubject<Donation[]>([]);
  // public donationDetails$ = new BehaviorSubject<DonationDetails>(null);

  public setDonations(donation: Donation[]): void {
    this.donations$.next(donation);
  }

  public setDonationDetails(donation: DonationDetails): void {
    // this.donationDetails$.next(donation);
  }
}
