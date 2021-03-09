import { Component } from '@angular/core';

@Component({
  selector: 'app-redaction-album',
  templateUrl: './redaction-album.component.html',
  styleUrls: ['./redaction-album.component.scss']
})

export class RedactionAlbumComponent {

  toggleDeleteAlbum = false

  photosFromAlbum = [
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png',
    'assets/images/personal-area/gallery/photo-of-album.png'
  ]

}