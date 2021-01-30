import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerformersListComponent } from './performers-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderFiltersComponent } from './components/header-filters/header-filters.component';
import { SharedModule } from "../../shared/shared.module";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FilterLocationComponent } from './components/filter-location/filter-location.component';
import { FilterCategoriesComponent } from './components/filter-categories/filter-categories.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterSubCategoriesComponent } from './components/filter-sub-categories/filter-sub-categories.component';

const routes = [
    {path: 'performers', component: PerformersListComponent}
]

@NgModule({
    declarations: [
        PerformersListComponent,
        FilterComponent,
        HeaderFiltersComponent,
        FilterLocationComponent,
        FilterCategoriesComponent,
        CardComponent,
        FilterSubCategoriesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LeafletModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule
    ],
})
export class PerformersModule { }