import { Component, OnInit } from '@angular/core';
import { AddWorkerFacadeService } from './add-worker-facade.service'
import { NewWorker } from 'src/app/core/models/add-worker';

@Component({
  selector: 'app-add-worker-page',
  templateUrl: './add-worker-page.component.html',
  styleUrls: ['./add-worker-page.component.scss']
})
export class AddWorkerPageComponent {

  constructor(
    private addWorkerFacade: AddWorkerFacadeService,
  ) { }

  public onAddWorker(worker: NewWorker): void {
    this.addWorkerFacade.addNewWorker(worker);
  }

}
