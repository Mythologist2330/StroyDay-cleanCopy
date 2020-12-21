import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  profileToogle: boolean = false




  openCloseBurgerMenu(event) {
    if (event.view.innerWidth <= 767) {

      event.path.filter((containerBurgerMenu) => {
        if (containerBurgerMenu.className === 'header-devide-top') {
          for (let burgerMenu of containerBurgerMenu.children) {
            if (burgerMenu.className === 'menu') {

              if (burgerMenu.style.left === '0%') {
                burgerMenu.style.left = '-100%'
              } else {
                burgerMenu.style.left = '0%'
              }

            }
          }
        }

        if (containerBurgerMenu.localName === 'html') {
          if (containerBurgerMenu.style.overflow === 'hidden') {
            containerBurgerMenu.style.overflow = 'auto';
          } else {
            containerBurgerMenu.style.overflow = 'hidden';
          }
        }
  
        if (containerBurgerMenu.localName === 'body') {
          if (containerBurgerMenu.style.overflow === 'hidden') {
            containerBurgerMenu.style.overflow = 'auto';
          } else {
            containerBurgerMenu.style.overflow = 'hidden';
          }
        }

      })
    }
  }

}
