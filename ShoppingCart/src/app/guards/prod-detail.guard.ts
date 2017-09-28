import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdDetailGuard implements CanActivate {

  constructor(private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let productList = JSON.parse(localStorage.getItem('Products'));
    if(next.params.id < 0 || next.params.id > productList.length){
      console.log(next.params.id);
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
