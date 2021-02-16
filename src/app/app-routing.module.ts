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
import { PersonalAreaComponent } from './profile/personal-area/personal-area.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'pages', component: PagesComponent, children: [
    {path: 'services', component: ServicesPageComponent, children: [
      {path: '', component: ServicesComponent},
      {path: 'serviceСatalog', component: ServiceCatalogComponent}
    ]},
    {path: 'serviceSpecific', component: ServiceSpecificComponent},

    {path: 'performers', component: PerformersListComponent},
    {path: 'performer/:id', component: PerformerComponent}
  ]},

  {path: 'profile', component: ProfileComponent, children: [
    {path: ':id', component: PersonalAreaComponent}
  ]},


  {path: 'formRegistrationPage', component: FormRegistrationPageComponent, children: [
    {path: 'registrBasicInfo', component: RegistrBasicInfoComponent},
    {path: 'registrRequisites', component: RegistrRequisitesComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }