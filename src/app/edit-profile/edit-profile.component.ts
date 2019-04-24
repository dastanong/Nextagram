import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    bloglink: new FormControl(""),
    facebooklink: new FormControl(""),
    email: new FormControl("", [Validators.email]),
  })

  users: any
  userId = null
  getId = null
  showForm: boolean = false
  profileValues = []
  profileObject:any = {
    id: "",
    name: "-",
    description: "-",
    bloglink: "-",
    facebooklink: "-",
    email: "-"
  }

  constructor(private ProfileService: ProfileService, private UserService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params.userId
    console.log(this.userId)
    this.ProfileService.getProfile().subscribe(profileList => {
      if(profileList.length > 0) {
        console.log(profileList)
        for(let i = 0; i < profileList.length; i++) {
          if(this.userId == profileList[i].id) {
            this.profileValues[0] = profileList[i]
          }
        }
      }
      console.log(this.profileValues)
    })

    this.UserService.getUsers().subscribe(response => {
      this.users = response
    })

  }

  editProfile() {
    this.showForm = true
    console.log(this.showForm)
  }

  backtoProfile() {
    this.showForm = false
  }

  onSubmit() {
    console.log(this.profileForm.value)
    this.ProfileService.addProfileInfo(this.userId, this.profileForm.value)
    this.showForm = false
  }

}
