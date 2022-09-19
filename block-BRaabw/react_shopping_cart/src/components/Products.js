import React from 'react';

class Products extends React.Component {
  render() {
    let id = this.props.id;
    return (
      <li className="card center">
        <div className="img-box">
          <img src={`static/products/` + this.props.sku + `_1.jpg`} alt="" />
        </div>
        <p>{this.props.title}</p>
        <hr />
        <span>Sizes </span>
        {this.props.availableSizes.map((size) => (
          <span>| {size} </span>
        ))}
        <p>
          {this.props.currencyFormat}
          {this.props.price}
        </p>
        <button type="submit" onClick={() => this.props.handleSubmit(id)}>
          Add to cart
        </button>
        <div className={this.props.isFreeShipping ? 'tag' : ''}>
          {this.props.isFreeShipping ? 'Free Shipping' : ''}
        </div>
      </li>
    );
  }
}

export default Products;
