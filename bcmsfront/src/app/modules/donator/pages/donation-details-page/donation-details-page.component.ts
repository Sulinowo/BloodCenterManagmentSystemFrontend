import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ProfileFacadeService } from '../profile-page/profile-facade.service';

@Component({
  selector: 'app-donation-details-page',
  templateUrl: './donation-details-page.component.html',
  styleUrls: ['./donation-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DonationDetailsPageComponent {
  public donationDetails$ = this.profileFacade.donationDetails$;

  constructor(
    private profileFacade: ProfileFacadeService,
    private route: ActivatedRoute
  ) {}
  public ngOnInit(): void {
    const donationId = this.route.snapshot.paramMap.get('donationId') || '';
    this.profileFacade.loadDonationDetails(parseInt(donationId) || -1);
  }
}
