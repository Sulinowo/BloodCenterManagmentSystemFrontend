import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterClientService {
  constructor(private httpClient: HttpClient) {}

  public sendMail(email: string) {
    return this.httpClient.post(`http://localhost:4200/api/auth/sendmail`, {
      email,
    });
  }
}
