import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoComponent } from "./basic-info.component";
import { DepartureAreasComponent } from "./component/departure-areas/departure-areas.component";
import { ServiceCategoriesComponent } from "./component/service-categories/service-categories.component";

@NgModule({
  declarations: [
    BasicInfoComponent,
    ServiceCategoriesComponent,
    DepartureAreasComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BasicInfoModule { }