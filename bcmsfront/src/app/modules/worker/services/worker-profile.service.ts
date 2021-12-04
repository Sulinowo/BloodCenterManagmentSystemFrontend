import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkerAccount } from 'src/app/core/models/edit-worker';

@Injectable({
  providedIn: 'root',
})
export class WorkerProfileService {
  public worker$ = new BehaviorSubject(<WorkerAccount>{});

  public initialize(user: WorkerAccount): void {
    this.worker$.next(user);
  }
}
