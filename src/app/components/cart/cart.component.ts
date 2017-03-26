import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartStore } from '../../store/cart.store';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {

  public cart = [];
  public totalPrice;
  public cartSubscription: Subscription;

  constructor(private productService:ProductService, private cartStore: CartStore) {}

  removeProduct(index) {

    // this.cart.forEach((cartItem,i) => {
    //   if (cartItem.id === product.id) {
    //     this.cart.splice(i, 1)
    //   }
    // })
    this.cartStore.removeFromCart(index)
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
    this.cartSubscription = this.cartStore.getState().subscribe(res => {
      this.cart = res.products
      this.getTotalPrice()
    })
    
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe()
  }
  
}
