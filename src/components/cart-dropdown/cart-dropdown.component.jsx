import React from "react";
import { connect } from "react-redux";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ( {cartItems} ) =>
(
    <div className='cart-dropdown'> 
        <div className='cart-items'>{
            cartItems.map(
                cartitem => <CartItem id={cartitem.id} item={cartitem} />
            )
        }</div>
        <CustomButton>go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = state => {
    return {
        cartItems : state.cart.cartItems
    }
}

export default connect(mapStateToProps)(CartDropdown);