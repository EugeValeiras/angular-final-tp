import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import {Route, RouterModule} from '@angular/router';
import {NeedAuthenticationGuard} from '../guard/need-authentication.guard';
import {SharedModule} from '../shared/shared.module';

const mainRouting: Route[] = [
  {path: '', component: MainComponent, children: [
    {path: 'home', component: HomeComponent, canActivate: [NeedAuthenticationGuard]},
    {path: '', redirectTo: '/app/home'},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(mainRouting)
  ],
  declarations: [HomeComponent, MainComponent]
})
export class MainModule { }
