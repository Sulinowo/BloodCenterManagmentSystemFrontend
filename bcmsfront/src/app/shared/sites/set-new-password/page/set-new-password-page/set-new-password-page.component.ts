import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SetNewPasswordFacadeService } from './set-new-password-facade.service';

@Component({
  selector: 'app-set-new-password-page',
  templateUrl: './set-new-password-page.component.html',
  styleUrls: ['./set-new-password-page.component.scss'],
})
export class SetNewPasswordPageComponent {
  constructor(
    private route: ActivatedRoute,
    private setPasswordFacade: SetNewPasswordFacadeService
  ) {}

  public ngOnInit() {
    const email = this.route.snapshot.queryParams.userEmail || undefined;
    const code = this.route.snapshot.queryParams.code || undefined;

    if (email !== undefined && code !== undefined)
      this.setPasswordFacade.setOtherDetails(email, code);
    else;
  }

  public onSetPasswordClicked(password: string) {
    this.setPasswordFacade.setNewPassword(password);
  }
}
