import { Injectable } from '@angular/core';
import { EditWorker } from 'src/app/core/models/edit-worker';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminClientService } from '../../clients/admin-client.service';
import { AdminProfileService } from '../../services/admin-profile.service';

@Injectable({
  providedIn: 'root',
})
export class AdminProfileFacadeService {
  public admin$ = this.profileService.admin$;

  constructor(
    private profileService: AdminProfileService,
    private workerClient: AdminClientService,
    private auth: AuthService
  ) {}

  public loadAdminProfile(userId: number): void {
    this.workerClient
      .getAdminProfile(this.auth.getData('UserId'))
      .subscribe((data) => this.profileService.initialize(data));
  }

  public editAdminProfile(data: EditWorker): void {
    this.workerClient
      .editAdminProfile({ ...data, id: parseInt(this.auth.getData('UserId')) })
      .subscribe((_) => {
        this.loadAdminProfile(this.auth.getData('UserId'));
      });
  }
}
