import { Component } from "@angular/core";

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss']
})

export class reviewsComponent{

    showReplies: boolean = false

    reviews: any = [
        {
            avatar: '../../../../../assets/images/performer/avatar.png',
            name: 'Иван Алексеев',
            date: '22 января 2020 в 12:44',
            rating: 5.0,
            titleComment: 'Мне понравилось!',
            comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.',
            amountOfComments: 13,
            likesOrDislikes: 23,
            replies: [
                {
                    avatar: '../../../../../assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    date: '23 января 2020 в 12:44',
                    comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                },
                {
                    avatar: '../../../../../assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    date: '24 января 2020 в 12:44',
                    comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                }
            ]
        },
        {
            avatar: '../../../../../assets/images/performer/avatar.png',
            name: 'Иван Алексеев',
            date: '22 января 2020 в 12:44',
            rating: 2.0,
            titleComment: 'Очень не очень!',
            comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.',
            likesOrDislikes: 23,
            replies: [
                {
                    avatar: '../../../../../assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    date: '23 января 2020 в 12:44',
                    comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                },
                {
                    avatar: '../../../../../assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    date: '24 января 2020 в 12:44',
                    comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                }
            ]
        },
        {
            avatar: '../../../../../assets/images/performer/avatar.png',
            name: 'Иван Алексеев',
            date: '22 января 2020 в 12:44',
            rating: 3.0,
            titleComment: 'Так себе, но пойдет!',
            comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты, которые смогут заставить посетителей оставаться на нём как можно дальше, то вы попали по адресу. За кворк можно заказать хоть 10 статей, главное чтоб общий объём был 6000 символов без пробелов.',
            amountOfComments: 13,
            likesOrDislikes: 0,
            replies: [
                {
                    avatar: '../../../../../assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    date: '23 января 2020 в 12:44',
                    comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                },
                {
                    avatar: '../../../../../assets/images/performer/avatar.png',
                    name: 'Иван Алексеев',
                    date: '24 января 2020 в 12:44',
                    comment: 'В рамках кворка, напишу 6000 символов для вашего сайта. Если вашему сайту нужны качественные и интересные тексты.'
                }
            ]
        }
    ]



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

}