import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewWorker } from 'src/app/core/models/add-worker';

@Injectable({
  providedIn: 'root',
})
export class AddWorkersService {
  public worker$ = new BehaviorSubject(<NewWorker>{});
  public admin$ = new BehaviorSubject(<NewWorker>{});

  public addNewWorker(worker: NewWorker): void {
    this.worker$.next(worker);
  }

  public addNewAdmin(admin: NewWorker): void {
    this.admin$.next(admin);
  }
}
