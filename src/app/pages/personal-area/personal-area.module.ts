import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PersonalAreaComponent } from "./personal-area.component";


const routes = [
  {path: 'personalArea', component: PersonalAreaComponent}
]

@NgModule({
    declarations: [
        PersonalAreaComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
})
export class PersonalAreaModule { }