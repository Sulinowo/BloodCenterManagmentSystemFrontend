import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewWorker } from 'src/app/core/models/add-worker';
import { Worker } from 'src/app/core/models/worker';

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

  public getAllWorkers(): Observable<Worker[]> {
    return this.httpClient.get<Worker[]>(`/api/users`);
  }

  public deleteWorker(userId: number): Observable<Worker>{
    return this.httpClient.delete<Worker>(`/api/users/${userId}`);
  }
}
