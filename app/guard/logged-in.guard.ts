import { Injectable } 			from '@angular/core';
import { Router, CanActivate } 	from '@angular/router';

import { UserService } 			from '../user/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
	
  constructor(private router: Router, private user: UserService) {}

  canActivate() {
    if (this.user.isLoggedIn()) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}