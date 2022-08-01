import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { DonationStatusFacadeService } from './donation-status-facade.service';

@Component({
  selector: 'app-donation-status-page',
  templateUrl: './donation-status-page.component.html',
  styleUrls: ['./donation-status-page.component.scss'],
})
export class DonationStatusPageComponent implements OnInit {
  public donationPatch$ = this.donationStatusFacade.donationPatch$;
  constructor(
    private donationStatusFacade: DonationStatusFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public onChangeStatusClick(data: DonationPatch): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.donationStatusFacade.donationPatch(data);
    this.router.navigate([`/worker/donations/${donationId}`]);
  }
}
