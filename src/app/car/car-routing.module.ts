import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth-guard';
import { CarPageComponent } from './car-page/car-page.component';

const carRoutes: Routes = [
  { path: 'cars', component: CarPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(carRoutes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }