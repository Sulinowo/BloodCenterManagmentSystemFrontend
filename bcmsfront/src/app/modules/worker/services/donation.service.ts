import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DonationFull, DonationGet } from 'src/app/core/models/donation-full';
import { DonationPatch } from 'src/app/core/models/donation-patch';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  public allDonations$ = new BehaviorSubject(<DonationGet[]>[]);
  public donationPatch$ = new BehaviorSubject(<DonationPatch>{});
  public registeredQueue$ = new BehaviorSubject(<DonationGet[]>[]);
  public bloodExaminedQueue$ = new BehaviorSubject(<DonationGet[]>[]);
  public qualifiedQueue$ = new BehaviorSubject(<DonationGet[]>[]);
  public donation$ = new BehaviorSubject(<DonationFull>{});

  public getAllDonations(data: DonationGet[]): void {
    this.allDonations$.next(data);
  }

  public donationPatch(data: DonationPatch): void {
    this.donationPatch$.next(data);
  }

  public getRegisteredQueue(data: DonationGet[]): void {
    this.registeredQueue$.next(data);
  }

  public getBloodExaminedQueue(data: DonationGet[]): void {
    this.bloodExaminedQueue$.next(data);
  }
  
  public getQualifiedQueue(data: DonationGet[]): void {
    this.qualifiedQueue$.next(data);
  }

  public getDonation(data: DonationFull): void {
    this.donation$.next(data);
  }
}
