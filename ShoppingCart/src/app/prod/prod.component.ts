//@Authors: Aisha Kulindwa & John Masamalo
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from "rxjs/Rx";

interface Product {
  id: number,
  name: string,
  category: string,
  quantity: number,
  availavility: boolean,
  details:string,
  price: number
}

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {

  private subscription: Subscription;
  id: string;
  public addedToCart:string = '';
  public product:Product ;
  constructor(private router:Router, private activatedRoute: ActivatedRoute) {

    if(!JSON.parse(localStorage.getItem('Cart'))){
      localStorage.setItem('Cart', JSON.stringify([]));
    }else{
      let temp:[any] = JSON.parse(localStorage.getItem('Cart'));
      for(let i=0; i<temp.length; i++){
        this.addedToCart += temp[i].name;
        if(i+1!==temp.length){
          this.addedToCart += ', ';
        }
      }
    }

    this.subscription = activatedRoute.params.subscribe(
      (param: any) => {
        this.id = param['id'];
        //console.log(this.id)
        let temp:[any] = JSON.parse(localStorage.getItem('Products'));

         for(let i=0; i<temp.length; i++){
           if(this.id==temp[i].id) {
            this.product=temp[i];
             console.log("this is mine "+this.product);
             //this.product = JSON.parse(temp[i]);
           }
         }

      }
    );



  }

  addProduct(){
    let temp:[any] = JSON.parse(localStorage.getItem('Cart'));
    let blnExist:boolean = false;
    for(let i=0; i<temp.length; i++){
      if(this.product.id===temp[i].id && this.product.name===temp[i].name) {
          blnExist = true;
          break;
      }
    }
    if(!blnExist) {
      temp.push(this.product);
      localStorage.setItem('Cart', JSON.stringify(temp));
      if(this.addedToCart===''){
        this.addedToCart += this.product.name;
        //console.log(prod.name);
      }else{
        this.addedToCart += ', '+this.product.name;
        //console.log(prod.name);
      }
    }
  }

  goBack(){
    this.router.navigate(['']);
  }

  getProduct(){
    let temp:[any] = JSON.parse(localStorage.getItem('Products'));

    for(let i=0; i<temp.length; i++){

      if(this.id==temp[i].id) {
        //console.log(this.id+'My product'+temp[i].id ) ;
        return temp[i];
      }
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
