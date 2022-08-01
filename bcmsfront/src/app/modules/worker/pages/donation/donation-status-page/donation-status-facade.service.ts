import { Injectable } from '@angular/core';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';

@Injectable({
  providedIn: 'root',
})
export class DonationStatusFacadeService {
  public donationPatch$ = this.donationService.donationPatch$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}

  public donationPatch(data: DonationPatch): void {
    this.workerClient.donationPatch(data).subscribe((data) => {
      this.donationService.donationPatch(data);
    });
  }
}
