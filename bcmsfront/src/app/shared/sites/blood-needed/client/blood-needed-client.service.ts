import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodType } from 'src/app/core/models/blood-type';

@Injectable({
  providedIn: 'root',
})
export class BloodNeededClientService {
  constructor(private httpClient: HttpClient) {}

  public getBloodAmount(): Observable<BloodType[]> {
    return this.httpClient.get<BloodType[]>(
      'https://localhost:44348/api/bloodtypes'
    );
  }
}
