import { Component, OnInit } from '@angular/core';
import { ResetPasswordFacadeService } from 'src/app/modules/donator/pages/reset-password-page/reset-password-facade.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent implements OnInit {
  constructor(private resetPasswordFacade: ResetPasswordFacadeService) {}

  ngOnInit(): void {}

  public onEmailClicked(email: string): void {
    this.resetPasswordFacade.resetPassword(email);
  }
}
