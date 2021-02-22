import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoComponent } from "./basic-info.component";
import { ContactFaceComponent } from "./components/contact-face/contact-face.component";
import { DepartureAreasComponent } from "./components/departure-areas/departure-areas.component";
import { LocationComponent } from "./components/location/location.component";
import { MetroComponent } from "./components/metro/metro.component";
import { PerformerTypeComponent } from "./components/performer-type/performer-type.component";
import { ServiceCategoriesComponent } from "./components/service-categories/service-categories.component";
import { ServiceComponent } from "./components/service/service.component";

@NgModule({
  declarations: [
    BasicInfoComponent,
    ServiceCategoriesComponent,
    ServiceComponent,
    DepartureAreasComponent,
    MetroComponent,
    ContactFaceComponent,
    LocationComponent,
    PerformerTypeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BasicInfoModule { }