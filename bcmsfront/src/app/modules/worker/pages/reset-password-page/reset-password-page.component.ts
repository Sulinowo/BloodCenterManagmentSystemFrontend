import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordFacadeService } from 'src/app/modules/donator/pages/reset-password-page/reset-password-facade.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent implements OnInit {
  constructor(
    private resetPasswordFacade: ResetPasswordFacadeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public onEmailClicked(email: string): void {
    this.resetPasswordFacade.resetPassword(email);
  }

  public setNewPassword() {
    this.router.navigate(['/worker/resetpassword']);
  }
}
