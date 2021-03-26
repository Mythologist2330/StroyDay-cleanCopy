import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxLeafletFullscreenModule } from '@runette/ngx-leaflet-fullscreen';
import { MapComponent } from '../components/map/map.component';
import { BreadcrumbsComponent } from '../components/breadcrumbs/breadcrumbs.component';
import { TagsComponent } from '../components/tags/tags.component';
import { RatingStarsComponent } from '../components/rating-stars/rating-stars.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { ServiceComponent } from "../components/service/service.component";
import { ServiceListComponent } from "../components/service-list/service-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { PhoneMaskDirective } from '../directives/phone-mask.directive';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    declarations: [            
        MapComponent,
        BreadcrumbsComponent,
        TagsComponent,
        RatingStarsComponent,
        PaginationComponent,
        SearchPipe,
        ServiceComponent,
        ServiceListComponent,
        PhoneMaskDirective,
        
    ],
  imports: [
        CommonModule,
        MaterialModule,
        LeafletModule,
        NgxLeafletFullscreenModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' }),
        NouisliderModule,
        
    ],
  exports: [
        MaterialModule,
        MapComponent,
        LeafletModule,
        NgxLeafletFullscreenModule,
        BreadcrumbsComponent,
        TagsComponent,
        RatingStarsComponent,
        PaginationComponent,
        ServiceComponent,
        ServiceListComponent,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SearchPipe,
        IconSpriteModule,
        PhoneMaskDirective,
        NouisliderModule,
    ],
})
export class SharedModule { }
