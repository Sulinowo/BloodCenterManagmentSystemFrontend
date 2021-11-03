import { Injectable } from '@angular/core';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { DonationService } from 'src/app/modules/worker/services/donation.service';
import { WorkerClientService } from '../../../clients/worker-client.service';

@Injectable({
  providedIn: 'root',
})
export class DonationsFacadeService {
  public allDonations$ = this.donationService.allDonations$;
  public donationPatch$ = this.donationService.donationPatch$;
  public queue$ = this.donationService.queue$;

  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService
  ) {}


  public onGetAllDonations(): void {
    this.workerClient.getAllDonations().subscribe((data) => {
      this.donationService.getAllDonations(data);
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
}
