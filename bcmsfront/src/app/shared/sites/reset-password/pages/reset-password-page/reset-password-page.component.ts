import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResetPasswordFacadeService } from './reset-password-facade.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordPageComponent {
  constructor(private resetPasswordFacade: ResetPasswordFacadeService) {}

  public onEmailClicked(email: string): void {
    this.resetPasswordFacade.resetPassword(email);
  }
}
