import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  commentForm = new FormControl("", [Validators.required])

  specificImg = null
  imageId: string = null
  index = null
  imgIndex = null
  counts = 0
  imageValues:any = []
  imageObject = {
    id: "",
    userId: "",
    imageUrl: "",
    count: 0,
    comment: []
  }

  constructor(private route: ActivatedRoute, private UserService: UserServiceService, private ImageService: ImageService) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.params.imageId
    
    console.log("URL image id is " + this.imageId)

    this.UserService.getUserId(
      this.route.snapshot.params.userId).subscribe(response => {
        this.index = Object.keys(response)
        for(let i in this.index) {
          if(this.imageId == i) {
            this.specificImg = response[i]
            console.log(this.specificImg)
          }
        }
      })

    this.ImageService.getImageArray().subscribe(imageArray => {
      if(imageArray.length > 0) {
        console.log(imageArray)
        for(let i = 0; i < imageArray.length; i++) {
          let imgId = imageArray[i].id
          let userId = imageArray[i].userId
          console.log(imageArray[i].comment)
          if(this.imageId == imgId && this.route.snapshot.params.userId == userId) {
            this.imageValues[0] = imageArray[i]
            console.log(this.imageValues)
          }
        }
      }
    })
  }

  addCounts() {
    this.counts+=1
    console.log(this.imageId, this.route.snapshot.params.userId, this.specificImg, this.counts)
    this.imageObject = {
      id: this.imageId,
      userId: this.route.snapshot.params.userId,
      imageUrl: this.specificImg,
      count: this.counts,
      comment: []
    }
    this.ImageService.storeImgValues(this.imageObject)
    console.log(this.imageObject)
  }

  addComment() {
    console.log(this.commentForm.value)

    if(!this.commentForm.invalid) {
      this.imageObject = {
        id: this.imageId,
        userId: this.route.snapshot.params.userId,
        imageUrl: this.specificImg,
        count: 0,
        comment: [this.commentForm.value]
      }
      this.ImageService.addComment(this.imageObject)
      console.log(this.imageObject)
      this.commentForm.setValue("")
    }
  }
}
