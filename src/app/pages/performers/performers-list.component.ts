import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from '../../interfaces/IPerformersCard';
import { PerformersCardService } from '../../services/performers-card.service';
import { FilterService } from '../../services/filter.service';
import { MapService } from '../../services/map.service';
import { IFilter } from '../../interfaces/IFilter';
import { Router, ActivatedRoute } from '@angular/router';
import { Marker } from 'leaflet';

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
    public tags: {title:string, field?: string, value?: string, text: string[] }[] = [];
    public pager: any = null;
    public isFavorite = false;
    public markers: Marker[] = [];
    public isLoading = false;

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
        private filterSrv: FilterService,
        private mapSrv: MapService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    getStations() {
        this.filterSrv.metroSpb.map(line => {
          line.station.map(station => {
            this.stations.push(station.title)
          })
        })
      }

      setLocation(e) {
          console.log(e.target.value);
          
      }

    updateFilterCheckedValue(filter: IFilter) {
        this.filters.map(oldFilter => {
            if (oldFilter.title === filter.title) {
                oldFilter = filter;
                console.log("Фильтр " + oldFilter.title + " обновлен:");
            }
        })
        this.setFilters();
    }

    removeTag(tag) {
        if (!tag) {
            this.resetFilters();
            return
        }
        this.filters.map(filter => {
            if (filter.title === tag.title) {
                filter.checked = filter.type === 'radio' ? ['0'] : [];
            }
        });
        this.updateQueryParams();
    }

    switchOrderBy(order: string) {
        if (this.orderBy !== order) {
            this.orderBy = order;
            console.log(order)
        }
    }

    sendRequest(params?) {
        this.cardSrv.getAllPerformersCard(params)
            .subscribe(cards => {
                if (cards.result) {
                    this.performersCards = cards.result.result;
                    this.pager = {
                        nextPage: cards.result.next,
                        prevPage: cards.result.previous,
                        countPage: cards.result.count
                    }
                    this.performersCards.map(card => {
                        const latLng = this.mapSrv.createLatLng(card.latLng.lat, card.latLng.lng);
                        this.markers.push(this.mapSrv.createMarker(latLng, card.description.header))
                    })           
                    
                }
            }); 
    }

    resetFilters() {
        this.filters.map(filter => {
            if (filter.type === 'radio') {
                filter.checked = ['0']
            } else if (filter.type === 'checkbox') {                
                filter.checked = []
            }
        });        
        this.setFilters();
    }

    setFilters() {
        this.toggle = false;
        this.updateQueryParams();
    }

    updateQueryParams() {
        const queryParams = {};
        this.filters.map(filter => {
            if (filter.checked[0] && filter.checked[0] !== '0') {
                queryParams[filter.field] = filter.checked.join(',');
            }
        });
        this.router.navigate(['/performers'], {
            queryParams
        })
    }

    invertToggle(e) {
        this.toggle = e;
    }

    initTags(params) {
        this.tags = [];
        this.filters.map(filter => {
            if (params[filter.field]) {
                filter.checked = params[filter.field].split(',');

                const points = [];
                filter.checked.map(point => {
                    points.push(filter.selector.find(val => val.value === point).text)
                })
                const tag = {
                    title: filter.title,
                    text: points
                }
                this.tags.push(tag);
            }
        });
    }

    initFilters(params) {
        this.filters.map(filter => {
            if (params[filter.field]) {
                filter.checked = params[filter.field].split(',');
            }
        })
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.filters = this.filterSrv.filters;
        this.animateHeader();
        this.activatedRoute.queryParams
            .subscribe(params => {
                this.sendRequest(params);
                this.initFilters(params);
                this.initTags(params);
            })
    }

    ngOnDestroy(): void {
        console.log('destroy');
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
}
