import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  openBurgerMenu = false
  openMainSectionsMenu = false
  openMainSectionsModalMenu = false

  onOffScroll(event) {
    let html = event.path.filter(pathElem => pathElem.localName === 'html')
    let body = event.path.filter(pathElem => pathElem.localName === 'body')

    if (html[0].style.overflow === 'hidden') {
      html[0].style.overflow = 'auto'
    } else {
      html[0].style.overflow = 'hidden'
    }

    if (body[0].style.overflow === 'hidden') {
      body[0].style.overflow = 'auto'
    } else {
      body[0].style.overflow = 'hidden'
    }
  }

}