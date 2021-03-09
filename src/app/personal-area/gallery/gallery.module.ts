import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CreationAlbumComponent } from "./creation-album/creation-album.component";
import { GalleryAlbumComponent } from "./gallery-album/gallery-album.component";
import { GalleryAlbumsComponent } from "./gallery-albums/gallery-albums.component";
import { GalleryComponent } from "./gallery.component";
import { RedactionAlbumModule } from "./redaction-album/redaction-album.module";

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryAlbumsComponent,
    GalleryAlbumComponent,
    CreationAlbumComponent,
    GalleryAlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RedactionAlbumModule
  ]
})
export class GalleryModule { }