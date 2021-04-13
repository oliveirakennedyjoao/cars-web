import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import UserLoginNameDTO from './shared/dtos/UserLoginNameDTO.type';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('drawer') drawer: MatDrawer;
  
  constructor(
    private authService: AuthService
  ){}

  userAutenticated = false;
  title = 'carros-web';
  showFiller = false;

  loadUser(){ this.userAutenticated = true; }
  logout(){ this.authService.logout(); } 
  
  getHelloSignedUser(){
    let signedUser = <UserLoginNameDTO> JSON.parse(localStorage.getItem('signed_user'));
    if(signedUser){
      return signedUser.firstName + (signedUser.lastName ? ` ${signedUser.lastName}` : '');
    }    
  }
}
