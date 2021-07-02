import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    SideMenuComponent
  ]
})

export class SharedModule { }