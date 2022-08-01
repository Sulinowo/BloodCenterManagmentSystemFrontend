import { Injectable } from '@angular/core';
import { Donator } from 'src/app/core/models/donator';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { BloodDonatorService } from '../../../services/blood-donator.service';

@Injectable({
  providedIn: 'root',
})
export class BloodDonatorFacadeService {
  public donators$ = this.bloodDonatorService.donatorsObservable$;
  public addDonator$ = this.bloodDonatorService.addDonator$;
  public addDonation$ = this.bloodDonatorService.addDonation$;

  constructor(
    private bloodDonatorService: BloodDonatorService,
    private workerClient: WorkerClientService
  ) {}

  public loadDonators(): void {
    this.workerClient.getAllBloodDonators().subscribe((donators: any) => {
      this.bloodDonatorService.initialize(donators);
    });
  }

  public addDonator(data: Donator): void {
    this.workerClient.addDonator(data).subscribe((data) => {
      this.bloodDonatorService.addBloodDonator(data);
      this.loadDonators();
    });
  }

  public addDonation(userId: number): void {
    this.workerClient.addDonation(userId).subscribe((data) => {
      this.bloodDonatorService.addDonation(data);
    });
  }
}
