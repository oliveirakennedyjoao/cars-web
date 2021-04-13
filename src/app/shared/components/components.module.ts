import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    SideMenuComponent
  ]
})
export class ComponentsModule { }
