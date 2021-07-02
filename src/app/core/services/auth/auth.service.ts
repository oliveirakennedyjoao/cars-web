import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import UserCredentialsDTO from '../../../shared/models/entities/UserCredentialsDTO.type';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = `${environment.apiUrl}users`;

  constructor(
    private router: Router, 
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) { }
  
  login(loginCredentials: UserCredentialsDTO) {    
    return this.httpClient
    .get(`${this.apiUrl}?login=${loginCredentials.login}`)
    .pipe(      
      map(
        (response) => {                
        console.log(response);
        this.localStorage.store('userLogged', response);
        return response;
      }),
      take(1)
    );
  }

  logout() {        
    localStorage.clear();
    this.router.navigateByUrl('signin');
  }

  clear() {}

}
