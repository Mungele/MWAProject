//Author:  Aisha Kulindwa

import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers, RequestOptions, Response} from "@angular/http";


@Injectable()
export class DbService {

  private products:any []=[];

  loginres:any;
  response: any;
  constructor(private http:Http) {
    console.log(this.products);
    this.getProduct()
  }

  getProducts():any[]{
    return this.products;
  }

  getProduct():void{
    this.http.get("http://localhost:3000/products").subscribe((res: Response) =>{
      this.response = res.json();
      console.log(this.response);
      if(this.response){
        this.response.forEach(data =>{
          this.products.push(data)
          console.log(data);
        })
        localStorage.setItem('Products', JSON.stringify(this.products));
      }

    });
  }
  saveUser(userInfo:any) :any{
    console.log("This is the json"+JSON.stringify(userInfo));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://localhost:3000/login", userInfo,options).subscribe((res: Response) =>{
      this.response = res.json();
      console.log("this is responese " +this.response.token);
      if(this.response.auth){

        localStorage.setItem('uname', userInfo.UserName);
        localStorage.setItem('email', userInfo.email);
        this.loginres = this.response;
      }

    });
  }
  saveTransaction(transaction,uid,token){
    let uname= localStorage.getItem('uname');

    let email = localStorage.getItem('email');

    let cart = localStorage.getItem('Cart');

    let trans ={'uname': uname, 'email':email ,
      'paymentType': transaction.paymentType,
      'amount':transaction.amount,
      'cart': cart};


    let headers = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: headers });


    this.http.post("http://localhost:3000/checkout", {uid,token,trans},options).subscribe((res: Response) =>{
      console.log("this is responese ");
      this.response = res.json();
      if(this.response){
        console.log(this.response);
       //this.loginres = this.response;
      }

    });

  }

}
