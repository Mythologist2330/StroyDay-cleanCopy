import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoComponent } from "./basic-info.component";
import { ServiceCategoriesComponent } from "./component/service-categories/service-categories.component";

@NgModule({
  declarations: [
    BasicInfoComponent,
    ServiceCategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BasicInfoModule { }