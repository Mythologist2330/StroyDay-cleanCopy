import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FiltersComponent } from "./components/filters/filters.component";
import { HeaderFiltersComponent } from "./components/header-filters/header-filters.component";
import { OrderCardComponent } from "./components/order-card/order-card.component";
import { OrdersListComponent } from "./orders-list.component";

@NgModule({
    declarations: [
        OrdersListComponent,
        OrderCardComponent,
        HeaderFiltersComponent,
        FiltersComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class OrdersListModule { }