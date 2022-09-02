import React from 'react';
import data from '../data.json';
import Card from './Card';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '',
    };
  }
  handleClick = (category) => {
    this.setState({
      activeCategory: category,
    });
  };
  render() {
    let categories = [...new Set(data.map((item) => item.category))];
    let dishes = [];
    if (!this.state.activeCategory) {
      dishes = data;
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === this.state.activeCategory) {
          dishes.push(data[i]);
        }
      }
    }
    return (
      <div className="container">
        <h1 className="center">Our Menu</h1>
        <hr />
        <ul className="categories center">
          {categories.map((category) => (
            <li key={category} onClick={() => this.handleClick(category)}>
              {category}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap">
          {dishes.map((item) => (
            <Card {...item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
