import React from 'react';

class Sizes extends React.Component {
  render() {
    let { handleClick, selectedSize } = this.props;
    let sizes = ['XS', 'S', 'M', 'X', 'L', 'XL', 'XXL'];
    return (
      <ul className=" flex-15">
        <strong>Sizes:</strong>
        {sizes.map((size) => (
          <li
            className={size === selectedSize ? 'size active' : 'size '}
            onClick={(event) => {
              handleClick(size);
            }}
          >
            {size}
          </li>
        ))}
      </ul>
    );
  }
}

export default Sizes;
