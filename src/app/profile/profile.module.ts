import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";
import { PersonalAreaComponent } from "./personal-area/personal-area.component";
import { PersonalAreaModule } from "./personal-area/personal-area.module";
import { ProfileComponent } from "./profile.component";


const routes = [
  {path: 'profile/:id', component: PersonalAreaComponent}
]


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    PersonalAreaModule
  ]
})
export class ProfileModule { }