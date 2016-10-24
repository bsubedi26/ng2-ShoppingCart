import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  
  products:Product[];

  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor (private productService:ProductService, private router:Router) {

  }

  // Dynamic route for detail info when a product is clicked
  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  // When add to cart button is clicked
  addToCart(product) {
    this.productService.addToCart(product)
  }

  getProductData() {     
     this.productService.getProducts().then(products => this.products = products)
  }

  ngOnInit() {
    // Get initial data from productService to display on the page
    this.getProductData()
  }

}