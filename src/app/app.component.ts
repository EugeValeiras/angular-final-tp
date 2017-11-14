import {Component} from '@angular/core';
import {Role, RoleService} from './service/role.service';
import {LoadingScreenService} from './service/loading-screen.service';
import {DateService} from './service/date.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fontSize', [
      state('h2', style({fontSize: '1.5em'})),
      state('h3', style({fontSize: '1.17em'})),
      state('h4', style({fontSize: '1em'})),
      transition('* => *', [
        animate('1s 0s ease-in')
      ]),
    ]),
    trigger('btnState', [
      state('default', style({opacity: 1})),
      state('loading', style({opacity: 0.3})),
      transition('default => loading', [
        animate(1000)
      ]),
      transition('loading => default', [
        animate('1s 0s ease-in')
      ])
    ]),
    trigger('dateChange', [
      state('moveUp', style({
        transform: 'translateY(-10px)'
      })),
      state('moveDown', style({
        transform: 'translateY(10px)'
      })),
      state('static', style({
        transform: 'translateY(0)'
      })),
      transition('* => *', [
        animate('500ms ease-out'),
      ]),
    ])
  ]
})
export class AppComponent {
  title = 'app';
  role = Role;
  requesting = false;
  animating = false;
  timeout = 2000;

  dateState = 'static';
  fontSize = 'h2';

  constructor(public roleService: RoleService,
              public loadingScreen: LoadingScreenService,
              public dateService: DateService) {
  }

  animatingFakeRequest() {
    this.animating = true;
    this.fakeRequest();
  }

  nextDate() {
    this.dateState = 'moveUp';
    this.dateService.dayChanges$.next(1);
    setTimeout(() => {
      this.dateState = 'static';
    }, 500);
  }

  previousDate() {
    this.dateState = 'moveDown';
    this.dateService.dayChanges$.next(-1);
    setTimeout(() => {
      this.dateState = 'static';
    }, 500);
  }

  fakeRequest() {
    this.requesting = true;
    // request().then
    setTimeout(() => {
      this.requesting = false;
      this.animating = false;
    }, this.timeout);
  }

  showLoadingScreen() {
    this.loadingScreen.loading = true;
    setTimeout(() => {
      this.loadingScreen.loading = false;
    }, 3000);
  }
}
