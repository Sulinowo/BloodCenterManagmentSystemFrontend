import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewWorker } from 'src/app/core/models/add-worker';

@Injectable({
  providedIn: 'root'
})
export class AdminClientService {
  constructor(private httpClient: HttpClient) {}

  public addNewWorker(worker: NewWorker): Observable<NewWorker> {
    return this.httpClient.post<NewWorker>(`/api/users/worker`, {...worker});
  }

  public addNewAdmin(admin: NewWorker): Observable<NewWorker> {
    return this.httpClient.post<NewWorker>(`/api/users/admin`, {...admin});
  }
}
