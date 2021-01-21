import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { Performer } from "src/app/models/Performer";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('slider', [
            state('start', style({
                transform: `translateX(-410px)`,
            })),
            state('next', style({
                transform: `translateX(-1226px)`,
            })),
            state('prev', style({
                transform: `translateX(-1226px)`,
            })),
            transition('start => next', [
                animate('.2s')
            ]),
            transition('prev => start', [
                animate('.2s')
            ])
        ])
    ]
})

export class SliderComponent{

    public sliderState = 'start';
    @Input() card: Performer;

    sliderImages: string[] = [
        '/assets/images/performer/slider-1.png',
        '/assets/images/performer/slider-2.jpg',
        '/assets/images/performer/slider-3.jpg'
    ]

    next() {
        this.sliderState = 'next';
        setTimeout(() => {
          let currentSlide = this.sliderImages[0];
          this.sliderImages.shift();
          this.sliderImages.push(currentSlide);
          this.sliderState = 'start';
        }, 200)
    }

    prev() {
        let currentSlide = this.sliderImages[this.sliderImages.length - 1];
        this.sliderImages.pop();
        this.sliderImages.unshift(currentSlide);
        this.sliderState = 'prev';
        setTimeout(() => {
          this.sliderState = 'start';
        }, 0)
    }

}