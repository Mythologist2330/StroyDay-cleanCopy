import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { ServicesComponent } from './components/services/services.component';
import { CatalogComponent } from './catalog.component';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';

@NgModule({
    declarations: [
        CatalogComponent,
        ServicesComponent,
        ServiceCatalogComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
})
export class CatalogModule {}