import React from 'react';

class Cart extends React.Component {
  render() {
    let { handleClose, isClosed, handleDelete } = this.props;
    let price = 0;
    for (let i = 0; i < this.props.selectedProduct.length; i++) {
      price =
        Math.round((price + this.props.selectedProduct[i].price) * 100) / 100;
    }
    return (
      <>
        <div
          className={isClosed === true ? 'close-cart' : 'open-cart'}
          onClick={handleClose}
        >
          {isClosed === true ? <img src={`static/bag-icon.png`} alt="" /> : 'X'}
        </div>

        <div className={isClosed === true ? 'hidden' : 'cart'}>
          <div className="flex justify-center align-center">
            <div className="cart-icon">
              <img src="static/bag-icon.png" alt="" />
              <div className="yellow-circle">
                {this.props.selectedProduct.length}
              </div>
            </div>

            <h2 className="center">Cart</h2>
          </div>

          <hr></hr>
          <ul className="cart-product">
            {this.props.selectedProduct.map((product) => (
              <>
                <li
                  key={product.id}
                  className="flex justify-between align-center"
                >
                  <div
                    onClick={() => handleDelete(product.id)}
                    className="close-btn"
                  >
                    x
                  </div>
                  <div className="flex-15">
                    <img
                      src={`static/products/` + product.sku + `_2.jpg`}
                      alt=""
                    />
                  </div>
                  <div className="flex-70">
                    <span>{product.title}</span>
                    <p>{product.description}</p>
                  </div>

                  <strong className="cart-product-price flex-15">
                    {product.currencyFormat}
                    {product.price}
                  </strong>
                </li>
              </>
            ))}
          </ul>
          <div className="checkout">
            <div className=" flex justify-between align-center">
              <p>SUBTOTAL</p>
              <div>
                <strong className="right">$ {price}</strong>
              </div>
            </div>
            <button className='btn-secondary'>CHECKOUT</button>
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
