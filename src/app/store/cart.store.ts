import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { type } from './utils/type-cache';
import { Observable } from 'rxjs/Observable';

export const ActionTypes = {
  SEARCH:           type('[Cart] Search'),
  SEARCH_COMPLETE:  type('[Cart] Search Complete'),
  LOAD:             type('[Cart] Load'),
  SELECT:           type('[Cart] Select'),
  ADD_TO_CART:      type('[Cart] Add'),
  REMOVE_FROM_CART:      type('[Cart] Remove'),
};

@Injectable()
export class CartStore {
    state: any;
    constructor(private store: Store<any>) {
        this.state = this.getState();
    }

    getState(): Observable<any> {
        return this.store.select('cart');
    }

    addToCart(payload) {
        this.store.dispatch({
            type: ActionTypes.ADD_TO_CART,
            payload: payload
        })
    }

    removeFromCart(payload) {
        console.log('remove,', payload)
        this.store.dispatch({
            type: ActionTypes.REMOVE_FROM_CART,
            payload: payload
        })
    }

}