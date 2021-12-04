import { Injectable } from '@angular/core';
import { EndDonation } from 'src/app/core/models/end-donation';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { BloodStorageService } from '../../../services/blood-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BloodStorageEndDonationFacadeService {
  constructor(
    private bloodStorageService: BloodStorageService,
    private workerClient: WorkerClientService
  ) {}

  public addBloodUnit(data: EndDonation): void {
    this.workerClient
      .addBloodUnitToStorage(data.donationId, data.isAfterCovid)
      .subscribe((data) => {
        this.bloodStorageService.addBloodUnit(data);
      });
  }
}
