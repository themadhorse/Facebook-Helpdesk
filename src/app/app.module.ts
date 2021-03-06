import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { FacebookConnComponent } from './facebook-conn/facebook-conn.component';
import { MessengerComponent } from './messenger/messenger.component';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FacebookConnComponent,
    MessengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
