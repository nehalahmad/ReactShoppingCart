import React, { Component } from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";

// import Todos from "./components/Todos";
// import AddTodo from "./components/AddTodo";
// import Header from "./components/layout/Header";
// import About from "./components/pages/About";
//import uuid from 'uuid';
import ProductListing from './shopping/productListing';
import Basket from './shopping/Basket';
import Sorting from './shopping/Sorting';
import Size from './shopping/Size';
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
    items: [],
    cartItems: [],
    filteredItems: []
  }
};

  componentDidMount() {
    axios
      .get("./json/listing.json")
      .then(res => this.setState(
        { 
          items: res.data,
          filteredItems: res.data
        }
        ));

      if (localStorage.getItem("cartItems")) {
        this.setState({
          cartItems: JSON.parse(localStorage.getItem("cartItems"))
        });
      }
  }  

  handleAddToCart = (e, item) => {
   // console.log(item)
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach(cp => {
        console.log('forEach',  cp)
        if (cp.id === item.id) {
          cp.count += 1;
          productAlreadyInCart = true;
        } 
      }); 

      if (!productAlreadyInCart) {
        cartItems.push({ ...item, count: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  handleRemoveFromCart = (e, product) => {
    this.setState(state => {
      const cartItems = state.cartItems.filter(a => a.id !== product.id);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return { cartItems: cartItems };
    });
  };

  // shopping cart
  handleOpenCart = e =>{
    document.getElementById("cartContent").classList.remove("hide");
    document.getElementById("close").classList.remove("hide");
  }
  handleCloseCart = e =>{
    document.getElementById("cartContent").classList.add("hide");
    document.getElementById("close").classList.add("hide");
  }

  handleSortChange = e => {
    //console.log(e.target.value)
    if (e.target.value === "lowestprice") {
      let sortedProductsAsc;
      sortedProductsAsc = this.state.items.sort((a,b)=>{
         return a.price  - b.price;
      })
      this.setState({
          items:sortedProductsAsc
          })
  }
     else {
      let sortedProductsDec;
      sortedProductsDec= this.state.items.sort((a,b)=>{
         return b.price  - a.price;
      })
      this.setState({
          items:sortedProductsDec
      })
  }
  };

  handleSizes = e =>{
   //console.log('filteredItems', this.state.filteredItems)

    var selectedSize = [];

    const size = document.getElementsByName("size");
    Array.from(size).filter(item => {
        if (item.checked === true) {
              selectedSize.push(item.value);
        }
        return selectedSize;

    });
    console.log('selectedSize ', selectedSize)

    if(selectedSize.length){
      const availableSize = this.state.filteredItems.filter(fItem =>{
      if(selectedSize.indexOf(fItem.size) !== -1){
      return  fItem
      }
      else
      return null
    });
    console.log('availableSize ', availableSize);
    this.setState({items: availableSize});
    }
    else
    this.setState({items: this.state.filteredItems});
  }


  render() {
    //console.log(this.state.items);
    return (
      <React.Fragment>
      <Sorting handleSortChange={this.handleSortChange} />
      <Size handleSize={this.handleSizes} />      
      <ProductListing productListing={this.state.items}
      handleAddToCart={this.handleAddToCart}       />
      <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
              openCart={this.handleOpenCart}
              closeCart={this.handleCloseCart}
              
            />
      </React.Fragment>
      
    );
  }
}

export default App;
