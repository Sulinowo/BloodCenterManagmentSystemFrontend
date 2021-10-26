import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Donator } from 'src/app/core/models/donator';

@Injectable({
  providedIn: 'root'
})
export class BloodDonatorService {
  public donators$ = new BehaviorSubject<Donator[]>([]);
  public addDonator$ = new BehaviorSubject<Donator>({});

  public initialize(donators: Donator[]): void {
    this.donators$.next(donators);
  }

  public addBloodDonator(donator: Donator): void{
    this.addDonator$.next(donator);
  }
  
}
