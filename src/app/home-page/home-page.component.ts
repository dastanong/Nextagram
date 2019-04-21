import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  users: any
  @Input() specificUser
  @Input() getId

  constructor(private UserService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.getId = parseInt(this.route.snapshot.params.userId)
      console.log(this.getId)

      this.UserService.getUsers().subscribe(response => {
        this.users = response
      })
  }
}
