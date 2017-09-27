import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.css']
})
export class ThankComponent implements OnInit {

  constructor(private router:Router) {
    //clear previous local storage
    localStorage.setItem('Cart', JSON.stringify([]));

  }

  continueShopping(){
    //clear previous local storage
    localStorage.setItem('Cart', JSON.stringify([]));
    this.router.navigate(['../']);
  }

  ngOnInit() {
  }

}
