import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';

@Injectable({
  providedIn: 'root',
})
export class DonationsQueueBloodExaminedFacadeService {
  public bloodExaminedQueue$ = this.donationService.bloodExaminedQueue$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}

  public getBloodExaminedQueue(): void {
    this.workerClient.getBloodExaminedQueue().subscribe((data) => {
      this.donationService.getBloodExaminedQueue(data);
    });
  }
}
