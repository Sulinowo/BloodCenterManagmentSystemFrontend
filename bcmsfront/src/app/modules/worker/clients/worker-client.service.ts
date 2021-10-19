import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodStorage } from 'src/app/core/models/bloodstorage';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';
import { DonationFull, DonationGet } from 'src/app/core/models/donation-full';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { Donator } from 'src/app/core/models/donator';
import { Examination, ExaminationPatch } from 'src/app/core/models/examination';
import { UserData } from 'src/app/core/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class WorkerClientService {

  constructor(private httpClient: HttpClient) {}

  public getBloodDonatorByID(id: number): Observable<Donator>{
    return this.httpClient.get<Donator>(`http://localhost:4200/api/blooddonators/${id}`);
  }

  public getAllBloodDonators(): Observable<Donator[]>{
    return this.httpClient.get<Donator[]>(`http://localhost:4200/api/blooddonators`);
  }

  public addDonator(data: Donator): Observable<Donator>{
    return this.httpClient.post<Donator>(`http://localhost:4200/api/blooddonators`,{data});
  }

  public getBloodDonatorDonations(userId: number): Observable<Donation[]>{
    return this.httpClient.get<Donation[]>(`http://localhost:4200/api/blooddonators/${userId}/donations`);
  }

  public addBloodUnitToStorage(dontaionId:number, isAfterCovid:boolean): Observable<BloodStorage>{
    return this.httpClient.post<BloodStorage>(`http://localhost:4200/api/bloodstorages`,{dontaionId,isAfterCovid});
  }

  public getAllAvailableBloodUnit(): Observable<BloodStorage[]>{
    return this.httpClient.get<BloodStorage[]>(`http://localhost:4200/api/bloodstorages`);
  }

  public addBloodUnitFromForeignBloodBank(
    bloodTypeName: string,
    foreignBloodUnitId: number,
    bloodUnitLocation: string, 
    isAfterCovid: boolean): Observable<BloodStorage>{
    return this.httpClient.post<BloodStorage>(`http://localhost:4200/api/bloodstorages/foreign`,{
      bloodTypeName,
      foreignBloodUnitId,
      bloodUnitLocation,
      isAfterCovid
    });
  }

  public setBloodUnitNotAvailable(bloodUnitId: number): Observable<BloodStorage>{
    return this.httpClient.patch<BloodStorage>(`http://localhost:4200/api/bloodstorages/${bloodUnitId}`,{});
  }

  public addDonation(userId: number): Observable<DonationFull>{
    return this.httpClient.post<DonationFull>(`http://localhost:4200/api/donations`,{userId});
  }

  public getAllDonations(): Observable<DonationGet>{
    return this.httpClient.get<DonationGet>(`http://localhost:4200/api/donations`);
  }

  public donationPatch(data: DonationPatch): Observable<DonationPatch>{
    return this.httpClient.patch<DonationPatch>(`http://localhost:4200/api/donations`,{...data});
  }

  public getQueue(donationStage: string): Observable<DonationGet>{
    return this.httpClient.get<DonationGet>(`http://localhost:4200/api/donations/queue?donationStage=${donationStage}`);
  }

  public getDonationDetails(donationId: number): Observable<DonationDetails>{
    return this.httpClient.get<DonationDetails>(`http://localhost:4200/api/donations/${donationId}/details`);
  }

  public getDonation(donationId: number): Observable<DonationFull>{
    return this.httpClient.get<DonationFull>(`http://localhost:4200/api/donations/${donationId}`);
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
