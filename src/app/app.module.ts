import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { WeworkComponent } from './components/wework/wework.component';
import { CommunityComponent } from './components/community/community.component';

import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OurservicesComponent,
    WeworkComponent,
    CommunityComponent,
    HomeComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
