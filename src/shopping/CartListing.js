import React, { Component } from 'react';
import util from '../util';

export class CartListing extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <article id="cartContent" className="hide">
            {cartItems.length ?
            <div><ul>
                    {cartItems.map(item => (
                                <li key={item.id}>
                                    <img alt={item.title} width='50px' src={item.image} />
                                    <strong>{item.title}</strong><br />
                                    <span>{item.count} X {util.formatCurrency(item.price)}</span>
                                    <i title='Remove from cart' className="fa fa-trash-o btn-danger fa-2x fa-pull-right" onClick={(e) => this.props.handleRemoveFromCart(e, item)} aria-hidden="true"></i>
                                    <br />
                                </li>))
                            }
                        </ul>
                        <p className='subtotal'>SUBTOTAL: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </p>
                        <button className="btn btn-lg btn-success" onClick={(e)=>alert('payment page not implemented!')}> CHECKOUT </button>          
    </div> : <h3>Your Cart is empty.</h3>}
    </article>
        )
    }
}

export default CartListing
