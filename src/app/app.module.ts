import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposantsComponent } from './Help/composants/composants.component';
import {registerLocaleData} from "@angular/common";
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './Help/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './Help/header/header.component';
import { LandingPageComponent } from './Help/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposantsComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
