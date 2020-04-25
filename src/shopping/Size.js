import React, { Component } from 'react'

class Size extends Component {
    render() {
        return (
            <fieldset className='sizes'>
            <legend>Filter by Size</legend>
            <label htmlFor="small">Small</label>
            <input id="small" type="checkbox" name="size" value="Small"
             onChange={this.props.handleSize} /><br /><br />

            <label htmlFor="medium">Medium</label>
            <input id="medium" type="checkbox" name="size" value="Medium"
            onChange={this.props.handleSize} /><br /><br />

            <label htmlFor="large">Large</label>
            <input id="large" type="checkbox" name="size" value="Large"
            onChange={this.props.handleSize} />
           
        </fieldset>
        )
    }
}

export default Size
