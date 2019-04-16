import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  users = null;

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
