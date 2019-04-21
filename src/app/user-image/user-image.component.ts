import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {
  specificUser = null
  getId = null
  userId = null

  constructor(private UserService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.UserService.getUserId(
      this.route.snapshot.params.userId).subscribe(response => {
        this.userId = this.route.snapshot.params.userId
        this.getId = parseInt(this.route.snapshot.params.userId)
        this.specificUser = response
        console.log(this.specificUser)
      })
  }
}