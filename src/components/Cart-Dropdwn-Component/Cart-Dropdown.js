import React from 'react';
import CustomButton from '../Custom-button-component/Custom-button';
import './Cart-Dropdown.scss'


const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-item'/>
    <CustomButton>Go To Checkout</CustomButton>
  </div>
)

export default CartDropdown;