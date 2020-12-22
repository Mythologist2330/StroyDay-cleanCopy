import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header-filters',
    templateUrl: './header-filters.component.html',
    styleUrls: ['./header-filters.component.scss']
})

export class HeaderFiltersComponent {

    @Input() toggle: boolean;
    @Input() count: number;
    @Output() invertToggle = new EventEmitter();

    setToggle(toggle: boolean): void {
        toggle = !toggle;
        this.invertToggle.emit(toggle)
    }

}