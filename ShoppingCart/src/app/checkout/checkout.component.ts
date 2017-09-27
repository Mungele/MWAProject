import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  products:[any];
  paymentTypes:[any];
  totalPrice:number;
  constructor(private router:Router) { 
    this.products = JSON.parse(localStorage.getItem('Cart'));
    this.paymentTypes = ['Paypal','Google Wallet'];
    this.totalPrice = this.totalPriceCalc();
  }

  goToCart(){
    this.router.navigate(['../cart']);
  }

  totalPriceCalc():number{
    let totalPrice = 0;
    for(let i=0; i<this.products.length; i++){
      totalPrice += this.products[i].price;
    }
    return totalPrice;
  }

  onSubmit(form) {
    console.log(form.value);
    // submit  the form details to db
    // then, redirect to thank you page
    this.router.navigate(['../thank']);
  }

  ngOnInit() {
  }

}
