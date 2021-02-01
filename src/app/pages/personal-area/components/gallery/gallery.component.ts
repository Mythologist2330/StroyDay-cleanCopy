import { Component } from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent{

    albums: any = [
        {
            title: 'Общий альбом',
            count: 15,
            image: '../../../../../assets/images/personal-area/bg-album.png'
        },
        {
            title: 'Ремонт в двушке',
            count: 120,
            image: '../../../../../assets/images/personal-area/bg-album.png'
        },
        {
            title: 'Ремонт в квартире',
            count: 15,
            image: '../../../../../assets/images/personal-area/bg-album.png'
        },
        {
            title: 'Общий альбом',
            count: 15,
            image: '../../../../../assets/images/personal-area/bg-album.png'
        }
    ]

}