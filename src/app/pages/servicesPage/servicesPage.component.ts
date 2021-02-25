import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-servicesPage',
    templateUrl: './servicesPage.component.html',
    styleUrls: ['./servicesPage.component.scss']
})

export class ServicesPageComponent implements OnInit{

    public toggle = false;
    public page = 'Услуги';
    shrinkHeader = false;
    filterLocationToggle = false;
    showButtonsResetApply = false;
    @ViewChild('input') input: ElementRef;
    public searchText = null;

    constructor(public catSrv: CategoryService,
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
  }
    
  getSearchResult(): Observable<any[]> {
    return this.catSrv.categories$.pipe(
      map(categories => {
        return categories
          .filter(cat => cat.title.toLowerCase().includes(this.searchText.toLowerCase()))
      })
    )
  }
  
  goToCategory(id: string) {
    this.router.navigate(['pages/services/service-catalog/' + id]);
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