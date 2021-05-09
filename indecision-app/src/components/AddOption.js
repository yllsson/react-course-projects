import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(event) {
    event.preventDefault();

    /* 
    Finds the event (onSubmit) target (the form) and looks for an element (any) with the attribute -name- of "option" (In this case it finds the text input element).
    Then grabs the target value and trims it (to get rid of potential spaces around the text) before storing in the option const.
    */
    const option = event.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
