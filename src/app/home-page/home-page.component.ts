import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ProfileService } from '../profile.service';
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
  
  profileValues = []
  profileObject:any = {
    id: "",
    name: "-",
    description: "-",
    bloglink: "-",
    facebooklink: "-",
    email: "-"
  }

  constructor(private UserService: UserServiceService, private ProfileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getId = this.route.snapshot.params.userId
    console.log(this.getId)

    this.UserService.getUsers().subscribe(response => {
      this.users = response
    })
  }

  addProfile() {
    this.profileObject = {
      id: this.getId,
      name: "-",
      description: "-",
      bloglink: "-",
      facebooklink: "-",
      email: "-"
    }

    this.ProfileService.storeProfile(this.profileObject)
    console.log(this.profileObject)
  }
}
