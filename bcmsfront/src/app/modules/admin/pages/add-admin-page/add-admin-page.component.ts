import { Component } from '@angular/core';
import { NewWorker } from 'src/app/core/models/add-worker';
import { AddAdminFacadeService } from './add-admin-facade.service';

@Component({
  selector: 'app-add-admin-page',
  templateUrl: './add-admin-page.component.html',
  styleUrls: ['./add-admin-page.component.scss']
})
export class AddAdminPageComponent {
  constructor(
    private addWorkerFacade: AddAdminFacadeService,
  ) { }

  public onAddAdmin(admin: NewWorker): void {
    this.addWorkerFacade.addNewAdmin(admin);
  }

}
