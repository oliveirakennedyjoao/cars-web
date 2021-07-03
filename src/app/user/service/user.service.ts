import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators'

import UserDTO from 'src/app/shared/models/entities/UserDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API_URL: string;

  constructor(private httpClient: HttpClient) {
    this.USER_API_URL = environment.API_URL + '/' +'user';
  }

  private create(object: UserDTO){    
    return this.httpClient.post(this.USER_API_URL, object).pipe(take(1));
  }

  private update(object: UserDTO){
    return this.httpClient.put(`${this.USER_API_URL}/${object['login']}`, object).pipe(take(1));
  }

  get(){
    return this.httpClient.get<UserDTO[]>(this.USER_API_URL).pipe(take(1));
  }  

  getById(userId){
    return this.httpClient.get<UserDTO>(`${this.USER_API_URL}/${userId}`).pipe(take(1));
  }

  save(object: UserDTO, editMode: boolean){               
    return editMode ? this.update(object) : this.create(object);
  }

  delete(userId){
    return this.httpClient.delete(`${this.USER_API_URL}/${userId}`).pipe(take(1));
  }
}
