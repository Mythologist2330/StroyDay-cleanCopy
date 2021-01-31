import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { PersonalAreaComponent } from "./personalArea.component";


const routes = [
  {path: 'personalArea', component: PersonalAreaComponent}
]

@NgModule({
    declarations: [
        PersonalAreaComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
})
export class PersonalAreaModule { }