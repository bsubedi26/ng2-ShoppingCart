import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css'],
    providers: [ProductService]
})

export class ProductDetailComponent {

    // selected product is the product the user clicks, it is passed in from the product component
    selectedProduct:Product;

    constructor(
        private productService:ProductService,
        private route:ActivatedRoute,
        private location:Location
    ) { }

    ngOnInit() {
        this.route.params.forEach(param => {
            let id = parseInt(param['id'])
            this.productService.getProduct(id)
                .then(product => this.selectedProduct = product)
            
        })
    }

    goBack() {
        this.location.back()
    }
}