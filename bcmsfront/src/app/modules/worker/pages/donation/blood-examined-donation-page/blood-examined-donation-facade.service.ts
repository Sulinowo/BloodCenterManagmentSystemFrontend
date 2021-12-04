import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';
import { map } from 'rxjs/operators';
import { DonationDetails } from '../../../../../core/models/donation-details';
import { ProfileFacadeService } from '../../../../donator/pages/profile-page/profile-facade.service';

@Injectable({
  providedIn: 'root',
})
export class BloodExaminedDonationFacadeService {
  public donation$ = this.donationService.donation$;
  public isExaminationNullable$ = this.profileFacade.donationDetails$.pipe(
    map((x: DonationDetails) => {
      return (
        Object.keys(x).length === 0 ||
        x.resultOfExamination === null ||
        x.resultOfExamination.height === 0
      ); // 0 zamiast null
    })
  );
  constructor(
    private donationService: DonationService,
    private workerClient: WorkerClientService,
    private profileFacade: ProfileFacadeService
  ) {}

  public loadDonation(donationId: number): void {
    this.workerClient.getDonation(donationId).subscribe((data) => {
      this.donationService.getDonation(data);
    });
    this.profileFacade.loadDonationDetails(donationId);
  }
}
