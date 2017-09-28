import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../home/home.component";

import { LoginComponent } from "../login/login.component"

import { CartComponent } from "../cart/cart.component";
import { CheckoutComponent } from "../checkout/checkout.component";
import { ThankComponent } from "../thank/thank.component";
import { GuardsGuard } from "../guards/guards.guard";
import { ProdDetailGuard} from "../guards/prod-detail.guard";

import { ProdComponent } from "../prod/prod.component";

import { CartGuard} from "../guards/cart.guard"


const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: 'cart', component: CartComponent, canActivate: [CartGuard] },
     { path: 'checkout', component: CheckoutComponent, canActivate: [GuardsGuard] },
     { path : 'login', component : LoginComponent},
     { path: 'thank', component: ThankComponent },
     { path: 'prod/:id', component: ProdComponent, canActivate: [ProdDetailGuard] },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
