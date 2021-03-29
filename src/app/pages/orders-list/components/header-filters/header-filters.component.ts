import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header-filters',
    templateUrl: './header-filters.component.html',
    styleUrls: ['./header-filters.component.scss']
})

export class HeaderFiltersComponent {

    @Input() toggleFilters: boolean;
    @Input() toggleOverlay: boolean;
    @Input() count: number;
    @Output() invertToggleFilters = new EventEmitter();
    @Output() invertToggleOverlay = new EventEmitter();

    setToggles(): void {
        this.toggleFilters = !this.toggleFilters;
        this.invertToggleFilters.emit(this.toggleFilters)

        this.toggleOverlay = !this.toggleOverlay;
        this.invertToggleOverlay.emit(this.toggleOverlay)
    }

    onOffScroll(event) {
        let html = event.path.filter(pathElem => pathElem.localName === 'html')
        let body = event.path.filter(pathElem => pathElem.localName === 'body')

        if (html[0].style.overflow === 'hidden') {
            html[0].style.overflow = 'auto'
        } else {
            html[0].style.overflow = 'hidden'
        }

        if (body[0].style.overflow === 'hidden') {
            body[0].style.overflow = 'auto'
        } else {
            body[0].style.overflow = 'hidden'
        }
    }

}