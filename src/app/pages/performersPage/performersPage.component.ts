import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from 'src/app/interfaces/IPerformersCard';
import { PerformersCardService } from 'src/app/services/performers-card.service';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performersPage.component.html',
    styleUrls: ['./performersPage.component.scss']
})

export class PerformersPageComponent implements OnInit{

    constructor(private cardSrv: PerformersCardService) {}

    openCloseMap: boolean = false;
    moduleWindowMapLocation: boolean = false;
    shrinkHeader: boolean = false;
    decreaseFieldClick: boolean = false;
    performersCards: IPerformersCard[] = [];




    openCloseFilter(event): void {
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



    animateHeader(): void {
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
