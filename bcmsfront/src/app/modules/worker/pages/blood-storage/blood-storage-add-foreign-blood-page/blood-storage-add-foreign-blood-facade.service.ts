import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { BloodStorageService } from '../../../services/blood-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BloodStorageAddForeignBloodFacadeService {
  public addBloodUnitForeign$ = this.bloodStorageService.addBloodUnitForeign$;

  constructor(
    private bloodStorageService: BloodStorageService,
    private workerClient: WorkerClientService
  ) {}

  public addBloodUnitForeign(
    bloodTypeName: string,
    foreignBloodUnitId: number,
    bloodUnitLocation: string,
    isAfterCovid: boolean
  ): void {
    this.workerClient
      .addBloodUnitFromForeignBloodBank(
        bloodTypeName,
        foreignBloodUnitId,
        bloodUnitLocation,
        isAfterCovid
      )
      .subscribe((data) => {
        this.bloodStorageService.addBloodUnitForeign(data);
      });
  }
}
