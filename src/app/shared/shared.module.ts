import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from '../components/map/map.component';
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';
import { TagsComponent } from '../components/tags/tags.component';
import { RatingStarsComponent } from '../components/rating-stars/rating-stars.component';

@NgModule({
    declarations: [            
        MapComponent,
        BreadcrumbsComponent,
        TagsComponent,
        RatingStarsComponent,
    ],
  imports: [
        CommonModule,
        MaterialModule,
        LeafletModule,
    ],
  exports: [
        MaterialModule,
        MapComponent,
        BreadcrumbsComponent,
        TagsComponent,
        RatingStarsComponent,
    ],
})
export class SharedModule { }
