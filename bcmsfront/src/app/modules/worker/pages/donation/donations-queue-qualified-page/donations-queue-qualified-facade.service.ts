import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';

@Injectable({
  providedIn: 'root',
})
export class DonationsQueueQualifiedFacadeService {
  public qualifiedQueue$ = this.donationService.qualifiedQueue$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}

  public getQualifiedQueue(): void {
    this.workerClient.getQualifiedQueue().subscribe((data) => {
      this.donationService.getQualifiedQueue(data);
    });
  }
}
