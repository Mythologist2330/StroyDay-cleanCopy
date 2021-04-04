import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header-filters',
    templateUrl: './header-filters.component.html',
    styleUrls: ['./header-filters.component.scss']
})

export class HeaderFiltersComponent {

    @Input() toggle: boolean;
    @Input() count: number;
    @Input() toggleOverlay: boolean;
    @Input() orderBy: string;
    @Output() invertToggle = new EventEmitter();
    @Output() invertToggleOverlay = new EventEmitter();
    @Output() switchSorting = new EventEmitter();

    public openModal = false;

    setToggle(toggle: boolean): void {
        toggle = !toggle;
        this.invertToggle.emit(toggle)
    }

    setToggleOverlay(toggleOverlay: boolean): void {
        toggleOverlay = true;
        this.invertToggleOverlay.emit(toggleOverlay)
    }

    setSort(sortBy: string): void {
        this.switchSorting.emit(sortBy);
        this.openModal = false;
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