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
    
    //if(rotaSnap.params && rotaSnap.params.id){
      return this.userService.getById(rotaSnap.params.id).pipe(
        catchError((error) => { return EMPTY })
      );      
        //error => { return EMPTY }      
    //}

    /*return of({ 
      firstName: null, 
      lastName: null, 
      email: null, 
      birthday: null, 
      login: null, 
      password: null, 
      phone: null, 
      cars: null });*/
  }
}