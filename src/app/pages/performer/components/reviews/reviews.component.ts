import { Component } from "@angular/core";
import { Review } from "src/app/models/Review";

export interface IReviews {
    avatar: string,
    name: string,
    date: string,
    rating: number,
    titleComment: string,
    comment: string,
    amountOfComments: number,
    likesOrDislikes: number,
    replies: any,
    showReplies: boolean
}

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})

export class ReviewsComponent{

    showReplies: boolean = false

    reviews: Review[] = [
        {
            avatar: '/assets/images/performer/avatar.png',
            name: 'Иван Алексеев',
            createdAt: new Date(),
            rating: 5,
            titleComment: 'Мне понравилось!',
            comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.',
            likes: 23,
            dislikes: 0,
            replies: [
                {
                    avatar: '/assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    createdAt:  new Date(),
                    text: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                },
                {
                    avatar: '/assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    createdAt:  new Date(),
                    text: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                }
            ],
            showReplies: false // Говнокод!
        },
        {
            avatar: '/assets/images/performer/avatar.png',
            name: 'Иван Алексеев',
            createdAt: new Date(),
            rating: 2,
            titleComment: 'Очень не очень!',
            comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.',
            likes: 14,
            dislikes: 0,
            replies: [
                {
                    avatar: '/assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    createdAt: new Date(),
                    text: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                },
                {
                    avatar: '/assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    createdAt: new Date(),
                    text: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                }
            ],
            showReplies: false // Говнокод!
        },
        {
            avatar: '/assets/images/performer/avatar.png',
            name: 'Иван Алексеев',
            createdAt: new Date(),
            rating: 3,
            titleComment: 'Так себе, но пойдет!',
            comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.',
            likes: 5,
            dislikes: 0,
            replies: [
                {
                    avatar: '/assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    createdAt: new Date(),
                    text: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                },
                {
                    avatar: '/assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    createdAt: new Date(),
                    text: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                }
            ],
            showReplies: false // Говнокод!
        }
    ]

    wees = [5,4,3,2,1]


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

}