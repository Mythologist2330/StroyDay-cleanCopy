import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { GalleryAlbumComponent } from "./components/gallery-album/gallery-album.component";
import { NotificationComponent } from "./components/notification/notification.component";
import { GalleryComponent } from "./gallery.component";

@NgModule({
  declarations: [
    GalleryComponent,
    NotificationComponent,
    GalleryAlbumComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GalleryModule { }