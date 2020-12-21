import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { SearcherComponent } from './pages/main/components/searcher/searcher.component';
import { CategoriesComponent } from './pages/main/components/categories/categories.component';
import { ApplicationsComponent } from './pages/main/components/applications/applications.component';
import { FormRegistrationPageComponent } from './pages/formRegistrationPage/formRegistrationPage.component';
import { RegistrBasicInfoComponent } from './pages/formRegistrationPage/components/registrBasicInfo/registrBasicInfo.component';
import { RegistrRequisitesComponent } from './pages/formRegistrationPage/components/registrRequisites/registrRequisites.component';

import { PerformersModule } from './pages/performers/performers.module';
import { SharedModule } from "./shared/shared.module";
import { MaterialModule } from "./shared/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesPageModule } from './pages/servicesPage/servicesPage.module';
import { ServiceSpecificComponent } from './pages/servicesPage/components/service/service.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    MainComponent,
    SearcherComponent,
    CategoriesComponent,
    ApplicationsComponent,

    FormRegistrationPageComponent,
    RegistrBasicInfoComponent,
    RegistrRequisitesComponent,
    ServiceSpecificComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    PerformersModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServicesPageModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
