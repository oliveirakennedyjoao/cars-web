import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserCredentials } from 'src/app/shared/models/entities/UserCredentials.type'
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router, 
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) { }
  
  login(userCredentials: UserCredentials) {    
    return this.httpClient
    .post(`${environment.AUTH_URL}`, {...userCredentials, returnSecureToken: true })
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
