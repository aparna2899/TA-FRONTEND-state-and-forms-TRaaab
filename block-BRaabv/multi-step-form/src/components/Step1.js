import React from 'react';

class Step1 extends React.Component {
  render() {
    let {
      fname,
      lname,
      dob,
      email,
      address,
      handleChange,
      currentStep,
      fnameError,
      lnameError,
      dobError,
      emailError,
      addressError,
    } = this.props;
    if (currentStep !== 1) {
      return null;
    }
    return (
      <>
        <h1>Sign UP</h1>

        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          value={fname}
          onChange={handleChange}
        ></input>
        <span>{fnameError}</span>
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          name="lname"
          id="lname"
          value={lname}
          onChange={handleChange}
        ></input>
        <span>{lnameError}</span>
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={handleChange}
        ></input>
        <span>{dobError}</span>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
        ></input>
        <span>{emailError}</span>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          value={address}
          onChange={handleChange}
        ></input>
        <span>{addressError}</span>
      </>
    );
  }
}

export default Step1;
