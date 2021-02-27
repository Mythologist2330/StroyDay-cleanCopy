import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-album',
  templateUrl: './gallery-album.component.html',
  styleUrls: ['./gallery-album.component.scss']
})

export class GalleryAlbumComponent {

  @Input() galleryAlbum

}