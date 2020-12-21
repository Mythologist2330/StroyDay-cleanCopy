import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from '../components/map/map.component';
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';
import { TagsComponent } from '../components/tags/tags.component';
import { RatingStarsComponent } from '../components/rating-stars/rating-stars.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

@NgModule({
    declarations: [            
        MapComponent,
        BreadcrumbsComponent,
        TagsComponent,
        RatingStarsComponent,
        PaginationComponent,
        
    ],
  imports: [
        CommonModule,
        MaterialModule,
        LeafletModule,
        RouterModule
    ],
  exports: [
        MaterialModule,
        MapComponent,
        BreadcrumbsComponent,
        TagsComponent,
        RatingStarsComponent,
        PaginationComponent,
        RouterModule,
    ],
})
export class SharedModule { }
