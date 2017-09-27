import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../home/home.component";

import { LoginComponent } from "../login/login.component"

import { CartComponent } from "../cart/cart.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { ThankComponent } from "../thank/thank.component";

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'cart', component: CartComponent },
     { path: 'checkout', component: CheckoutComponent },
     {path : 'login', component : LoginComponent},
     { path: 'thank', component: ThankComponent },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
