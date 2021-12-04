import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onChangeStatusClick(data: DonationPatch): void {
    this.donationStatusFacade.donationPatch(data);
  }
}
