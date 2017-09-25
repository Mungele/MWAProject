import { Component, OnInit } from '@angular/core';

import { DbService } from "../db.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products;
constructor(private dbService: DbService) { 
    this.products = dbService.getProducts();
 }

  ngOnInit() {
  }

}
