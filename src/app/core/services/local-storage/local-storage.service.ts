import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  store(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) : any {
    return localStorage.getItem(key);
  }

  getStorage() : Storage {
    return localStorage;
  }

  remove(key: string){
    if(localStorage){
      localStorage.removeItem(key);
    }
  }

  clear(){
    localStorage.clear();
  }
}
