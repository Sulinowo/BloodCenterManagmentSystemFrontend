import { Component, OnInit } from '@angular/core';
import { EditWorker } from 'src/app/core/models/edit-worker';
import { AuthService } from 'src/app/core/services/auth.service';
import { WorkerProfileFacadeService } from './worker-profile-facade.service';

@Component({
  selector: 'app-worker-profile-page',
  templateUrl: './worker-profile-page.component.html',
  styleUrls: ['./worker-profile-page.component.scss']
})
export class WorkerProfilePageComponent implements OnInit {
  public worker$ = this.workerProfileFacade.worker$;

  constructor(
    private workerProfileFacade: WorkerProfileFacadeService,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
    this.workerProfileFacade.loadWorkerProfile(this.auth.getData('UserId'));
  }

  public editWorkerProfile(user: EditWorker): void {
    this.workerProfileFacade.editWorkerProfile(user);
  }
}
