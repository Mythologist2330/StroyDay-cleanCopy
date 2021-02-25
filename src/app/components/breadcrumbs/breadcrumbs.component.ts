import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() categories: string[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(link: string) {
    this.router.navigate([link])
  }

}
