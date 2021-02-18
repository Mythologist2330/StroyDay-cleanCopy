import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoComponent } from "./basic-info.component";
import { ContactFaceComponent } from "./component/contact-face/contact-face.component";
import { DepartureAreasComponent } from "./component/departure-areas/departure-areas.component";
import { LocationComponent } from "./component/location/location.component";
import { MetroComponent } from "./component/metro/metro.component";
import { PerformerTypeComponent } from "./component/performer-type/performer-type.component";
import { ServiceCategoriesComponent } from "./component/service-categories/service-categories.component";

@NgModule({
  declarations: [
    BasicInfoComponent,
    ServiceCategoriesComponent,
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