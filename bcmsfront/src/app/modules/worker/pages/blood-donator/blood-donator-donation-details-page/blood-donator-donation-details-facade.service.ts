import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { BloodDonatorService } from '../../../services/blood-donator.service';

@Injectable({
  providedIn: 'root',
})
export class BloodDonatorDonationDetailsFacadeService {
  public donationDetails$ = this.bloodDonatorService.donationDetails$;

  constructor(
    private bloodDonatorService: BloodDonatorService,
    private workerClient: WorkerClientService
  ) {}

  public loadDonationDetails(id: number): void {
    this.workerClient.getDonationDetails(id).subscribe((donation) => {
      this.bloodDonatorService.setDonationDetails(donation);
    });
  }
}
