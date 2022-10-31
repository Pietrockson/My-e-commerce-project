import React from "react";
import { connect } from "react-redux";

import CustomButton from "../Custom-button-component/Custom-button";
import CartItem from "../cart-Item-Component/Cart-Item";
import { selectCartitems } from '../../Redux/Cart/cart.selectors';

import "./Cart-Dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-item">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartitems(state)
});

export default connect(mapStateToProps)(CartDropdown);
