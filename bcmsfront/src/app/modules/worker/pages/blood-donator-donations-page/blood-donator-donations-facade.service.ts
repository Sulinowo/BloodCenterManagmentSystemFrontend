import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../clients/worker-client.service';
import { BloodDonatorService } from '../../services/blood-donator.service';

@Injectable({
  providedIn: 'root',
})
export class BloodDonatorDonationsFacadeService {
  public bloodDonatorDonations$ = this.bloodDonationService.bloodDonatorDonations$;

  constructor(
    private bloodDonationService: BloodDonatorService,
    private workerClient: WorkerClientService
  ) {}

  public loadDonationsData(userId: number): void {
    this.workerClient.getBloodDonatorDonations(userId).subscribe((data) => {
      this.bloodDonationService.setDonations(data);
    });
  }
}
