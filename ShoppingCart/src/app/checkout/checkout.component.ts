//@Author: John Masamalo
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DbService} from "../db.service";
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products:[any];
  paymentTypes:[any];
  totalPrice:number;
  constructor(private router:Router, public db: DbService, public afAuth: AngularFireAuth) {
    this.products = JSON.parse(localStorage.getItem('Cart'));
    this.paymentTypes = ['Paypal','Google Wallet'];
    this.totalPrice = this.totalPriceCalc();
  }

  goToCart(){
    this.router.navigate(['cart']);
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
    let uid = localStorage.getItem('uid');
    let token = localStorage.getItem('token')
    // submit  the form details to db
    this.db.saveTransaction(form.value,uid,token);

    // then, redirect to thank you page
    this.router.navigate(['thank']);
  }

  ngOnInit() {
  }

}
