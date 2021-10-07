import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BloodNeededFacadeService } from './blood-needed-facade.service';

@Component({
  selector: 'app-blood-needed-page',
  templateUrl: './blood-needed-page.component.html',
  styleUrls: ['./blood-needed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BloodNeededPageComponent implements OnInit {
  public bloodAmount$ = this.bloodNeededFacade.bloodAmount$;

  constructor(
    private bloodNeededFacade: BloodNeededFacadeService
  ){}

  public ngOnInit(): void {
    this.bloodNeededFacade.loadBloodAmountData();
  }
}
