import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BloodType } from '../../../../core/models/blood-type';

@Injectable({
  providedIn: 'root',
})
export class BloodNeededService {
  public bloodAmount$ = new BehaviorSubject<BloodType[]>([]);

  public initialize(bloodAmount: BloodType[]): void {
    this.bloodAmount$.next(bloodAmount);
  }
}
