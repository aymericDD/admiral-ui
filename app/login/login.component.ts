import { Component }     from '@angular/core';
import { Router }        from '@angular/router';
import { Http, Headers } from '@angular/http';
import { FormBuilder, 
         Validators, 
         FormGroup }     from '@angular/forms';

import { UserService }   from '../user/user.service';

import '../operators/rxjs-operators';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
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

  ngOnInit() { 
    if(this.userService.isLoggedIn()) {
      this.router.navigate(['']);
    }
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
    var formData = this.loginForm.value;
    this.onSubmit(formData.email, formData.password);
  }
}