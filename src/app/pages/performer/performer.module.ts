import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { SharedModule } from "../../shared/shared.module";
import { aboutPerformer } from "./components/about-performer/about-performer.component";
import { CardComponent } from "./components/card/card.component";
import { certificatesComponent } from "./components/certificates/certificates.component";
import { MapLocationComponent } from "./components/map-location/map-location.component";
import { postedApplicationsComponent } from "./components/posted-applications/posted-applications.component";
import { reviewsComponent } from "./components/reviews/reviews.component";
import { submitApplicationComponent } from "./components/submit-application/submit-application.component";
import { writeToPerformerComponent } from "./components/write-to-performer/write-to-performer.component";
import { PerformerComponent } from "./performer.component";

const routes = [
  {path: 'performer/:id', component: PerformerComponent}
]

@NgModule({
    declarations: [
        PerformerComponent,
        CardComponent,
        aboutPerformer,
        MapLocationComponent,
        reviewsComponent,
        submitApplicationComponent,
        postedApplicationsComponent,
        certificatesComponent,
        writeToPerformerComponent
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