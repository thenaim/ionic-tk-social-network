import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppEventsService {

  public tabClicks: BehaviorSubject<any> = new BehaviorSubject('');
  public onTabClicks: Observable<any> = this.tabClicks;

  constructor() { }
}
