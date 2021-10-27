import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(private bloodDonatorFacade: BloodDonatorFacadeService) {}

  ngOnInit(): void {
    this.bloodDonatorFacade.loadDonators();
    this.donators$.subscribe((data) => console.log('nowe dane', data));
  }

  public onAddBloodDonator(data: Donator): void {
    this.bloodDonatorFacade.addDonator(data);
  }
}
