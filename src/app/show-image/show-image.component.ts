import { Component, OnInit, Input } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

interface Image {
  id: number
  imageUrl: string
  count: number
}

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {
  specificImg = null
  imageId: string = null
  index = null
  counts
  
  imageArray: Image = {
    id: 0,
    imageUrl: "",
    count: 0
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
            this.index = this.imageId
            this.imageArray.id = this.index
            this.imageArray.imageUrl = response[i]
            this.specificImg = response[i]
            console.log(this.specificImg)
            console.log(this.imageArray)
          }
        }
      })

    this.ImageService.getCount().subscribe(likeCount => {
      this.counts = likeCount
      console.log(this.counts)
    })
  }

  addCounts() {
    this.ImageService.addCount()
    console.log("The count increase to " + this.counts)
    this.imageArray.count = this.counts
    console.log("Like increased " + this.imageArray.count)
  }
}
