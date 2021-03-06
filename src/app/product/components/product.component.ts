import { Component, OnInit } from '@angular/core';
import { ProductModel } from './../models/product.model'
import { ProductService } from './../services/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Array<ProductModel>;

  constructor(
    private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onBuy(): void {
    console.log('Product purchased!');
  }
}