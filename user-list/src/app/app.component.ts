import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  usersList = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ];
}
