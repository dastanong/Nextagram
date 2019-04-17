import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Input() users: any
  
  specificUser = null
  //getId
  
  constructor(private UserService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.UserService.getUserId(
      this.route.snapshot.params.userId).subscribe(response => {
        //this.getId = this.route.snapshot.params.userId
        this.specificUser = response
        console.log(this.specificUser)
        //console.log(this.getId)
      })
  }
}
