import { Component, OnInit } from '@angular/core';
import { IPerformersCard } from 'src/app/interfaces/IPerformersCard';
import { PerformersCardService } from 'src/app/services/performers-card.service';

@Component({
    selector: 'app-performersPage',
    templateUrl: './performersPage.component.html',
    styleUrls: ['./performersPage.component.scss']
})

export class PerformersPageComponent implements OnInit{

    performersCards: IPerformersCard[]


    constructor (private performersCardService: PerformersCardService) {}


    next(elem, idx) {

    }


    ngOnInit() {
        this.performersCardService.getAllPerformersCard().subscribe(
            data => {
                console.log(data)
                this.performersCards = data
            }
        )
    }









    





    openCloseMap = false








    openCloseFilter(event) {

        event.path.filter((filter) => {

            if (filter.className === 'filter') {



                for (let child of filter.children) {

                    if (child.className === 'filter-inner') {

                        if (child.style.display === 'block') {
                            child.style.display = 'none'
                        } else {
                            child.style.display = 'block'
                        }
                    }

                }



                for (let arrow of filter.children) {
                                
                    if (arrow.className === 'filter-title') {
                        if (arrow.children[1].style.transform === 'rotate(-180deg)') {
                            arrow.children[1].style.transform = 'none'
                        } else {
                            arrow.children[1].style.transform = 'rotate(-180deg)'
                        }
                    }
                }



            }

        })
    }

    openCloseCheckboxes(event) {

        event.path.filter((checkboxesList) => {
            
            if (checkboxesList.className === 'checkboxes-list') {
                
                if (checkboxesList.children[1].style.display === 'block') {
                    checkboxesList.children[1].style.display = 'none'
                    checkboxesList.children[0].children[0].style.transform = 'rotate(-90deg)'
                } else {
                    checkboxesList.children[1].style.display = 'block'
                    checkboxesList.children[0].children[0].style.transform = 'none'
                }

            }

        })
    }



    closeContainerFilters(event) {

        event.path.filter((filters) => {

            if (filters.className === 'filters') {
                filters.style.left = '-110%'

                for (let filtersButtons of filters.children) {
                    if (filtersButtons.className === 'filters-buttons-reset-apply') {
                        filtersButtons.style.display = 'none'

                        console.log(event)
                    }
                }
            }

            if (filters.className === 'container') {

                for (let overlay of filters.children) {

                    if (overlay.className === 'overlay') {
                        overlay.style.display = 'none'
                    }

                }

            }

            if (filters.localName === 'body') {
                filters.style.overflow = 'auto'
            }

            if (filters.localName === 'html') {
                filters.style.overflow = 'auto'
            }

        })
    }



}