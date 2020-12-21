import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { ServicesComponent } from './components/services/services.component';
import { ServicesPageComponent } from './servicesPage.component';
import { ServiceCatalogComponent } from './components/serviceCatalog/serviceСatalog.component';

@NgModule({
    declarations: [
        ServicesPageComponent,
        ServicesComponent,
        ServiceCatalogComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
})
export class ServicesPageModule {}