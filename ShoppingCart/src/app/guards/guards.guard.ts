import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardsGuard implements CanActivate {

  token:String;
 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return true;

    this.token = localStorage.getItem("token");
    if(!this.token){
      alert('Please login');
      return false;
    }


    return true;
  }
}
