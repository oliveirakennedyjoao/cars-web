import { Component, OnInit, ViewChild } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import UserDTO from 'src/app/shared/models/entities/UserDTO';
import { AlertType } from 'src/app/shared/models/enums/AlertType';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns;
  dataSource: MatTableDataSource<UserDTO>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
    this.displayedColumns = ['userName', 'email', 'acao'];

    this.getUserList()
  }

  async getUserList(){        
    let result = this.userService.get().subscribe(
      success => {          
        this.dataSource = new MatTableDataSource<UserDTO>(success);
        this.dataSource.paginator = this.paginator;
        //this.pageLoaded = true;
    },
    erro => { this.alertService.showAlert(erro.message, AlertType.ERROR) }
    );    
  }

  navigateTo(endpont: string){    
    this.router.navigateByUrl('users/');    
  }

  editUser(userId){
    this.router.navigate(['users', userId]);
  }

  deleteUser(userId){
    this.userService.delete(userId).subscribe(
      success => {
        this.alertService.showAlert("User Successfully deleted!", AlertType.SUCCESS);
        this.getUserList();        
      },
      erro => { this.alertService.showAlert("Cant delete user!", AlertType.ERROR) }
    );
  }
}

