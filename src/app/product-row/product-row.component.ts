import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-row',
  inputs: ['product'],
  host:{'class':'item'},
  template:
  `
    <app-product-image [product]=product></app-product-image>
    <div class="component">
      <div class="header">{{product.name}}</div>
    </div>
  `,
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  product:Product;

  constructor() { }

  ngOnInit() {
  }

}
