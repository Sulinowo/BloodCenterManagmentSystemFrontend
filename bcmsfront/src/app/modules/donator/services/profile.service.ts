import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Donator } from 'src/app/core/models/donator';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  public donator$ = new BehaviorSubject(<Donator>{});

  public initialize(user: Donator): void {
    this.donator$.next(user);
  }
}
