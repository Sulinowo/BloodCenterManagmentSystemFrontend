import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SetPasswordFacadeService } from './set-password-facade.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-password-page',
  templateUrl: './set-password-page.component.html',
  styleUrls: ['./set-password-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetPasswordPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private setPasswordFacade: SetPasswordFacadeService
  ) {}

  public ngOnInit() {
    const email = this.route.snapshot.queryParams.userEmail || undefined;
    const code = this.route.snapshot.queryParams.code || undefined;

    if (email !== undefined && code !== undefined)
      this.setPasswordFacade.setOtherDetails(email, code);
    else alert('Coś nie działa!');
  }

  public onSetPasswordClicked(password: string) {
    this.setPasswordFacade.setPassword(password);
  }
}
