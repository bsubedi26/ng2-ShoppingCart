import {Action} from '@ngrx/store';
import {ActionTypes} from '../cart.store';
console.log(ActionTypes)
import {Product} from '../../models/Product';

export interface State {
  products: Array<Product>;
}

const initialState: State = {
  products: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return Object.assign({}, state, {
        products: [
            ...state.products, 
            action.payload
        ]
      })
    }
    
    case ActionTypes.REMOVE_FROM_CART: {
      // let newState = state.products.map((cartItem, i) => {
      //   if (i === action.payload) {
      //     state.products.splice(i, 1)
      //   }
      //   return state.products
      // })
      // console.log(newState)
      return Object.assign({}, state)
    }

    default:
      return state;
  }
}
