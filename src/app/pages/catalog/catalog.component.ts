import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Observable, fromEvent, combineLatest } from 'rxjs';
import { NavigationEnd, Router } from "@angular/router";
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Category } from "src/app/models/category";
import { Service } from "src/app/models/Service";
import { CategoryService } from 'src/app/services/category.service';
import { ServicesService } from "src/app/services/services.service";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit{

    public toggle = false;
    public page = 'Услуги';
    shrinkHeader = false;
    filterLocationToggle = false;
    showButtonsResetApply = false;
    @ViewChild('input') input: ElementRef;
    public searchText = null;

    constructor(public catSrv: CategoryService,
                private srvSrv: ServicesService,
                private router: Router) {}

    ngAfterViewInit(): void {
        fromEvent(this.input.nativeElement,'keyup')
          .pipe(
              debounceTime(400),
              distinctUntilChanged(),
              tap(() => this.searchText = this.input.nativeElement.value)
          )
          .subscribe();
        }


  ngOnInit() {
      this.animateHeader();
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
    });
  }
    
  getSearchResult(): Observable<any[]> {
    return combineLatest([this.catSrv.categories$, this.srvSrv.services$], (categories, services) => {
      return [
        ...categories.filter(cat => cat.title.toLowerCase().includes(this.searchText.toLowerCase())),
        ...services.filter(srv => srv.title.toLowerCase().includes(this.searchText.toLowerCase()))
      ] 
    });
  }
  
  goToCategory(point: Category | Service) {
    if (point instanceof Category) {
      this.router.navigate(['pages/services/service-catalog/' + point.id]);
    } else {      
      this.router.navigate(['pages/service/' + point.id]);
    }
    this.searchText = null;
    this.input.nativeElement.value = null;
  }

    showButtonsResetApplyFunction(event) {
        if (event.view.innerWidth < 768) {
            this.showButtonsResetApply = true
        }
    }

    animateHeader(): void {
        window.onscroll = () => {
            if (window.pageYOffset > 100) {
                this.shrinkHeader = true;
            } else {
                this.shrinkHeader = false;
            }
        };
    }
}