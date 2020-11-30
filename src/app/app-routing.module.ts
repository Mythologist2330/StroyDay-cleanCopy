import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrBasicInfoComponent } from './pages/formRegistrationPage/components/registrBasicInfo/registrBasicInfo.component';
import { RegistrRequisitesComponent } from './pages/formRegistrationPage/components/registrRequisites/registrRequisites.component';
import { FormRegistrationPageComponent } from './pages/formRegistrationPage/formRegistrationPage.component';
import { MainPageComponent } from './pages/mainPage/mainPage.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'formRegistrationPage', component: FormRegistrationPageComponent, children: [
    {path: 'registrBasicInfo', component: RegistrBasicInfoComponent},
    {path: 'registrRequisites', component: RegistrRequisitesComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }