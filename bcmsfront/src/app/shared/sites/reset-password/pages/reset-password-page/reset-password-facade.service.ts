import { Injectable } from '@angular/core';
import { ResetPasswordClientService } from '../../client/reset-password-client.service';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordFacadeService {
  constructor(public resetPasswordClient: ResetPasswordClientService) {}

  public resetPassword(mail: string) {
    this.resetPasswordClient.sendResetPasswordEmail(mail).subscribe();
  }
}
