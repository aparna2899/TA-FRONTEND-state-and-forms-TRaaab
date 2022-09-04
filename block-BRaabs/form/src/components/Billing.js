import React from 'react';

class BillingAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };

  handleCheck = (event) => {
    this.setState({
      checked: !this.state.checked,
    });
  };
  render() {
    let { address, zip, city, country } = this.props;
    return (
      <div className="container flex">
        <form>
          <h1>Billing Address</h1>
          <input type="checkbox" id="checkbox" onClick={this.handleCheck} />
          <label htmlFor="checkbox" className="checkbox-label">
            Same as shipping address
          </label>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="e.g New Delhi Vasant Vihar"
            id="address"
            name="address"
            value={address}
          ></input>
          <label htmlFor="zip">Zip/Postal Code</label>
          <input
            type="text"
            placeholder="e.g 176057"
            id="zip"
            name="zip"
            value={zip}
          ></input>
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="e.g New Delhi"
            id="city"
            name="city"
            value={city}
          ></input>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="e.g India"
            id="country"
            name="country"
            value={country}
          ></input>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BillingAddress;
