import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, BehaviorSubject, Observable, of } from 'rxjs';
import { map, delay, tap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import JwtTokenDTO from '../../dtos/JwtTokenDTO.type';
import UserCredentialsDTO from '../../dtos/UserCredentialsDTO.type';
import UserDTO from '../../dtos/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = `${environment.apiUrl}signin`;
    
  private timer: Subscription;
  private _user = new BehaviorSubject<UserDTO>(null);
  
  user$: Observable<UserDTO> = this._user.asObservable();

  private storageEventListener(event: StorageEvent) {
    if (event.storageArea === localStorage) {
      if (event.key === 'logout-event') {
        this._user.next(null);
      }
      if (event.key === 'login-event') {
        location.reload();
      }
    }
  }

  constructor(
      private router: Router, 
      private httpClient: HttpClient
    ) {
    window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('storage', this.storageEventListener.bind(this));
  }

  login(loginCredentials: UserCredentialsDTO) {    
    return this.httpClient
    .post<JwtTokenDTO>(`${this.apiUrl}`, loginCredentials)
    .pipe(      
      map((response) => {                
        this._user.next(<UserDTO> { login: '' });
        
        this.setLocalStorage(response);
        
        localStorage.setItem('login-event', 'login' + Math.random());
        
        this.startTokenTimer();
        
        return response;
      }),
      take(1)
    );
  }

  setLocalStorage(responseToken: JwtTokenDTO) {
    localStorage.setItem('access_token', responseToken.token);
    localStorage.setItem('signed_user', JSON.stringify(responseToken.authenticatedUserDTO));
    localStorage.setItem('refresh_token', responseToken.token);
  }

  private getTokenRemainingTime() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      return 0;
    }
    const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    return expires.getTime() - Date.now();
  }

  private startTokenTimer() {
    const timeout = this.getTokenRemainingTime();
    this.timer = of(true)
      .pipe(
        delay(timeout),
        //tap(() => this.refreshToken().subscribe())
      )
      .subscribe();
  }

  logout() {        
    localStorage.clear();
    this.router.navigateByUrl('signin');
  }

  refreshToken(token: JwtTokenDTO) {
  }

  clearLocalStorage() {}

  private stopTokenTimer() {
    this.timer?.unsubscribe();
  }
}
