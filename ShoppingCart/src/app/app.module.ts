import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { HomeComponent } from './home/home.component';

import { myRoutes } from "./routes/app.routes";
import { DbService } from "./db.service";

// for auth
import {AngularFireAuthModule} from 'angularfire2/auth';
// for database
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LoginComponent } from './login/login.component';


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
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),

    myRoutes

    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
