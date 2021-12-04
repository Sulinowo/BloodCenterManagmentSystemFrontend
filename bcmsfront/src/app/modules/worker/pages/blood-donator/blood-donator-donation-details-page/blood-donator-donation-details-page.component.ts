import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloodDonatorDonationDetailsFacadeService } from './blood-donator-donation-details-facade.service';

@Component({
  selector: 'app-blood-donator-donation-details-page',
  templateUrl: './blood-donator-donation-details-page.component.html',
  styleUrls: ['./blood-donator-donation-details-page.component.scss'],
})
export class BloodDonatorDonationDetailsPageComponent implements OnInit {
  public donationDetails$ =
    this.bloodDonatorDonationDetailsFacade.donationDetails$;

  constructor(
    private bloodDonatorDonationDetailsFacade: BloodDonatorDonationDetailsFacadeService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.bloodDonatorDonationDetailsFacade.loadDonationDetails(
      parseInt(donationId) || -1
    );
  }
}
