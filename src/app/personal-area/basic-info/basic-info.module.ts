import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoComponent } from "./basic-info.component";
import { ServiceCategoriesComponent } from "./components/service-categories/service-categories.component";
import { ServiceComponent } from "./components/service/service.component";

@NgModule({
  declarations: [
    BasicInfoComponent,
    ServiceCategoriesComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BasicInfoModule { }