import { Injectable } from '@angular/core';
import { Worker } from 'src/app/core/models/worker';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public workers$ = new BehaviorSubject<Worker[]>([] as Worker[]);
  public deleteWorker$ = new BehaviorSubject<Worker>({} as Worker);

  public initializeWorkers(workers: Worker[]): void {
    this.workers$.next(workers);
  }
  
  public deleteWorker(worker: Worker): void {
    this.deleteWorker$.next(worker);
  }
}
