import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header-filters',
    templateUrl: './header-filters.component.html',
    styleUrls: ['./header-filters.component.scss']
})

export class HeaderFiltersComponent {

    @Input() toggle: boolean;
    @Input() count: number;
    @Input() orderBy: string;
    @Output() invertToggle = new EventEmitter();
    @Output() switchSorting = new EventEmitter();

    public openModal = false;

    setToggle(toggle: boolean): void {
        toggle = !toggle;
        this.invertToggle.emit(toggle)
    }

    setSort(sortBy: string): void {
        this.switchSorting.emit(sortBy);
        this.openModal = false;
    }
}