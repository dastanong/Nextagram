import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const imageUrl = "https://insta.nextacademy.com/api/v1/images?userId="
const userUrl = "https://insta.nextacademy.com/api/v1/users/"

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
}
