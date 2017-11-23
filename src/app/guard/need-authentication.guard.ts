import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../service/auth.service';

@Injectable()
export class NeedAuthenticationGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  check() {
    const isLoggedIn = this.authService.isLoggedIn;
    if (isLoggedIn) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }
}
