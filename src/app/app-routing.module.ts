import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrBasicInfoComponent } from './pages/formRegistrationPage/components/registrBasicInfo/registrBasicInfo.component';
import { RegistrRequisitesComponent } from './pages/formRegistrationPage/components/registrRequisites/registrRequisites.component';
import { FormRegistrationPageComponent } from './pages/formRegistrationPage/formRegistrationPage.component';
import { PerformerComponent } from './pages/performer/performer.component';
import { ServiceSpecificComponent } from './pages/servicesPage/components/service/service.component';
import { ServiceCatalogComponent } from './pages/servicesPage/components/serviceCatalog/serviceСatalog.component';
import { ServicesComponent } from './pages/servicesPage/components/services/services.component';
import { ServicesPageComponent } from './pages/servicesPage/servicesPage.component';

const routes: Routes = [
  {path: 'formRegistrationPage', component: FormRegistrationPageComponent, children: [
    {path: 'registrBasicInfo', component: RegistrBasicInfoComponent},
    {path: 'registrRequisites', component: RegistrRequisitesComponent}
  ]},
  {path: 'services', component: ServicesPageComponent, children: [
    {path: '', component: ServicesComponent},
    {path: 'serviceСatalog', component: ServiceCatalogComponent}
  ]},
  {path: 'serviceSpecific', component: ServiceSpecificComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }