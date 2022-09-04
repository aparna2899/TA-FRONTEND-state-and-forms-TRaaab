import React from 'react';
import BillingAddress from './Billing';
class ShippingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      zip: '',
      city: '',
      country: '',
      errors: {
        address: '',
      },
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'address':
        errors.address =
          value.length < 8 ? 'You need to enter at-least 8 characters' : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  render() {
    let { address } = this.state.errors;
    return (
      <div className="container flex">
        <form>
          <h1>Shipping Address</h1>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="e.g New Delhi Vasant Vihar"
            id="address"
            name="address"
            value={this.state.address}
            onChange={this.handleInput}
          ></input>
          <span>{address}</span>
          <label htmlFor="zip">Zip/Postal Code</label>
          <input
            type="text"
            placeholder="e.g 176057"
            id="zip"
            name="zip"
            value={this.state.zip}
            onChange={this.handleInput}
          ></input>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="e.g New Delhi"
            id="city"
            name="city"
            value={this.state.city}
            onChange={this.handleInput}
          ></input>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="e.g India"
            id="country"
            name="country"
            value={this.state.country}
            onChange={this.handleInput}
          ></input>
          <input type="submit" />
        </form>
        <BillingAddress {...this.state} />
      </div>
    );
  }
}

export default ShippingAddress;
