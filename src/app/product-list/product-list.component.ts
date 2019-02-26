import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template:
  `
    <div class="ui items">
    <app-product-row
      *ngFor="let myProduct of productList"
      [product]="myProduct"
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </app-product-row>
    </div>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /**
   * @input productList - the Product[] passed to this component
   */
  productList:Product[]

  /**
   * @output onProductSelected - outputs the current Product whenever a new product is selected
   */
  onProductSelected:EventEmitter<Product>

  private currentProduct:Product;
  constructor() { }

  clicked(product:Product):void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product):boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
