import { Injectable } from '@angular/core';

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

  constructor() { 
    console.log(this.products);
  }

  getProducts():[Product]{
    return this.products;
  }

}
