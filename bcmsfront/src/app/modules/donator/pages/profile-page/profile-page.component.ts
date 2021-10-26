import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'src/app/core/models/donation';
import { UserData } from 'src/app/core/models/user-data';
import { ProfileFacadeService } from './profile-facade.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  public donator$ = this.profileFacade.donator$;
  public donations$ = this.profileFacade.donations$;

  constructor(
    private profileFacade: ProfileFacadeService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.profileFacade.loadProfile(2);
  }

  public onProfileEdit(user: UserData): void{
    this.profileFacade.editProfile(user);
  }

  public onDonationClick({id: donationId}:Donation) {
    const donationUrl = `/donations/${donationId}`;
    this.router.navigate([donationUrl]);
  }

}
