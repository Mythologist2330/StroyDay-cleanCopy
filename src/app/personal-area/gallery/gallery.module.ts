import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { GalleryAlbumComponent } from "./gallery-album/gallery-album.component";
import { GalleryAlbumsComponent } from "./gallery-albums/gallery-albums.component";
import { GalleryComponent } from "./gallery.component";

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryAlbumsComponent,
    GalleryAlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GalleryModule { }