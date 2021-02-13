import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";
import { PersonalAreaModule } from "./personal-area/personal-area.module";
import { ProfileComponent } from "./profile.component";


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonalAreaModule
  ]
})
export class ProfileModule { }