import { Component, OnInit } from '@angular/core';
import { EditWorker } from 'src/app/core/models/edit-worker';
import { AuthService } from 'src/app/core/services/auth.service';
import { AdminProfileFacadeService } from './admin-profile-facade.service';

@Component({
  selector: 'app-admin-profile-page',
  templateUrl: './admin-profile-page.component.html',
  styleUrls: ['./admin-profile-page.component.scss']
})
export class AdminProfilePageComponent implements OnInit {
  public admin$ = this.adminProfileFacade.admin$;

  constructor(
    private adminProfileFacade: AdminProfileFacadeService,
    private auth: AuthService
  ) {}

  public ngOnInit(): void {
    this.adminProfileFacade.loadAdminProfile(this.auth.getData('UserId'));
  }

  public editAdminProfile(user: EditWorker): void {
    this.adminProfileFacade.editAdminProfile(user);
  }
}
