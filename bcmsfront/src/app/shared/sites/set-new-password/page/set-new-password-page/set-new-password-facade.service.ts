import { Injectable } from '@angular/core';
import { SetNewPasswordClientService } from '../../client/set-new-password-client.service';

@Injectable({
  providedIn: 'root',
})
export class SetNewPasswordFacadeService {
  public userEmail: string | undefined;
  public code: string | undefined;

  constructor(public adminClient: SetNewPasswordClientService) {}

  public setNewPassword(password: string) {
    this.adminClient
      .setNewPassword(this.userEmail || '', this.code || '', password)
      .subscribe();
  }

  public setOtherDetails(
    userEmail: string | undefined,
    code: string | undefined
  ) {
    this.userEmail = userEmail;
    this.code = code;
  }
}
