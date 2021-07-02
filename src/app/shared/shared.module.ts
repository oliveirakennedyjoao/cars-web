import { APP_INITIALIZER, NgModule, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Optional } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UnauthorizedInterceptor } from './interceptors/unauthorized/unauthorized-interceptor';
import { AuthService } from './services/auth/auth.service';
import { AuthInterceptor } from './interceptors/auth/auth-interceptor.service';
import { appInitializer } from './app-initializer';
import { ComponentsModule } from './components/components.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true }
  ],
  exports:[
    SideMenuComponent
  ]
})

export class SharedModule { }