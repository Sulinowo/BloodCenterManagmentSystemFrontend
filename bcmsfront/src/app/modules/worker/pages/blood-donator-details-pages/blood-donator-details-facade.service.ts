import { Injectable } from '@angular/core';
import { Donator } from 'src/app/core/models/donator';
import { UserData } from 'src/app/core/models/user-data';
import { WorkerClientService } from '../../clients/worker-client.service';
import { BloodDonatorService } from '../../services/blood-donator.service';

@Injectable({
  providedIn: 'root',
})
export class BloodDonatorDetailsFacadeService {
  public bloodDonator$ = this.bloodDonatorService.bloodDonator$;

  constructor(
    private bloodDonatorService: BloodDonatorService,
    private workerClient: WorkerClientService
  ) {}

  public loadBloodDonatorData(id: number): void {
    this.workerClient.getBloodDonatorByID(id).subscribe((data) => {
      this.bloodDonatorService.initializeDonator(data);
    });
  }

  public loadProfile(userId: number): void {
    this.loadBloodDonatorData(userId);
  }

  public editBloodDonatorData(data: UserData, userId: number): void {
    this.workerClient.updateProfileData({ ...data, id: userId }).subscribe((_) => {
      this.loadProfile(userId);
    });
  }
}
