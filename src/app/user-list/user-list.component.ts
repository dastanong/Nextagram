import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any

  constructor(private UserService: UserServiceService) { }

  getUser() {
    this.UserService.getUsers().subscribe(response => {
      this.users = response
      console.log(this.users)
    })
  }

  ngOnInit() {
    this.getUser()
  }

}
