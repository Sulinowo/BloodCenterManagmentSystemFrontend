import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
  //public donationDetails$ = this.profileFacade.donationDetails$;
  // public donationDetailsIdSubscription: Subscription;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private profileFacade: ProfileFacadeService
  //   ) {}

  // public ngOnInit(): void {
  //   this.donationDetailsIdSubscription = this.route.params.pipe(
  //     map((params) => params['?id'] as number),
  //     filter((id) => !!id),
  //     distinctUntilChanged()
  //   ).subscribe((id) => {
  //     this.profileFacade.loadDonationDetails(id);
  //   });
  // }

  // public ngOnDestroy(): void {
  //   this.donationDetailsIdSubscription.unsubscribe();
  // }

  // public navigateToProfilePage(){
  //   this.router.navigate([`/profile`]);
  // }
}
