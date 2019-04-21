import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "https://insta.nextacademy.com/api/v1/"

const imageUrl = "https://insta.nextacademy.com/api/v1/images?userId="
const userUrl = "https://insta.nextacademy.com/api/v1/users/"

// const imageUrl = "https://tranquil-beach-87956.herokuapp.com/api/v1/images?userId="
// const userUrl = "https://tranquil-beach-87956.herokuapp.com/api/v1/users/"

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(userUrl)
  }

  getUserId(userId) {
    return this.http.get(imageUrl + `${userId}`)
  }

  postSignUp(result: Object) {
    this.http.post(`${baseUrl}users`, result).subscribe(response => {
      console.log(response)
    })
  }

  
}
