import React from 'react';

class Step3 extends React.Component {
  render() {
    let { checkbox1, checkbox2, currentStep, handleChange } = this.props;
    if (currentStep !== 3) {
      return null;
    }
    return (
      <>
        <div className="checkbox">
          <h1>Checkbox</h1>
          <input
            type="checkbox"
            name="checkbox1"
            id="checkbox1"
            value={checkbox1}
            onChange={handleChange}
          ></input>
          <label htmlFor="checkbox1">I want to add this option</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            name="checkbox2"
            id="checkbox2"
            value={checkbox2}
            onChange={handleChange}
          ></input>
          <label htmlFor="checkbox2">
            Let me click on this checkbox and choose some cool stuff!
          </label>
        </div>
      </>
    );
  }
}

export default Step3;
