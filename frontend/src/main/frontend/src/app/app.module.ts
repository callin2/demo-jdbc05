import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

// 이거 하나면 하위 모듈들 모두 커버 되는듯..
import { MaterialModule } from '@angular/material';
// import { MdButtonModule, MdCheckboxModule } from '@angular/material';		// 별도로 쓸만큼만 포함시킬 때
import { MdAutocompleteModule, MdDatepickerModule, MdNativeDateModule, MdTableModule, } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// External Modules
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';

// Router
import { appRoutes, appRoutingProviders } from './app.routes';

// Components
import { AppComponent } from './app.component';

import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { GraphComponent } from './main/graph/graph.component';
import { WorkspaceComponent } from './main/workspace/workspace.component';
import { AdminComponent } from './main/admin/admin.component';
import { HelpComponent } from './main/help/help.component';

// Services
import { AuthGuardService } from '../services/auth-guard.service';
import { AdminGuardService } from '../services/admin-guard.service';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';
import { AgensApiService } from '../services/agens-api.service';
import { WindowRefService } from '../services/window-ref.service';
import { DialogsService } from '../services/dialogs.service';

// Reuse Strategy
import {RouteReuseStrategy} from "@angular/router";
import {CustomReuseStrategy} from "./reuse-strategy";

// Dialogs

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    LoginComponent,
    AlertComponent,
    GraphComponent,
    AdminComponent,
    HelpComponent,
    WorkspaceComponent
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, HttpModule,

		MaterialModule, MdNativeDateModule, CdkTableModule,
    
    appRoutes,
    TreeModule,
    NgxDatatableModule
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    Title,
    AlertService,
    AuthGuardService,
    AdminGuardService,
    AuthenticationService,
    AgensApiService,
    WindowRefService,
    DialogsService,
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ], // additional providers needed for this module
  entryComponents: [ 
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
