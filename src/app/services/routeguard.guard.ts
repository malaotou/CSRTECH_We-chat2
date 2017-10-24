import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticateService } from './authenticate.server'


@Injectable()
export class RouteguardGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.auth.isAuthenticated())
      {
        console.log(this.auth.isAuthenticated());
        console.log('auth.isAuthenticated')
        return true;
      }
      
      else{
        return false;
      }
  }
  constructor(private auth:AuthenticateService){
  }
}
