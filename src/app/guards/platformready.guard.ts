import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
export class PlatformreadyGuard implements CanActivate {
  constructor(private appService: AppService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.appService.appReady$.asObservable().pipe(
      filter((isReady: boolean) => isReady),
      take(1),
      mapTo(true)
    );
  }
}
