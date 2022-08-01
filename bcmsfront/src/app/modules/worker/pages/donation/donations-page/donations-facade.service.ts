import { Injectable } from '@angular/core';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { DonationService } from 'src/app/modules/worker/services/donation.service';
import { WorkerClientService } from '../../../clients/worker-client.service';

@Injectable({
  providedIn: 'root',
})
export class DonationsFacadeService {
  public allDonations$ = this.donationService.allDonations$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}

  public onGetAllDonations(): void {
    this.workerClient.getAllDonations().subscribe((data) => {
      this.donationService.getAllDonations(data);
    });
  }
}
