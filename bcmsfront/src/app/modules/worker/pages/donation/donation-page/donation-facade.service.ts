import { Injectable } from '@angular/core';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { DonationService } from 'src/app/modules/worker/services/donation.service';
import { WorkerClientService } from '../../../clients/worker-client.service';

@Injectable({
  providedIn: 'root',
})
export class DonationFacadeService {
  public allDonations$ = this.donationService.allDonations$;
  public donationPatch$ = this.donationService.donationPatch$;
  public queue$ = this.donationService.queue$;
  public donation$ = this.donationService.donation$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}


  public getAllDonations(): void {
    this.workerClient.getAllDonations().subscribe((_) => {
      this.getAllDonations();
    });
  }

  public donationPatch(data: DonationPatch): void {
    this.workerClient.donationPatch(data).subscribe((data) => {
      this.donationService.donationPatch(data);
    });
  }

  public getQueue(donationStage: string): void {
    this.workerClient.getQueue(donationStage).subscribe((data) => {
      this.donationService.getQueue(data);
    });
  }

  public getDonation(donationId: number): void {
    this.workerClient.getDonation(donationId).subscribe((data) => {
      this.donationService.getDonation(data);
    });
  }
}
