import { Component } from '@angular/core';

export interface IPerformersCard{
    gallery: Array<string>
    logo: string
    description: object
    statistics: object
}

@Component({
    selector: 'app-performersPage',
    templateUrl: './performersPage.component.html',
    styleUrls: ['./performersPage.component.scss']
})

export class PerformersPageComponent{

    performersCards: IPerformersCard[] = [
        {
            gallery: [
                '../../../assets/images/living-room.performersPage.jpg',
                '../../../assets/images/living-room.performersPage.jpg',
                '../../../assets/images/living-room.performersPage.jpg',
                '../../../assets/images/living-room.performersPage.jpg'
            ],

            logo: '../../../assets/images/logo.performersPage.png',

            description: {
                header: 'Архитектурное бюро ZROBYM Architects',
                rating: '5.0',
                location: 'Москва, СВАО, ул. Тверская, д. 16, оф. 8',
                metro: 'Щелковская',
                activity: 'Оформление и дизайн',
                contract: 'Работает по договору',
                face: 'Юридичекое лицо',
                info: 'Архитектурное бюро MS Architects специализируется на градостроительных концепциях, архитектурном...'
            },

            statistics: {
                amountCompletedOrders: 356,
                prices: 'Премиум',
                rating: {
                    likes: 211,
                    dislikes: 4
                },
                ordersInProgress: 3,
                online: 'Был в сети два дня назад'
            }
        },

        {
            gallery: [
                '../../../assets/images/living-room.performersPage.jpg',
                '../../../assets/images/living-room.performersPage.jpg',
                '../../../assets/images/living-room.performersPage.jpg',
                '../../../assets/images/living-room.performersPage.jpg'
            ],

            logo: '../../../assets/images/logo.performersPage.png',

            description: {
                header: 'Архитектурное бюро ZROBYM Architects',
                rating: '5.0',
                location: 'Москва, СВАО, ул. Тверская, д. 16, оф. 8',
                metro: 'Щелковская',
                activity: 'Оформление и дизайн',
                contract: 'Работает по договору',
                face: 'Юридичекое лицо',
                info: 'Архитектурное бюро MS Architects специализируется на градостроительных концепциях, архитектурном...'
            },

            statistics: {
                amountCompletedOrders: 356,
                prices: 'Премиум',
                rating: {
                    likes: 211,
                    dislikes: 4
                },
                ordersInProgress: 3,
                online: 'Был в сети два дня назад'
            }
        }
    ]



    openCloseFilter(event) {

        event.path.filter((filter) => {

            if (filter.className === 'filter') {



                for (let child of filter.children) {

                    if (child.className === 'filter-inner') {

                        if (child.style.display === 'block') {
                            child.style.display = 'none'
                        } else {
                            child.style.display = 'block'
                        }
                    }

                }



                for (let arrow of filter.children) {
                                
                    if (arrow.className === 'filter-title') {
                        if (arrow.children[1].style.transform === 'rotate(-180deg)') {
                            arrow.children[1].style.transform = 'none'
                        } else {
                            arrow.children[1].style.transform = 'rotate(-180deg)'
                        }
                    }
                }



            }

        })
    }

    openCloseCheckboxes(event) {
        console.log(event)

        event.path.filter((checkboxesList) => {
            
            if (checkboxesList.className === 'checkboxes-list') {
                
                if (checkboxesList.children[1].style.display === 'block') {
                    checkboxesList.children[1].style.display = 'none'
                    checkboxesList.children[0].children[0].style.transform = 'rotate(-90deg)'
                } else {
                    checkboxesList.children[1].style.display = 'block'
                    checkboxesList.children[0].children[0].style.transform = 'none'
                }

            }

        })
    }

}