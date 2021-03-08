import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { CatalogComponent } from './catalog.component';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { ServiceCategoriesComponent } from './components/service-categories/service-categories.component';

@NgModule({
    declarations: [
        CatalogComponent,
        ServiceCategoriesComponent,
        ServiceCatalogComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
})
export class CatalogModule {}