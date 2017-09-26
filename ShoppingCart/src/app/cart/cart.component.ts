import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products:[any];
  constructor(private router:Router) { 
    this.products = JSON.parse(localStorage.getItem('Cart'));
  }

  totalPriceCalc():number{
    let totalPrice = 0;
    for(let i=0; i<this.products.length; i++){
      totalPrice += this.products[i].price;
    }
    return totalPrice;
  }

  removeProduct(prod){
    let temp:[any] = JSON.parse(localStorage.getItem('Cart'));
    let i = temp.indexOf(prod);
    temp.splice(i,1);
    
    localStorage.setItem('Cart', JSON.stringify(temp));
    this.products = JSON.parse(localStorage.getItem('Cart'));
  }

  goBack(){
    this.router.navigate(['../']);
  }

  ngOnInit() {
  }

}
