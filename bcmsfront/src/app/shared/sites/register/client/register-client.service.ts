import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  constructor(private httpClient: HttpClient) {}

  public sendMail(email:string) {
    return this.httpClient.post('https://localhost:44348/api/User/SendMail',{email});
  }
}