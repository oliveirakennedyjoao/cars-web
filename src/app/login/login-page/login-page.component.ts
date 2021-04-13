import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import UserCredentialsDTO from 'src/app/shared/dtos/UserCredentialsDTO.type';
import { AlertType } from 'src/app/shared/enums/AlertType';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
  @Output() onSignIn = new EventEmitter(); 
  
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({            
      login: new FormControl(),
      password: new FormControl()
    });
  }

  async signing(){
    let result = await this.authService.login(<UserCredentialsDTO> this.loginForm.value).subscribe(
      success => {
        this.onSignIn.emit();
        this.router.navigateByUrl('home');      
      },
      error => {        
        this.alertService.showAlert("Invalid User", AlertType.ERROR);
      },
    );
  }
}
