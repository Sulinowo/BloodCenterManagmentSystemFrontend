import { Injectable } from '@angular/core';
import { AdminClientService } from '../../clients/admin-client.service';
import { AdminService } from '../../services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class ShowWorkersFacadeService {
  public workers$ = this.adminService.workers$;
  public deleteWorker$ = this.adminService.deleteWorker$;

  constructor(
    private adminService: AdminService,
    private adminClient: AdminClientService
  ) {}

  public loadWorkers(): void {
    this.adminClient.getAllWorkers().subscribe((workers: any) => {
      this.adminService.initializeWorkers(workers);
    });
  }

  public deleteWorker(userId: number): void {
    this.adminClient.deleteWorker(userId).subscribe((worker) => {
      this.adminService.deleteWorker(worker);
    });
  }
}
