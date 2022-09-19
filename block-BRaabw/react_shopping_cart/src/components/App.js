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
      selectedSize: [],
      selectedProductId: [],
      isClosed: true,
      sort: null,
    };
  }
  handleClick = (size) => {
    let { selectedSize } = this.state;
    if (selectedSize.includes(size)) {
      for (let i = 0; i < selectedSize.length; i++) {
        if (selectedSize[i] === size) {
          selectedSize.splice(i, 1);
        }
      }
    } else {
      selectedSize.push(size);
    }

    this.setState({
      selectedSize: selectedSize,
    });
  };
  handleSubmit = (id) => {
    let { selectedProductId } = this.state;
    selectedProductId.push(id);
    this.setState({
      selectedProductId: selectedProductId,
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
  handleDelete = (id) => {
    let { selectedProductId } = this.state;
    for (let i = 0; i < selectedProductId.length; i++) {
      if (selectedProductId[i] === id) {
        selectedProductId.splice(i, 1);
      }
    }
    this.setState({
      selectedProductId: selectedProductId,
    });
  };
  render() {
    let sizes = [];
    if (this.state.selectedSize.length === 0) {
      sizes = data.products;
    } else {
      for (let i = 0; i < data.products.length; i++) {
        for (let j = 0; j < this.state.selectedSize.length; j++) {
          if (
            data.products[i].availableSizes.includes(
              this.state.selectedSize[j]
            ) &&
            sizes.indexOf(data.products[i]) === -1
          ) {
            sizes.push(data.products[i]);
          }
        }
      }
    }
    if (this.state.sort === 'asc') {
      sizes.sort((a, b) => a.price - b.price);
    } else {
      sizes.sort((a, b) => b.price - a.price);
    }
    let selectedProduct = data.products.filter((product) =>
      this.state.selectedProductId.includes(product.id)
    );
    return (
      <div className="container ">
        <div className="header flex justify-around">
          <p>{sizes.length} Product(s) found.</p>
          <div>
            <label htmlFor="order">Order by</label>
            <select
              id="order"
              defaultValue={'DEFAULT'}
              onChange={(event) => this.handleChange(sizes, event)}
            >
              <option value="DEFAULT" disabled>
                Sort
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
          <ul className="flex  wrap flex-85">
            {sizes.map((product) => (
              <Products
                key={product.id}
                {...product}
                handleSubmit={this.handleSubmit}
              />
            ))}
          </ul>
          <Cart
            selectedProduct={selectedProduct}
            handleClose={this.handleClose}
            handleDelete={this.handleDelete}
            isClosed={this.state.isClosed}
          />
        </div>
      </div>
    );
  }
}

export default App;
