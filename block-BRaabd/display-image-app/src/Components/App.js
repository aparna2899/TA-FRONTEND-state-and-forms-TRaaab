import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlToImage: '',
    };
  }
  displayBasketball = () => {
    this.setState({
      urlToImage: '../images/basketball.jpg',
    });
  };
  displayPubG = () => {
    this.setState({
      urlToImage: '../images/pubg.jpeg',
    });
  };
  displayTiger = () => {
    this.setState({
      urlToImage: '../images/tiger.jpg',
    });
  };
  displayPhone = () => {
    this.setState({
      urlToImage: '../images/phone.jpg',
    });
  };
  displayLaptop = () => {
    this.setState({
      urlToImage: '../images/laptop.jpg',
    });
  };
  displayCricket = () => {
    this.setState({
      urlToImage: '../images/cricket.jpg',
    });
  };
  render() {
    return (
      <div className="container center">
        <h1>Show Images</h1>
        <div className="center">
          <button onClick={this.displayBasketball}>Basketball</button>
          <button onClick={this.displayPubG}>PubG</button>
          <button onClick={this.displayTiger}>Tiger</button>
          <button onClick={this.displayPhone}>Phone</button>
          <button onClick={this.displayLaptop}>Laptop</button>
          <button onClick={this.displayCricket}>Cricket</button>
        </div>
        <div className="img-box">
          <img src={this.state.urlToImage} alt="" />
        </div>
      </div>
    );
  }
}

export default App;
