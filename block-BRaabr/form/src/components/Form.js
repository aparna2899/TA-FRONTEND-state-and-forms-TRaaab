import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container ">
        <form>
          <label htmlFor="text">Text Input</label>
          <input type="text" id="text"></input>
          <label htmlFor="date">Date Input</label>
          <input type="date" id="date"></input>
          <label htmlFor="file">File Input</label>
          <input type="file" id="file"></input>
          <label htmlFor="read-only">Read-only Input</label>
          <input type="text" id="read-only" readOnly></input>
          <label htmlFor="disabled">Disabled Input</label>
          <input type="text" id="disabled" disabled></input>
          <label htmlFor="textarea" rows={5}>
            Textarea
          </label>
          <textarea id="textarea"></textarea>
          <label htmlFor="textarea-disabled">Textarea Disabled</label>
          <textarea id="textarea-disabled" disabled rows={5}></textarea>
        </form>
      </div>
    );
  }
}

export default Form;
