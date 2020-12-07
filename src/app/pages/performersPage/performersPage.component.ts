import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from 'src/app/interfaces/IPerformersCard';
import { PerformersCardService } from 'src/app/services/performers-card.service';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performersPage.component.html',
    styleUrls: ['./performersPage.component.scss']
})

export class PerformersPageComponent implements OnInit{

    openCloseMap = false

    moduleWindowMapLocation: boolean = false

    shrinkHeader: boolean = false;

    decreaseFieldClick: boolean = false





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
                face: 'Юридическое лицо',
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
                online: 'Был на сайте два дня назад'
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
                header: 'Москранстрой сервис — почасовая аренда спецтехники',
                rating: '4.0',
                location: 'Москва, СВАО, ул. Тверская, д. 16, оф. 8',
                metro: 'Щелковская',
                activity: 'Спецтехника',
                contract: 'Работает по договору',
                face: 'Юридичекое лицо',
                info: 'Аренда строительной и дорожной спецтехники JCB, Komatsu, Caterpillar в компании Транскар на выгодных условиях'
            },

            statistics: {
                amountCompletedOrders: 356,
                prices: 'Премиум',
                rating: {
                    likes: 211,
                    dislikes: 4
                },
                ordersInProgress: 3,
                online: 'Был на сайте два дня назад'
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

                            for (let fieldClick of filter.children) {
                                if (fieldClick.className === 'field-click') {
                                    fieldClick.style.height = '56px'
                                }
                            }

                        } else {
                            child.style.display = 'block'

                            for (let fieldClick of filter.children) {
                                if (fieldClick.className === 'field-click') {
                                    fieldClick.style.height = '52px'
                                }
                            }
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



    closeContainerFilters(event) {

        event.path.filter((filters) => {

            if (filters.className === 'filters') {
                filters.style.left = '-100%'

                for (let filtersButtons of filters.children) {
                    if (filtersButtons.className === 'filters-buttons-reset-apply') {
                        filtersButtons.style.display = 'none'
                    }
                }
            }

            if (filters.className === 'container') {

                for (let overlay of filters.children) {

                    if (overlay.className === 'overlay') {
                        overlay.style.display = 'none'
                    }

                }

            }

            if (filters.localName === 'body') {
                filters.style.overflow = 'auto'
            }

            if (filters.localName === 'html') {
                filters.style.overflow = 'auto'
            }

        })
    }










    ngOnInit() {
        this.animateHeader();
    }
   
    animateHeader() {
        window.onscroll = () => {
        if (window.pageYOffset > 100) {
            this.shrinkHeader  = true;
        } else {
            this.shrinkHeader  = false;
        }
        }
    }


}