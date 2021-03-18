import React, {useContext} from 'react';
import {StoreContext} from '../../state/StoreContext';

import './Cart.style.scss';

const Cart = props => {
    const context = useContext(StoreContext);
    const {cart, removeFromCart, manipulateQuantityFromCart} = context;

    const handleRemove = (id) => {
        removeFromCart(id);
    }

    const handleQuantityChange = (val, id, stock) => {
        manipulateQuantityFromCart(val, id, stock);
    }

    if(!cart.length) {
        return <h2>The cart is empty</h2>
    }
    return(
        <div className='Cart'>
            {cart.map(item => {
                return(
                    <div className='Cart-item' key={item.id}>
                        <div className='name'>{item.name}</div>
                        <div>{item.price}</div>
                        <div>{item.fixedItemPrice}</div>
                        <div>{item.description}</div>
                        <div className='quantity'>
                            <span onClick={() => handleQuantityChange(-1, item.id, item.stock)}>-</span>
                                <div>{item.quantity}</div>
                            <span onClick={() => handleQuantityChange(1, item.id, item.stock)}>+</span>
                        </div>
                        <span className='btn' onClick={() => handleRemove(item.id)}>Remove</span>
                    </div>
                )
            })}

            <button>ORDER NOW</button>
        </div>
    )
}

export default Cart;