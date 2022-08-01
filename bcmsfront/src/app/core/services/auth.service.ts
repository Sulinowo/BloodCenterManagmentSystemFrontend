import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserDeatils } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

interface Response {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: BehaviorSubject<User>;
  private timer?: ReturnType<typeof setTimeout>;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user') || '{}')
    );
    if (this.user.value)
      if (this.loggedIn()) {
        this.startRefreshToken();
      }
  }

  public login(email: string, password: string): Observable<void> {
    return this.http
      .post<Response>('/api/auth', {
        email,
        password,
      })
      .pipe(
        map((user) => {
          this.readToken(user);
          this.startRefreshToken();
          this.router.navigate(['/']).then();
        })
      );
  }

  private readToken(user: Response): void {
    const data = <UserDeatils>JSON.parse(atob(user.token.split('.')[1]));
    this.user.next({ ...this.user.value, access_token: user.token, data });
    localStorage.setItem('user', JSON.stringify(this.user.value));
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.user.next(<User>{});
    this.router.navigate(['/']).then();
  }

  public loggedIn(): boolean {
    if (
      this.user.value &&
      this.user.value.access_token &&
      this.user.value.data
    ) {
      if (Date.now() < this.user.value.data.exp * 1000) {
        return true;
      }
    }
    return false;
  }

  public startRefreshToken(): void {
    if (this.user.value.data !== undefined) {
      const expires = new Date(this.user.value.data.exp * 1000);
      const timeout = expires.getTime() - Date.now() - 60000;

      if (timeout <= 0) return this.logout();

      if (this.timer) clearTimeout(this.timer);

      this.timer = setTimeout(() => this.refreshToken(), timeout);
    }
  }

  public refreshToken(next = true): void {
    this.http.post<Response>('/api/auth/regeneratetoken', {}).subscribe(
      (user) => {
        this.readToken(user);
        this.startRefreshToken();
      },
      (error) => {
        this.logout();
      }
    );
  }

  public getToken(): string {
    return this.user.value.access_token;
  }

  public getRole(): string {
    const result = this.user.value.data;
    return result ? result.Role : '';
  }

  public getData(key: keyof UserDeatils): any {
    return this.user.value.data![key];
  }
}
