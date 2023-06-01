import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';

const routes: Routes = [

{
  path:'',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
