import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
