import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-categories',
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.scss']
})
export class FilterCategoriesComponent implements OnInit {

  @Input() categories: string;
  public toggle = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.categories);
  }

  
  openCloseCheckboxes(event): void {

    event.path.filter((checkboxesList) => {
        if (checkboxesList.className === 'checkboxes-list') {

            if (checkboxesList.children[1].style.display === 'block') {
                checkboxesList.children[1].style.display = 'none';
                checkboxesList.children[0].children[0].style.transform = 'rotate(0deg)';
            } else {
                checkboxesList.children[1].style.display = 'block';
                checkboxesList.children[0].children[0].style.transform = 'rotate(90deg)';
            }
        }
    });
}

}
