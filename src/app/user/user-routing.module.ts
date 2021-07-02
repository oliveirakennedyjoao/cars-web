import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth-guard';
import { UserResolver } from './resolver/user.resolver';
import { UserListComponent } from './user-list/user-list.component';
import { UserPageComponent } from './user-page/user-page.component';

const userRoutes: Routes = [
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'users/:id', component: UserPageComponent, canActivate: [AuthGuard], resolve: { user: UserResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }