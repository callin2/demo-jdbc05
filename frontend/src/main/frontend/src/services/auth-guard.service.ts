import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import "rxjs/add/operator/take";

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private http: Http,
    private router: Router,
    private auth: AuthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let token = this.auth.getToken();
    // console.log('canActivate(1) =>', token);
    if( !token ){
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return Promise.resolve(false);
    } 

    // **NOTE: 해결됨
    // ==> 1) http.get 에서 리턴되는 Observable 내지 Promise를 또 한번 감싸려했기 때문에 안되었던 것!!
    // ==> 2) 한번 요청(검사시도)에 한번만 true/false 가 반환되어야 함
    const url = `${this.auth.apiUrl}/is_login`;
    // console.log('canActivate(2) =>', url);
    return this.http.get(url, {headers: this.auth.createAuthorizationHeader(token)})
        .map((res: Response) => res.json())
        .toPromise()
        // (fixed) **NOTE: 오류 뱉고 멈춤
        // ==> TypeError: Cannot read property 'then' of null
        .then(data => {
          // console.log('canActivate(3) =>', data);
          if( data && data.status && data.status === 'true' ) return true;
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return false;
        },err => {
          console.error( 'canActivate() :', err );
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return false;
        });

/*
    // **NOTE: 임시방편
    if( this.auth.getToken() ) return true;
    else{
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
*/
  }

}
