import { Injectable } from '@angular/core';
import { Donator } from 'src/app/core/models/donator';
import { WorkerClientService } from '../../clients/worker-client.service';
import { BloodDonatorService } from '../../services/blood-donator.service';

@Injectable({
  providedIn: 'root'
})
export class BloodDonatorFacadeService {
  public donators$ = this.bloodDonatorService.donators$;
  public addDonator$ = this.bloodDonatorService.addDonator$;

  constructor(
    private bloodDonatorService: BloodDonatorService,
    private workerClient: WorkerClientService
  ) {}

  public loadDonators(): void {
    this.workerClient.getAllBloodDonators().subscribe((donators) => {
      this.bloodDonatorService.initialize(donators);
    });
  }

  public addDonator(data: Donator): void {
    this.workerClient.addDonator(data).subscribe((data) => {
      this.bloodDonatorService.addBloodDonator(data);
    });
  }

  
}
