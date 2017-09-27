import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { DbService } from "../db.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products:any[];
  public search = '';
  public addedToCart:string = '';
  public blnCart:boolean = true;
  constructor(private dbService: DbService, private router:Router) { 
      this.products = dbService.getProducts();
      
      if(!JSON.parse(localStorage.getItem('Cart'))){
        localStorage.setItem('Cart', JSON.stringify([]));
      }else{
        let temp:[any] = JSON.parse(localStorage.getItem('Cart'));
        for(let i=0; i<temp.length; i++){
          this.blnCart = false;
          this.addedToCart += temp[i].name;
          if(i+1!==temp.length){
            this.addedToCart += ', ';
          }
        }
      }
  }

  addProduct(prod){
    let temp:[any] = JSON.parse(localStorage.getItem('Cart'));
    let blnExist:boolean = false;
    for(let i=0; i<temp.length; i++){
      if(prod.id===temp[i].id && prod.name===temp[i].name) {
          blnExist = true;
          break;
      }
    }
    if(!blnExist) { 
      temp.push(prod);
      localStorage.setItem('Cart', JSON.stringify(temp));
      this.blnCart = false;
      if(this.addedToCart===''){
        this.addedToCart += prod.name;
        console.log(prod.name);
      }else{
        this.addedToCart += ', '+prod.name;
        console.log(prod.name);
      }
    }
  }

  goToCart(){
    this.router.navigate(['../cart']);
  }

  ngOnInit() {
  
  }

}
