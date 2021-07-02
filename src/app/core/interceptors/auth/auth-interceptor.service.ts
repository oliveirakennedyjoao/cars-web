import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {    
    
    const accessToken = localStorage.getItem('access_token');
    
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    
    if (accessToken && isApiUrl) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` }, });
    }

    return next.handle(request);
  }
}