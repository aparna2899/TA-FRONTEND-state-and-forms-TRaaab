import React from 'react';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: '',
      activeAnswer: '',
    };
  }
  handleClick = (accordion) => {
    this.setState({
      activeQuestion: accordion.Q,
      activeAnswer: accordion.A,
    });
  };
  render() {
    return (
      <div className="container">
        <ul className="question-list">
          {data.map((accordion) => (
            <li onClick={() => this.handleClick(accordion)}>
              <div
                className={
                  accordion.Q === this.state.activeQuestion ? 'question' : ''
                }
              >
                <strong>Q.</strong>
                {accordion.Q}
              </div>
              <div
                className={
                  accordion.A === this.state.activeAnswer ? 'answer' : 'hidden'
                }
              >
                <strong>A.</strong>
                {accordion.A}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
