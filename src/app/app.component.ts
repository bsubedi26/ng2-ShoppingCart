import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // The providers array tells Angular to create a new instance of the ProductService when it creates a new AppComponent. 
  // The AppComponent can use that service to get products and so can all the child components of its component tree.
  providers: [ProductService]
})

export class AppComponent {
  
  products:Product[];
  selectedProduct:Product;

  // Angular will know to supply an instance of the HeroService when it creates a new AppComponent
  // Because we injected the Productservice in the constructor
  constructor(private productservice:ProductService) {

  }

  getProductData() {
    this.productservice.getProducts().then(products => this.products = products)
  }

  ngOnInit() {
    this.getProductData()
  }

  clickedProduct(product) {
    console.log(product)
    this.selectedProduct = product;
  }

  mouseEnter(product) {
    console.log(product)
  }

}