import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [ 

  {path: 'login', component: LoginComponent},
  {path: 'viewdetails', component: ViewdetailsComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
