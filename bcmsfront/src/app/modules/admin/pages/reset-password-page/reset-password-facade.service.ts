import { Injectable } from '@angular/core';
import { AdminClientService } from '../../clients/admin-client.service';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordFacadeService {
  constructor(public adminClient: AdminClientService) {}

  public resetPassword(mail: string) {
    this.adminClient.sendResetPasswordEmail(mail).subscribe();
  }
}
