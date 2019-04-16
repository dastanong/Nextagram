import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {
  //@Input() users
  specificUser = null
  userId: number
  userArray
  getId
  getUsername

  constructor(private UserService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.UserService.getUserId(
      this.route.snapshot.params.userId).subscribe(response => {
        this.userId = this.route.snapshot.params.userId
        this.getId = this.userId
        this.specificUser = response
        console.log(this.specificUser)
        if(this.userId === this.getId) {
          console.log(this.getId)
        }
      })
  }

  getUserInfo() {
    this.UserService.getUsers().subscribe(response => {
      this.userArray = response
      const index = Object.keys(this.userArray)
      for(let i = 0; i < index.length; i++) {
        if(this.userId === this.getId) {
          this.getId = this.userArray[i].id
          this.getUsername = this.userArray[i].username
        }
      }
    })
  }

}