import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';
import { DonationFull } from 'src/app/core/models/donation-full';
import { Donator } from 'src/app/core/models/donator';

@Injectable({
  providedIn: 'root',
})
export class BloodDonatorService {
  private donators$ = new BehaviorSubject<Donator[]>([] as Donator[]);
  public addDonator$ = new BehaviorSubject<Donator>(<Donator>{});
  public bloodDonator$ = new BehaviorSubject(<Donator>{});
  public bloodDonatorDonations$ = new BehaviorSubject<Donation[]>(
    [] as Donation[]
  );
  public donationDetails$ = new BehaviorSubject(<DonationDetails>{});
  public addDonation$ = new BehaviorSubject<DonationFull>({});

  public donatorsObservable$ = this.donators$.asObservable();

  public initialize(donators: Donator[]): void {
    this.donators$.next(donators);
  }

  public addBloodDonator(donator: Donator): void {
    this.addDonator$.next(donator);
  }

  public initializeDonator(user: Donator): void {
    this.bloodDonator$.next(user);
  }

  public setDonations(donation: Donation[]): void {
    this.bloodDonatorDonations$.next(donation);
  }

  public setDonationDetails(donation: DonationDetails): void {
    this.donationDetails$.next(donation);
  }

  public addDonation(data: DonationFull): void {
    this.addDonation$.next(data);
  }
}
