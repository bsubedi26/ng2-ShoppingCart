import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: []
})
export class NavBarComponent {

  public cart = [];
  
  public totalPrice;
  public totalItems;

  constructor(private productService:ProductService) {}

  getPrice_Total() {
      let total = this.cart.reduce( (total, item) => {
        total += item.price;
        // slice excess decimal places and return the result
        let str = total.toString()
        let result = str.slice(0, str.indexOf('.') + 3)
        result = parseFloat(result)
        return result;
      }, 0)

      this.totalPrice = total;
      this.totalItems = this.cart.length; 

  }
  ngOnInit() {
    // Subscribe to the observable to receive updates on the new products added to the cart 
    this.productService.subcribeCart()
      .then(obs => obs.subscribe(data => {
        console.log(data)
        this.cart = [...this.cart, data]
        this.getPrice_Total()
      }))

    // this.productService.getCart()
    //   .then(products => {
    //     console.log(products)
    //     products.forEach(product => {
    //         this.cart.push(product)
    //     })

    //     this.getPrice_Total()
    //   })

  }
  
}
