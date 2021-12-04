import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (
          /^(\/api\/)/i.test(request.url) &&
          [401, 403, 500].includes(error.status)
        ) {
          console.log('api error (logout)', error);
          this.auth.logout();
        } else {
          console.log(error);
          const messages =
            error.error !== null
              ? error.error.map(
                  (e: any) =>
                    (e.propertyName.length !== 0 ? e.propertyName + ': ' : '') +
                    e.message
                )
              : '';
          const message =
            messages.length === 0
              ? 'API samo nie wie czemu nie działa.'
              : messages.join(',');

          this.matSnackBar.open(`API ERROR: ${message}`, 'Close', {
            duration: 15 * 1000,
          });

          if (request.method !== 'POST')
            // includes
            this.router.navigate(['']);
        }
        return throwError(error);
      })
    );
  }
}
