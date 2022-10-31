import {createSelector} from 'reselect';

const selectCart= state=> state.cart;

export const selectCartitems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

const selectCartItems = state => state.selectCartItems;
 
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
  0)
);