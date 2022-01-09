import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordClientService {
  constructor(private httpClient: HttpClient) {}

  public sendResetPasswordEmail(email: string) {
    return this.httpClient.post(`api/auth/sendresetpasswordmail`, {
      email,
    });
  }
}
