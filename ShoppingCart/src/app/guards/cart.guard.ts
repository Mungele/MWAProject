import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartGuard implements CanActivate {

  token:string;
  constructor(private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    this.token = JSON.parse(localStorage.getItem("Cart"));
    if(this.token.length<1){
      this.router.navigate(['']);
      return false;
    }


    return true;
  }
}
