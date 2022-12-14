import React from "react";
import { ReactComponent as ShoppingIcon } from "../../Assets/Shopping-bag.svg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../Redux/Cart/Cart.action";

import "./Cart-Icon.scss";
import { selectCartItemsCount } from "../../Redux/Cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppin-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(CartIcon);
