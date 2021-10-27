import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DonationFull, DonationGet } from 'src/app/core/models/donation-full';
import { DonationPatch } from 'src/app/core/models/donation-patch';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  public addDonation$ = new BehaviorSubject<DonationFull>({});
  public allDonations$ = new BehaviorSubject(<DonationGet[]>[]);
  public donationPatch$ = new BehaviorSubject<DonationPatch>({} as DonationPatch);
  public queue$ = new BehaviorSubject<DonationGet[]>(<DonationGet[]>[]);
  public donation$ = new BehaviorSubject<DonationFull>({} as DonationFull);

  public addDonation(data: DonationFull): void {
    this.addDonation$.next(data);
  }

  public getAllDonations(data: DonationGet[]): void {
    this.allDonations$.next(data);
  }

  public donationPatch(data: DonationPatch): void {
    this.donationPatch$.next(data);
  }

  public getQueue(data: DonationGet[]): void {
    this.queue$.next(data);
  }

  public getDonation(data: DonationFull): void {
    this.donation$.next(data);
  }
}
