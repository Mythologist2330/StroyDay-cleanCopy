import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from 'src/app/interfaces/IPerformersCard';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performersPage.component.html',
    styleUrls: ['./performersPage.component.scss']
})

export class PerformersPageComponent implements OnInit{

<<<<<<< HEAD
    openCloseMap: boolean = false
=======
    constructor(private cardSrv: PerformersCardService) {}
>>>>>>> origin/firestart

    openCloseMap = false;
    moduleWindowMapLocation = false;
    shrinkHeader = false;
    decreaseFieldClick = false;
    performersCards: IPerformersCard[] = [];

<<<<<<< HEAD
    shrinkHeader: boolean = false;





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
                discount: '-15%',
                serviceClass: [
                    {name: 'эконом', color: '#F8601F'},
                    {name: 'стандарт', color: '#0D6FE3'},
                    {name: 'премиум', color: '#9F8C66'}
                ],
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
                header: 'Архитектурное бюро ZROBYM Architects',
                rating: '5.0',
                serviceClass: [
                    {name: 'эконом', color: '#F8601F'}
                ],
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
=======
    openCloseFilter(event): void {
>>>>>>> origin/firestart

        event.path.filter((filter) => {
            if (filter.className === 'filter') {
                for (let child of filter.children) {
                    if (child.className === 'filter-inner') {

                        if (child.style.display === 'block') {
                            child.style.display = 'none';

                            for (let fieldClick of filter.children) {
                                if (fieldClick.className === 'field-click') {
                                    fieldClick.style.height = '56px';
                                }
                            }

                        } else {
                            child.style.display = 'block';

                            for (let fieldClick of filter.children) {
                                if (fieldClick.className === 'field-click') {
                                    fieldClick.style.height = '52px';
                                }
                            }
                        }
                    }
                }

                for (let arrow of filter.children) {
                    if (arrow.className === 'filter-title') {
                        if (arrow.children[1].style.transform === 'rotate(-180deg)') {
                            arrow.children[1].style.transform = 'none';
                        } else {
                            arrow.children[1].style.transform = 'rotate(-180deg)';
                        }
                    }
                }
            }
        });
    }

    openCloseCheckboxes(event): void {

        event.path.filter((checkboxesList) => {
            if (checkboxesList.className === 'checkboxes-list') {

                if (checkboxesList.children[1].style.display === 'block') {
                    checkboxesList.children[1].style.display = 'none';
                    checkboxesList.children[0].children[0].style.transform = 'rotate(-90deg)';
                } else {
                    checkboxesList.children[1].style.display = 'block';
                    checkboxesList.children[0].children[0].style.transform = 'none';
                }
            }
        });
    }

    closeContainerFilters(event): void {

        event.path.filter((filters) => {

            if (filters.className === 'filters') {
                filters.style.left = '-100%';

                for (let filtersButtons of filters.children) {
                    if (filtersButtons.className === 'filters-buttons-reset-apply') {
                        filtersButtons.style.display = 'none';
                    }
                }
            }

            if (filters.className === 'container container-performers-page') {

                for (let overlay of filters.children) {

                    if (overlay.className === 'overlay') {
                        overlay.style.display = 'none';
                    }
                }
            }

            if (filters.localName === 'body') {
                filters.style.overflow = 'auto';
            }

            if (filters.localName === 'html') {
                filters.style.overflow = 'auto';
            }
        });
    }

<<<<<<< HEAD

    addToFavorites(event) {
        event.path.filter((buttonContainer) => {

            if (buttonContainer.className === 'add-to-favorites') {
                for (let button of buttonContainer.children) {
                    if (button.classList[0] === 'button-removed-from-favorites') {
                        if (button.style.display === 'none') {
                            button.style.display = 'block'
                        } else {
                            button.style.display = 'none'
                        }
                    }
        
                    if (button.classList[0] === 'button-added-to-favorites') {
                        if (button.style.display === 'block') {
                            button.style.display = 'none'
                        } else {
                            button.style.display = 'block'
                        }
                    }
                }
            }

        })
    }



    ngOnInit() {
        this.animateHeader();
    }
   
    animateHeader() {
=======
    animateHeader(): void {
>>>>>>> origin/firestart
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                this.shrinkHeader  = true;
            } else {
                this.shrinkHeader  = false;
            }
        };
    }

    ngOnInit(): void {
        this.cardSrv.getAllPerformersCard()
            .subscribe((cards) => {
                this.performersCards = cards;
                console.log('Данные вывелись из БД! Заебись!');
                console.log(cards);
            });
        this.animateHeader();
    }
}
