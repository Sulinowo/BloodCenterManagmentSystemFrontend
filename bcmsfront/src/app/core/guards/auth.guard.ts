import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const logged = ['login', 'register', 'setpassword'];
    if (this.auth.loggedIn()) {
      if (logged.includes(route.url.toString())) {
        this.router.navigate(['/']);
        alert('Nie masz uprawnień, wyloguj sie przed');
        return false;
      }
    }
    return true;
  }
}
