import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodStorage } from 'src/app/core/models/bloodstorage';
import { Donation } from 'src/app/core/models/donation';
import { DonationDetails } from 'src/app/core/models/donation-details';
import { DonationFull, DonationGet } from 'src/app/core/models/donation-full';
import { DonationPatch } from 'src/app/core/models/donation-patch';
import { Donator } from 'src/app/core/models/donator';
import { EditWorker, WorkerAccount } from 'src/app/core/models/edit-worker';
import {
  EditExamination,
  Examination,
  ExaminationPatch,
} from 'src/app/core/models/examination';
import { UserData } from 'src/app/core/models/user-data';

@Injectable({
  providedIn: 'root',
})
export class WorkerClientService {
  constructor(private httpClient: HttpClient) {}

  public getBloodDonatorByID(id: number): Observable<Donator> {
    return this.httpClient.get<Donator>(`/api/blooddonators/${id}`); //
  }

  public getAllBloodDonators(): Observable<Donator[]> {
    return this.httpClient.get<Donator[]>(`/api/blooddonators`); //
  }

  public addDonator(data: any): Observable<Donator> {
    return this.httpClient.post<Donator>(`/api/blooddonators`, {
      pesel: data.pesel,
      homeAdress: data.homeAdress,
      phoneNumber: data.phoneNumber,
      bloodType: { bloodTypeName: data.bloodTypeName },
      user: {
        email: data.email,
        firstname: data.firstName,
        surname: data.surname,
      },
    }); //
  }

  public getBloodDonatorDonations(userId: number): Observable<Donation[]> {
    return this.httpClient.get<Donation[]>(
      `/api/blooddonators/${userId}/donations`
    ); //
  }

  public addBloodUnitToStorage(
    donationId: number,
    isAfterCovid: boolean
  ): Observable<BloodStorage> {
    return this.httpClient.post<BloodStorage>(`/api/bloodstorages`, {
      donationId,
      isAfterCovid,
    }); //
  }

  public getAllAvailableBloodUnit(): Observable<BloodStorage[]> {
    return this.httpClient.get<BloodStorage[]>(`/api/bloodstorages`); //
  }

  public addBloodUnitFromForeignBloodBank(
    bloodTypeName: string,
    foreignBloodUnitId: number,
    bloodUnitLocation: string,
    isAfterCovid: boolean
  ): Observable<BloodStorage> {
    return this.httpClient.post<BloodStorage>(`/api/bloodstorages/foreign`, {
      bloodTypeName,
      foreignBloodUnitId,
      bloodUnitLocation,
      isAfterCovid,
    }); //
  }

  public setBloodUnitNotAvailable(
    bloodUnitId: number
  ): Observable<BloodStorage> {
    return this.httpClient.patch<BloodStorage>(
      `/api/bloodstorages/${bloodUnitId}`,
      {}
    ); //
  }

  public addDonation(userId: number): Observable<DonationFull> {
    return this.httpClient.post<DonationFull>(`/api/donations/${userId}`, {});
  }

  public getAllDonations(): Observable<DonationGet[]> {
    return this.httpClient.get<DonationGet[]>(`/api/donations`);
  }

  public donationPatch(data: DonationPatch): Observable<DonationPatch> {
    return this.httpClient.patch<DonationPatch>(`/api/donations`, { ...data });
  }

  public getDonationDetails(donationId: number): Observable<DonationDetails> {
    return this.httpClient.get<DonationDetails>(
      `/api/donations/${donationId}/details`
    ); //
  }

  public getDonation(donationId: number): Observable<DonationFull> {
    return this.httpClient.get<DonationFull>(`/api/donations/${donationId}`);
  }

  public addExamination(data: Examination): Observable<Examination> {
    return this.httpClient.post<Examination>(`/api/examinations`, { ...data }); //
  }

  public addExaminationPatch(
    data: ExaminationPatch
  ): Observable<ExaminationPatch> {
    return this.httpClient.patch<ExaminationPatch>(`/api/examinations`, {
      ...data,
    }); //
  }

  public editExamination(data: EditExamination): Observable<EditExamination> {
    return this.httpClient.patch<EditExamination>(
      `/api/examinations/fixbloodexamination`,
      {
        ...data,
      }
    );
  }

  public updateProfileData(data: UserData): Observable<UserData> {
    return this.httpClient.patch<UserData>(`/api/blooddonators`, { ...data }); //
  }

  public getRegisteredQueue(): Observable<DonationGet[]> {
    return this.httpClient.get<DonationGet[]>(
      `/api/donations/queue?donationStage=registered`
    );
  }

  public getBloodExaminedQueue(): Observable<DonationGet[]> {
    return this.httpClient.get<DonationGet[]>(
      `/api/donations/queue?donationStage=blood%20examined`
    );
  }

  public getQualifiedQueue(): Observable<DonationGet[]> {
    return this.httpClient.get<DonationGet[]>(
      `/api/donations/queue?donationStage=qualified`
    );
  }

  public getWorkerProfile(userId: number): Observable<WorkerAccount> {
    return this.httpClient.get<WorkerAccount>(`/api/users/${userId}`);
  }

  public editWorkerProfile(data: EditWorker): Observable<EditWorker> {
    return this.httpClient.patch<EditWorker>(`/api/users`, { ...data }); //
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
