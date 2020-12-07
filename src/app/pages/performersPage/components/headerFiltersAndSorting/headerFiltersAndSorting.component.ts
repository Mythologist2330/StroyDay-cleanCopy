import { Component } from '@angular/core';

@Component({
    selector: 'app-headerFiltersAndSorting',
    templateUrl: './headerFiltersAndSorting.component.html',
    styleUrls: ['./headerFiltersAndSorting.component.scss']
})

export class HeaderFiltersAndSortingComponent{




    openContainerFilters(event) {

        event.path.filter((filters) => {

            if (filters.localName === 'app-performerspage') {
                
                for (let containerFilters of filters.lastChild.children) {

                    if (containerFilters.className === 'filters') {
                        containerFilters.style.left = '0'


                        for (let filtersButtons of containerFilters.children) {
                            if (filtersButtons.className === 'filters-buttons-reset-apply') {

                                if (event.view.innerWidth <= 767) {
                                    filtersButtons.style.display = 'flex'
                                }

                            }
                        }
                        
                    }

                }

                for (let container of filters.children) {

                    for (let overlay of container.children) {

                        if (overlay.className === 'overlay') {
                            overlay.style.display = 'block'
                        }

                    }

                }

            }


            if (filters.localName === 'body') {
                filters.style.overflow = 'hidden'
            }

            if (filters.localName === 'html') {
                filters.style.overflow = 'hidden'
            }

        })
    }





}