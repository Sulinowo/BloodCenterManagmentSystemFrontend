import { Injectable } from '@angular/core';
import { SetPasswordClientService } from '../../clients/set-password-client.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SetPasswordFacadeService {
  public userEmail: string | undefined;
  public code: string | undefined;

  constructor(
    private router: Router,
    private setPasswordClient: SetPasswordClientService
  ) {}

  public setOtherDetails(
    userEmail: string | undefined,
    code: string | undefined
  ) {
    this.userEmail = userEmail;
    this.code = code;

    this.setPasswordClient.verifyCode(code || '').subscribe(
      (data) => {},
      (err) => {
        console.log(err);
        // this.router.navigate(['/'])
      }
    );
  }

  public setPassword(password: string) {
    this.setPasswordClient
      .verifyEmail(this.userEmail || '', this.code || '', password)
      .subscribe();
  }
}
