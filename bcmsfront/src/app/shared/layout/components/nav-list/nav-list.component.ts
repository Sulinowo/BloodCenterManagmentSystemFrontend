import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavListComponent {
  @Input() direction: 'row' | 'column' = 'row';
  @Input() loggedIn = false;
  @Input() role = '';

  constructor(public authUser: AuthService) {}

  get isColumnDirection() {
    return this.direction === 'column';
  }

  public onLogoutClick() {
    this.authUser.logout();
  }
}
