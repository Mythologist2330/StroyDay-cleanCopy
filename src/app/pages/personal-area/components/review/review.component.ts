import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/Review';
import { IComment } from 'src/app/interfaces/IComment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() review: Review;
  public isLike = false;
  public isDislike = false;
  public text = '';

  constructor(private reviewSrv: ReviewService) { }

  incLike(review: Review) {
    if (this.isDislike) {
        this.incDislike(review)
    }
    if (!this.isLike) {
        review.likes++;
    } else {
        review.likes--;
    }
    this.isLike = !this.isLike
  } 

  incDislike(review: Review) {
      if (this.isLike) {
          this.incLike(review)
      }
      if (!this.isDislike) {
          review.dislikes++;
      } else {
          review.dislikes--;
      }
      this.isDislike = !this.isDislike
  }

  sendComment(review: Review) {
    if (!review.replies) {
        review.replies = []
    }
    const comment: IComment = {
        authorId: '$@#$#@',
        avatar: '/assets/images/performer/avatar.png',
        name: 'Петя Васечкин',
        text: this.text,
        createdAt: new Date().getTime()
    }
    let replies = [comment, ...review.replies]
    this.reviewSrv.updateReview(review.id, replies).then(() => {
        review.replies.unshift(comment)
    })
    this.text = '';
  }

  ngOnInit(): void {
  }

}
