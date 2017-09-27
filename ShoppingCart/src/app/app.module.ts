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
import { SearchPipe } from './search.pipe';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankComponent } from './thank/thank.component';
import { GuardsGuard } from "./guards/guards.guard";
import { ProdComponent } from './prod/prod.component';


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
    HomeComponent,
    LoginComponent,
    SearchPipe,
    CartComponent,
    CheckoutComponent,
    ThankComponent,
    ProdComponent


  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    myRoutes,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DbService, GuardsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
