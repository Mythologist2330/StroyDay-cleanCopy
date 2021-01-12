import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-servicesPage',
    templateUrl: './servicesPage.component.html',
    styleUrls: ['./servicesPage.component.scss']
})

export class ServicesPageComponent implements OnInit{

    public toggle = false;
    public page = 'Услуги';
    shrinkHeader: boolean = false;
    filterLocationToggle: boolean = false;
    showButtonsResetApply: boolean = false;

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

    ngOnInit() {
        this.animateHeader();
    }

}