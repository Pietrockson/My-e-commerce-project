import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Checkout-style.scss';
import { selectCartItems, selectcartTotal } from '../../Redux/Cart/cart.selectors';
import CheckoutItem from '../../components/Checkout-item/Checkout-item';

const CheckoutPage = ({cartItems,total}) => (
<div className='checkout-page'>
  <div className='checkout-header'>
    <div className='header-block'>
      <span> Product </span>
    </div>

    <div className='header-block'>
      <span> Description </span>
    </div>

    <div className='header-block'>
      <span> Quantity </span>
    </div>

    <div className='header-block'>
      <span>  Price(&#8358;) </span>
    </div>

    <div className='header-block'>
      <span> Remove </span>
    </div>

  </div>
  {cartItems.map(CartItem => (
    <CheckoutItem key={CartItem.id} cartItem={CartItem}/>
  ))}
    <div className='total'>
    <span> TOTAL: &#8358;{total} </span>

  </div>

</div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectcartTotal
})
export default connect(mapStateToProps)(CheckoutPage);