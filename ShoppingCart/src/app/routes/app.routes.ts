import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { CartComponent } from "../cart/cart.component";

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'cart', component: CartComponent },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);