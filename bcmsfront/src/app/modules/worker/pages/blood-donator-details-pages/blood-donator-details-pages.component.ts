import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/core/models/user-data';
import { BloodDonatorDetailsFacadeService } from './blood-donator-details-facade.service';

@Component({
  selector: 'app-blood-donator-details-pages',
  templateUrl: './blood-donator-details-pages.component.html',
  styleUrls: ['./blood-donator-details-pages.component.scss'],
})
export class BloodDonatorDetailsPagesComponent implements OnInit {
  public bloodDonator$ = this.bloodDonatorDetailsFacade.bloodDonator$;

  constructor(
    private bloodDonatorDetailsFacade: BloodDonatorDetailsFacadeService,
  ) {}

  ngOnInit(): void {
    this.bloodDonatorDetailsFacade.loadProfile(2);
  }

  public onProfileEdit(user: UserData,): void {
    this.bloodDonatorDetailsFacade.editBloodDonatorData(user);
  }
}
