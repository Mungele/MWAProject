import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "../home/home.component";

const MY_ROUTES: Routes = [
     { path: '', component: HomeComponent },
     { path: '**', redirectTo: '/' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);