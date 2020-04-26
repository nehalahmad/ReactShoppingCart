import React, { Component } from "react";

import CartListing from "./CartListing";

export default class Basket extends Component {
  render() {
    //console.log('Basket props ', this.props);
    //console.log('Basket cartItems ', this.props.cartItems);

    const { cartItems } = this.props;
    //console.log('Des cartItems ', cartItems);

    return (
      <React.Fragment>
        <section id="cartContainer">
          <i
            id="close"
            className="fa fa-times-circle fa-3x hide"
            onClick={this.props.closeCart}
            aria-hidden="true"
          ></i>
          <div
            className="fa fa-shopping-cart fa-3x"
            aria-hidden="true"
            onClick={this.props.openCart}
          >
            <span className="cartItem">
              {cartItems.length === 0 ? 0 : cartItems.length}
            </span>
          </div>
          <CartListing
            cartItems={this.props.cartItems}
            handleRemoveFromCart={this.props.handleRemoveFromCart}
          />
        </section>
      </React.Fragment>
    );
  }
}
