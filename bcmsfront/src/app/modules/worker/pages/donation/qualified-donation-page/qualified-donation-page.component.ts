import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QualifiedDonationFacadeService } from './qualified-donation-facade.service';

@Component({
  selector: 'app-qualified-donation-page',
  templateUrl: './qualified-donation-page.component.html',
  styleUrls: ['./qualified-donation-page.component.scss'],
})
export class QualifiedDonationPageComponent implements OnInit {
  public donation$ = this.qualifiedDonationFacade.donation$;

  constructor(
    private qualifiedDonationFacade: QualifiedDonationFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.qualifiedDonationFacade.loadDonation(parseInt(donationId) || -1);
  }

  public onDetailsClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donations/${donationId}/details`]);
  }

  public onEndDonationClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/bloodstorage/${donationId}/enddonation`]);
  }

  public onStatusChangeClick(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.router.navigate([`worker/donation/${donationId}/changestatus`]);
  }
}
