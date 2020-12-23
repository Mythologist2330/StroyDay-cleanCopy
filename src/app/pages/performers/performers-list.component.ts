import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from '../../interfaces/IPerformersCard';
import { PerformersCardService } from '../../services/performers-card.service';
import { FilterService } from '../../services/filter.service';
import { IFilter } from '../../interfaces/IFilter';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performers-list.component.html',
    styleUrls: ['./performers-list.component.scss']
})

export class PerformersListComponent implements OnInit {
    public toggle = false;
    public stations: string[] = [];
    public filters: IFilter[];
    public orderBy = 'header';
    public params: {title:string, field: string, value: string, text: string }[] = [];
    public pager: any = null;
    public isFavorite = false;

    public openCloseMap = false;
    public moduleWindowMapLocation = false;
    public shrinkHeader = false;
    public decreaseFieldClick = false;
    public performersCards: IPerformersCard[] = [];
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

    getFilterValue(filter: IFilter) {
        let checkpoint;
        filter.checked.map(
            active => {
                checkpoint = filter.selector.find(point => point.value === active)
            }
        )
        this.setParams(filter.title, filter.field, checkpoint.value, checkpoint.text)

    }

    setParams(title, field, value, text) {
        const index = this.params.findIndex(param => param.field === field );
        if (index === -1) {
            this.params.push({
                title, field, value, text
            });
        } else {
            this.params[index] = { title, field, value, text };
        }
        this.sendRequest(this.params)
    }

    changeTags(e) {
        this.params = e;
        console.log(this.params);
        this.params.map(param => {
            this.filters.find(filter => filter.field === param.field).checked = [param.value]
        })
        console.log(this.filters)
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

    sendRequest(params) {
        const query = {};
        params.map(param => {
            query[param.field] = param.value;
        });
        this.cardSrv.getAllPerformersCard(query)
            .subscribe(cards => {
                if (cards.result) {
                    this.performersCards = cards.result.result;
                    console.log(this.performersCards);
                    this.pager = {
                        nextPage: cards.result.next,
                        prevPage: cards.result.previous,
                        countPage: cards.result.count
                    }
                }
            }); 
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

    animateHeader(): void {
        window.onscroll = () => this.shrinkHeader = (window.pageYOffset > 100) ? true : false;
    };

    resetFilters() {
        this.toggle = !this.toggle;
        this.params = [];
        this.sendRequest(this.params)
    }

    setFilters() {
        this.toggle = !this.toggle;
        this.sendRequest(this.params)
    }

    invertToggle(e) {
        this.toggle = e;
    }

    ngOnInit(): void {
        this.filters = this.filterSrv.filters;
        this.animateHeader();
        this.getStations();
        this.sendRequest(this.params)
        console.log(this.filters)
    }

    ngOnDestroy(): void {
    }
}
