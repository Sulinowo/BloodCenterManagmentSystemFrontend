import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donator } from 'src/app/core/models/donator';
import { BloodDonatorFacadeService } from './blood-donator-facade.service';

@Component({
  selector: 'app-blood-donator-pages',
  templateUrl: './blood-donator-pages.component.html',
  styleUrls: ['./blood-donator-pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BloodDonatorPagesComponent implements OnInit {
  public donators$ = this.bloodDonatorFacade.donators$;

  constructor(
    private bloodDonatorFacade: BloodDonatorFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bloodDonatorFacade.loadDonators();
  }

  public addDonator(data: Donator): void {
    this.bloodDonatorFacade.addDonator(data);
    this.bloodDonatorFacade.loadDonators();
  }

  public onAddDonationClick(data: Donator): void {
    this.bloodDonatorFacade.addDonation(data.user.id);
  }
}
