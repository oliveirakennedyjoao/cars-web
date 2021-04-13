import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import UserDTO from 'src/app/shared/dtos/UserDTO';
import { AlertType } from 'src/app/shared/enums/AlertType';
import { AlertService } from 'src/app/shared/services/alert/alert.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  userForm: FormGroup;
  passwordVisibility: boolean;
  editMode = false;

  constructor(
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.passwordVisibility = true;
    
    let user = <UserDTO> this.route.snapshot.data['user'];
    this.editMode = user != null;

    this.userForm = new FormGroup({            
      login: new FormControl({ value: user.login, disabled: user.login != null}, Validators.required),
      password: new FormControl({ value: user.password, disabled: user.password != null }, Validators.required),
      firstName: new FormControl(user.firstName, Validators.required),
      lastName: new FormControl(user.lastName, Validators.required),
      email: new FormControl(user.email, [Validators.required, Validators.email]),
      birthday: new FormControl(user.birthday, [Validators.required]),      
      phone: new FormControl(user.phone)
    });
  }

  save(){
    try {
      if(!this.userForm.valid){ throw new Error("Invalid Form!"); }

      let result = this.userService.save(<UserDTO> this.userForm.getRawValue(), this.editMode).subscribe(
        success => {                    
          this.navigateToUserList();
          this.alertService.showAlert("User successfully registered!", AlertType.SUCCESS)
          },
        error => { this.alertService.showAlert("Can't save User!", AlertType.ERROR) }
      );      
    } catch (error) {
      this.alertService.showAlert(error.message, AlertType.ERROR)
    }    
  }

  navigateToUserList(){
    this.router.navigateByUrl('users');
  }

}
