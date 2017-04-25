import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule, 
         ReactiveFormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }     from '@angular/http';

import '../operators/rxjs-operators';

import { AppComponent }          from './app.component';
import { LoginComponent }        from '../login/login.component';
import { UserService }           from '../user/user.service';
import { ApiService }            from '../api/api.service';
import { LoggedInGuard }         from '../guard/logged-in.guard';

import { routing }               from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [
    ApiService,
    UserService,
    LoggedInGuard
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}