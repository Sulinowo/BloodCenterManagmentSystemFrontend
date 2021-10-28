import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Donation } from 'src/app/core/models/donation';
import { UserData } from 'src/app/core/models/user-data';
import { ProfileFacadeService } from './profile-facade.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public donator$ = this.profileFacade.donator$;
  public donations$ = this.profileFacade.donations$;

  constructor(
    private profileFacade: ProfileFacadeService,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
    this.profileFacade.loadProfile(this.auth.getData('UserId'));
  }

  public onProfileEdit(user: UserData): void {
    this.profileFacade.editProfile(user);
  }

  public onDonationClick(donation: Donation) {
    console.log(donation);
  }
}
