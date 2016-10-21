import { Injectable } from '@angular/core';
import { PRODUCTS } from './product-data';
import { Product } from './Product'; 
import { Observable, Subject } from 'rxjs';

// The consumer of angular services doesn't know how the service gets the data. 
// This ProductService could get the data from anywhere. 
// It could get the data from a web service or local storage or from a mock data source.
// That's the beauty of removing data access from the component. 
// We can change our minds about the implementation as often as we like, for whatever reason, 
// without touching any of the components that need the data.
@Injectable()
export class ProductService {

    public cart;
    public cart$:Subject<any>; 

    constructor() { 
        this.cart = [];
        this.cart$ = new Subject();
    }

    addToCart(product) {
        this.cart = [...this.cart, product]
        this.cart$.next(product)
    }

    subcribeCart() {
        return Promise.resolve(this.cart$)
    }

    getProducts() {
        return Promise.resolve(PRODUCTS)
    }

    getProduct(id) {
        return this.getProducts()
                    .then(products => products.find(product => product.id === id))
    }

}