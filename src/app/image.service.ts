import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Image {
  id: string,
  userId: string,
  imageUrl: string,
  count: number,
  comment: any[]
}

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private imageArray: BehaviorSubject<Image[]> = new BehaviorSubject([])

  constructor() { }

  storeImgValues(imgObject) {
    let images = this.imageArray.getValue()
    let isImgInArray = false

    if(images.length == 0) {
      images.push(imgObject)
    }
    for(let i = 0; i < images.length; i++) {
      let imgUrl = images[i].imageUrl
      if(imgUrl == imgObject.imageUrl) {
        images[i].count = imgObject.count
        isImgInArray = true
      }
    }
    if(isImgInArray == false) {
      images.push(imgObject)
      isImgInArray = true
    }

    this.imageArray.next(images)
  }

  addComment(imgObject) {
    let images = this.imageArray.getValue()
    let isImgInArray = false
    console.log(imgObject.comment)

    for(let i = 0; i < images.length; i++) {
      let imgUrl = images[i].imageUrl
      if(imgUrl == imgObject.imageUrl) {
        console.log(imgObject.comment[i])
        images[i].comment.push(imgObject.comment[i])
        isImgInArray = true
        console.log(images[i].comment)
      }
    }
    if(isImgInArray == false) {
      images.push(imgObject)
      isImgInArray = true
    }
    this.imageArray.next(images)
  }

  getImageArray() {
    return this.imageArray
  }
}
