import { Component } from '@angular/core';

@Component({
  selector: 'app-performer-type',
  templateUrl: './performer-type.component.html',
  styleUrls: ['./performer-type.component.scss']
})

export class PerformerTypeComponent {

  performerType = []

  addPerformerType() {
    this.performerType.push({lastName: '', firstName: '', tel: '', email: ''})
  }

}