import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './pages/registration/components/info/info.component';
import { RequisitesComponent } from './pages/registration/components/requisites/requisites.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { PagesComponent } from './pages/pages.component';
import { PerformerComponent } from './pages/performer/performer.component';
import { PerformersListComponent } from './pages/performer-list/performers-list.component';
import { ServiceSpecificComponent } from './pages/catalog/components/service/service.component';
import { ServiceCatalogComponent } from './pages/catalog/components/service-catalog/service-catalog.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProfileComponent } from './personal-area/profile/profile.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { BasicInfoComponent } from './personal-area/basic-info/basic-info.component';
import { AdminComponent } from './admin/admin.component';
import { TreeComponent } from './admin/tree/tree.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditServiceComponent } from './admin/edit-service/edit-service.component';
import { GalleryComponent } from './personal-area/gallery/gallery.component';
import { ServiceCategoriesComponent } from './pages/catalog/components/service-categories/service-categories.component';
import { ServicesComponent } from './personal-area/services/services.component';
import { GalleryAlbumsComponent } from './personal-area/gallery/gallery-albums/gallery-albums.component';
import { GalleryAlbumComponent } from './personal-area/gallery/gallery-album/gallery-album.component';

const routes: Routes = [
  {path: 'pages', component: PagesComponent, children: [
    {path: 'services', component: CatalogComponent, children: [
      {path: '', component: ServiceCategoriesComponent},
      {path: 'service-catalog', component: ServiceCatalogComponent},
      {path: 'service-catalog/:id', component: ServiceCatalogComponent},
    ]},

    {path: 'service/:id', component: ServiceSpecificComponent},

    {path: 'performers', component: PerformersListComponent},
    {path: 'performer/:id', component: PerformerComponent}
  ]},

  {path: 'personalArea/:id', component: PersonalAreaComponent, children: [
    {path: '', redirectTo: 'profile', pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: 'basicInfo', component: BasicInfoComponent},
    {path: 'gallery', component: GalleryComponent, children: [
      {path: '', redirectTo: 'albums', pathMatch: 'full'},
      {path: 'albums', component: GalleryAlbumsComponent},
      {path: 'album', component: GalleryAlbumComponent}
    ]},
    {path: 'services', component: ServicesComponent}
  ]},

  {path: 'registration', component: RegistrationComponent, children: [
    {path: 'info', component: InfoComponent},
    {path: 'requisites', component: RequisitesComponent}
  ]},

  {path: 'admin', component: AdminComponent, children: [
    {path: 'tree' , component: TreeComponent},
    {path: 'edit-category/:id', component: EditCategoryComponent},
    {path: 'edit-service/:id', component: EditServiceComponent},
  ]},

  {path: '**', redirectTo: 'pages', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }