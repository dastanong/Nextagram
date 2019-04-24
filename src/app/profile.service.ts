import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Profile {
  id: string,
  name: string,
  description: string,
  bloglink: string,
  facebooklink: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profileList: BehaviorSubject<Profile[]> = new BehaviorSubject([])

  constructor() { }

  storeProfile(profileObj) {
    let list = this.profileList.getValue()
    let isUserInArray = false

    if(list.length == 0) {
      list.push(profileObj)
    }

    for(let i = 0; i < list.length; i++) {
      let id = list[i].id
      if(id == profileObj.id) {
        isUserInArray = true
        console.log("user alreay exist!")
      }
    }

    if(isUserInArray == false) {
      list.push(profileObj)
    }

    this.profileList.next(list)
  }

  addProfileInfo(userId, profileObj) {
    let list = this.profileList.getValue()
    for(let i = 0; i < list.length; i++) {
      if(userId == list[i].id) {
        list[i].id = userId
        list[i].name = profileObj.name
        list[i].description = profileObj.description
        list[i].bloglink = profileObj.bloglink
        list[i].facebooklink = profileObj.facebooklink
        list[i].email = profileObj.email
      }
    }

    this.profileList.next(list)
    console.log(list)
  }

  getProfile() {
    return this.profileList
  }
}
