import { Component, OnInit } from '@angular/core';
import { BloodDonatorDonationsFacadeService } from './blood-donator-donations-facade.service';

@Component({
  selector: 'app-blood-donator-donations-page',
  templateUrl: './blood-donator-donations-page.component.html',
  styleUrls: ['./blood-donator-donations-page.component.scss'],
})
export class BloodDonatorDonationsPageComponent implements OnInit {
  public bloodDonatorDonations$ = this.bloodDonatorDonationsFacade.bloodDonatorDonations$;

  constructor(
    private bloodDonatorDonationsFacade: BloodDonatorDonationsFacadeService
  ) {}

  ngOnInit(): void {
    this.bloodDonatorDonationsFacade.loadDonationsData(2);
  }
}
