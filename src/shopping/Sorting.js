import React, { Component } from "react";

class Sorting extends Component {
  render() {
    return (
      <div className="sorting">
        <label>Order by </label>
        <select
          className="form-control"
          value={this.props.sort}
          onChange={this.props.handleSortChange}
        >
          <option value="">Select</option>
          <option value="lowestprice">Lowest to highest</option>
          <option value="highestprice">Highest to lowest</option>
        </select>
      </div>
    );
  }
}

export default Sorting;
