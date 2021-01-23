import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";

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
    @Input() gallery: string[];

    next() {
        this.sliderState = 'next';
        setTimeout(() => {
          let currentSlide = this.gallery[0];
          this.gallery.shift();
          this.gallery.push(currentSlide);
          this.sliderState = 'start';
        }, 200)
    }

    prev() {
        let currentSlide = this.gallery[this.gallery.length - 1];
        this.gallery.pop();
        this.gallery.unshift(currentSlide);
        this.sliderState = 'prev';
        setTimeout(() => {
          this.sliderState = 'start';
        }, 0)
    }

}