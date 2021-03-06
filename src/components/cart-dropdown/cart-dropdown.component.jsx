import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router";

import CustomButton from '../custom-button/custom-button.component';
import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.styles.scss';

const CartDropdown = ( { cartItems , history , dispatch } ) =>
(
    <div className='cart-dropdown'> 
        <div className='cart-items'>
            {cartItems.length ? 
                cartItems.map(cartitem => <CartItem key={cartitem.id} item={cartitem} />)            
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick = { 
            () => {history.push('/checkout');
            dispatch(toggleCartHidden());
            }
        } >
        go to Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        cartItems : selectCartItems
    }
)




export default withRouter(connect(mapStateToProps)(CartDropdown));