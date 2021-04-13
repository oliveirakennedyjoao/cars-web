import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):| Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user$.pipe( map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['signin'], { queryParams: { returnUrl: state.url },});
          return false;
        }
      })
    );
  }
}