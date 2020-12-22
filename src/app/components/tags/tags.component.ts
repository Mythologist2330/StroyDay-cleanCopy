import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: {field: string, value: string}[];
  @Output() changeTags = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.tags);
  }

  deleteTag(index) {
    this.tags.splice(index, 1);
    this.changeTags.emit(this.tags);
  }

  resetTags() {
    this.tags = [];
    this.changeTags.emit(this.tags)
  }

}
