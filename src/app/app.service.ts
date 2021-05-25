import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public appReady$ = new BehaviorSubject<boolean>(false);
  constructor() {}
}
