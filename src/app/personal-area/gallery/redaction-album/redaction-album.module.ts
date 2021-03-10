import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { PhotoFromAlbumComponent } from "./components/photo-from-album/photo-from-album.component";
import { RedactionAlbumComponent } from "./redaction-album.component";

@NgModule({
  declarations: [
    RedactionAlbumComponent,
    PhotoFromAlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RedactionAlbumModule { }