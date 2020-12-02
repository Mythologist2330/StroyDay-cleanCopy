import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/mainPage/mainPage.component';
import { SearcherComponent } from './pages/mainPage/components/searcher/searcher.component';
import { CategoriesComponent } from './pages/mainPage/components/categories/categories.component';
import { ApplicationsComponent } from './pages/mainPage/components/applications/applications.component';
import { FormRegistrationPageComponent } from './pages/formRegistrationPage/formRegistrationPage.component';
import { RegistrBasicInfoComponent } from './pages/formRegistrationPage/components/registrBasicInfo/registrBasicInfo.component';
import { RegistrRequisitesComponent } from './pages/formRegistrationPage/components/registrRequisites/registrRequisites.component';
import { PerformersPageComponent } from './pages/performersPage/performersPage.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    MainPageComponent,
    SearcherComponent,
    CategoriesComponent,
    ApplicationsComponent,

    FormRegistrationPageComponent,
    RegistrBasicInfoComponent,
    RegistrRequisitesComponent,

    PerformersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
