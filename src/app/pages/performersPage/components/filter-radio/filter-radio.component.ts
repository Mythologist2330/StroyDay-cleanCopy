import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-radio',
  templateUrl: './filter-radio.component.html',
  styleUrls: ['./filter-radio.component.scss']
})
export class FilterRadioComponent implements OnInit {

  @Input() filter: [];

  readonly ratingFilter = ['Не выбран', '1.0 и больше', '2.0 и больше', '3.0 и больше', '4.0 и больше', '5.0'];

  constructor() { }

  ngOnInit(): void {
  }

  openCloseFilter(event): void {
    event.path.filter((filter) => {
        if (filter.className === 'filter') {
            for (let child of filter.children) {
                if (child.className === 'filter-inner') {

                    if (child.style.display === 'block') {
                        child.style.display = 'none';

                        for (let fieldClick of filter.children) {
                            if (fieldClick.className === 'field-click') {
                                fieldClick.style.height = '56px';
                            }
                        }

                    } else {
                        child.style.display = 'block';

                        for (let fieldClick of filter.children) {
                            if (fieldClick.className === 'field-click') {
                                fieldClick.style.height = '52px';
                            }
                        }
                    }
                }
            }

            for (let arrow of filter.children) {
                if (arrow.className === 'filter-title') {
                    if (arrow.children[1].style.transform === 'rotate(-180deg)') {
                        arrow.children[1].style.transform = 'none';
                    } else {
                        arrow.children[1].style.transform = 'rotate(-180deg)';
                    }
                }
            }
        }
    });
}

}
