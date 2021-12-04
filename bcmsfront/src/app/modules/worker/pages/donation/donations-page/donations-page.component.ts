import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationGet } from 'src/app/core/models/donation-full';
import { DonationsFacadeService } from './donations-facade.service';

@Component({
  selector: 'app-donations-page',
  templateUrl: './donations-page.component.html',
  styleUrls: ['./donations-page.component.scss'],
})
export class DonationsPageComponent implements OnInit {
  public allDonations$ = this.donationFacade.allDonations$;

  constructor(
    private donationFacade: DonationsFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.donationFacade.onGetAllDonations();
  }

  public onDonationsClick(data: DonationGet): void {
    this.router.navigate([`worker/donations/${data.id}`]);
  }
}
