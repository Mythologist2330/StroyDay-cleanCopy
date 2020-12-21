import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from '../../interfaces/IPerformersCard';
import { PerformersCardService } from '../../services/performers-card.service';
import { FilterService } from '../../services/filter.service';
import { IFilter } from '../../interfaces/IFilter';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performers-list.component.html',
    styleUrls: ['./performers-list.component.scss']
})

export class PerformersListComponent implements OnInit{


    public stations: string[] = [];
    public filters: IFilter[];
    public tags = ['Оформление и дизайн', 'Вентиляция', '2.0 и выше'];

    
    public city = 'Москва';
    public stars = 1;
    public feedback = '0';
    public comment = '0'
    public orderBy = 'header';
    public params = {
        city: this.city, 
        stars: this.stars,
        feedback: this.feedback,
    };
    public pager: any = null;

    public isFavorite = false;
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

    getFilterValue(e: { field: string, value: string }) {
        this.params[e.field] = e.value.toString();        
        console.log(e)
        this.cardSrv.getAllPerformersCard(this.params)
            .subscribe(data => {
                console.log(data);
                this.performersCards = data.result.result;
                this.pager = {
                    nextPage: data.next,
                    prevPage: data.previous,
                    countPage: data.count
                }
            });  
    }

    getNextPage() {
        this.params['page'] = this.pager.nextPage;
    }

    getPreviousPage() {
        this.params['page'] = this.pager.prevPage;
    }

    switchOrderBy(order: string) {
        if (this.orderBy !== order) {
            this.orderBy = order;
            console.log(order)
        }
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
        this.filters = this.filterSrv.filters;
        this.animateHeader();
        this.getStations();
        this.cardSrv.getAllPerformersCard(this.params)
            .subscribe(data => {
                console.log(data);
                this.performersCards = data.result.result
                this.pager = {
                    nextPage: data.result.next,
                    prevPage: data.result.previous,
                    countPage: data.result.count
                }
                console.log(this.pager)
            });     
    }
}
