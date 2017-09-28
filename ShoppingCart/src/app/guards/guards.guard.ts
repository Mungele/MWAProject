////@Author: John Masamalo
import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardsGuard implements CanActivate {

  token:String;
  cart:string;
  constructor(private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return true;


    this.token = localStorage.getItem("token");
    this.cart = JSON.parse(localStorage.getItem("Cart"))
    console.log(this.cart.length);
    if( this.cart.length<1 ){
      this.router.navigate(['cart']);
      return false;
    }
    if(!this.token  ){
      alert('Please login');
      this.router.navigate(['cart']);
      return false;
    }


    return true;
  }
}
