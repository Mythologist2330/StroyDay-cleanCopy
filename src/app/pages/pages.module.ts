import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthorizationModule } from "./authorization/authorization.module";
import { OrderComponent } from "./order/order.component";
import { OrdersListModule } from "./orders-list/orders-list.module";
import { PerformersModule } from './performer-list/performers.module';
import { PerformerModule } from './performer/performer.module';


@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PerformersModule,
        PerformerModule,
        OrdersListModule,
        AuthorizationModule
    ]
})
export class PagesModule {}