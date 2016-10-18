import { Component }     from '@angular/core';
import { Router }        from '@angular/router';
import { Http, Headers } from '@angular/http';
import { FormBuilder, 
         Validators, 
         FormGroup }     from '@angular/forms';

import { UserService }   from './user.service';

import './rxjs-operators';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
})
export class LoginComponent {

  private loginForm:FormGroup;
  private userService:UserService
  private router:Router;

  constructor(userService: UserService, fb: FormBuilder, router: Router, private http:Http) {
    this.userService = userService;
    this.router      = router;
    this.loginForm   = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
      }
    });
  }

  doLogin(event) {
    event.preventDefault();
    // Show the value of the form
    var formData = this.loginForm.value;
    // { email: 'blah@blah.net', password: 'imnottelling1' }

    this.onSubmit(formData.email, formData.password);
  }
}