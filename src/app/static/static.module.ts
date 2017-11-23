import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorPageComponent} from './error-page/error-page.component';
import {Route, RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const staticRouting: Route[] = [
  {path: '', redirectTo: '404'},
  {path: '404', component: ErrorPageComponent, data: {message: '404 NOT FOUND'}}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(staticRouting),
    SharedModule
  ],
  declarations: [
    ErrorPageComponent
  ]
})
export class StaticModule { }
