import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="container body-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/app/app.component.css']
})

export class AppComponent {
  title = 'Admiral';
}