import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-from-album',
  templateUrl: './photo-from-album.component.html',
  styleUrls: ['./photo-from-album.component.scss']
})

export class PhotoFromAlbumComponent {

  @Input() photo

  toggle = false

}