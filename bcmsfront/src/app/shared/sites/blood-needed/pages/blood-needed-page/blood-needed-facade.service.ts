import { Injectable } from '@angular/core';
import { BloodNeededClientService } from '../../client/blood-needed-client.service';
import { BloodNeededService } from '../../services/blood-needed.service';

@Injectable({
  providedIn: 'root',
})
export class BloodNeededFacadeService {
  public bloodAmount$ = this.bloodNeededService.bloodAmount$;

  constructor(
    private bloodNeededService: BloodNeededService,
    private bloodNeededClient: BloodNeededClientService
  ) {}

  public loadBloodAmountData(): void {
    this.bloodNeededClient.getBloodAmount().subscribe((data) => {
      this.bloodNeededService.initialize(data);
    });
  }
}
