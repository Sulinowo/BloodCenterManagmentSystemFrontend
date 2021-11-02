import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodStorage } from 'src/app/core/models/bloodstorage';
import { BloodStorageFacadeService } from './blood-storage-facade.service';

@Component({
  selector: 'app-blood-storage-page',
  templateUrl: './blood-storage-page.component.html',
  styleUrls: ['./blood-storage-page.component.scss'],
})
export class BloodStoragePageComponent implements OnInit {
  public bloodUnits$ = this.bloodStorageFacade.bloodUnits$;
  
  constructor(
    private bloodStorageFacade: BloodStorageFacadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bloodStorageFacade.loadBloodUnits();
  }

  public onBloodUnitClick(bloodUnit: BloodStorage): void {
    this.bloodStorageFacade.setBloodUnitNotAvailable(bloodUnit.id);
  }
}
