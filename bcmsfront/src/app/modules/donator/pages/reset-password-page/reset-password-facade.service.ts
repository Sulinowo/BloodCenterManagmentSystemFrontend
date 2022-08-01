import { Injectable } from '@angular/core';
import { DonatorClientService } from '../../clients/donator-client.service';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordFacadeService {
  constructor(public donatorClient: DonatorClientService) {}

  public resetPassword(mail: string) {
    this.donatorClient.sendResetPasswordEmail(mail).subscribe();
  }
}
