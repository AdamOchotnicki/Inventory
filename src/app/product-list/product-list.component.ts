import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /**
   * @input productList - the Product[] passed to this component
   */
  @Input() productList:Product[]

  /**
   * @output onProductSelected - outputs the current Product whenever a new product is selected
   */
  @Output() onProductSelected:EventEmitter<Product>

  private currentProduct:Product;
  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product:Product):void {
    console.log("PLC: product = "+JSON.stringify(product))
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
  
