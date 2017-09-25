import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './home/home.component';

import { myRoutes } from "./routes/app.routes";
import { DbService } from "./db.service";

export const firebaseConfig = {
  apiKey: "AIzaSyCw01ZeyKRn_limNemPKmF9aLNanHvNZUg",
  authDomain: "shoppingcart-37c45.firebaseapp.com",
  databaseURL: "https://shoppingcart-37c45.firebaseio.com",
  projectId: "shoppingcart-37c45",
  storageBucket: "",
  messagingSenderId: "713657831879"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    myRoutes
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
