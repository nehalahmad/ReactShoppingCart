import React, { Component } from 'react';
import util from '../util';

class ProductListing extends Component {
    render() {
       //console.log(this.props.productListing);
        return (
        <div id='grid-container'> 
                {this.props.productListing.map(item => 
                    <div className='grid-item' key={item.title}>
                    <img alt={item.title} width='150px' src={item.image} />                    
                    <p className="title">{item.title}</p>
                    <p className="size">Size: {item.size}</p>
                    <p className="price">Price: {util.formatCurrency(item.price)}</p>
                    <button className="button"
                    onClick={(e)=>this.props.handleAddToCart(e, item)}>
                    Add to Cart </button> 
                    </div>              
                )}
        </div>)
        
    }   
}

export default ProductListing;
