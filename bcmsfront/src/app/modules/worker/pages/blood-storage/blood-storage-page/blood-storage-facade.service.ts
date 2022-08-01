import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { BloodStorageService } from '../../../services/blood-storage.service';

@Injectable({
  providedIn: 'root',
})
export class BloodStorageFacadeService {
  public addBloodUnit$ = this.bloodStorageService.addBloodUnit$;
  public bloodUnits$ = this.bloodStorageService.bloodUnits$;
  public setBloodUnitNotAvailable$ =
    this.bloodStorageService.setBloodUnitNotAvailable$;

  constructor(
    private bloodStorageService: BloodStorageService,
    private workerClient: WorkerClientService
  ) {}

  public addBloodUnit(dontaionId: number, isAfterCovid: boolean): void {
    this.workerClient
      .addBloodUnitToStorage(dontaionId, isAfterCovid)
      .subscribe((data) => {
        this.bloodStorageService.addBloodUnit(data);
      });
  }

  public loadBloodUnits(): void {
    this.workerClient.getAllAvailableBloodUnit().subscribe((data) => {
      this.bloodStorageService.loadAvailableBloodUnit(data);
    });
  }

  public setBloodUnitNotAvailable(bloodUnitId: number): void {
    this.workerClient
      .setBloodUnitNotAvailable(bloodUnitId)
      .subscribe((data) => {
        this.bloodStorageService.setBloodUnitNotAvailable(data);
        this.loadBloodUnits();
      });
  }
}
