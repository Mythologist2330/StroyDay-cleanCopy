import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-albums',
  templateUrl: './gallery-albums.component.html',
  styleUrls: ['./gallery-albums.component.scss']
})

export class GalleryAlbumsComponent {

  galleryAlbums: any = [
    {
        title: 'Общий альбом',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Ремонт в двушке',
        count: 120,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Ремонт в квартире',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Общий альбом',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Общий альбом',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Общий альбом',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Общий альбом',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    },
    {
        title: 'Общий альбом',
        count: 15,
        image: '../../../../../assets/images/personal-area/gallery/bg-galleryAlbum.png'
    }
]

}