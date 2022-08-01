import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';

@Injectable({
  providedIn: 'root',
})
export class DonationQueueRegisteredFacadeService {
  public registeredQueue$ = this.donationService.registeredQueue$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}

  public getRegisteredQueue(): void {
    this.workerClient.getRegisteredQueue().subscribe((data) => {
      this.donationService.getRegisteredQueue(data);
    });
  }
}
