import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  registrationForm = new FormGroup({
    userName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private UserService: UserServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    const signUpData = this.registrationForm.value
    this.UserService.postSignUp(signUpData)
  }

}
