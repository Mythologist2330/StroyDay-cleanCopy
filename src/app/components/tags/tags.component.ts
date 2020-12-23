import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: {title:string, field: string, value: string, text: string }[];
  @Output() changeTags = new EventEmitter();
  isEmpty() {
    return !(this.tags.some(tag => tag.value !== '0'))
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.tags);
  }

  deleteTag(index) {
    this.tags[index].value = '0';
    this.changeTags.emit(this.tags);
  }

  resetTags() {
    this.tags = [];
    this.changeTags.emit(this.tags)
  }

}
