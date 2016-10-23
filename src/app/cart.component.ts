import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  public cart = [];
  
  public totalPrice;
  public totalItems;

  constructor(private productService:ProductService) {}

  ngOnInit() {
    // Subscribe to the observable to receive updates on the new products added to the cart 
    this.productService.getCart()
      .then(products => {
        products.forEach(product => {
            this.cart.push(product)
        })
        
      })
  }
  
}
