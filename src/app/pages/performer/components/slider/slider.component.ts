import { animate, state, style, transition, trigger } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('slider', [
            state('start', style({
                transform: `translateX(-560px)`,
            })),
            state('next', style({
                transform: `translateX(-1352px)`,
            })),
            state('prev', style({
                transform: `translateX(-1352px)`,
            })),

            state('startTablet', style({
                transform: `translateX(-450px)`,
            })),
            state('nextTablet', style({
                transform: `translateX(-986px)`,
            })),
            state('prevTablet', style({
                transform: `translateX(-986px)`,
            })),

            transition('start => next', [
                animate('.2s')
            ]),
            transition('prev => start', [
                animate('.2s')
            ]),
            transition('startTablet => nextTablet', [
                animate('.2s')
            ]),
            transition('prevTablet => startTablet', [
                animate('.2s')
            ])
        ])
    ]
})

export class SliderComponent implements OnInit{

    public sliderState
    @Input() gallery: string[];

    next(event) {
        if (event.view.innerWidth > 1275) {
            this.sliderState = 'next';
            setTimeout(() => {
              let currentSlide = this.gallery[0];
              this.gallery.shift();
              this.gallery.push(currentSlide);
              this.sliderState = 'start';
            }, 200)
        } else {
            this.sliderState = 'nextTablet';
            setTimeout(() => {
              let currentSlide = this.gallery[0];
              this.gallery.shift();
              this.gallery.push(currentSlide);
              this.sliderState = 'startTablet';
            }, 200)
        }
    }

    prev(event) {
        let currentSlide = this.gallery[this.gallery.length - 1];
        this.gallery.pop();
        this.gallery.unshift(currentSlide);

        if (event.view.innerWidth > 1275) {
            this.sliderState = 'prev';
            setTimeout(() => {
              this.sliderState = 'start';
            }, 0)
        } else {
            this.sliderState = 'prevTablet';
            setTimeout(() => {
              this.sliderState = 'startTablet';
            }, 0)
        }
    }

    ngOnInit() {
        console.log(window.innerWidth)
        if (window.innerWidth > 1275) {
            this.sliderState = 'start'; console.log(window.innerWidth)
        } else {
            this.sliderState = 'startTablet'; console.log(window.innerWidth)
        }
        
    }

}