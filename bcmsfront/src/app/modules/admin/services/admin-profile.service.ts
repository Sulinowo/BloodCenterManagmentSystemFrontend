import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WorkerAccount } from 'src/app/core/models/edit-worker';

@Injectable({
  providedIn: 'root',
})
export class AdminProfileService {
  public admin$ = new BehaviorSubject(<WorkerAccount>{});

  public initialize(user: WorkerAccount): void {
    this.admin$.next(user);
  }
}
