import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Route, RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AuthService} from './service/auth.service';
import {NeedAuthenticationGuard} from './guard/need-authentication.guard';
import {NotAuthenticationGuard} from './guard/not-authentication.guard';

const appRouting: Route[] = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'app', loadChildren: './main/main.module#MainModule'},
  {path: 'static', loadChildren: './static/static.module#StaticModule'},
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: '**', redirectTo: 'static/404'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRouting)
  ],
  providers: [
    AuthService,
    NeedAuthenticationGuard,
    NotAuthenticationGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
