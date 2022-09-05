import React from 'react';

class Step2 extends React.Component {
  render() {
    let { currentStep, message, handleChange, messageError } = this.props;
    if (currentStep !== 2) {
      return null;
    }
    return (
      <>
        <h1>Message</h1>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="mesage"
          value={message}
          onChange={handleChange}
        ></textarea>
        <span>{messageError}</span>
      </>
    );
  }
}

export default Step2;
