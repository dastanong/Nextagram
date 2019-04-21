import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  likeCount = new BehaviorSubject<number>(0)

  constructor() { }

  addCount() {
    let currentCount = this.likeCount.getValue()
    currentCount = currentCount + 1
    this.likeCount.next(currentCount)
  }

  getCount() {
    return this.likeCount
  }
}
