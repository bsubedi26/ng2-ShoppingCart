import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { YoutubeAction } from 'app/common/actions/youtube.actions';
import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

export class YoutubeComponent implements OnInit {
  youtubeState$: Observable<any>;

  constructor (private youtubeAction: YoutubeAction, private store: Store<any>) {
    this.youtubeState$ = this.store.select('youtube');
  }

  // // Dynamic route for detail info when a product is clicked
  // clickedProduct(product) {
  //   let link = ['/detail', product.id];
  //   this.router.navigate(link);
  // }

  // // When add to cart button is clicked
  // addToCart(product) {
  //   // this.productService.addToCart(product)
  //   console.log(this.quantity)
  //   this.cartStore.addToCart(product, this.quantity || 1)
  // }

  // getProductData() {
  //    this.productService.getProducts().then(products => this.products = products)
  // }

  ngOnInit() {
    console.log('youtube init')
  }

}