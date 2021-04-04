import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { Observable, fromEvent, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { ServicesService } from 'src/app/services/services.service';
import { Service } from 'src/app/models/Service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {

    burgerMenuToggle: Boolean;
    navigationModuleWindowToggle = false;
    public profileToogle = false;
    public menuToggle = false;
    public currentCategory: Category;
    public searchText = '';
    @ViewChild('input') input: ElementRef;

    constructor(
        public catSrv: CategoryService,
        private srvSrv: ServicesService,
        private router: Router
    ) {}

    ngOnInit(): void {
        if (window.innerWidth < 1276) {
            if (window.innerWidth < 768) {
                this.burgerMenuToggle = false
            } else {
                this.burgerMenuToggle = true
            }
        }
    }

    ngAfterViewInit(): void {
        fromEvent(this.input.nativeElement,'keyup')
        .pipe(
            filter(Boolean),
            debounceTime(400),
            distinctUntilChanged(),
            tap(() => this.searchText = this.input.nativeElement.value)
        )
        .subscribe();
    }

    getResult(): Observable<any[]> {
        return combineLatest([this.catSrv.categories$, this.srvSrv.services$], (categories, services) => {
        return [
            ...categories.filter(cat => cat.title.toLowerCase().includes(this.searchText.toLowerCase())),
            ...services.filter(srv => srv.title.toLowerCase().includes(this.searchText.toLowerCase()))
        ] 
        });
    }

    chooseCategory(cat: Category) {
        this.currentCategory = cat;
    }

    getEven(subcat: Category[]) {
        return subcat.filter(item => subcat.indexOf(item) % 2 === 0)
    }

    getOdd(subcat: Category[]) {  
        return subcat.filter(item => subcat.indexOf(item) % 2 !== 0)
    }

    goToCategory(point: Category | Service) {
        if (point instanceof Category) {
        this.router.navigate(['pages/services/service-catalog/' + point.id]);
        } else {      
        this.router.navigate(['pages/service/' + point.id]);
        }
        this.menuToggle = false;
        this.searchText = null;
        this.input.nativeElement.value = null;
    }

    openCloseBurgerMenu(event) {
        if (event.view.innerWidth <= 767) {
        this.burgerMenuToggle = !this.burgerMenuToggle
        this.onOffScroll(event);
        }
    }

    navigationModuleToggleMobile(event) {
        if (event.view.innerWidth <= 767) {

        let modalWindow = document.getElementById('navigationModuleWindow')
        this.menuToggle = true

        if (modalWindow.style.right === '-16px') {
            modalWindow.style.right = 'calc(-100% - 48px)'

            setTimeout(() => {
            this.menuToggle = false
            }, 200);

        } else {
            setTimeout(() => {
            modalWindow.style.right = '-16px'
            }, 0);
        }

        }
    }

    onOffScroll(event) {
        event.path.filter((elem) => {
        if (elem.localName === ('html' || 'body')) {

            if (elem.style.overflow === 'hidden') {
            elem.style.overflow = 'auto';
            } else {
            elem.style.overflow = 'hidden';
            }

        }
        })
    }
}
