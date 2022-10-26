import cartActionTypes from './Cart.types'
import { addItemToCart } from './Cart.utils';
const INNITIAL_STATE ={
  hidden:true,
  cartItems:[]
};

const cartReducer = (state = INNITIAL_STATE, action) => {
  switch(action.type){
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return{
        ...state,
        hidden: !state.hidden
      }

      case cartActionTypes.ADD_ITEM:
        return{
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }

      default:
        return state;
  }
}

export default cartReducer;