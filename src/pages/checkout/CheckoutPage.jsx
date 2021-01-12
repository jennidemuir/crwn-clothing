import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../Components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../Components/stripe-button/StripeCheckoutButton';




import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>

            </div>
            <div className='header-block'>
                <span>Description</span>

            </div>
            <div className='header-block'>
                <span>Quantity</span>

            </div>
            <div className='header-block'>
                <span>Price</span>

            </div>
            <div className='header-block'>
                <span>Remove</span>

            </div>

        </div>
        
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            )
        }

        <div className='total'>
             <span>Total: ${total} </span>
        </div>
        <div className='test-warning'>
            *Please use the following test creidt card for payments* 
            <br/>
            4242 4242 4242 4242 -  Exp: 01/25 - CVV: 123
        </div>

        <StripeCheckoutButton price={total} />

    </div>
)

const maptStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
})

export default connect(maptStateToProps)(CheckoutPage);