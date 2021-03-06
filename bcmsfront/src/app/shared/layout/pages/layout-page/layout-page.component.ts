import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { SpinnerService } from 'src/app/core/spinner/spinner.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent implements OnInit, OnDestroy {
  public isLoading$ = this.spinner.isLoading$;

  public loggedIn = false;
  public role = '';

  private test!: Subscription;
  constructor(public auth: AuthService, public spinner: SpinnerService) {}

  public ngOnInit(): void {
    this.auth.user.subscribe(() => {
      this.loggedIn = this.auth.loggedIn();
      this.role = this.auth.getRole();
    });
  }

  public ngOnDestroy() {
    this.test.unsubscribe();
  }
}
