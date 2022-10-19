import { combineReducers } from "redux";
import userReducers from "./User/User.reducers";
import cartReducer from "./Cart/Cart.reducer";

export default combineReducers({
  user: userReducers,
  cart: cartReducer
});

