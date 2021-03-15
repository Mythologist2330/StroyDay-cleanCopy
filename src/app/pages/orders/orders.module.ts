import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderFiltersComponent } from "./components/header-filters/header-filters.component";
import { OrderComponent } from "./components/order/order.component";
import { OrdersComponent } from "./orders.component";

@NgModule({
    declarations: [
        OrdersComponent,
        OrderComponent,
        HeaderFiltersComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class OrdersModule { }