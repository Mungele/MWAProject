import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

interface Product {
  id: number,
  name: string,
  category: string,
  quantity: number,
  availavility: boolean,
  details:string,
  price: number
}

@Injectable()
export class DbService {

  private products:[Product] = [{
    id: 1,
    name: 'Samsung 5s',
    category: 'Mobile',
    quantity: 10,
    availavility: true,
    details: 'Samsung 5s has various functions including 10px front and back - Cam.',
    price: 400
  },
  {
    id: 2,
    name: 'iPhone 7s',
    category: 'Mobile',
    quantity: 15,
    availavility: true,
    details: 'iPhone 7s has various functions including 12px front and back - Cam.',
    price: 500
  },
  {
    id: 3,
    name: 'Lenovo7 i Series',
    category: 'Laptop',
    quantity: 5,
    availavility: true,
    details: 'Lenovo i7 Series has various functions including touch screen',
    price: 800
  }
];

  loginres:any;
  response: any;
  constructor(private http:Http) {
    console.log(this.products);
    this.getProduct()
  }

  getProducts():[Product]{
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
      }

    });
  }
  saveUser(userInfo:any) :any{
    console.log("This is the json"+JSON.stringify(userInfo));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://localhost:3000/login", userInfo,options).subscribe((res: Response) =>{
      this.response = res.json();
      console.log("this is responese " +this.response);
      if(this.response){
        console.log(this.response)
        this.loginres = this.response;
      }

    });
  }

}
