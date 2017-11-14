import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

export class DateService {

  // Emitter of changes
  dayChanges$ = new BehaviorSubject<number>(0);

  // Acum dayChanges, and resolve a number equals of the different days from today
  dayFromToday$ = this.dayChanges$.scan((ov, nv) => ov + nv, 0);

  // Resolve Current Date base on the number resolved by dayFromToday$
  currentDate$ = this.dayFromToday$.map(n => moment().add(n, 'days'));

  // Resolve Previous Date base on Current Date
  previousDate$ = this.currentDate$.map(m => m.clone().subtract(1, 'days'));

  // Resolve Next Date base on Current Date
  nextDate$ = this.currentDate$.map(m => m.clone().add(1, 'days'));

  constructor() {}

}
