import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: ApiService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add Authorization header with token to the request
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Pass the request through the next interceptor or HttpClient if no token is available
    return next.handle(req).pipe(
      catchError((error) => {
        // Check if the error is due to unauthorized access (token expiration)
        if (error.status === 401) {
          // Refresh token
          return this.authService.refreshToken().pipe(
            switchMap((response: any) => {
              if (response && response.token) {
                localStorage.setItem('token', response.token);
              }
              // Retry the original request with the new token
              req = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              });
              return next.handle(req);
            }),
            catchError((err) => {
              // If token refresh fails, logout the user
              // this.authService.logout();
              return throwError(() => new Error(err));
            })
          );
        } else {
          // Pass the error downstream if it's not related to token expiration
          return throwError(() => new Error(error));
        }
      })
    );
  }
}