import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import * as GlobalConfig from '../app/global.config';

import { AgensRequestConnect } from '../models/agens-request-connect';

@Injectable()
export class AuthenticationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  public apiUrl = `${window.location.protocol}//${window.location.host}/${GlobalConfig.AGENS_DEMO_API}`;
  private userKey = GlobalConfig.USER_KEY;
  private isDoing = false;
  
  constructor(
    private http: Http
  ) { 
    if( GlobalConfig.DEV_MODE ) this.apiUrl = GlobalConfig.DEV_DEMO_API;    
  }

  public createAuthorizationHeader( token:String ):Headers {
    return new Headers({'Content-Type': 'application/json', 'Authorization':token}); 
  }

  public login(request:AgensRequestConnect) {
    const url = `${this.apiUrl}/connect`;
    console.log( `try login ==> ${url}`);

    return this.http
      .post(url, JSON.stringify(request), {headers: this.headers})
      .map((response: Response) => {
        let user = response.json();
        if( user && user.token ){
            user.host = request.host;
            user.port = request.port;
            user.db = request.db;
            user.user_id = request.user_id;
            
            // auto expire of localStorage = 3600 seconds
            // console.log( JSON.stringify(user));
            this.setStorage( this.userKey, JSON.stringify(user), 3600 );
        }
      });
  }

  public getUserInfo():any {
    // let data = localStorage.getItem(this.userKey);
    let data = sessionStorage.getItem(this.userKey);
    if( data && data !== "" ){
      return JSON.parse( data );
    }
    return null;
  }

  public getToken():string {
    // set expiration for storage
    // let expiresIn = Number(localStorage.getItem(this.userKey+'_expiresIn'));
    let expiresIn = Number(sessionStorage.getItem(this.userKey+'_expiresIn'));
    if( expiresIn===undefined || expiresIn===null ){ 
      return null;
    }

    let token = null;
    // let data = localStorage.getItem(this.userKey);
    let data = sessionStorage.getItem(this.userKey);
    if( data && data !== "" ){
      let user = JSON.parse( data );
      if( user.token && user.token !== "") token = user.token;
    }
    if( !token ) return null;

    let now = Date.now();
    if (expiresIn < now) {  // Expired
      console.log( `userKey Expire: ${expiresIn} < ${now}`);
      // this.removeStorage(this.userKey);
      sessionStorage.removeItem(this.userKey);
      sessionStorage.removeItem(this.userKey + '_expiresIn');
      
      // if userKey, release connection in server (Async)
      if( !this.isDoing ) {
        this.releaseConnection(token).subscribe(
          data => {
            console.log('releaseConnection() is done!');
            this.isDoing = false;
          });
      }
      return null;
    }

    return token;
  }

  // **NOTE: auth-guard.service.ts 의 canActivate() 로 기능을 이동
  public isLogin() {
    let token = this.getToken();
    if( !token ) return null;

    // release connection in server
    const url = `${this.apiUrl}/is_login`;
    
    console.log('check isLogin() <=', url);
    return this.http.get(url, {headers: this.createAuthorizationHeader(token)})
        .map((res: Response) => res.json())
        .toPromise()
        .then(data => {
          if( data && data.status ){
            console.log('isLogin() =>', data);
            if( data.status === 'true') return true;
              // Promise.resolve(true);
          }
          return false;
          // Promise.resolve(false);
        })
        .catch(err => {
          return false;
          // Promise.resolve(false);
        });
  }

  public logout():boolean {
    let token = this.getToken();
    if( !token ) return false;
    
    // remove user from local storage to log user out
    this.removeStorage( this.userKey );
    // if userKey, release connection in server (Async)
    if( !this.isDoing ) {
      this.releaseConnection(token).subscribe(
        data => {
          console.log('releaseConnection() is done!');
          this.isDoing = false;
        });
    }
    return true;
  }

  private handleError(error: any): Promise<any> {
    console.error('!!An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private releaseConnection(token){
    this.isDoing = true;

    // release connection in server
    const url = `${this.apiUrl}/disconnect`;
    
    return this.http.get(url, {headers: this.createAuthorizationHeader(token)})
      .map((response: Response) => {
        console.log('logout() => '+JSON.stringify(response.json()));
      })
      .catch(this.handleError);
  }

  public removeStorage(key) {
    try {
        // localStorage.removeItem(key);
        // localStorage.removeItem(key + '_expiresIn');
        sessionStorage.removeItem(key);
        sessionStorage.removeItem(key + '_expiresIn');
    } catch(e) {
        console.log('removeStorage: Error removing key ['+ key + '] from storage: ' + JSON.stringify(e) );
        return false;
    }
    return true; 
  }

  public getStorage(key) {
    // set expiration for storage
    // var expiresIn = Number(localStorage.getItem(key+'_expiresIn'));
    var expiresIn = Number(sessionStorage.getItem(key+'_expiresIn'));
    if( expiresIn===undefined || expiresIn===null ){ 
      expiresIn = 0; 
    }

    var now = Date.now();
    if (expiresIn < now) {  // Expired
        console.log( `storage Expire('${key}'): ${expiresIn} < ${now}`);
        this.removeStorage(key);
        return null;
    } else {
        try {
            // var value = localStorage.getItem(key);
            var value = sessionStorage.getItem(key);
            return value;
        } catch(e) {
            console.log('getStorage: Error reading key ['+ key + '] from storage: ' + JSON.stringify(e) );
            return null;
        }
    }
  }

  public setStorage(key, value, expires) {
    if( expires===undefined || expires===null ){
        expires = (1*60*60);  // default: seconds for 1 hour
    } else {
        expires = Math.abs(expires); // make sure it's positive
    }

    var now = Date.now();  // millisecs since epoch time, lets deal only with integer
    var schedule = now + expires*1000; 
    try {
        // localStorage.setItem(key, value);
        // localStorage.setItem(key + '_expiresIn', String(schedule));
        sessionStorage.setItem(key, value);
        sessionStorage.setItem(key + '_expiresIn', String(schedule));
    } catch(e) {
        console.log('setStorage: Error setting key ['+ key + '] in storage: ' + JSON.stringify(e) );
        return false;
    }
    return true;
  }

}