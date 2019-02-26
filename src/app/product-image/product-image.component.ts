import { Component, HostBinding, OnInit, Input } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-image',
  host:{'class':'ui small image'},
  template:
  `
    <img class="product-image" [src]="product.imageUrl">
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
@Input() product:Product;
@HostBinding('attr.class') cssClass = 'ui small image';

  ngOnInit() {
  }

}
