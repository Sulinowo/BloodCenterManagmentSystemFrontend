import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';

@Injectable({
  providedIn: 'root'
})
export class RegisteredDonationFacadeService {
  public donation$ = this.donationService.donation$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) { }

  public loadDonation(donationId: number): void {
    this.workerClient.getDonation(donationId).subscribe((data) => {
      this.donationService.getDonation(data);
    });
  }
}
