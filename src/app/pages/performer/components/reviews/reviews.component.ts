import { Component, Input, OnInit } from "@angular/core";
import { ReviewService } from 'src/app/services/review.service';
import { Review } from "src/app/models/Review";

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent implements OnInit {

    @Input() reviews: Review[] = [];
    public readonly wees = [5,4,3,2,1];
    public openCloseComponent = true;
    public showReplies = false;

    constructor() {}

    getReviewBorderColor(rating: number): string {
        if (rating >= 4) {
            return '#46AA32'
        } else if (rating >= 3 && rating < 4) {
            return '#86ADDA'
        } else if (rating < 3) {
            return '#EA4545'
        }
    }

    getReviewBackground(rating: number): string {
        if (rating >= 4) {
            return 'linear-gradient(0deg, rgba(70, 170, 50, 0.05), rgba(70, 170, 50, 0.05)), #FFFFFF'
        } else if (rating >= 3 && rating < 4) {
            return 'linear-gradient(0deg, rgba(134, 173, 218, 0.1), rgba(134, 173, 218, 0.1)), #FFFFFF'
        } else if (rating < 3) {
            return 'linear-gradient(0deg, rgba(234, 69, 69, 0.05), rgba(234, 69, 69, 0.05)), #FFFFFF'
        }
    }

    showPercentInLine(rating: number): number {
        let total = this.reviews.length;
        let amount = this.getAmountOfComments(rating);
        return this.getPercentOf(total, amount)
    }

    getAmountOfComments(rating: number): number {
        return this.reviews.filter((review: Review) => {
            return review.rating === rating
        }).length;
    }

    getPercentOf(total: number, amount: number): number {
        return amount / total * 100
    }

    onChangeEvent(e) {
        const sortBy = e.target.value;
        this.reviews.sort((a, b) => {
            if (sortBy === 'createAt') {
                return b.createdAt - a.createdAt;
            } else if (sortBy === 'desc') {
                return b.rating - a.rating;
            } else if (sortBy === 'asc') {
                return a.rating - b.rating;
            }
        })
    }

    getRatingAllReviews(scale: number): number {
        let generalSum = 0
        for (let review of this.reviews) {
            generalSum += review.rating
        }
        return generalSum / (this.reviews.length * 5) * scale
    }

    ngOnInit(): void {
    }

}