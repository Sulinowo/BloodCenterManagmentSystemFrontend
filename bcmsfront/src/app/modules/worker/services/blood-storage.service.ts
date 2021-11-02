import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BloodStorage } from 'src/app/core/models/bloodstorage';

@Injectable({
  providedIn: 'root',
})
export class BloodStorageService {
  public addBloodUnit$ = new BehaviorSubject(<BloodStorage>{});
  public bloodUnits$ = new BehaviorSubject(<BloodStorage[]>[]);
  public addBloodUnitForeign$ = new BehaviorSubject(<BloodStorage>{});
  public setBloodUnitNotAvailable$ = new BehaviorSubject(<BloodStorage>{});

  public addBloodUnit(data: BloodStorage): void {
    this.addBloodUnit$.next(data);
  }

  public loadAvailableBloodUnit(data: BloodStorage[]): void {
    this.bloodUnits$.next(data);
  }

  public addBloodUnitForeign(data: BloodStorage): void {
    this.addBloodUnitForeign$.next(data);
  }

  public setBloodUnitNotAvailable(data: BloodStorage): void {
    this.setBloodUnitNotAvailable$.next(data);
  }
}
