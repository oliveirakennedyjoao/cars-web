import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { take } from 'rxjs/operators'

import UserDTO from 'src/app/shared/dtos/UserDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user_api_url = environment.apiUrl + 'users';

  constructor(private httpClient: HttpClient) { }

  private create(object: UserDTO){    
    return this.httpClient.post(this.user_api_url, object).pipe(take(1));
  }

  private update(object: UserDTO){
    return this.httpClient.put(`${this.user_api_url}/${object['login']}`, object).pipe(take(1));
  }

  get(){
    return this.httpClient.get<UserDTO[]>(this.user_api_url).pipe(take(1));
  }  

  getById(userId){
    return this.httpClient.get<UserDTO>(`${this.user_api_url}/${userId}`).pipe(take(1));
  }

  save(object: UserDTO, editMode: boolean){               
    return editMode ? this.update(object) : this.create(object);
  }

  delete(userId){
    return this.httpClient.delete(`${this.user_api_url}/${userId}`).pipe(take(1));
  }
}
