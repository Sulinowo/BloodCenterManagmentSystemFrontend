import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/core/models/user-data';
import { BloodDonatorDetailsFacadeService } from './blood-donator-details-facade.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blood-donator-details-pages',
  templateUrl: './blood-donator-details-pages.component.html',
  styleUrls: ['./blood-donator-details-pages.component.scss'],
})
export class BloodDonatorDetailsPagesComponent implements OnInit {
  public bloodDonator$ = this.bloodDonatorDetailsFacade.bloodDonator$;

  constructor(
    private bloodDonatorDetailsFacade: BloodDonatorDetailsFacadeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.bloodDonatorDetailsFacade.loadProfile(parseInt(id) || -1);
  }

  public onProfileEdit(user: UserData): void {
    const userId = this.route.snapshot.paramMap.get('id') || '';
    this.bloodDonatorDetailsFacade.editBloodDonatorData(user,parseInt(userId));
  }

  public onShowDonationList() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.router.navigate([`worker/blooddonators/${id}/donations`]);
  }
}
