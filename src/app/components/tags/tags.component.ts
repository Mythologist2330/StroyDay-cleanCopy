import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: any[];
  @Output() changeTags = new EventEmitter();
  isEmpty() {
    return !(this.tags.some(tag => tag.text[0] !== '0'))
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteTag(tag) {
    this.changeTags.emit(tag);
  }

  resetTags() {
    this.changeTags.emit()
  }

}
