import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SetPasswordClientService {
  constructor(private httpClient: HttpClient) {}

  public verifyEmail(userEmail: string, code: string, password: string) {
    return this.httpClient.post(
      `http://localhost:4200/api/auth/verifyemail`,
      {userEmail,code,password}
    );
  }

  public verifyCode(code: string) {
    return this.httpClient.post(
      `http://localhost:4200/api/auth/verifycode`,
      {code}
    );
  }
}
