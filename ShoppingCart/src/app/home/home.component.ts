import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DbService } from "../db.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products;
  public search = '';
  constructor(private dbService: DbService, private router:Router) { 
      this.products = dbService.getProducts();
      if(!JSON.parse(localStorage.getItem('Cart'))){
        localStorage.setItem('Cart', JSON.stringify([]));
      }
  }

  addProduct(prod){
    let temp:[any] = JSON.parse(localStorage.getItem('Cart'));
    let blnExist:boolean = false;
    for(let i=0; i<temp.length; i++){
      if(prod.id===temp[i].id) {
          blnExist = true;
          break;
      }
    }
    if(!blnExist) { 
      temp.push(prod);
      localStorage.setItem('Cart', JSON.stringify(temp));
    }
  }

  goToCart(){
    this.router.navigate(['../cart']);
  }

  ngOnInit() {
  }

}
