import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SetPasswordClientService {
  constructor(private httpClient: HttpClient) {}

  public verifyEmail(email: string, code: string, password: string) {
    return this.httpClient.post(`http://localhost:4200/api/auth/verifyemail?userEmail=${email}&code=${code}&password=${password}`, {});
  }

  public verifyCode(code: string) {
    return this.httpClient.post(`http://localhost:4200/api/auth/verifycode?code=${code}`, {});
  }
}
