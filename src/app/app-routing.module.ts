import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeelistmangaloreComponent } from './employeelistmangalore/employeelistmangalore.component';
import { EmployeelisthyderabadComponent } from './employeelisthyderabad/employeelisthyderabad.component';
import { EmployeelistchennaiComponent } from './employeelistchennai/employeelistchennai.component';


const routes: Routes = [ 

  {path: 'login', component: LoginComponent},
  {path: 'viewdetails', component: ViewdetailsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'employeelistmangalore', component: EmployeelistmangaloreComponent},
  {path: 'employeelisthyderabad', component: EmployeelisthyderabadComponent},
  {path: 'employeelistchennai', component: EmployeelistchennaiComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
