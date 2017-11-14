import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingScreenService {

  _loading = false;
  loading$: Subject<boolean> = new BehaviorSubject<boolean>(this._loading);

  set loading(value: boolean) {
    this._loading = value;
    this.loading$.next(value);
  }

  get loading() {
    return this._loading;
  }

  constructor() { }



}
