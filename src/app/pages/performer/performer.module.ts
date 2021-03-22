import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { SharedModule } from "../../shared/shared.module";
import { AboutPerformer } from "./components/about-performer/about-performer.component";
import { AuthorBlogComponent } from "./components/author-blog/author-blog.component";
import { CardComponent } from "./components/card/card.component";
import { CertificatesComponent } from "./components/certificates/certificates.component";
import { CompleteOrdersComponent } from "./components/complete-orders/complete-orders.component";
import { DocumentsComponent } from "./components/documents/documents.component";
import { MapLocationComponent } from "./components/map-location/map-location.component";
import { PostedOrdersComponent } from "./components/posted-orders/posted-orders.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { SliderComponent } from "./components/slider/slider.component";
import { SubmitApplicationComponent } from "./components/submit-application/submit-application.component";
import { WriteToPerformerComponent } from "./components/write-to-performer/write-to-performer.component";
import { PerformerComponent } from "./performer.component";
import { ReviewComponent } from './components/review/review.component';


@NgModule({
    declarations: [
        PerformerComponent,
        SliderComponent,
        CardComponent,
        AboutPerformer,
        MapLocationComponent,
        ReviewsComponent,
        SubmitApplicationComponent,
        CompleteOrdersComponent,
        PostedOrdersComponent,
        AuthorBlogComponent,
        DocumentsComponent,
        CertificatesComponent,
        WriteToPerformerComponent,
        ReviewComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        LeafletModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
})
export class PerformerModule { }