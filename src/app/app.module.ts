import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OurservicesComponent } from './components/ourservices/ourservices.component';
import { WeworkComponent } from './components/wework/wework.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OurservicesComponent,
    WeworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
