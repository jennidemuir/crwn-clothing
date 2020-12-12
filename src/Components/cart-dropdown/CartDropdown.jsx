import React from "react";
import {connect} from 'react-redux'

import CustomButton from "../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';

import "./cart-dropdown.styles.scss";



const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items" >
      {
        cartItems.map( cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
        ))}
    </div>
    
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartDropdown);
