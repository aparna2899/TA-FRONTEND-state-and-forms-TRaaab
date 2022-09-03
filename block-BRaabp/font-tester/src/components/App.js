import React from 'react';
import data from '../data.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center">Font Tester</h1>
        <input
          placeholder="Type something"
          onChange={this.handleChange}
        ></input>
        <ul className="flex">
          {data.items.slice(50, 60).map((font) => (
            <li className="card flex-32">
              <h2>{font.family}</h2>
              <p
                style={{
                  fontFamily: font.category,
                }}
              >
                {this.state.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
