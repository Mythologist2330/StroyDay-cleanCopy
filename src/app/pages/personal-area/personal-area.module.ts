import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AcceptedOrdersComponent } from "./components/accepted-orders/accepted-orders.component";
import { BasicInfoComponent } from "./components/basic-info/basic-info.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";
import { DocumentsComponent } from "./components/documents/documents.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { PostedOrdersComponent } from "./components/posted-orders/posted-orders.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RequisitesComponent } from "./components/requisites/requisites.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { ServiceComponent } from "./components/service/service.component";
import { ServicesComponent } from "./components/services/services.component";
import { PersonalAreaComponent } from "./personal-area.component";


const routes = [
  {path: 'personalArea/:id', component: PersonalAreaComponent}
]

@NgModule({
    declarations: [
        PersonalAreaComponent,
        NavigationComponent,
        ProfileComponent,
        RequisitesComponent,
        BasicInfoComponent,
        GalleryComponent,
        ServicesComponent,
        ServiceComponent,
        ReviewsComponent,
        AcceptedOrdersComponent,
        PostedOrdersComponent,
        DocumentsComponent,
        CertificatesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forRoot(routes)
    ],
})
export class PersonalAreaModule { }