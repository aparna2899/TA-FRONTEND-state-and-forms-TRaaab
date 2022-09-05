import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      dob: '',
      email: '',
      address: '',
      message: '',
      checkbox1: false,
      checkbox2: false,
      currentStep: 1,
      errors: {
        fname: '',
        lname: '',
        dob: '',
        email: '',
        address: '',
        message: '',
      },
    };
  }

  validateEmail = (email) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'email':
        errors.email = this.validateEmail(value) ? '' : 'Email is not valid!';
        break;
      case 'fname':
        errors.fname = value === '' ? 'First name is required' : '';
        break;
      case 'lname':
        errors.lname = value === '' ? 'Last name is required' : '';
        break;
      case 'dob':
        errors.dob = value === '' ? 'DOB is required' : '';
        break;
      case 'address':
        errors.address =
          value.length < 10 ? 'Address must be of atleast 10 characters' : '';
        break;
      case 'message':
        errors.message = value === '' ? 'Message is required' : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };
  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 2 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button type="button" onClick={this.prev}>
          Previous
        </button>
      );
    }
    return null;
  }
  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button type="button" onClick={this.next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="container">
        <form>
          <p>Step {this.state.currentStep}/3</p>

          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            fname={this.state.fname}
            lname={this.state.lname}
            dob={this.state.dob}
            email={this.state.email}
            address={this.state.address}
            fnameError={this.state.errors.fname}
            lnameError={this.state.errors.lname}
            dobError={this.state.errors.dob}
            emailError={this.state.errors.email}
            addressError={this.state.errors.address}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            message={this.state.message}
            messageError={this.state.errors.message}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            checkbox1={this.state.checkbox1}
            checkbox2={this.state.checkbox2}
          />
          {this.previousButton()}
          {this.nextButton()}
          {this.state.currentStep === 3 ? (
            <button type="submit">Submit</button>
          ) : (
            ''
          )}
        </form>
      </div>
    );
  }
}

export default App;
