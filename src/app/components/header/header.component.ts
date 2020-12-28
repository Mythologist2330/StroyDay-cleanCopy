import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  profileToogle: boolean = false
  buttonServicesIconToggle: boolean = false



  openCloseBurgerMenu(event) {
    if (event.view.innerWidth <= 767) {

      event.path.filter((containerBurgerMenu) => {
        if (containerBurgerMenu.className === 'header-devide-top') {
          for (let burgerMenu of containerBurgerMenu.children) {
            if (burgerMenu.className === 'menu') {

              if (burgerMenu.style.left === '0%') {
                burgerMenu.style.left = '-120%'
              } else {
                burgerMenu.style.left = '0%'
              }

            }

            if(burgerMenu.className === 'button-services') {

              if (burgerMenu.style.left === 'calc(0% - 16px)') {
                burgerMenu.style.left = '-120%'
              } else {
                burgerMenu.style.left = 'calc(0% - 16px)'
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


  navigationModuleToggleMobile(event) {
    if (event.view.innerWidth <= 767) {

      event.path.filter((navigationModuleContainer) => {

        if (navigationModuleContainer.className === 'header-devide-top') {
          for (let navigationModule of navigationModuleContainer.children) {
            if (navigationModule.className === 'navigation-module-window') {

              this.buttonServicesIconToggle = true

              if (navigationModule.style.right === '-16px') {
                navigationModule.style.right = 'calc(-100% - 48px)'

                setTimeout(() => {
                  this.buttonServicesIconToggle = false
                }, 200);

              } else {

                setTimeout(() => {
                  navigationModule.style.right = '-16px'
                }, 0);
              }

            }
          }
        }

      })

    }
  }

}
