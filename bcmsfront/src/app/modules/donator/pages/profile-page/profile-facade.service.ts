import { Injectable } from '@angular/core';
import { UserData } from 'src/app/core/models/user-data';
import { AuthService } from 'src/app/core/services/auth.service';
import { DonatorClientService } from '../../clients/donator-client.service';
import { DonationService } from '../../services/donation.service';
import { ProfileService } from '../../services/profile.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileFacadeService {
  public donator$ = this.profileService.donator$;
  public donations$ = this.donationService.donations$;
  //public donationDetails$ = this.donationService.donationDetails$; 

  constructor(
    private profileService: ProfileService,
    private donatorClient: DonatorClientService,
    private donationService: DonationService,
    private auth: AuthService
  ) {}

  private loadProfileData(userId: number): void {
    this.donatorClient.getBloodDonatorByID(userId).subscribe((data) =>{
      this.profileService.initialize(data);
    });
  }

  private loadDonationsData(userId: number): void {
    this.donatorClient.getBloodDonatorDonations(userId).subscribe((data) => {
      this.donationService.setDonations(data);
    });
  }

  public loadProfile(userId: number): void {
    this.loadDonationsData(userId);
    this.loadProfileData(userId);
  }

  public editProfile(data: UserData): void {
    this.donatorClient.updateProfileData(data).subscribe((_) => {
      this.loadProfile(2);
    })
  }

  public loadDonationDetails(id: number): void {
    this.donatorClient.getDonationDetails(id).subscribe((donation) => {
      this.donationService.setDonationDetails(donation);
    });
  }

  


}
