import { Injectable } from '@angular/core';
import { NewWorker } from 'src/app/core/models/add-worker';
import { AdminClientService } from '../../clients/admin-client.service';
import { AddWorkersService } from '../../services/add-workers.service';

@Injectable({
  providedIn: 'root'
})
export class AddAdminFacadeService {
  public admin$ = this.addWorkersService.admin$;

  constructor(
    private addWorkersService: AddWorkersService,
    private adminClient: AdminClientService,
  ) { }

  public addNewAdmin(admin: NewWorker): void {
    this.adminClient.addNewAdmin(admin).subscribe((data) => {
      this.addWorkersService.addNewAdmin(data);
    });
  }
}
