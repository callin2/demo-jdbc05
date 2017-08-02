import { Component, OnInit, /*AfterViewInit,*/ AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as GlobalConfig from '../global.config';
import { AlertService } from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentication.service';

import { AgensRequestConnect } from '../../models/agens-request-connect';


@Component({
  selector: 'ag-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterContentChecked {

  request: AgensRequestConnect;

  isChecked:boolean = false;
  returnUrl: string;
  databaseValue: string;

  data = [
    {viewValue: 'BIT'},
    {viewValue: 'NINE'},
    {viewValue: 'MANAGER'}
  ];
    
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService,
    private alertService: AlertService
  ) { 
    this.request = new AgensRequestConnect();
  }

  ngOnInit(){
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.isChecked = false;

    this.request.host = '127.0.0.1';
    this.request.port = '6179';
    this.request.db = 'imdb';
    this.request.user_id = 'agraph';
    this.request.user_pw = '';

    // for TEST
    if( GlobalConfig.DEV_MODE ){
      console.log( "GlobalConfig.DEV_MODE =", GlobalConfig.DEV_MODE);
      this.request.host = '27.117.163.21';
      this.request.port = '15602';
    }

    // reset login status
    this.auth.logout();

    // remember me
    let rememberMe = localStorage.getItem("rememberMe");
    console.log( "rememberMe="+rememberMe );
    if( rememberMe && rememberMe == "true" ){
      this.isChecked = true;
      let host = localStorage.getItem("rememberMe_host");
      if( host && host !== "" ) this.request.host = host;
      let port = localStorage.getItem("rememberMe_port");
      if( port && port !== "" ) this.request.port = port;
      let db = localStorage.getItem("rememberMe_db");
      if( db && db !== "" ) this.request.db = db;
      let user_id = localStorage.getItem("rememberMe_user_id");
      if( user_id && user_id !== "" ) this.request.user_id = user_id;
      let user_pw = localStorage.getItem("rememberMe_user_pw");
      if( user_pw && user_pw !== "" ) this.request.user_pw = user_pw;
    }
  }

/*    
  ngAfterViewInit(){
    // reset login status
    this.auth.logout();

    // remember me
    let rememberMe = localStorage.getItem("rememberMe");
    console.log( "rememberMe="+rememberMe );
    if( rememberMe && rememberMe == "true" ){
      this.isChecked = true;
      let host = localStorage.getItem("rememberMe_host");
      if( host && host !== "" ) this.request.host = host;
      let port = localStorage.getItem("rememberMe_port");
      if( port && port !== "" ) this.request.port = port;
      let db = localStorage.getItem("rememberMe_db");
      if( db && db !== "" ) this.request.db = db;
      let user_id = localStorage.getItem("rememberMe_user_id");
      if( user_id && user_id !== "" ) this.request.user_id = user_id;
      let user_pw = localStorage.getItem("rememberMe_user_pw");
      if( user_pw && user_pw !== "" ) this.request.user_pw = user_pw;
    }
  }
*/    

  login() {
    this.auth.login(this.request)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
            });
  }

  onChangeCheckbox(){
    // if rememberMe is checked
    // if( event.checked ){
    if( this.isChecked ){
      localStorage.setItem("rememberMe", "true");
      localStorage.setItem("rememberMe_host", this.request.host);
      localStorage.setItem("rememberMe_port", this.request.port);
      localStorage.setItem("rememberMe_db", this.request.db);
      localStorage.setItem("rememberMe_user_id", this.request.user_id);
      localStorage.setItem("rememberMe_user_pw", this.request.user_pw);
    }
    else{
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("rememberMe_host");
      localStorage.removeItem("rememberMe_port");
      localStorage.removeItem("rememberMe_db");
      localStorage.removeItem("rememberMe_user_id");
      localStorage.removeItem("rememberMe_user_pw");
    }
  }

  ngAfterContentChecked(){
    this.onChangeCheckbox();
  }
}