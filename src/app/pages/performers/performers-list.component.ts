import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from '../../interfaces/IPerformersCard';
import { PerformersCardService } from '../../services/performers-card.service';
import { FilterService } from '../../services/filter.service';
import { IFilter } from '../../interfaces/IFilter';
import { tileLayer, latLng } from 'leaflet';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performers-list.component.html',
    styleUrls: ['./performers-list.component.scss']
})

export class PerformersListComponent implements OnInit{


    public stations: string[] = [];
    public filters: IFilter[];
    public tags = ['Оформление и дизайн', 'Вентиляция', '2.0 и выше'];

    openCloseMap = false;
    moduleWindowMapLocation = false;
    shrinkHeader = false;
    decreaseFieldClick = false;
    performersCards: IPerformersCard[] = [];
    readonly categories = [
        'Архитектура и проектирование',
        'Инженерные системы',
        'Ремонт и отделка',
        'Строительство',
        'Банковские гарантии',
        'Бухгалтерия',
        'Строительная техника',
        'Инженерные системы',
    ];

    constructor(
        private cardSrv: PerformersCardService,
        private filterSrv: FilterService) {}

    getStations() {
        this.filterSrv.metroSpb.map(line => {
          line.station.map(station => {
            this.stations.push(station.title)
          })
        })
      }

    openLocationMap(event) {
        
        event.path.filter((htmlAndBody) => {
            if (htmlAndBody.localName === 'html') {
                if (htmlAndBody.style.overflow === 'hidden') {
                    htmlAndBody.style.overflow = 'auto'
                } else {
                    htmlAndBody.style.overflow = 'hidden'
                }
            }

            if (htmlAndBody.localName === 'body') {
                if (htmlAndBody.style.overflow === 'hidden') {
                    htmlAndBody.style.overflow = 'auto'
                } else {
                    htmlAndBody.style.overflow = 'hidden'
                }
            }
        })
    }


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
                    checkboxesList.children[0].children[0].style.transform = 'rotate(0deg)';
                } else {
                    checkboxesList.children[1].style.display = 'block';
                    checkboxesList.children[0].children[0].style.transform = 'rotate(90deg)';
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

    addToFavorites(event): void {
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
                console.log(cards);
            });
        this.animateHeader();
        this.filters = this.filterSrv.filters;        
        this.getStations();
    }
}
