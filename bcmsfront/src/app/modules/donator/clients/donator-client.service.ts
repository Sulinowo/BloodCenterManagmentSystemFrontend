import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';
import { Donator } from 'src/app/core/models/donator';
import { Examination, ExaminationPatch } from 'src/app/core/models/examination';
import { UserData } from 'src/app/core/models/user-data';

@Injectable({
  providedIn: 'root',
})

export class DonatorClientService {

  constructor(private httpClient: HttpClient) {}

  public getBloodDonatorByID(id: number): Observable<Donator>{
    return this.httpClient.get<Donator>(`http://localhost:4200/api/blooddonators/${id}`);
  }

  public getBloodDonatorDonations(userId: number): Observable<Donation[]>{
    return this.httpClient.get<Donation[]>(`http://localhost:4200/api/blooddonators/${userId}/donations`);
  }

  public getDonationDetails(donationId: number): Observable<DonationDetails>{
    return this.httpClient.get<DonationDetails>(`http://localhost:4200/api/donations/${donationId}/details`);
  }

  public addExamination(data: Examination): Observable<Examination>{
    return this.httpClient.post<Examination>(`http://localhost:4200/api/examinations`,{...data});
  }

  public addExaminationPatch(data: ExaminationPatch): Observable<ExaminationPatch>{
    return this.httpClient.patch<ExaminationPatch>(`http://localhost:4200/api/examinations`,{...data});
  }

  public updateProfileData(data:UserData): Observable<UserData>{
    return this.httpClient.patch<UserData>(`http://localhost:4200/api/Users`,{...data});
  }
}
