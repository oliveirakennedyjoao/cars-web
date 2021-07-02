import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor{

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          //this.authService.clearLocalStorage();
          this.router.navigate(['signin']);
        }

        if (!environment.production) {
          console.error(err);
        }
        const error = (err && err.error && err.error.message) || err.statusText;
        return throwError(error);
      })
    );
  }    
}