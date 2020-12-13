import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  moduleWindowMapLocation = false;

  @Input() card: any

  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
  }

  addToFavorites(event): void {
    event.path.filter((buttonContainer) => {

        if (buttonContainer.className === 'add-to-favorites') {
            for (let button of buttonContainer.children) {
                if (button.classList[0] === 'button-removed-from-favorites') {
                    if (button.style.display === 'none') {
                        button.style.display = 'block'
                    } else {
                        button.style.display = 'none'
                    }
                }
    
                if (button.classList[0] === 'button-added-to-favorites') {
                    if (button.style.display === 'block') {
                        button.style.display = 'none'
                    } else {
                        button.style.display = 'block'
                    }
                }
            }
        }
      })
  }
openLocationMap(event) {        
  event.path.filter((htmlAndBody) => {
      if (htmlAndBody.localName === 'html') {
          if (htmlAndBody.style.overflow === 'hidden') {
              htmlAndBody.style.overflow = 'auto'
          } else {
              htmlAndBody.style.overflow = 'hidden'
          }
      }

      if (htmlAndBody.localName === 'body') {
          if (htmlAndBody.style.overflow === 'hidden') {
              htmlAndBody.style.overflow = 'auto'
          } else {
              htmlAndBody.style.overflow = 'hidden'
          }
      }
  })
}

}
