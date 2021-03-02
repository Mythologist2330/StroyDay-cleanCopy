import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BasicInfoModule } from "./basic-info/basic-info.module";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { GalleryModule } from "./gallery/gallery.module";
import { PersonalAreaComponent } from "./personal-area.component";
import { ProfileModule } from "./profile/profile.module";
import { ServicesComponent } from "./services/services.component";

@NgModule({
  declarations: [
    PersonalAreaComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileModule,
    BasicInfoModule,
    GalleryModule
  ]
})
export class PersonalAreaModule { }