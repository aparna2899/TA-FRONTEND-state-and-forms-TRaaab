import React from 'react';
import data from '../data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="center">FAQs</h1>
        <ul className="question-list">
          {data.map((faq, index) => (
            <li>
              <h2
                className={index === this.state.activeIndex ? 'question' : ''}
                onClick={() => {
                  this.setState({
                    activeIndex:
                      this.state.activeIndex === index ? null : index,
                  });
                }}
              >
                {faq.Q} {this.state.activeIndex === index ? '☝🏻' : '👇🏻'}
              </h2>
              {index === this.state.activeIndex && (
                <p className="answer">{faq.A}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
