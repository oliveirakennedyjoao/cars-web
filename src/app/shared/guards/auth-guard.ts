import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private storateService: LocalStorageService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.storateService.getItem('userLogged') != null){
      return true;
    } else {
      this.router.navigate(['signin']);
      return false;
    }
  }
}