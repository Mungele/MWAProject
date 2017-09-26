import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component"

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     {path : 'login', component : LoginComponent},
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
