import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { SharedModule } from "../../shared/shared.module";
import { CardComponent } from "./components/card/card.component";
import { PerformerComponent } from "./performer.component";

const routes = [
  {path: 'performer', component: PerformerComponent}
]

@NgModule({
    declarations: [
        PerformerComponent,
        CardComponent
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