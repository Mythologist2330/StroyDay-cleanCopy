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