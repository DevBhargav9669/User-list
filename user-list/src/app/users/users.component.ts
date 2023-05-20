import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UserListComponent {
  @Input() users: { name: string; email: string }[] = [];

  sortByName(): void {
    this.users.sort((a, b) => a.name.localeCompare(b.name));
  }
}
