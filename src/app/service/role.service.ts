import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export enum Role {
  USER, ADMIN
}

@Injectable()
export class RoleService {

  _role: Role = Role.USER;
  role$: BehaviorSubject<Role> = new BehaviorSubject<Role>(this._role);

  set role(value: Role) {
    this._role = value;
    this.role$.next(this._role);
  }

  constructor() { }

  setAdmin() {
    this.role = Role.ADMIN;
  }

  setUser() {
    this.role = Role.USER;
  }

}
