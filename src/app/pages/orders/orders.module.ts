import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { OrderComponent } from "./components/order/order.component";
import { OrdersComponent } from "./orders.component";

@NgModule({
    declarations: [
        OrdersComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class OrdersModule { }