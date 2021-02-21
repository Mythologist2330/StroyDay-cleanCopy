import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-face',
  templateUrl: './contact-face.component.html',
  styleUrls: ['./contact-face.component.scss']
})

export class ContactFaceComponent {

  contactFace = []

  addContactFace() {
    this.contactFace.push({lastName: '', firstName: '', tel: '', email: ''})
  }

}