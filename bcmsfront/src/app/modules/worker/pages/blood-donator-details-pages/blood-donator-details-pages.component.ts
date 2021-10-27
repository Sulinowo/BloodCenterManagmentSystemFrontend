import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/core/models/user-data';
import { BloodDonatorDetailsFacadeService } from './blood-donator-details-facade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blood-donator-details-pages',
  templateUrl: './blood-donator-details-pages.component.html',
  styleUrls: ['./blood-donator-details-pages.component.scss'],
})
export class BloodDonatorDetailsPagesComponent implements OnInit {
  public bloodDonator$ = this.bloodDonatorDetailsFacade.bloodDonator$;

  constructor(
    private bloodDonatorDetailsFacade: BloodDonatorDetailsFacadeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap);
    const id = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.bloodDonatorDetailsFacade.loadProfile(parseInt(id) || -1);
  }

  public onProfileEdit(user: UserData): void {
    this.bloodDonatorDetailsFacade.editBloodDonatorData(user);
  }
}
