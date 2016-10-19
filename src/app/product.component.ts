import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // The providers array tells Angular to create a new instance of the ProductService when it creates a new AppComponent. 
  // The AppComponent can use that service to get products and so can all the child components of its component tree.
  providers: [ProductService]
})

export class ProductComponent {
  products:Product[];

  // Angular will know to supply an instance of the ProductService & Router when it creates a new ProductComponent
  // Because they are injected in the constructor
  constructor (
    private productservice:ProductService,
    private router:Router
  ) {}

  getProductData() {
    this.productservice.getProducts().then(products => this.products = products)
  }

  ngOnInit() {
    this.getProductData()
  }

  clickedProduct(product) {
    let link = ['/detail', product.id];
    this.router.navigate(link);
  }

  addToCart(product) {
    console.log(product)
  }

  mouseEnter(product) {
    // console.log('mouse hovered over product')
  }
}