import React from "react";

import './checkout-item.styles.scss'

import { connect } from "react-redux";

import { ClearItem , addItem , removeItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ( { cartItem , clearItem ,addItem , removeItem } ) => {
    const {imageUrl,name,quantity,price} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item" />
        </div>
        <span className='name'>{name}</span>
        <div className='quantity'>
            <div className='arrow' onClick = { ()=> removeItem(cartItem)}>&#10094;</div>
            <div className='value'>{quantity}</div>
            <div className='arrow' onClick = { ()=> addItem(cartItem) } >&#10095;</div>
        </div>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick = { ()=> clearItem(cartItem) } >&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => (
    {
        clearItem : item => dispatch(ClearItem(item)),
        addItem : item => dispatch(addItem(item)),
        removeItem : item => dispatch(removeItem(item))
    }
)

export default connect(null,mapDispatchToProps)(CheckoutItem);