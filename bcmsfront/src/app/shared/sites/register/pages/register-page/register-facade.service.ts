import { Injectable } from '@angular/core';
import { RegisterClientService } from '../../client/register-client.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterFacadeService {

  constructor(public registerClient : RegisterClientService) { }

  public sendMail(mail:string) {
    this.registerClient.sendMail(mail).subscribe();
  }
}
