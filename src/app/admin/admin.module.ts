import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AdminComponent } from './admin.component';
import { TreeComponent } from './tree/tree.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import { NodeComponent } from './tree/node/node.component';

@NgModule({
    declarations: [
        AdminComponent,
        TreeComponent,
        EditCategoryComponent,
        EditServiceComponent,
        NodeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
})
export class AdminModule { }