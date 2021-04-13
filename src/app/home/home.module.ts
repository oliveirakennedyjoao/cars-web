import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { }
