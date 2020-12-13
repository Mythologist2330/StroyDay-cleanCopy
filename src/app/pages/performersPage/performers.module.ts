import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformersListComponent } from './performers-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderFiltersComponent } from './components/header-filters/header-filters.component';
import { MaterialModule } from "../../shared/material.module";

@NgModule({
    declarations: [        
        PerformersListComponent,
        FilterComponent,
        HeaderFiltersComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
})
export class PerformersModule { }