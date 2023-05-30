import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    NoPagesFoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    AuthComponent,
    NoPagesFoundComponent,
  ],
})
export class AuthModule { }
