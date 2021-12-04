import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';
import { Donator } from 'src/app/core/models/donator';
import { EditWorker } from 'src/app/core/models/edit-worker';
import { UserData } from 'src/app/core/models/user-data';

@Injectable({
  providedIn: 'root',
})
export class DonatorClientService {
  constructor(private httpClient: HttpClient) {}

  public getBloodDonatorByID(id: number): Observable<Donator> {
    return this.httpClient.get<Donator>(`/api/blooddonators/${id}`);
  }

  public getBloodDonatorDonations(userId: number): Observable<Donation[]> {
    return this.httpClient.get<Donation[]>(
      `/api/blooddonators/${userId}/donations`
    );
  }

  public getDonationDetails(donationId: number): Observable<DonationDetails> {
    return this.httpClient.get<DonationDetails>(
      `/api/donations/${donationId}/details`
    );
  }

  public updateProfileData(data: UserData): Observable<UserData> {
    return this.httpClient.patch<UserData>(`/api/blooddonators`, {
      ...data,
    });
  }

  public editAdminProfile(data: EditWorker): Observable<EditWorker> {
    return this.httpClient.patch<EditWorker>(`/api/users`, { ...data }); //
  }

  public sendResetPasswordEmail(email: string) {
    return this.httpClient.post(
      `http://localhost:4200/api/auth/sendresetpasswordmail`,
      {
        email,
      }
    );
  }
}
