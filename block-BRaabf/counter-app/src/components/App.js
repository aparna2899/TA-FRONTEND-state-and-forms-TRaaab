import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,
      max: Infinity,
    };
  }
  handleIncrement = () => {
    let sum = this.state.counter + this.state.step;
    if (sum < this.state.max)
      this.setState({
        counter: sum,
      });
  };
  handleDecrement = () => {
    let difference = this.state.counter - this.state.step;
    if (difference > this.state.max)
      this.setState({
        counter: difference,
      });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
      step: 1,
      max: Infinity,
    });
  };
  handleStep = (value) => {
    this.setState({
      step: value,
    });
  };

  handleMax = (value) => {
    this.setState({
      max: value,
    });
  };

  render() {
    return (
      <div className="container center">
        <h1>Counter App</h1>
        <h2>{this.state.counter}</h2>
        <div className="flex">
          <div className="steps">
            <h3>Steps</h3>
            <button
              value={5}
              onClick={() => this.handleStep(5)}
              className={this.state.step === 5 ? 'active' : ''}
            >
              5
            </button>
            <button
              value={10}
              className={this.state.step === 10 ? 'active' : ''}
              onClick={() => this.handleStep(10)}
            >
              10
            </button>
            <button
              value={15}
              className={this.state.step === 15 ? 'active' : ''}
              onClick={() => this.handleStep(15)}
            >
              15
            </button>
          </div>
          <div className="max">
            <h3>Max Value</h3>
            <button
              value={15}
              onClick={() => this.handleMax(15)}
              className={this.state.max === 15 ? 'active' : ''}
            >
              15
            </button>
            <button
              value={100}
              onClick={() => this.handleMax(100)}
              className={this.state.max === 100 ? 'active' : ''}
            >
              100
            </button>
            <button
              value={200}
              onClick={() => this.handleMax(200)}
              className={this.state.max === 200 ? 'active' : ''}
            >
              200
            </button>
          </div>
        </div>

        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
