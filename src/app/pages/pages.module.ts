import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { OrdersListModule } from "./orders-list/orders-list.module";
import { PerformersModule } from './performer-list/performers.module';
import { PerformerModule } from './performer/performer.module';


@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        SharedModule,
        PerformersModule,
        PerformerModule,
        OrdersListModule
    ]
})
export class PagesModule { }