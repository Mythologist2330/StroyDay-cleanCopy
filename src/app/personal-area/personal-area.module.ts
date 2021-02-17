import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoModule } from "./basic-info/basic-info.module";
import { FooterComponent } from "./component/footer/footer.component";
import { HeaderComponent } from "./component/header/header.component";
import { NavigationComponent } from "./component/navigation/navigation.component";
import { PersonalAreaComponent } from "./personal-area.component";
import { ProfileModule } from "./profile/profile.module";

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
    ProfileModule,
    BasicInfoModule
  ]
})
export class PersonalAreaModule { }