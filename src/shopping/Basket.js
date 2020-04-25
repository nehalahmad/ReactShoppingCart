import React, { Component } from 'react';
import util from '../util';

export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <React.Fragment>
            <section id="cartContainer"> 
            <i id='close' className="fa fa-times-circle fa-3x hide" onClick={this.props.closeCart} aria-hidden="true"></i>  
            <div className="fa fa-shopping-cart fa-3x" aria-hidden="true"
            onClick={this.props.openCart}>  

            <span className="quantity">
            {cartItems.length === 0
                    ? 0 : cartItems.length
                    
            }                   
            </span>          
            </div>
            
            <article id="cartContent" className="hide">
            {cartItems.length > 0 &&
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
            </div> }           
            </article>
        
    
        </section>
            </React.Fragment>
        )
    }
}