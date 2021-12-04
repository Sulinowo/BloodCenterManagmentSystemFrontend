import { Component } from '@angular/core';
import { BloodStorageForeign } from 'src/app/core/models/bloodstorage';
import { BloodStorageAddForeignBloodFacadeService } from './blood-storage-add-foreign-blood-facade.service';

@Component({
  selector: 'app-blood-storage-add-foreign-blood-page',
  templateUrl: './blood-storage-add-foreign-blood-page.component.html',
  styleUrls: ['./blood-storage-add-foreign-blood-page.component.scss'],
})
export class BloodStorageAddForeignBloodPageComponent {
  constructor(
    private bloodStorageAddBloodFacade: BloodStorageAddForeignBloodFacadeService
  ) {}

  public onAddBloodClick(bloodForeign: BloodStorageForeign): void {
    this.bloodStorageAddBloodFacade.addBloodUnitForeign(
      bloodForeign.bloodTypeName,
      bloodForeign.foreignBloodUnitId,
      bloodForeign.bloodUnitLocation,
      bloodForeign.isAfterCovid
    );
  }
}
