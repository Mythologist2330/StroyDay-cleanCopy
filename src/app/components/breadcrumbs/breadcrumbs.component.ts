import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IBreadcrumb } from 'src/app/interfaces/IBreadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: IBreadcrumb[];

  constructor(private router: Router) {}

  goTo(link: string) {
    this.router.navigate([link])
  }

}
