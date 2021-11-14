import { Injectable } from '@angular/core';
import { NewWorker } from 'src/app/core/models/add-worker';
import { AdminClientService } from '../../clients/admin-client.service';
import { AddWorkersService } from '../../services/add-workers.service';

@Injectable({
  providedIn: 'root'
})
export class AddWorkerFacadeService {
  public worker$ = this.addWorkersService.worker$;

  constructor(
    private addWorkersService: AddWorkersService,
    private adminClient: AdminClientService,
  ) { }

  public addNewWorker(worker: NewWorker): void {
    this.adminClient.addNewWorker(worker).subscribe((data) => {
      this.addWorkersService.addNewWorker(data);
    });
  }
}
