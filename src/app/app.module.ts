import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfRoleDirective } from './directive/if-role.directive';
import {RoleService} from './service/role.service';
import { LoadingButtonDirective } from './directive/loading-button.directive';
import {FormsModule} from '@angular/forms';
import { HoverButtonDirective } from './directive/hover-button.directive';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoadingScreenService} from './service/loading-screen.service';
import {DateService} from './service/date.service';

@NgModule({
  declarations: [
    AppComponent,
    IfRoleDirective,
    LoadingButtonDirective,
    HoverButtonDirective,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    RoleService,
    LoadingScreenService,
    DateService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
