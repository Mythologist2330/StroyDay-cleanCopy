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
import { MainPageComponent } from './pages/mainPage/mainPage.component';
import { SearcherComponent } from './pages/mainPage/components/searcher/searcher.component';
import { CategoriesComponent } from './pages/mainPage/components/categories/categories.component';
import { ApplicationsComponent } from './pages/mainPage/components/applications/applications.component';
import { FormRegistrationPageComponent } from './pages/formRegistrationPage/formRegistrationPage.component';
import { RegistrBasicInfoComponent } from './pages/formRegistrationPage/components/registrBasicInfo/registrBasicInfo.component';
import { RegistrRequisitesComponent } from './pages/formRegistrationPage/components/registrRequisites/registrRequisites.component';

import { PerformersModule } from './pages/performersPage/performers.module';
import { SharedModule } from "./shared/shared.module";

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
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
