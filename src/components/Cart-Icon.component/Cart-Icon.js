import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/Shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/Cart.action';
import './Cart-Icon.scss';

const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
  <ShoppingIcon className='shoppin-icon'/>
  <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
