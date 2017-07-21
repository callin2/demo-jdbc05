import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let userInfo = this.auth.getUserInfo();
    if( !userInfo ){
      return Promise.resolve(false);
    }
    // console.log('AdminGuard.canActivate() =>', userInfo);
    if( !userInfo.hasOwnProperty('authorities') || userInfo.authorities.indexOf('ROLE_ADMIN') < 0 ){
      return Promise.resolve(false);
    }

    return Promise.resolve(true);
  }

}
