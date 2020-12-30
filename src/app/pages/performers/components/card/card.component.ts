import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('bigSlider', [
        state('start', style({
          transform: `translateX(0px)`,
        })),
        state('next', style({
          transform: `translateX(-240px)`,
        })),
        state('double', style({
          transform: `translateX(-480px)`,
        })),  
        state('prev', style({
          transform: `translateX(-240px)`,
        })),    
        transition('start => next', [
          animate('.2s')
        ]),         
        transition('start => double', [
          animate('.2s')
        ]),  
        transition('prev => start', [
          animate('.2s')
        ]),
    ]),
    trigger('smallSlider', [
      state('start', style({
        transform: `translateX(0px)`,
      })),
      state('next', style({
        transform: `translateX(-83px)`,
      })),
      state('double', style({
        transform: `translateX(-166px)`,
      })),
      state('prev', style({
        transform: `translateX(-83px)`,
      })),    
      transition('start => next', [
        animate('.2s')
      ]),  
      transition('start => double', [
        animate('.2s')
      ]),
      transition('prev => start', [
        animate('.2s')
      ]),
    ])
  ]
})

export class CardComponent implements OnInit {
  public isMobile = false;
    public isFavorite = false;
    public sliderState = 'start';
    @Input() card: any;

    constructor() { }

    next() {
        this.sliderState = 'next';
        setTimeout(() => {
          let currentSlide = this.card.gallery[0];
          this.card.gallery.shift();
          this.card.gallery.push(currentSlide);
          this.sliderState = 'start';
        }, 200)
    }

    prev() {
        let currentSlide = this.card.gallery[this.card.gallery.length - 1];
        this.card.gallery.pop();
        this.card.gallery.unshift(currentSlide); 
        this.sliderState = 'prev';
        setTimeout(() => {
          this.sliderState = 'start';
        }, 0)
    }

    changeSlide(index: number): void {
        if (index === 1) {
          this.next();
        } else if (index === 2) {
          this.doubleNext()
        }
    }

    doubleNext() {
      this.sliderState = 'double';
        setTimeout(() => {
          let currentSlide = this.card.gallery[0];
          this.card.gallery.shift();
          this.card.gallery.push(currentSlide);

          currentSlide = this.card.gallery[0];
          this.card.gallery.shift();
          this.card.gallery.push(currentSlide);
          this.sliderState = 'start';
        }, 200)
    }

    ngOnInit(): void {
        if (window.innerWidth <= 767) { this.isMobile = true }
    }
}