import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";
import { NavigationComponent } from "./component/navigation/navigation.component";
import { PersonalAreaComponent } from "./personal-area.component";
import { ProfileModule } from "./profile/profile.module";

const routes = [
  //{path: '**', redirectTo: 'profile'}
]

@NgModule({
  declarations: [
    PersonalAreaComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes),
    ProfileModule
  ]
})
export class PersonalAreaModule { }