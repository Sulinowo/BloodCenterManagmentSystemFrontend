import { Injectable } from '@angular/core';
import { Donator } from 'src/app/core/models/donator';
import { WorkerClientService } from '../../clients/worker-client.service';
import { BloodDonatorService } from '../../services/blood-donator.service';

@Injectable({
  providedIn: 'root',
})
export class BloodDonatorFacadeService {
  public donators$ = this.bloodDonatorService.donatorsObservable$;
   public addDonator$ = this.bloodDonatorService.addDonator$;

  constructor(
    private bloodDonatorService: BloodDonatorService,
    private workerClient: WorkerClientService
  ) {}

  public loadDonators(): void {
    this.workerClient.getAllBloodDonators().subscribe(
      (donators: any) => {
        this.bloodDonatorService.initialize(donators.data);
      },
      (_) => {
        this.bloodDonatorService.initialize([
          {
            pesel: '123456789',
            user: {
              id: 1,
              email: 'admin@wp.pl',
              firstName: 'Admin',
              surname: 'Nimda',
            },
          },
          {
            pesel: '987654321',
            user: {
              id: 2,
              email: 'siema@wp.pl',
              firstName: 'Nimda',
              surname: 'Admin',
            },
          },
        ]);
      }
    );
  }

  public addDonator(data: Donator): void {
    this.workerClient.addDonator(data).subscribe((data) => {
       this.bloodDonatorService.addBloodDonator(data);
      this.loadDonators();
    });
  }
}
