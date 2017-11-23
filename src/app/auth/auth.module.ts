import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NotAuthenticationGuard} from '../guard/not-authentication.guard';

const authRouting: Route[] = [
  {path: '', component: AuthComponent, children: [
    {path: 'login', component: LoginComponent, canActivate: [NotAuthenticationGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [NotAuthenticationGuard]},
  ]},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRouting),
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent]
})
export class AuthModule { }
