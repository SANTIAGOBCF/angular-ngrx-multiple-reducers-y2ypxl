import { Cart } from '../models/cart';
import { CartActionTypes } from '../actions/cart.actions';
import { createSelector } from '@ngrx/store';

export interface CartState {
  cart: Cart;
}

const initialCartState: CartState = {
  cart: new Cart({
    counter: 0
  })
};

export function cartReducer(cartState = initialCartState, action): CartState {
  console.log('prev state: ', cartState);
  switch (action.type) {
    case CartActionTypes.ACTION_DECREMENT:
      return {
        ...cartState, // no other properties, can be removed
        cart: new Cart({ counter: action.payload.counter })
      };
    case CartActionTypes.ACTION_INCREMENT:
      return {
        ...cartState, // no other properties, can be removed
        cart: new Cart({ counter: action.payload.counter })
      };
    default: 
      return initialCartState;
  }
}

export const selectCartState = (state) => state.cartState;
export const selectCart = createSelector(selectCartState, (state) => state.cart);