import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeelistmangaloreComponent } from './employeelistmangalore/employeelistmangalore.component';
import { EmployeelisthyderabadComponent } from './employeelisthyderabad/employeelisthyderabad.component';
import { EmployeelistchennaiComponent } from './employeelistchennai/employeelistchennai.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ViewdetailsComponent,
    DashboardComponent,    
    EmployeelistmangaloreComponent, EmployeelisthyderabadComponent, EmployeelistchennaiComponent,       
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule , 
    ReactiveFormsModule,  
   Ng2SearchPipeModule,
   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
