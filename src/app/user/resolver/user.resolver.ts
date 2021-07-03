import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import UserDTO from 'src/app/shared/models/entities/UserDTO';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {

  constructor(
    private userService: UserService
  ){}

  resolve(rotaSnap: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<UserDTO> {
      /*return this.userService.getById(rotaSnap.params.id).pipe(
        catchError((error) => { return EMPTY })
      );*/

      return;
  }
}