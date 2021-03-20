import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit{

    categories: Array<Category>

    constructor(
        public catSrv: CategoryService
    ) {}

    ngOnInit() {
        this.catSrv.categories$.subscribe((data) => {
                this.categories = data
            }
        )
    }

    getOneLineTitle(cat) {
        if (cat.title.length < 27) {
            return cat.title
        }
    }

}