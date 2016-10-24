import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
    selector: 'product-detail',
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})

export class ProductDetailComponent {
    selectedProduct:Product;
    
    constructor(
        private productService:ProductService,
        private route:ActivatedRoute,
        private location:Location
    ) { }

    addToCart(product) {
        console.log(product)
        this.productService.addToCart(product)
    }

    // When initialized, fetch for the product info based on the product id and set it as selectedProduct
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