import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { AcceptedOrdersComponent } from "./components/accepted-orders/accepted-orders.component";
import { BasicInfoComponent } from "./components/basic-info/basic-info.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";
import { DocumentsComponent } from "./components/documents/documents.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { PostedOrdersComponent } from "./components/posted-orders/posted-orders.component";
import { ProfileFaceComponent } from "./components/profile/profile.component";
import { RequisitesComponent } from "./components/requisites/requisites.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { ServiceComponent } from "./components/service/service.component";
import { ServicesComponent } from "./components/services/services.component";
import { ProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
        ProfileComponent,
        ProfileFaceComponent,
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
        SharedModule
    ],
})
export class ProfileModule { }