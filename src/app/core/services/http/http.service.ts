import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService<T> {    

  constructor(    
    protected httpClient: HttpClient    
  ) { }

  private create(url: string, object: T){    
    return this.httpClient.post(url, object).pipe(take(1));
  }

  private update(url: string, object: T){
    return this.httpClient.put(`${url}/${object['id']}`, object).pipe(take(1));
  }

  get(url: string){
    return this.httpClient.get<T[]>(url).pipe(take(1));
  }  

  getById(url: string, objectId){
    return this.httpClient.get<T>(`url/${objectId}`).pipe(take(1));
  }

  save(url: string, object: T){       
    return object['id'] ? this.update(url, object) : this.create(url, object);
  }

  delete(url: string, objectId){
    return this.httpClient.delete(`url/${objectId}`).pipe(take(1));
  }
}
