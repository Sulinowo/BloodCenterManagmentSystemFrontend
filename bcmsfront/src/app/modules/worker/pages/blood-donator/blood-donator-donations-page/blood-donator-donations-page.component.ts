import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donation } from 'src/app/core/models/donation';
import { BloodDonatorDonationsFacadeService } from './blood-donator-donations-facade.service';

@Component({
  selector: 'app-blood-donator-donations-page',
  templateUrl: './blood-donator-donations-page.component.html',
  styleUrls: ['./blood-donator-donations-page.component.scss'],
})
export class BloodDonatorDonationsPageComponent implements OnInit {
  public bloodDonatorDonations$ =
    this.bloodDonatorDonationsFacade.bloodDonatorDonations$;

  constructor(
    private bloodDonatorDonationsFacade: BloodDonatorDonationsFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId') || '';
    this.bloodDonatorDonationsFacade.loadDonationsData(parseInt(userId));
  }
  
  public onDonationClick(donation: Donation) {
    const userId = this.route.snapshot.paramMap.get('userId') || '';
    this.router.navigate([`/blooddonator/${userId}/donations/${donation.id}/details`]);
    // :userId/donations/:donationId/details
  }
}
