import React from 'react';
import './Cart-Item.scss';

import { connect } from 'react-redux';
import { clearItemFromCart } from '../../Redux/Cart/Cart.action';


const CartItem = ({item: {imageUrl, name, price, quantity} }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item'/>
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x &#8358;{price}
      </span>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem);