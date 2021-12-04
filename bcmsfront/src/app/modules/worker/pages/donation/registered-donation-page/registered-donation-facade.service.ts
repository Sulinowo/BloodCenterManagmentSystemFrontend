import { Injectable } from '@angular/core';
import { WorkerClientService } from '../../../clients/worker-client.service';
import { DonationService } from '../../../services/donation.service';
import { ProfileFacadeService } from '../../../../donator/pages/profile-page/profile-facade.service';
import { DonationDetails } from '../../../../../core/models/donation-details';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisteredDonationFacadeService {
  public donation$ = this.donationService.donation$;
  public isExaminationNullable$ = this.profileFacade.donationDetails$.pipe(
    map((x: DonationDetails) => x.resultOfExamination === null)
  );
  public isExaminationNullable2$ = this.profileFacade.donationDetails$.pipe(
    map((x: DonationDetails) => x.resultOfExamination.height === null)
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
