import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationFull } from 'src/app/core/models/donation-full';
import { DonationFacadeService } from './donation-facade.service';

@Component({
  selector: 'app-donation-page',
  templateUrl: './donation-page.component.html',
  styleUrls: ['./donation-page.component.scss'],
})
export class DonationPageComponent implements OnInit {
  public donation$ = this.donationFacade.donation$;

  constructor(
    private donationFacade: DonationFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.donationFacade.loadDonation(parseInt(donationId) || -1);
  }

  public onDetailsClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donations/${donationId}/details`]);
  }
}
