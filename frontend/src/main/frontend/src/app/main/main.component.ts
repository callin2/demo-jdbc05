import { Component, ViewChild, OnInit, Inject, AfterViewInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdSidenav } from "@angular/material";
import { MdSnackBar } from '@angular/material';

import * as GlobalConfig from '../global.config';

declare const $: any;

@Component({
  selector: 'ag-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav: MdSidenav;
  
  navMode ='side';
  side = true;
  
  title: string;

  currentPath: string = '/';
  routes: Object[] = [{
      title: 'Dashboard',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Graph Query',
      route: '/graph',
      icon: 'view_quilt',
    }, {
      title: 'Workspace',
      route: '/workspace',
      icon: 'receipt',
    }, {
      title: 'Administration',
      route: '/admin',
      icon: 'people',
    }, {
      title: 'Help',
      route: '/help',
      icon: 'view_module',
    }
  ];

  constructor(
    private router: Router,
    // private _route: ActivatedRoute,
    private _titleService: Title,
    private _snackBarService: MdSnackBar, 
  ){
    this.router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        this.currentPath = this.router.url.split('#')[0];
        const tree = router.parseUrl(this.router.url);
        if (tree.fragment) {
          // console.log( "main.router =>", this.currentPath, '#'+tree.fragment );
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView({block: "start", behavior: "smooth"}); }
        }
      }
    });    
  }


  ngOnInit(){
    this._titleService.setTitle( this.routes[0]['title'] );
    this.title = this._titleService.getTitle();

    if (window.innerWidth < GlobalConfig.MOBILE_WIDTH) {
      this.navMode = 'over';
      this.side = false;
    }

  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if( event.target.innerWidth < GlobalConfig.MOBILE_WIDTH ){
        this.navMode = 'over';
        this.sidenav.close();
      }
      else{
        this.navMode = 'side';
        this.sidenav.open();
      }
  }

  ngAfterViewInit(){
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  routeSub( link: string, title: string ): void {
    this._titleService.setTitle( title );
    this.title = this._titleService.getTitle();
    // change sub-page
    this.router.navigate([link]);
    this.showSnackBar('routeSub: link='+link);
  }

  showSnackBar(msg: string): void {
    this._snackBarService.open(msg, 'X', { duration: 1000 });
  } 
    
}
