import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


const routes: Routes = [ 

  {path: 'login', component: LoginComponent},
  {path: 'viewdetails', component: ViewdetailsComponent},
  {path: 'dashboard', component: DashboardComponent}, 
  {path: 'employeelist', component: EmployeelistComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
