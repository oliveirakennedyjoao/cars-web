import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin',  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//{ path: 'signing', component: PageHomeComponent, canActivate: [AuthGuardService] },  
