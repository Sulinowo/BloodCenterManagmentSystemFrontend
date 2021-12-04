import { Injectable } from '@angular/core';
import { EditWorker } from 'src/app/core/models/edit-worker';
import { AuthService } from 'src/app/core/services/auth.service';
import { WorkerClientService } from '../../clients/worker-client.service';
import { WorkerProfileService } from '../../services/worker-profile.service';

@Injectable({
  providedIn: 'root',
})
export class WorkerProfileFacadeService {
  public worker$ = this.profileService.worker$;

  constructor(
    private profileService: WorkerProfileService,
    private workerClient: WorkerClientService,
    private auth: AuthService
  ) {}

  public loadWorkerProfile(userId: number): void {
    this.workerClient
      .getWorkerProfile(this.auth.getData('UserId'))
      .subscribe((data) => this.profileService.initialize(data));
  }

  public editWorkerProfile(data: EditWorker): void {
    this.workerClient
      .editWorkerProfile({ ...data, id: parseInt(this.auth.getData('UserId')) })
      .subscribe((_) => {
        this.loadWorkerProfile(this.auth.getData('UserId'));
      });
  }
}
