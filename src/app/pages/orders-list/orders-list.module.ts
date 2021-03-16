import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderFiltersComponent } from "./components/header-filters/header-filters.component";
import { OrderCardComponent } from "./components/order-card/order-card.component";
import { OrdersListComponent } from "./orders-list.component";

@NgModule({
    declarations: [
        OrdersListComponent,
        OrderCardComponent,
        HeaderFiltersComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class OrdersListModule { }