import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class NavListFacadeService {
  constructor(public authUser: AuthService) {}

  public onLogoutClick() {
    this.authUser.logout();
  }
}
