import { Component, Input } from '@angular/core';
import { Product } from './Product';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {

    // selected product is the product the user clicks, it is passed in from the app component
    @Input() selectedProduct:Product;    
    constructor() { }
}