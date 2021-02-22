import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PerformersCardService } from '../../services/performers-card.service';
import { FilterService } from '../../services/filter.service';
import { ServicesService } from '../../services/services.service';
import { CategoryService } from '../../services/category.service';
import { MapService } from '../../services/map.service';
import { Marker } from 'leaflet';
import { Performer } from '../../models/Performer';
import { IFilter } from '../../interfaces/IFilter';
import { ITag } from 'src/app/interfaces/ITag';
import { first, switchMap, tap } from 'rxjs/operators';
import { Category } from 'src/app/models/category';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performers-list.component.html',
    styleUrls: ['./performers-list.component.scss']
})

export class PerformersListComponent implements OnInit {

    // Дохрена флажков!

    public toggle = false;
    public toggleMap = false;
    public page = 'Исполнители';
    public performersCards: Performer[] = [];
    public card: Performer;
    public filters: IFilter[];
    public locationFilters: IFilter[];
    public orderBy = 'header';
    public tags: ITag[] = [];
    public pager: any = null;
    public isFavorite = false;
    public markers: Marker[] = [];
    public isLoading = false;

    public openCloseMap = false;
    public moduleWindowMapLocation = false;
    public shrinkHeader = false;
    public decreaseFieldClick = false;

    public categories: Category[] = [];
    public categoryFilter: IFilter;
    public params: any;

    constructor(
        private cardSrv: PerformersCardService,
        private filterSrv: FilterService,
        private servicesSrv: ServicesService,
        private categorySrv: CategoryService,
        private mapSrv: MapService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    setLocation(e) {
        console.log(e);
    }

    updateFilterCheckedValue(filter: IFilter) {
        this.filters.map(oldFilter => {
            if (oldFilter.title === filter.title) {
                oldFilter = filter;
            }
        })
        this.updateQueryParams();
    }

    removeTag(tag: ITag) {
        if (!tag) {
            return this.resetFilters();
        }
        this.filters.map(filter => {
            if (filter.title === tag.title) {
                filter.checked = filter.type !== 'checkbox' ? ['0'] : [];
            }
        });
        this.updateQueryParams();
    }

    switchOrderBy(order: string) {
        if (this.orderBy === order) {
            return
        }
        this.orderBy = order;
        this.updateQueryParams();
    }

    sendRequest(params?) {
        this.isLoading = true;
        this.cardSrv.getAllPerformersCard(params)
            .pipe(
                first(),
                tap((cards) => {
                    if (cards.result) {
                        this.performersCards = cards.result.result.map(card => new Performer(card));
                        this.markers = this.mapSrv.showPerformers(this.performersCards);
                        this.orderBy = cards.result.orderBy;
                        this.pager = {
                            nextPage: cards.result.next,
                            prevPage: cards.result.previous,
                            countPage: cards.result.count
                        }
                        this.isLoading = false;
                    }
                })
            )
            .subscribe(); 
    }

    getLocationFilters(filters: IFilter[]): IFilter[] {
        return filters.filter(filter => {
            return filter.field === 'district' || 
                   filter.field === 'city' || 
                   filter.field ==='metro' || 
                   filter.field ==='radius'
        })
    }

    getCategories() {
        this.categorySrv.categories$.subscribe(categories => {
            console.log(categories)
            this.categories = categories;
            this.updateQueryParams();
        })
    }

    resetFilters() {
        this.toggle = false;
        this.filters.map(filter => {
            filter.checked = (filter.type !== 'checkbox') ? ['0'] : [];
        });
        this.updateQueryParams();
    }

    applyFilters() {
        this.toggle = false;
        this.updateQueryParams();
    }

    updateQueryParams() {
        const queryParams: any = {};
        this.filters.map(filter => {
            if (filter.checked[0] && filter.checked[0] !== '0') {
                queryParams[filter.field] = filter.checked.join('+');
            }
            queryParams.orderBy = this.orderBy;
        });
        this.router.navigate(['pages/performers'], {
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
                filter.checked = params[filter.field].split('+');

                const points = [];
                filter.checked.map(point => {
                    points.push(filter.selector.find(val => val.value === point).text);
                })
                const tag: ITag = {
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

    scrollToMap(el: HTMLElement) {
        el.scrollIntoView();
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.animateHeader();
        
        this.filterSrv.getAllFilters()
            .pipe(
                first(),
                tap((filters: IFilter[]) => {
                    this.filters = this.sortInOrder(filters);
                    this.locationFilters = this.getLocationFilters(this.filters);
                }),
                switchMap(() => this.activatedRoute.queryParams),
                tap(params => {
                    this.params = params;
                    this.sendRequest(params);
                    this.initFilters(params);
                }),
                switchMap(() => this.categorySrv.categories$),
                tap((categories: Category[]) => {
                    this.categories = categories;
                    this.initCategoryFilterWithSelectors(this.categories);                    
                    this.initTags(this.params)
                })
            )
            .subscribe()         
    }

    sortInOrder(filters: IFilter[]) {
        let sortedFilters = [];
        const order = [
            'categories',
            'city',
            'district',
            'metro',
            'stars',
            'price',
            'discount',
            'feedback',
            'contract',
            'face',
            'ordersInProgress',
            'activity'
        ];
        order.map(field => {
            sortedFilters.push(this.pushFilter(field, filters))
        });
        return sortedFilters;
        
    }

    pushFilter(field: string, filters: IFilter[]) {
        return filters.find(filter => filter.field === field)
    }

    initCategoryFilterWithSelectors(categories) {
        this.categoryFilter = this.filters.find(filter => filter.field === 'categories');
        categories.map(cat => {
            cat.subServices.map(sub => {
                    this.categoryFilter.selector.push({value: sub.title, text: sub.title})
            })
        });
    }

    setCategoriesFilter(checked: []) {
        this.categoryFilter.checked = checked;
        this.updateQueryParams();
    }

    ngOnDestroy(): void {
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
