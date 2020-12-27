import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    isMobile = false;
    public isFavorite = false;
    public bigX = 0;
    public smallX = 0;
    @Input() card: any

    constructor() { }

    next() {
      if (this.bigX === -(this.card.gallery.length - 1) * 240) {
        this.smallX = 0;
        this.bigX = 0;
      } else {
        this.bigX -= 240;
        this.smallX -= 83
      }
      // setTimeout(() => {
      //   let currentSlide = this.card.gallery[0];
      //   (this.card.gallery as Array<string>).shift();
      //   this.card.gallery.push(currentSlide);
      //   this.smallX = 0;
      //   this.bigX = 0;
      // }, 500)
      
    }

    prev() {
      if (this.bigX === 0) {
        this.bigX = -(this.card.gallery.length - 1) * 240;
        this.smallX = -(this.card.gallery.length - 1) * 83;
      } else {
        this.bigX += 240;
        this.smallX += 83;
      }
      // let currentSlide = this.card.gallery[this.card.gallery.length - 1];
      // (this.card.gallery as Array<string>).pop();
      // this.card.gallery.unshift(currentSlide);
      // console.log(this.card.gallery);
    }

    changeSlide(index) {      
      this.bigX = -index * 240;
      this.smallX = -index * 83;
    }

    ngOnInit(): void {
        if (window.innerWidth <= 767) { this.isMobile = true }
    }
}