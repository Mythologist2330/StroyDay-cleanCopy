import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { SharedModule } from "../../shared/shared.module";
import { AboutPerformer } from "./components/about-performer/about-performer.component";
import { AuthorBlogComponent } from "./components/author-blog/author-blog.component";
import { CardComponent } from "./components/card/card.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";
import { CompleteApplicationsComponent } from "./components/complete-applications/complete-applications.component";
import { DocumentsComponent } from "./components/documents/documents.component";
import { MapLocationComponent } from "./components/map-location/map-location.component";
import { PostedApplicationsComponent } from "./components/posted-applications/posted-applications.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { ServicesComponent } from "./components/services/services.component";
import { SubmitApplicationComponent } from "./components/submit-application/submit-application.component";
import { WriteToPerformerComponent } from "./components/write-to-performer/write-to-performer.component";
import { PerformerComponent } from "./performer.component";

const routes = [
  {path: 'performer/:id', component: PerformerComponent}
]

@NgModule({
    declarations: [
        PerformerComponent,
        CardComponent,
        AboutPerformer,
        MapLocationComponent,
        ServicesComponent,
        ReviewsComponent,
        SubmitApplicationComponent,
        CompleteApplicationsComponent,
        PostedApplicationsComponent,
        AuthorBlogComponent,
        DocumentsComponent,
        CertificatesComponent,
        WriteToPerformerComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forRoot(routes),
        LeafletModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
})
export class PerformerModule { }