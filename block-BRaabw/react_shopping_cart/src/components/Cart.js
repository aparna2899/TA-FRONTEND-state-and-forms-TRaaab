import React from 'react';

class Cart extends React.Component {
  installmentPrice = (installments, subtotal) => {
    return (subtotal / installments).toFixed(2);
  };

  render() {
    let { price, installments, handleClose, isClosed } = this.props;
    return (
      <>
        <div
          className={isClosed === true ? 'close-cart' : 'open-cart'}
          onClick={handleClose}
        >
          {isClosed === true ? <img src={`static/bag-icon.png`} /> : 'X'}
        </div>

        <div className={isClosed === true ? 'hidden' : 'cart'}>
          <div className="flex justify-center align-center">
            <div className="cart-icon">
              <img src="static/bag-icon.png" />
              <div className="yellow-circle">1</div>
            </div>

            <h2 className="center">Cart</h2>
          </div>

          <hr></hr>
          <div className="cart-product flex justify-between align-center">
            <div className="flex-70 flex align-center">
              <img src={`static/products/` + this.props.sku + `_2.jpg`} />
              <div>
                <span>{this.props.title}</span>
                <p>{this.props.description}</p>
              </div>
            </div>

            <strong className="cart-product-price">
              {this.props.currencyFormat}
              {this.props.price}
            </strong>
          </div>
          <div className="checkout">
            <div className=" flex justify-between align-center">
              <p>SUBTOTAL</p>
              <div>
                <strong className="right">
                  {this.props.currencyFormat} {this.props.price}
                </strong>
                <p>
                  OR UP TO {this.props.installments} x{' '}
                  {this.props.currencyFormat}
                  {this.installmentPrice(installments, price)}
                </p>
              </div>
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
