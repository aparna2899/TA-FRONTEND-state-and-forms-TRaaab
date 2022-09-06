import React from 'react';

class Products extends React.Component {
  render() {
    let id = this.props.id;
    return (
      <li className="card center">
        <div className="img-box">
          <img src={`static/products/` + this.props.sku + `_1.jpg`} />
        </div>
        <p>{this.props.title}</p>
        <hr />
        <p>
          {this.props.currencyFormat}
          {this.props.price}
        </p>
        <button type="submit" onClick={() => this.props.handleSubmit(id)}>
          Add to cart
        </button>
        <div className="tag">Free Shipping</div>
      </li>
    );
  }
}

export default Products;

//        onClick={() => this.props.handleClick(this.props.availableSizes)}
