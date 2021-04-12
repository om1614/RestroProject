import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {} from '@angular/common/http';
import{FormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    ListRestroComponent,
    UpdateRestroComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
