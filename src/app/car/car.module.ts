import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarPageComponent } from './car-page/car-page.component';
import { CarRoutingModule } from './car-routing.module';

@NgModule({
  declarations: [
    CarPageComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }