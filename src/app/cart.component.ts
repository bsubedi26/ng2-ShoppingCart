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

  constructor(private productService:ProductService) {}

  removeProduct(product) {

    this.cart.forEach((cartItem,i) => {
      if (cartItem.id === product.id) {
        this.cart.splice(i, 1)
      }
    })

  }

  checkout() {
    alert('Sorry! Checkout will be coming soon!')
  }

    getTotalPrice() {
      let total = this.cart.reduce( (total, item) => {
        total += item.price;
        // slice excess decimal places and return the result
        let str = total.toString()
        let result = str.slice(0, str.indexOf('.') + 3)
        result = parseFloat(result)
        return result;
      }, 0)

      this.totalPrice = total;
    }

  ngOnInit() {
    
    // Get all the products added to the cart 
    this.productService.getCart()
      .then(products => {
        products.forEach(product => {
            this.cart.push(product)
        })

        this.getTotalPrice()
        
      })

  }
  
}
