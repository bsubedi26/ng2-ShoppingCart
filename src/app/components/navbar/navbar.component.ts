import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {CartStore} from '../../store/cart.store';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: []
})
export class NavBarComponent {

  public cart:any = [];
  
  public totalPrice;

  constructor(private productService:ProductService, private cartStore: CartStore) {}

  getTotalPrice() {
      let total = this.cart.products.reduce( (total, item) => {
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
    this.cartStore.getState().subscribe(res => {
      this.cart = res
      this.getTotalPrice()
    })
  }
  
}
