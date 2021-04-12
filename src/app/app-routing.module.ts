import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {"path":"add", component:AddRestroComponent},
 
  {"path":"update/:id", component:UpdateRestroComponent},
  {"path":"login", component:LoginComponent},
  {"path":"register", component:RegisterComponent},
  {"path":"", component:ListRestroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
