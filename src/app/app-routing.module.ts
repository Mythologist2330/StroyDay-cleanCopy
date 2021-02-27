import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrBasicInfoComponent } from './pages/formRegistrationPage/components/registrBasicInfo/registrBasicInfo.component';
import { RegistrRequisitesComponent } from './pages/formRegistrationPage/components/registrRequisites/registrRequisites.component';
import { FormRegistrationPageComponent } from './pages/formRegistrationPage/formRegistrationPage.component';
import { PagesComponent } from './pages/pages.component';
import { PerformerComponent } from './pages/performer/performer.component';
import { PerformersListComponent } from './pages/performers/performers-list.component';
import { ServiceSpecificComponent } from './pages/servicesPage/components/service/service.component';
import { ServiceCatalogComponent } from './pages/servicesPage/components/serviceCatalog/serviceСatalog.component';
import { ServicesComponent } from './pages/servicesPage/components/services/services.component';
import { ServicesPageComponent } from './pages/servicesPage/servicesPage.component';
import { ProfileComponent } from './personal-area/profile/profile.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { BasicInfoComponent } from './personal-area/basic-info/basic-info.component';
import { AdminComponent } from './admin/admin.component';
import { TreeComponent } from './admin/tree/tree.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditServiceComponent } from './admin/edit-service/edit-service.component';
import { GalleryComponent } from './personal-area/gallery/gallery.component';

const routes: Routes = [
  {path: 'pages', component: PagesComponent, children: [
    {path: 'services', component: ServicesPageComponent, children: [
      {path: '', component: ServicesComponent},
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
    {path: 'gallery', component: GalleryComponent}
  ]},

  {path: 'formRegistrationPage', component: FormRegistrationPageComponent, children: [
    {path: 'registrBasicInfo', component: RegistrBasicInfoComponent},
    {path: 'registrRequisites', component: RegistrRequisitesComponent}
  ]},

  {path: 'admin', component: AdminComponent, children: [
    {path: 'tree' , component: TreeComponent},
    {path: 'edit-category/:id', component: EditCategoryComponent},
    {path: 'edit-service/:id', component: EditServiceComponent},
  ]},

  {path: '', redirectTo: 'pages', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }