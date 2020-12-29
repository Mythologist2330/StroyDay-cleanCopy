import { state, style, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('slider', [
        state('start', style({
          transition: 'all 0.3s ease-in-out'
        })),

        state('end', style({
          transition: 'none'
        }))
    ])
  ]
})

export class CardComponent implements OnInit {
    isMobile = false;
    public isFavorite = false;
    public bigX = 0;
    public smallX = 0;
    @Input() card: any



    sliderState = 'start'

  

    constructor() { }

    animate() {
      this.sliderState = this.sliderState === 'end' ? 'start' : 'end'
    }

    next() {
      if (this.bigX === -(this.card.gallery.length - 1) * 240) {
        this.smallX = 0;
        this.bigX = 0;
      } else {
        this.bigX -= 240;
        this.smallX -= 83;
      }
      setTimeout(() => {
        this.sliderState = this.sliderState === 'end' ? 'start' : 'end'
        let currentSlide = this.card.gallery[0];
        (this.card.gallery as Array<string>).shift();
        this.card.gallery.push(currentSlide);
        this.smallX = 0;
        this.bigX = 0;
        setTimeout(() => {
          this.sliderState = this.sliderState === 'end' ? 'start' : 'end'
        }, 300);
      }, 300)
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