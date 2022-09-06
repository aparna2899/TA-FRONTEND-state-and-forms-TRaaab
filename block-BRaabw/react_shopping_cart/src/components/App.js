import React from 'react';
import Products from './Products';
import Sizes from './Sizes';
import Cart from './Cart';
import data from '../data.json';
import '../styles/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSize: null,
      selectedProductId: null,
      isClosed: true,
      sort: null,
    };
  }
  handleClick = (size) => {
    this.setState({
      selectedSize: size,
    });
  };
  handleSubmit = (id) => {
    this.setState({
      selectedProductId: id,
    });
  };
  handleClose = () => {
    this.setState({
      isClosed: !this.state.isClosed,
    });
  };
  handleChange = (arr, event) => {
    if (event.target.value === 'asc')
      this.setState({
        sort: 'asc',
      });
    else {
      this.setState({
        sort: 'desc',
      });
    }
  };
  render() {
    let sizes = [];
    if (!this.state.selectedSize) {
      sizes = data.products;
    } else {
      for (let i = 0; i < data.products.length; i++) {
        if (data.products[i].availableSizes.includes(this.state.selectedSize)) {
          sizes.push(data.products[i]);
        }
      }
    }
    if (this.state.sort === 'asc') {
      sizes.sort((a, b) => a.price - b.price);
    } else {
      sizes.sort((a, b) => b.price - a.price);
    }
    let selectedProduct = data.products.find(
      (product) => product.id === this.state.selectedProductId
    );
    return (
      <div className="container ">
        <div className="header flex justify-around">
          <p>{sizes.length} Product(s) found.</p>
          <div>
            <label htmlFor="order">Order by</label>
            <select
              id="order"
              onChange={(event) => this.handleChange(sizes, event)}
            >
              <option value="" disabled selected hidden>
                Select
              </option>
              <option value="asc">Lowest to highest</option>
              <option value="desc">Highest to lowest</option>
            </select>
          </div>
        </div>
        <div className="flex justify-evenly">
          <Sizes
            handleClick={this.handleClick}
            selectedSize={this.state.selectedSize}
          />
          <ul className="flex wrap flex-70">
            {sizes.map((product) => (
              <Products
                key={product.id}
                {...product}
                handleSubmit={this.handleSubmit}
              />
            ))}
          </ul>
          <Cart
            {...selectedProduct}
            handleClose={this.handleClose}
            isClosed={this.state.isClosed}
          />
        </div>
      </div>
    );
  }
}

export default App;
