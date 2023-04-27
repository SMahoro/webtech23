import { Component, OnInit  } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/user";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  users: User[] = [];
  displayedColumns = ['username'];

constructor(private auth: AuthService) {
}

ngOnInit(): void {
  this.auth.getAllUsers().subscribe({
    next: (response) => {
      this.users = response;
      console.log('this.users', this.users)
    }
  })
}

}
