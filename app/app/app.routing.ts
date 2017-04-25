import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AppComponent } from './app.component';
import { LoggedInGuard } from '../guard/logged-in.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);