import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'basketball',
    };
  }

  render() {
    let labels = ['basketball', 'pubg', 'tiger', 'phone', 'laptop', 'cricket'];
    return (
      <div className="container center">
        <h1>Show Images</h1>
        <div className="center">
          {labels.map((label) => (
            <button
              onClick={() => {
                this.setState({ active: label });
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="img-box">
          <img
            src={`./images/${this.state.active}.jpg`}
            alt={this.state.active}
          />
        </div>
      </div>
    );
  }
}

export default App;
