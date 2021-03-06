import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = event => {
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
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className='add-option-error'>{this.state.error}</p>
        )}
        <form className='add-option' onSubmit={this.handleAddOption}>
          <input className='add-option__input' type='text' name='option' />
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}
